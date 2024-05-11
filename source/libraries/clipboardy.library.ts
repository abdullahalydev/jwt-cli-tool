// packages
import clipboardy from "clipboardy";

export default class ClipboardyHelpers {
  static write(payload: { text: string }) {
    clipboardy.writeSync(payload.text);
  }

  static read() {
    return clipboardy.readSync();
  }
}
