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
const SingleQuestion = () => {
    const { appModel, dispatch } = useAppModel();
    return (
        <div className='singleQuestionScreenWrapper'>
            <div className='container'>
                <CommonHeader />
                <div className='singleQuestion'>
                    <Question title={appModel.currSingleQuestion.title} questionText={appModel.currSingleQuestion.questionText} date={appModel.currSingleQuestion.date} />
                </div>
                <button className='addAnswerBtn'>Create Answer</button>
                <div className='answersContainer'>
                    {questionAnswers.map(({ answerText, date }, index) => {
                        return (
                            <Answer key={index} title={"aboba 228 asjfdwjej fewf je whh fwe h"} answerText={answerText} date={date} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default SingleQuestion;