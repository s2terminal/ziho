import * as React from "react";
import "./styles.css";
import { MINUTE, HOUR } from './config';
import Ziho from './Ziho';

export default function App() {
  const [intervalSec, setIntervalSec] = React.useState(MINUTE * 30);

  return (
    <div className="App">
      <h1>時報</h1>
      <p>
        このタブを開いておくと、
        <select value={intervalSec} onChange={(event) => setIntervalSec(Number(event.target.value))}>
          <option value={MINUTE*10}>10分</option>
          <option value={MINUTE*15}>15分</option>
          <option value={MINUTE*20}>20分</option>
          <option value={MINUTE*30}>30分</option>
          <option value={MINUTE*HOUR}>1時間</option>
        </select>
        ごとに現在時刻をお伝えします。
      </p>
      <div><Ziho intervalSec={intervalSec}/></div>
      <hr/>
      <p>CodeSandbox: <a href="https://codesandbox.io/s/github/s2terminal/ziho" target="blank">https://codesandbox.io/s/github/s2terminal/ziho</a></p>
      <p>GitHub: <a href="https://github.com/s2terminal/ziho" target="blank">https://github.com/s2terminal/ziho</a></p>
    </div>
  );
}
