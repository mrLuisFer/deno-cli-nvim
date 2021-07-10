import { clone } from "https://deno.land/x/clone/mod.ts";
import { colors } from "./src/utils/colors.ts";
import { printInfo, print } from "./src/print.ts";
import { linux } from "./linux.ts";

const repoUrl = "https://github.com/mrLuisFer/neovim-dotfiles.git";
const { bold } = colors;
const os = Deno.build.os;

export const cloneCommand = async () => {
  printInfo("Cloning repository!");
  await clone(repoUrl, "nvim");

  try {
    print(`Your OS is: ${bold(os.toUpperCase())}`);

    if (os.toLocaleLowerCase() === "linux") {
      linux();
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
