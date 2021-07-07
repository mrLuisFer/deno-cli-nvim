import { clone } from "https://deno.land/x/clone/mod.ts";
import { colors } from "../utils/colors.ts";
import { printInfo, printSucces, print } from "../print.ts";

const repoUrl = "https://github.com/mrLuisFer/neovim-dotfiles.git";

export const cloneCommand = async () => {
  const os = Deno.build.os;

  printInfo("Clonando configuracion!");
  try {
    // await clone(repoUrl, "./cloned");
    printSucces("Configuracion clonada exitosamente! \n");

    print(`Your OS is: ${colors.bold(os.toUpperCase())}`);
    if (os === "linux") {
      printInfo("Moviendo la carpeta a ~./config/nvim");
    } else if (os === "windows") {
      printInfo("Moviendo la carpeta a ~\\AppData\\Local\\nvim");
    } else if (os === "darwin") {
      printInfo("Moviendo la carpeta a ~./config/nvim");
    }
  } catch (error) {
    console.log(error);
  }
};
