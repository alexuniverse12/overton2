import React, { useEffect, useState } from 'react';
import { RemoteConnectPersistance, TonhubConnectProvider, useTonhubConnect } from 'react-ton-x';
import MainRouter from '../../App';
import useAppModel from '../../hooks/useMainReducer';
import { AppReducerActionTypeEnum } from '../../state/mainReducer';
import TonConnector from '../../components/Ton-Connector';
import useLocalStorage from 'use-local-storage';
import Question from '../../components/Question/Question';
import Answer from '../../components/Answer/Answer';
import AddQuestion from '../../components/AddQuestion/AddQuestion';
import isMobile from "is-mobile";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase.config";
import { TransferTon } from '../../components/TransferTon';




import "./SingleQuestion.css";
import CommonHeader from '../../components/CommonHeader/CommonHeader';
import InputForm from '../../components/InputForm/InputForm';
import { useLocation } from 'react-router-dom';




const questionSample =
{
    title: "how to deploy func  smart contract and not fuck up",
    questionText: "asdasdasd asd ads a adsd as das das d as das das dasd as da dasdssaasdasdasdsa dsa das aasdasasdas d asd as da dasda sdas das da asasas as asdasd as",
    date: "01.10.2022"
}


const questionAnswers = [
    {
        answerText: "asdasdasd asd ads a adsd as das das d as das das dasd as da dasdssaasdasdasdsa dsa das aasdasasdas d asd as da dasda sdas das da asasas as asdasd as",
        date: "01.10.2022"
    }, {
        answerText: "asdasdasd asd ads a adsd as das das d as das das dasd as da dasdssaasdasdasdsa dsa das aasdasasdas d asd as da dasda sdas das da asasas as asdasd as",
        date: "01.10.2022"
    }, {
        answerText: "asdasdasd asd ads a adsd as das das d as das das dasd as da dasdssaasdasdasdsa dsa das aasdasasdas d asd as da dasda sdas das da asasas as asdasd as",
        date: "01.10.2022"
    }
]



function useQuery() {
    const { search } = useLocation();
  
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

const SingleQuestion = () => {
    let query = useQuery();
    const title = query.get("title")
    const reward = query.get("reward")
    const contractAddress = query.get("contractAddress")
    const date = query.get("date")
    const questionText = query.get("questionText")
    // console.log(query.get("title"));
    const inputFields = {
        answer: "answer",
        type: "submitAnswer",
        contractAddress: contractAddress
    }
    const { appModel, dispatch } = useAppModel();
    const [modalOpen, setModalOpen] = useState(false);
    const [answers, setAnswers] = useState([]);
    const connect = useTonhubConnect()
    useEffect(() => {
        const fetchData = async () => {
            const querySnapshot = await getDocs(collection(db, "answers"));
            let arr: any = [];
            querySnapshot.forEach((doc: any) => {
                if (doc.data().questionID === contractAddress) {
                    arr.push({ ...doc.data(), id: doc.id });
                }
            })

            setAnswers(arr);
        }
        fetchData()
    }, [modalOpen])
    return (
        <div className='singleQuestionScreenWrapper'>

            {modalOpen && <div className="openedScreenWrapper" onClick={function (e) { if (e.target === e.currentTarget) { setModalOpen(false); document.body.style.overflow = 'unset'; } }}><InputForm inputFields={inputFields} setModal={setModalOpen} /></div>}
            <div className='container'>
                <CommonHeader />
                <div className='singleQuestion'>
                    {/* <Question reward={appModel?.currQuestion.reward || reward} contractAddress={appModel?.currQuestion.contractAddress || contractAddress} title={appModel?.currQuestion.title || title} questionText={appModel?.currQuestion.questionText || questionText} date={appModel?.currQuestion.date || date} /> */}
                    
                    <Question 
                        reward={reward || ""}
                        contractAddress={contractAddress || ""}
                        title={title || ""}
                        questionText={questionText || ""} 
                        date={date || ""} 
                    />
                </div>

                {connect.state.type === "online" && <button className='addAnswerBtn' onClick={() => {
                    document.body.style.overflow = 'hidden';
                    window.scrollTo(0, 0);
                    setModalOpen(true);
                }}>Create Answer
                </button>
                }
                <div className='answersContainer'>
                    {answers.map(({ answer, date, userID }, index) => {
                        return (
                            <Answer key={index} answerText={answer} date={date} contractAddress={contractAddress || ""} userID={userID} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default SingleQuestion;