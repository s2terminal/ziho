import judgeSay from './judgeSay';
import { MINUTE, HOUR, DAY } from '../config';

describe('judgeSay()', () => {
  it("次回の時報が判定できる", () => {
    expect(judgeSay(2,1)).toEqual(true);
    expect(judgeSay(2,2)).toEqual(true);
    expect(judgeSay(2,3)).toEqual(false);
  });

  it("00時00分と24時00分でも時報が判定できる", () => {
    expect(judgeSay(0, MINUTE * DAY * HOUR)).toEqual(true);
    expect(judgeSay(0, MINUTE * DAY * HOUR + 1)).toEqual(false);
  });
});
