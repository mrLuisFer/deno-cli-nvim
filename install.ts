const { args } = Deno;
import {
  printInfo,
  print,
  printSucces,
  printMagenta,
  printWarn,
  printError,
} from "./src/print.ts";
import { commands } from "./src/commands.ts";
import { validations } from "./src/validations.ts";

const init = async () => {
  printSucces("⚡ Welcome to the CLI to clone mrLuisFer configuration! \n");
  printInfo("🦄 You can write any of the following Commands");

  commands.forEach((command) => {
    printMagenta(`${command.commandName}`);
  });

  const commandValue = prompt("Write a command: \n");

  if (commandValue !== undefined && commandValue !== null) {
    try {
      validations(commandValue);
    } catch (error) {
      printError(error);
    }
  } else {
    printWarn("⚠ Please enter a valid command!");
  }

  print(args);
};

init();
