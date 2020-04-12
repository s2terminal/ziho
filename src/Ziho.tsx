import * as React from "react";
import "./styles.css";
import { MINUTE, REFLESH_MSEC } from './config';
import resetNextSayAt from './resetNextSayAt';
import say from './speech';

function sayDate(date: Date) {
  say(`現在${date.getHours()}時${date.getMinutes()}分です`);
}

export default function Ziho(props: { intervalSec: number }) {
  const [now, setNow] = React.useState(new Date());
  const nowDaySec = (((now.getHours() * 60) + now.getMinutes()) * MINUTE) + now.getSeconds();
  const [nextSayAt, setNextSayAt] = React.useState(resetNextSayAt(props.intervalSec, nowDaySec));

  // REFLESH_MSECミリ秒に1回の更新
  React.useEffect(() => {
    const timerID = setInterval(() => { setNow(new Date()); }, REFLESH_MSEC);
    return () => { clearInterval(timerID); };
  });

  // 発言するか判定
  React.useEffect(() => {
    const calculatedNextSayAt = resetNextSayAt(props.intervalSec, nowDaySec);
    if (nowDaySec >= nextSayAt) {
      sayDate(now);
      setNextSayAt(calculatedNextSayAt);
    } else if (calculatedNextSayAt !== nextSayAt) {
      // propsの更新時
      setNextSayAt(calculatedNextSayAt);
    }
  }, [nowDaySec, nextSayAt, now, props.intervalSec]);

  return (
    <>
      <p>次の時報は{Math.round((nextSayAt - nowDaySec)/MINUTE)}分後にお伝えします。</p>
      <p><button onClick={() => sayDate(now)}>いま何時？</button></p>
    </>
  );
}
