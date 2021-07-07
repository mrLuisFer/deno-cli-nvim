import { clone } from "https://deno.land/x/clone/mod.ts";
import { colors } from "../utils/colors.ts";
import { printInfo, printSucces, print } from "../print.ts";
import { moveInlinux } from "./moveFolderFuncs/linux.ts";

const repoUrl = "https://github.com/mrLuisFer/neovim-dotfiles.git";
const { bold } = colors;
const os = Deno.build.os;

export const cloneCommand = async () => {
  printInfo("Cloning repository!");

  try {
    await clone(repoUrl, "./src/commands/moveFolderFuncs/cloned");

    print(`Your OS is: ${bold(os.toUpperCase())}`);
    if (os.toLocaleLowerCase() === "linux") {
      printInfo(`🐧 Moving to ${bold("~./config/nvim")}`);
      printSucces(bold("Repository cloned successfully! \n"));

      moveInlinux();
    } else if (os === "windows") {
      printInfo(`📘 Moving to ${bold("~\\AppData\\Local\\nvim")}`);
    } else if (os === "darwin") {
      printInfo(`🍎 Moving to ${bold("~./config/nvim")}`);
    } else {
      printInfo("🔒 Your system is not recognized");
      return;
    }
  } catch (error) {
    console.log(error);
  }
};
