// builders
import CommandBuilder from "../builders/command.builder";

// libraries
import JsonWebTokenLibrary from "../libraries/jsonwebtoken.library";
import ClipboardyHelpers from "../libraries/clipboardy.library";

// helpers
import DebugHelpers from "../helpers/debug.helpers";

export default new CommandBuilder({
  name: "verify",
  description: "verify jwt token",
  arguments: [],
  options: [
    {
      flag: "-jt --jwt-token [jwt_token]",
      description: "payload of jwt token",
      required: true,
    },
    {
      flag: "-js --jwt-secret [jwt_secret]",
      description: "payload of jwt token",
      required: true,
    },
    {
      flag: "-rjtc --read-jwt-token-clipboard",
      description: "read the value of value from clipboard",
      defaultValue: false,
    },
    {
      flag: "-rjsc --read-jwt-secret-clipboard",
      description: "read the value of secret from clipboard",
      defaultValue: false,
    },
  ],
  action: function (options) {
    const readJwtTokenClipboard = options.readJwtTokenClipboard;
    const readJwtSecretClipboard = options.readJwtSecretClipboard;
    const jwtToken = readJwtTokenClipboard ? ClipboardyHelpers.read().trim() : options.jwtToken;
    const jwtSecret = readJwtSecretClipboard ? ClipboardyHelpers.read().trim() : options.jwtSecret;

    const decode = JsonWebTokenLibrary.decode({ token: jwtToken });
    if (!decode) {
      DebugHelpers.failure({
        title: "invalid prompt",
        description: "please write valid jwt token",
      });

      return;
    }

    const verify = JsonWebTokenLibrary.verify({ token: jwtToken, secret: jwtSecret });
    if (!verify) {
      DebugHelpers.failure({
        title: "invalid prompt",
        description: "please write valid valid secret",
      });

      return;
    }

    DebugHelpers.success({
      title: "header",
      description: JSON.stringify(decode.header, null, 2),
    });

    DebugHelpers.success({
      title: "payload",
      description: JSON.stringify(decode.payload, null, 2),
    });
  },
});
