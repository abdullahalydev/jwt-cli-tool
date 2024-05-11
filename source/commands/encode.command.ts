// builders
import CommandBuilder from "../builders/command.builder";

// libraries
import JsonWebTokenLibrary from "../libraries/jsonwebtoken.library";

// helpers
import DebugHelpers from "../helpers/debug.helpers";
import JsonHelpers from "../helpers/json.helpers";
import ClipboardyHelpers from "../libraries/clipboardy.library";

export default new CommandBuilder({
  name: "encode",
  description: "encode json web token",
  arguments: [],
  options: [
    {
      flag: "-jp --jwt-payload [jwt_payload]",
      description: "payload of jwt token",
      required: true,
    },
    {
      flag: "-js --jwt-secret [jwt_secret]",
      description: "payload of jwt token",
      required: true,
    },
    {
      flag: "-at --algorithm-type [algorithm_type]",
      description: "algorithm type of signature",
      defaultValue: "HS256",
      choices: ["HS256", "HS384", "HS512", "none"],
    },
    {
      flag: "-ei --expires-in [expires_in_time]",
      description: "expires date of jwt token",
      defaultValue: "7 days",
    },
    {
      flag: "-rjpc --read-jwt-payload-clipboard",
      description: "read the value of payload from clipboard",
      defaultValue: false,
    },
    {
      flag: "-rjsc --read-jwt-secret-clipboard",
      description: "read the value of secret from clipboard",
      defaultValue: false,
    },
    {
      flag: "-sjtc --save-jwt-token-clipboard",
      description: "save generated jwt token to clipboard",
      defaultValue: false,
    },
  ],
  action: function (options) {
    const expiresIn = options.expiresIn;
    const algorithmType = options.algorithmType;
    const readJwtPayloadClipboard = options.readJwtPayloadClipboard;
    const readJwtSecretClipboard = options.readJwtSecretClipboard;
    const saveJwtTokenClipboard = options.saveJwtTokenClipboard;
    const jwtPayload = readJwtPayloadClipboard ? ClipboardyHelpers.read().trim() : options.jwtPayload;
    const jwtSecret = readJwtSecretClipboard ? ClipboardyHelpers.read().trim() : options.jwtSecret;

    const isJson = JsonHelpers.isValidJson({
      data: jwtPayload,
    });

    if (isJson) {
      const converted = JsonHelpers.convertString({ data: jwtPayload });

      const token = JsonWebTokenLibrary.encode({
        data: converted,
        secret: jwtSecret,
        algorithm: algorithmType,
        expiresIn: expiresIn,
      });

      DebugHelpers.success({
        title: "token has been generated",
        description: token,
      });

      if (saveJwtTokenClipboard) {
        ClipboardyHelpers.write({ text: token });
      }
    } else {
      const token = JsonWebTokenLibrary.encode({
        data: jwtPayload,
        secret: jwtSecret,
        algorithm: algorithmType,
      });

      DebugHelpers.success({
        title: "token has been generated",
        description: token,
      });

      if (saveJwtTokenClipboard) {
        ClipboardyHelpers.write({ text: token });
      }
    }

    return;
  },
});
