import "./styles.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
export default function App() {
  const [data, setdata] = useState(
    " https://nft.dehidden.com/genesis/shardsofeth/001"
  );
  const [newdata, newsetdata] = useState("");
  function change() {
    setdata("https://nft.dehidden.com/genesis/shardsofeth/001")
  }
  return (
    <div>
      <div className="color1">
        <div className="logo">
          <span className="first_logo">D</span>
          <span className="first_logo_line2">Dehidden</span>
        </div>
        <div className="info">
          <span className="sp1">Shards of ETH</span>
          <br />
          <span className="sp2">To the Moon</span>
          <br />
          <span className="sp3">#001</span>
          <br />
          <button className="btn1">About</button>
        </div>
      </div>

      {/* link section */}
      <div className="newpage">
        <div className="section2">
          <div className="position">
            <div className="link" id="myInput">
              https://nft.dehidden.com/genesis/shardsofeth/001
              <CopyToClipboard text={data} onCopy={() => newsetdata(true)}>
                <button className="btn2" onClick={change}>
                  Copy
                </button>
              </CopyToClipboard>
              {newdata ? <span className="Copy">copied</span> : null}
            </div>
          </div>
        </div>

        {/* section 4 */}
        <div className="section3">
          <div className="content1">
            <h1 className="section3_heading">View AR experience</h1>
            <p className="section3_para">
              see how your NFT looks in argumented reality
            </p>
          </div>
        </div>
        {/* section 5 */}
        <div className="section3">
          <div className="content1">
            <h1 className="section3_heading">Downlode 3D model</h1>
            <p className="section3_para">
              Instantly get access to the blend file
            </p>
          </div>
        </div>
        {/* section 6 */}
        <div className="section3">
          <div className="content1">
            <h1 className="section3_heading">join the community</h1>
            <p className="section3_para">
              Unlock community access with your NFT
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
