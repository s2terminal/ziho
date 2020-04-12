import { MINUTE, HOUR, DAY } from './config';

/**
 * 現在の日次経過秒数を受け取って、次にしゃべる日次経過秒数を返す
 * @param daySec    起点となる日次経過秒数。基本的にはこれにINTERVAL_SECを足した数を返す。
 * @param nowDaySec 現在の日次経過秒数。指定しなかったらdaySecと一緒
 */
export default function resetNextSayAt(intervalSec: number, daySec: number, nowDaySec: number | null = null) {
  if (nowDaySec === null) { nowDaySec = daySec; }
  let next: number = Math.floor((daySec + intervalSec) / intervalSec) * intervalSec;
  if (next >= MINUTE * HOUR * DAY) { return next - MINUTE * HOUR * DAY; } // 日をまたいだらゼロに戻す
  if (next <= nowDaySec) { next = resetNextSayAt(next, nowDaySec); }
  return next;
}
