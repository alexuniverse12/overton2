import React, { useEffect, useState } from 'react';
import { RemoteConnectPersistance, TonhubConnectProvider } from 'react-ton-x';
import MainRouter from '../../App';
import useAppModel from '../../hooks/useMainReducer';
import { AppReducerActionTypeEnum } from '../../state/mainReducer';
import TonConnector from '../../components/Ton-Connector';
import useLocalStorage from 'use-local-storage';
import Question from '../../components/Question/Question';
import AddQuestion from '../../components/AddQuestion/AddQuestion';
import "./MainPage.css" 

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
  // console.log(connectionState.type, "F")
  // console.log(localStorage.getItem("connection"))
  // console.log(appModel, "MAIN APGE")
  useEffect(() => {
    // declare the async data fetching function
  const fetchData = async () => {
    // get the data from the api
    // const data = await';
    // convert the data to json
    // const json = await response.json();

    // set state with the result
    // setQuestions(json);
  }

  // call the function
  fetchData()
    // make sure to catch any error
    .catch(console.error);;
  }, [])
  return (
    <>
      <AddQuestion/> 
      <div className='mainPageWrapper'>
          <div className='MainPageWrapper'>
            <h3 className='title'>Overton</h3>
            <TonConnector/>
          </div>
          <div className='questionsWrapper'>
            {
              questionsSample.map(({title, questionText, date}, index) => {
                return (
                  <Question key={index} title={title} questionText={questionText} date={date}/>
                )
              })
            }
          </div>
      </div>
    </>
    
    
  );
}

export default MainPage;