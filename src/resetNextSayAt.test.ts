import resetNextSayAt from './resetNextSayAt';
import { INTERVAL_SEC, MINUTE, HOUR, DAY } from './config';

describe("resetNextSayAt()", () => {
  it("次回の時報が計算できる", () => {
    expect(resetNextSayAt(1)).toEqual(INTERVAL_SEC);
  });

  it("日付をまたいだ計算ができる", () => {
    expect(resetNextSayAt(MINUTE * HOUR * DAY + 1)).toEqual(INTERVAL_SEC);
  });
});
