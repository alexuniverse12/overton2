
import axios from "axios"
import { useTonhubConnect } from "react-ton-x"
import "./Answer.css"

export type AnswerProps = {
    title: string,
    answerText: string,
    date: string
}


const Answer = ({ title, answerText, date }: AnswerProps) => {
    const connect = useTonhubConnect()
    const giveReward = async () => {
        const tonData = JSON.parse(localStorage.getItem("connection") || "")
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        const rightDate = mm + '/' + dd + '/' + yyyy;
        if (tonData) {
            try {
                const response: any = await axios({
                    method: 'post',
                    url: "http://104.248.100.22:3000/withdraw",
                    data: {
                        send_to_address: tonData.walletConfig.address,
                    }
                });
                const responseData = response.data
                const reqTrans = await connect.api.requestTransaction({
                    to: responseData.contractAddress,
                    value: (0.01 * 1e9).toString(),
                    stateInit: responseData.stateInit,
                    text: "Smart contract deployment",
                    payload: responseData.payload
                })
                console.log(reqTrans)
            } catch (error) {
                console.error(error, "IDI NAXUI");
            }





            // console.log("user set nickname and languages: ", uid);
            // dispatch(getCustomUserInfo(uid))
            // navigate("/orders")
        }
    }

    return (
        <div className='AnswerWrapper'>
            <h3 className="answerTitle">{title}</h3>
            <p className="answerText">{answerText}</p>

            <div className="answerFooter">
                <p className="answerDate">{date}</p>
                <button onClick={() => giveReward()} className="giveRewardBtn">Give reward</button>
            </div>
        </div>

    );
}

export default Answer;