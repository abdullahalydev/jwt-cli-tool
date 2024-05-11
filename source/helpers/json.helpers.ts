export default class JsonHelpers {
  static isValidJson(payload: { data: string }) {
    try {
      const convert = JSON.parse(payload.data);
      console.log(convert);
      if (typeof convert !== "object") {
        return false;
      }

      return true;
    } catch {
      return false;
    }
  }

  static convertString(payload: { data: string }) {
    return JSON.parse(payload.data);
  }
}
