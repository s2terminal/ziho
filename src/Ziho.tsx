import * as React from "react";
import "./styles.css";
import { MINUTE } from './config';
import resetNextSayAt from './resetNextSayAt';
import say from './speech';

function sayDate(date: Date) {
  say(`現在${date.getHours()}時${date.getMinutes()}分です`);
}

export default function Ziho() {
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
    if (nowDaySec > nextSayAt) {
      sayDate(now);
      setNextSayAt(resetNextSayAt(nowDaySec));
    }
  }, [nowDaySec, nextSayAt, now]);

  return (
    <>
      <p>次の時報は{Math.round((nextSayAt - nowDaySec)/MINUTE)}分後にお伝えします。</p>
      <p><button onClick={() => sayDate(now)}>いま何時？</button></p>
    </>
  );
}
