
import "./Answer.css"

export type AnswerProps = {
    title: string,
    answerText: string,
    date: string
}


const Answer = ({ title, answerText, date }: AnswerProps) => {
    const giveReward = function (e: any) {
        // const tonData = JSON.parse(localStorage.getItem("connection") || "")
        // let today = new Date();
        // let dd = String(today.getDate()).padStart(2, '0');
        // let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        // let yyyy = today.getFullYear();
        // console.log(formData)
        // const rightDate = mm + '/' + dd + '/' + yyyy;
        // if (inputFields.type === "submitQuestion") {
        //     console.log("TEST")
        //     const tonData = JSON.parse(localStorage.getItem("connection") || "")
        //     const questionsCollection = collection(db, "questions");
        //     if (tonData) {
        //         console.log("TEST 2")

        //         try {
        //             const response: any = await axios({
        //                 method: 'post',
        //                 url: "http://104.248.100.22:3000/deploy",
        //                 data: {
        //                     owner: tonData.walletConfig.address,
        //                 }
        //             });
        //             const responseData = response.data
        //             const reqTrans = await connect.api.requestTransaction({
        //                 to: responseData.contractAddress,
        //                 value: (parseFloat(formData.rewardAmount) * 1e9).toString(),
        //                 stateInit: responseData.stateInit,
        //                 text: "Smart contract deployment",
        //                 payload: responseData.payload
        //             })
        //             console.log(reqTrans)

        //             await addDoc(questionsCollection, {
        //                 userID: tonData.walletConfig.address,
        //                 title: formData.questionTitle,
        //                 questionText: formData.questionDescription,
        //                 rewardAmount: formData.rewardAmount,
        //                 date: rightDate
        //             });
        //         } catch (error) {
        //             console.error(error, "IDI NAXUI");
        //         }

        //     }




        //     // console.log("user set nickname and languages: ", uid);
        //     // dispatch(getCustomUserInfo(uid))
        //     // navigate("/orders")
        // }
    }

    return (
        <div className='AnswerWrapper'>
            <h3 className="answerTitle">{title}</h3>
            <p className="answerText">{answerText}</p>

            <div className="answerFooter">
                <p className="answerDate">{date}</p>
                <button onClick={giveReward} className="giveRewardBtn">Give reward</button>
            </div>
        </div>

    );
}

export default Answer;