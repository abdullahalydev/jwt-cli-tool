import colors from "colors";
import boxen from "boxen";

export default class DebugHelpers {
  static success(payload: { title: string; description: string }) {
    console.log(colors.green(boxen(payload.description, { title: payload.title, padding: 1 })));
  }
  static failure(payload: { title: string; description: string }) {
    console.log(colors.red(boxen(payload.description, { title: payload.title, padding: 1 })));
  }
  static warning(payload: { title: string; description: string }) {
    console.log(colors.yellow(boxen(payload.description, { title: payload.title, padding: 1 })));
  }
  static information(payload: { title: string; description: string }) {
    console.log(colors.blue(boxen(payload.description, { title: payload.title, padding: 1 })));
  }
}
