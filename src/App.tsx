import * as React from "react";
import "./styles.css";
import { MINUTE, INTERVAL_SEC } from './config';
import Ziho from './Ziho';

export default function App() {
  return (
    <div className="App">
      <h1>時報</h1>
      <p>このタブを開いておくと、{INTERVAL_SEC/MINUTE}分おきに現在時刻をお伝えします。</p>
      <div><Ziho/></div>
      <hr/>
      <p>CodeSandbox: <a href="https://codesandbox.io/s/github/s2terminal/ziho" target="blank">https://codesandbox.io/s/github/s2terminal/ziho</a></p>
      <p>GitHub: <a href="https://github.com/s2terminal/ziho" target="blank">https://github.com/s2terminal/ziho</a></p>
    </div>
  );
}
