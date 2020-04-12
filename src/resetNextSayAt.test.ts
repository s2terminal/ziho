import resetNextSayAt from './resetNextSayAt';
import { MINUTE, HOUR, DAY } from './config';
const INTERVAL_SEC = MINUTE * 60;

describe("resetNextSayAt()", () => {
  it("次回の時報が計算できる", () => {
    expect(resetNextSayAt(INTERVAL_SEC, 1)).toEqual(INTERVAL_SEC);
  });

  it("日付をまたいだ計算ができる", () => {
    expect(resetNextSayAt(INTERVAL_SEC, MINUTE * HOUR * DAY + 1)).toEqual(INTERVAL_SEC);
  });
});
