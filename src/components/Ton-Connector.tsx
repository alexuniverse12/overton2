import {
  RemoteConnectPersistance,
  TonhubConnectProvider,
  useTonhubConnect,
} from "react-ton-x";
import useLocalStorage from "use-local-storage";
import isMobile from "is-mobile";
import QRCode from "react-qr-code";
import "./Ton-Connector.css"

import { TonClient } from "ton";
import { TransferTon } from "./TransferTon";
import { Counter } from "./Counter";
import { useEffect, useState } from "react";
import { Jetton } from "./Jettons";
import { TonWalletDetails } from "./TonWalletDetails";
import useAppModel from "../hooks/useMainReducer";

// TODO change to L3 client
export const tc = new TonClient({
  endpoint: "https://scalable-api.tonwhales.com/jsonRPC",
});

let wasPendingConnectionChecked = false;

export default function TonConnector() {
  const { appModel, dispatch } = useAppModel();
  const [connectionState, setConnectionState] =
    useLocalStorage<RemoteConnectPersistance>("connection", {
      type: "initing",
    });

  // fix for stale connections, can probably be improved
  useEffect(() => {
    if (!wasPendingConnectionChecked && connectionState?.type === "pending") {
      localStorage.removeItem("connection");
      window.location.reload();
    }
    wasPendingConnectionChecked = true;
    console.log(connectionState, "state");
  }, [connectionState]);

  return (
    <TonhubConnectProvider
      network="sandbox"
      url="https://ton.org/"
      name="TON TWA BOT"
      debug={false}
      connectionState={connectionState}
      setConnectionState={(s) => {
        setConnectionState(s as RemoteConnectPersistance);
      }}
    >
      <_TonConnecterInternal />
    </TonhubConnectProvider>
  );
}

function _TonConnecterInternal() {
  const connect = useTonhubConnect();
  const isConnected = connect.state.type === "online";

  return (
    <>
      {!isConnected && <TonConnect />}
      {isConnected && (
        <>
          <p>address</p>
        </>
      )}
    </>
  );
}

function TonConnect() {
  const connect = useTonhubConnect();
  const [isOpen, setOpen] = useState<boolean>(false);

  if (connect.state.type === "initing") {
    return <span>Waiting for session</span>;
  }
  if (connect.state.type === "pending") {
    return (
      <div className="tonConnect">

        {isMobile() && <a className="addWalletBtn" href={connect.state.link.replace(
          "ton://",
          "https://tonhub.com/"
        )
        }> Add Wallet</a>}

        {!isMobile() &&
          <div className="qrCodeModal">
            <div className="qrCodeModalText"> Scan with your mobile tonhub wallet:</div>
              <QRCode value={connect.state.link} />
          </div>
        }
      </div >
    );
  }
  return <></>;
}
