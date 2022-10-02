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

const MainPage = () => {
  // const [connectionState, setConnectionState] = useState<RemoteConnectPersistance>('connection', { type: 'initing' });
  const { appModel, dispatch } = useAppModel();
  const connect = useTonhubConnect();
  const [questions, setQuestions] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "questions"));
      let arr: any = [];
      querySnapshot.forEach((doc: any) => {
        // here we store order data + its id in firebase
        arr.push({ ...doc.data(), id: doc.id });
      })

      setQuestions(arr);
      console.log(questions, "SUAK")
    }
    fetchData()
  }, [])
  console.log(connect.state)
  const [isOpen, setOpen] = useState<boolean>(false);


  const [myQuestionsTab, setMyQuestionsTab] = useState<boolean>(false);


  console.log(questions);
  if (questions) {
    console.log(questions)
    return (
      <>
        {connect.state.type === "online" && <AddQuestion />}
        <div className='mainPageWrapper'>
          <div className='mainPageContainer'>
            <CommonHeader />
            <div className='questionsTabs'>
              <div style={myQuestionsTab ? {} : {
                color: "#07A0EE"
              }} onClick={() => setMyQuestionsTab(false)} className='questionsTab'>Questions</div>
              <div style={myQuestionsTab ? {
                color: "#07A0EE"
              } : {}} onClick={() => setMyQuestionsTab(true)} className='myQuestionsTab'>My questions</div>
            </div>
            <div className='questionsWrapper'>
              {
                questions &&
                ((myQuestionsTab && connect.state.type === 'online' ?
                  questions.filter(item => {
                    console.log(item)
                    console.log(connect)
                    /* @ts-ignore */
                    return item.userID !== connect.state!.walletConfig!.address
                  }).map(({ questionText, date, title,contractAddress }, index) => {
                    return (
                      <Question key={index} title={title} questionText={questionText} date={date} contractAddress={contractAddress} />
                    )
                  }) :
                  questions.map(({ questionText, date, title, contractAddress }, index) => {
                    return (
                      <Question key={index} title={title} questionText={questionText} date={date} contractAddress={contractAddress}/>
                    )
                  })))}

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