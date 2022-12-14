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
import { Children, useEffect, useState } from "react";
import { Jetton } from "./Jettons";
import { TonWalletDetails } from "./TonWalletDetails";
import useAppModel from "../hooks/useMainReducer";

// TODO change to L3 client
export const tc = new TonClient({
  endpoint: "https://scalable-api.tonwhales.com/jsonRPC",
});

let wasPendingConnectionChecked = false;

export default function TonConnector({ children }: { children: any }) {
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
  }, [connectionState]);

  return (
    <TonhubConnectProvider
      network="mainnet"
      url="https://ton.org/"
      name="Overton"
      debug={false}
      connectionState={connectionState}
      setConnectionState={(s) => {
        setConnectionState(s as RemoteConnectPersistance);
      }}
    >
      {/* <_TonConnecterInternal /> */}
      {children}
    </TonhubConnectProvider>
  );
}

function _TonConnecterInternal() {
  const [isOpen, setOpen] = useState<boolean>(false);
  document.body.style.overflow = "unset"
  const connect = useTonhubConnect();
  const isConnected = connect.state.type === "online";
  // const address: string = connect.state.type === "online" || connect.state!.walletConfig!.address
  return (
    <>
      {(!isConnected && !isOpen) && <a className='addWalletBtn' onClick={() => setOpen(true)}>Add Wallet</a>}
      {(!isConnected && isOpen) && <TonConnect isOpen={isOpen} setOpen={setOpen} />}
      {(isConnected && connect.state.type === "online") && (
        <>
          <p className="addressText">{connect.state!.walletConfig!.address.slice(0, 4)}...{connect.state!.walletConfig!.address.slice(-5)}</p>
        </>
      )}
    </>
  );
}

function TonConnect({ isOpen, setOpen }: { isOpen: any, setOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
  const connect = useTonhubConnect();


  if (connect.state.type === "initing") {
    return <span>initiating</span>;
  }
  if (connect.state.type === "pending") {
    document.body.style.overflow = "hidden"
    return (
      <div className="tonConnect">
        <h2 className="qrTitle">Scan QR via<br />TONHUB to sign in</h2>
        <QRCode value={connect.state.link} />
        <button
          onClick={() => {
            // @ts-ignore
            window.location.href = connect.state.link.replace(
              "ton://",
              "https://tonhub.com/"
            );
          }}
        >
          Open Tonhub Wallet{" "}
        </button>
        <a className='addWalletBtn' onClick={() => setOpen(false)}>Close</a>
      </div >
    );
  }
  return <></>;
}
