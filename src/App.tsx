import * as React from "react";
import "./styles.css";
const MINUTE = 60
const INTERVAL_SEC = MINUTE * 30;

function say(text: string) {
  const utter = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utter);
  console.log(text);
}

function sayDate(date: Date) {
  say(`現在${date.getHours()}時${date.getMinutes()}分です`);
}

export default function App() {
  const [now, setNow] = React.useState(new Date());
  const [nextSayAt, setNextSayAt] = React.useState(0);
  const nowDaySec = (((now.getHours() * 60) + now.getMinutes()) * MINUTE) + now.getSeconds();

  // 1秒に1回の更新
  React.useEffect(() => {
    const timerID = setInterval(() => { setNow(new Date()); }, 1000);
    return () => { clearInterval(timerID); };
  });

  // 発言
  React.useEffect(() => {
    function resetNextSayAt(daySec: number) {
      let next: number = Math.floor((daySec + INTERVAL_SEC) / INTERVAL_SEC) * INTERVAL_SEC;
      if (next <= nowDaySec) { next = resetNextSayAt(next); }
      return next;
    }

    if (nowDaySec > nextSayAt) {
      sayDate(now);
      setNextSayAt(resetNextSayAt(nowDaySec));
    }
  }, [nowDaySec, nextSayAt, now]);

  return (
    <div className="App">
      <h1>時報</h1>
      <p>このタブを開いておくと、{INTERVAL_SEC/MINUTE}分おきに現在時刻をお伝えします。</p>
      <p>次の時報は{Math.round((nextSayAt - nowDaySec)/MINUTE)}分後にお伝えします。</p>
      <p><button onClick={() => sayDate(now)}>いま何時？</button></p>
      <hr/>
      <p>CodeSandbox: <a href="https://codesandbox.io/s/github/s2terminal/ziho" target="blank">https://codesandbox.io/s/github/s2terminal/ziho</a></p>
      <p>GitHub: <a href="https://github.com/s2terminal/ziho" target="blank">https://github.com/s2terminal/ziho</a></p>
    </div>
  );
}
