// builders
import CommandBuilder from "../builders/command.builder";

// libraries
import JsonWebTokenLibrary from "../libraries/jsonwebtoken.library";
import ClipboardyHelpers from "../libraries/clipboardy.library";

// helpers
import DebugHelpers from "../helpers/debug.helpers";

export default new CommandBuilder({
  name: "decode",
  description: "decode json web token",
  arguments: [],
  options: [
    {
      flag: "-jt --jwt-token [jwt_token]",
      description: "jwt token",
      required: true,
    },
    {
      flag: "-rjtc --read-jwt-token-clipboard",
      description: "read the value of jwt token from clipboard",
      defaultValue: false,
    },
  ],
  action: function (options) {
    const readJwtTokenClipboard = options.readJwtTokenClipboard;
    const jwtToken = readJwtTokenClipboard ? ClipboardyHelpers.read().trim() : options.jwtToken;

    const decode = JsonWebTokenLibrary.decode({ token: jwtToken });

    if (!decode) {
      DebugHelpers.failure({
        title: "invalid prompt",
        description: "please write valid jwt token",
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
