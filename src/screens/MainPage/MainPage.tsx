import React, { useState } from 'react';
import { RemoteConnectPersistance, TonhubConnectProvider } from 'react-ton-x';
import MainRouter from '../../App';
import useAppModel from '../../hooks/useMainReducer';
import { AppReducerActionTypeEnum } from '../../state/mainReducer';




const MainPage = () => {
  // const [connectionState, setConnectionState] = useState<RemoteConnectPersistance>('connection', { type: 'initing' });
  const { appModel, dispatch } = useAppModel();
  
  return (
    <div className='mainPageWrapper'>
      {/* <TonConnector/> */}
    </div>
    
  );
}

export default MainPage;