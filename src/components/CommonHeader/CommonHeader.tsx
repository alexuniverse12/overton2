import { useState } from "react";
import QRCode from "react-qr-code";
import { useTonhubConnect } from "react-ton-x";
import "./CommonHeader.css";

export type CommonHeaderProps = {
}


const CommonHeader = ({ }: CommonHeaderProps) => {

  return (
    <div className="headerWrapper">
      <h3 className='title'>Overton</h3>
      <_TonConnecterInternal />
    </div>
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
        <a className='addWalletBtn' onClick={() => setOpen(false)}>Close</a>
      </div >
    );
  }
  return <></>;
}

function _TonConnecterInternal() {
  const [isOpen, setOpen] = useState<boolean>(false);
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
export default CommonHeader;