// packages
import jsonwebtoken from "jsonwebtoken";

export default class JsonWebTokenLibrary {
  public static decode(payload: { token: string }) {
    return jsonwebtoken.decode(payload.token, { complete: true });
  }

  public static encode(payload: { secret: string; data: string; expiresIn?: string; notBefore?: boolean; algorithm?: jsonwebtoken.Algorithm }) {
    if (payload.expiresIn) {
      return jsonwebtoken.sign(payload.data, payload.secret, {
        algorithm: payload.algorithm,
        expiresIn: payload.expiresIn,
      });
    } else {
      return jsonwebtoken.sign(payload.data, payload.secret, {
        algorithm: payload.algorithm,
      });
    }
  }

  public static verify(payload: { token: string; secret: string }) {
    try {
      return jsonwebtoken.verify(payload.token, payload.secret, {
        complete: true,
      });
    } catch {
      return null;
    }
  }
}
