// packages
import commander from "commander";

// builders
import CommandBuilder from "./command.builder";

export interface ControllerBuilderConstructorInterface {
  name: string;
  description: string;
  commands?: CommandBuilder[];
}

export default class ControllerBuilder extends commander.Command {
  constructor(payload: ControllerBuilderConstructorInterface) {
    super();

    this.name(payload.name);
    this.description(payload.description);

    // initialize commands
    for (const command of payload.commands) {
      this.addCommand(command);
    }
  }
}
