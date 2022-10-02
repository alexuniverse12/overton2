import React, { useEffect, useState } from 'react';
import { RemoteConnectPersistance, TonhubConnectProvider } from 'react-ton-x';
import MainRouter from '../../App';
import useAppModel from '../../hooks/useMainReducer';
import { AppReducerActionTypeEnum } from '../../state/mainReducer';
import TonConnector from '../../components/Ton-Connector';
import useLocalStorage from 'use-local-storage';
import Question from '../../components/Question/Question';
import AddQuestion from '../../components/AddQuestion/AddQuestion';
import "./MainPage.css";
import isMobile from "is-mobile";

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

  const [question, setQuestions] = useState();


  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <><div style={{ position: "relative" }}>
      <AddQuestion />

      <div className='mainPageWrapper'>
        <div className='headerWrapper'>
          <h3 className='title'>Overton</h3>
          {/* <a className='addWalletBtn' onClick={() => setOpen(true)}>Add Wallet</a> */}
          <TonConnector></TonConnector>
        </div>

        <div className='questionsTabs'>
          <div className='questionsTab'>Questions</div>
          <div className='myQuestionsTab'>My questions</div>
        </div>
        <div className='questionsWrapper'>
          {
            questionsSample.map(({ title, questionText, date }, index) => {
              return (
                <Question key={index} title={title} questionText={questionText} date={date} />
              )
            })
          }
        </div>
      </div>
    </div>
    </>


   );
}

export default MainPage;