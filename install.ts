const { args, run } = Deno;
import { clone } from "https://deno.land/x/clone/mod.ts";
import {
  printInfo,
  print,
  printSucces,
  printMagenta
} from "./src/print.ts";
import {commands} from './src/commands.ts'

const repoUrl = "https://github.com/mrLuisFer/neovim-dotfiles.git";

const init = async () => {
  printSucces("⚡ Welcome to the CLI to clone mrLuisFer configuration!");
  printInfo("🦄 You can write any of the following Commands");
  
  
   commands.forEach((command:string) => {
     printMagenta(`--${command}`)
   })
  // printMagenta(commands)
  // prompt("Write a command:");

  // print("Clonando Configuracion!");
  print(args);

  // await clone(repoUrl, "./cloned");

  // const p = run({ cmd: [clone, repoUrl] });
  // console.log(p);
};

init();
