// packages
import commander from "commander";

export interface CommandBuilderConstructorInterface {
  name: string;
  description: string;
  arguments?: {
    flag: string;
    description: string;
  }[];
  options?: {
    flag: string;
    description: string;
    defaultValue?: any;
    variadic?: boolean;
    mandatory?: boolean;
    negate?: boolean;
    choices?: string[];
    required?: boolean;
    hidden?: boolean;
  }[];
  action?: (...args) => void;
}

export default class CommandBuilder extends commander.Command {
  constructor(payload: CommandBuilderConstructorInterface) {
    super();

    this.name(payload.name);
    this.description(payload.description);

    this.action(payload.action);

    // initialize options
    if (Array.isArray(payload.options)) {
      for (const option of payload.options) {
        const _option = this.createOption(option.flag, option.description);

        _option.variadic = option.variadic;
        _option.mandatory = option.mandatory;
        _option.negate = option.negate;
        _option.hidden = option.hidden;
        _option.required = option.required;
        _option.defaultValue = option.defaultValue;

        if (option.choices) {
          _option.choices(option.choices);
        }

        this.addOption(_option);
      }
    }

    // initialize arguments
    if (Array.isArray(payload.options)) {
      for (const argument of payload.arguments) {
        this.argument(argument.flag, argument.description);
      }
    }
  }
}
