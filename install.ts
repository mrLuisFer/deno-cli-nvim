const { args, run } = Deno;
import { clone } from "https://deno.land/x/clone/mod.ts";
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

const repoUrl = "https://github.com/mrLuisFer/neovim-dotfiles.git";

const init = async () => {
  printSucces("⚡ Welcome to the CLI to clone mrLuisFer configuration! \n");
  printInfo("🦄 You can write any of the following Commands");

  commands.forEach((command) => {
    printMagenta(`${command.commandName}`);
  });
  // printMagenta(commands)
  const commandValue = prompt("Write a command: \n");

  if (commandValue !== undefined && commandValue !== null) {
    try {
      validations(commandValue);
    } catch (error) {
      printError(error);
    }
  } else {
    printError("Please enter a valid command!");
  }

  // print("Clonando Configuracion!");
  print(args);

  // await clone(repoUrl, "./cloned");

  // const p = run({ cmd: [clone, repoUrl] });
  // console.log(p);
};

init();
