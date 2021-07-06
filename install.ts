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
  printInfo("🦄 You can write any of the following Commands");

  // prompt("Write a command:");

  // Test
  printWarn("some");

  // print("Clonando Configuracion!");
  print(args);

  // await clone(repoUrl, "./cloned");

  // const p = run({ cmd: [clone, repoUrl] });
  // console.log(p);
};

init();
