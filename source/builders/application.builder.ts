// packages
import commander from "commander";

// builders
import ControllerBuilder from "./controller.builder";
import CommandBuilder from "./command.builder";

export interface ApplicationBuilderConstructorInterface {
  name: string;
  description: string;
  version: string;
  controllers?: ControllerBuilder[];
  commands?: CommandBuilder[];
}

export default class ApplicationBuilder extends commander.Command {
  constructor(payload: ApplicationBuilderConstructorInterface) {
    super();

    this.name(payload.name);
    this.description(payload.description);
    this.version(payload.version);


    // initialize commands
    for (const command of payload.commands) {
      this.addCommand(command);
    }

    // initialize controllers
    for (const controller of payload.controllers) {
      this.addCommand(controller);
    }

    this.parse(process.argv);
  }
}
