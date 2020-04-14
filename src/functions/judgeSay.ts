import { MINUTE, HOUR, DAY } from "../config";

export default function judgeSay(nowDaySec: number, nextSayAt: number): boolean {
  const next = (nowDaySec === 0) ? nextSayAt - (MINUTE * HOUR * DAY) : nextSayAt;
  if (next <= nowDaySec) { return true; }
  return false;
}
