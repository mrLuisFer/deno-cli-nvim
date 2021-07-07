import { commands } from "./commands.ts";

export const validations = (commandValue: string) => {
  commands.forEach((command) => {
    if (command.commandName === commandValue) {
      command.func();
    }
  });
};
