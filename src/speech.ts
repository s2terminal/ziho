/**
 * 与えられたテキストを読み上げる
 * @param text 読み上げる文字列
 */
export default function say(text: string) {
  const utter = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utter);
  console.log(text);
}
