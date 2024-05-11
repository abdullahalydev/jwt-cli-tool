// builders
import ApplicationBuilder from "./source/builders/application.builder";

// commands
import EncodeCommand from "./source/commands/encode.command";
import DecodeCommand from "./source/commands/decode.command";
import VerifyCommand from "./source/commands/verify.command";

// configures
import ApplicationConfigure from "./source/configures/application.configure";

new ApplicationBuilder({
  name: ApplicationConfigure.NAME,
  description: ApplicationConfigure.DESCRIPTION,
  version: ApplicationConfigure.VERSION,
  controllers: [],
  commands: [DecodeCommand, EncodeCommand, VerifyCommand],
});

