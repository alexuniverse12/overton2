import React, { useEffect, useState } from 'react';
import { RemoteConnectPersistance, TonhubConnectProvider, useTonhubConnect } from 'react-ton-x';
import MainRouter from '../../App';
import useAppModel from '../../hooks/useMainReducer';
import { AppReducerActionTypeEnum } from '../../state/mainReducer';
import TonConnector from '../../components/Ton-Connector';
import useLocalStorage from 'use-local-storage';
import Question from '../../components/Question/Question';
import AddQuestion from '../../components/AddQuestion/AddQuestion';
import isMobile from "is-mobile";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase.config";
import { TransferTon } from '../../components/TransferTon';


import "./SingleQuestion.css";
import CommonHeader from '../../components/CommonHeader/CommonHeader';

const SingleQuestion = () => {
    return (
        <div className='singleQuestionScreenWrapper'>
            <div className='container'>
                <CommonHeader/>
                <div className='questionWrapper'>

                </div>
            </div>
        </div>
    )
}

export default SingleQuestion;