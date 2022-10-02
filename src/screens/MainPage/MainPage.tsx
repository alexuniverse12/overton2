import React, { useEffect, useState } from 'react';
import { RemoteConnectPersistance, TonhubConnectProvider, useTonhubConnect } from 'react-ton-x';
import MainRouter from '../../App';
import useAppModel from '../../hooks/useMainReducer';
import { AppReducerActionTypeEnum } from '../../state/mainReducer';
import TonConnector from '../../components/Ton-Connector';
import useLocalStorage from 'use-local-storage';
import Question from '../../components/Question/Question';
import AddQuestion from '../../components/AddQuestion/AddQuestion';
import "./MainPage.css";
import isMobile from "is-mobile";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase.config";
import { TransferTon } from '../../components/TransferTon';
import CommonHeader from '../../components/CommonHeader/CommonHeader';

const questionsSample = [
  {
    title: "how to deploy func  smart contract and not fuck up",
    questionText: "asdasdasd asd ads a adsd as das das d as das das dasd as da dasdssaasdasdasdsa dsa das aasdasasdas d asd as da dasda sdas das da asasas as asdasd as",
    date: "01.10.2022"
  },
  {
    title: "how to deploy func  smart contract and not fuck up",
    questionText: "asdasdasd asd ads a adsd as das das d as das das dasd as da dasdssaasdasdasdsa dsa das aasdasasdas d asd as da dasda sdas das da asasas as asdasd as",
    date: "01.10.2022"
  },
  {
    title: "how to deploy func  smart contract and not fuck up",
    questionText: "asdasdasd asd ads a adsd as das das d as das das dasd as da dasdssaasdasdasdsa dsa das aasdasasdas d asd as da dasda sdas das da asasas as asdasd as",
    date: "01.10.2022"
  },
  {
    title: "how to deploy func  smart contract and not fuck up",
    questionText: "asdasdasd asd ads a adsd as das das d as das das dasd as da dasdssaasdasdasdsa dsa das aasdasasdas d asd as da dasda sdas das da asasas as asdasd as",
    date: "01.10.2022"
  },
  {
    title: "how to deploy func  smart contract and not fuck up",
    questionText: "asdasdasd asd ads a adsd as das das d as das das dasd as da dasdssaasdasdasdsa dsa das aasdasasdas d asd as da dasda sdas das da asasas as asdasd as",
    date: "01.10.2022"
  },
  {
    title: "how to deploy func  smart contract and not fuck up",
    questionText: "asdasdasd asd ads a adsd as das das d as das das dasd as da dasdssaasdasdasdsa dsa das aasdasasdas d asd as da dasda sdas das da asasas as asdasd as",
    date: "01.10.2022"
  },
]

const MainPage = () => {
  // const [connectionState, setConnectionState] = useState<RemoteConnectPersistance>('connection', { type: 'initing' });
  const { appModel, dispatch } = useAppModel();
  const connect = useTonhubConnect();
  const [questions, setQuestions] = useState(questionsSample);
  
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "questions"));
      let arr: any = [];
      querySnapshot.forEach((doc: any) => {
        // here we store order data + its id in firebase
        arr.push({...doc.data(), id: doc.id});
      })
      
      setQuestions(arr);
      console.log(questions, "SUAK")
    }
  })
  console.log(connect.state)
  const [isOpen, setOpen] = useState<boolean>(false);
  if(questions){
    return (
      <>
        {connect.state.type === "online" && <AddQuestion />}
        <div className='mainPageWrapper'>
          <div className='mainPageContainer'>
            <CommonHeader/>
            <div className='questionsTabs'>
              <div className='questionsTab'>Questions</div>
              <div className='myQuestionsTab'>My questions</div>
            </div>
            <div className='questionsWrapper'>
              {
                questions.map(({questionText, date}, index) => {
                  return (
                      <Question key={index} title={"aboba 228 asjfdwjej fewf je whh fwe h"} questionText={questionText} date={date} />
                    )
                  })
                }
            </div>
          </div>
        </div>
      </>
  
  
     );
  } else {
    return <></>
  }
}

export default MainPage;