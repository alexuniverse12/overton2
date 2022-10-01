import React, { useState } from 'react';
import { RemoteConnectPersistance, TonhubConnectProvider } from 'react-ton-x';
import MainRouter from '../../App';
import useAppModel from '../../hooks/useMainReducer';
import { AppReducerActionTypeEnum } from '../../state/mainReducer';
import TonConnector from '../../components/Ton-Connector';



const MainPage = () => {
  // const [connectionState, setConnectionState] = useState<RemoteConnectPersistance>('connection', { type: 'initing' });
  const { appModel, dispatch } = useAppModel();
  const addWallet = () => {
    dispatch({type: AppReducerActionTypeEnum.AddWallet})
  }
  console.log(appModel, "MAIN APGE")
  return (
    <div className='mainPageWrapper'>
        {/* <button onClick={addWallet}>Add Walet</button> */}
        {/* {appModel.signState && <TonConnector/>} */}
        <TonConnector/>
    </div>
    
  );
}

export default MainPage;