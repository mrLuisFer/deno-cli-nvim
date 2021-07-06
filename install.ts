const { args, run } = Deno;
import { clone } from "https://deno.land/x/clone/mod.ts";
import {
  printInfo,
  print,
  printError,
  printWarn,
  printSucces,
  printDim,
} from "./src/print.ts";

const repoUrl = "https://github.com/mrLuisFer/neovim-dotfiles.git";

const init = async () => {
  printDim("⚡ Welcome to the CLI to clone mrLuisFer configuration!");
  print("🦄 Commands");

  // Test
  printWarn("some");

  // prompt("Write a command:");

  // print("Clonando Configuracion!");
  print(args);

  // await clone(repoUrl, "./cloned");

  // const p = run({ cmd: [clone, repoUrl] });
  // console.log(p);
};

init();
