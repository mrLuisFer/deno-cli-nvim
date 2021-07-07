import { clone } from "https://deno.land/x/clone/mod.ts";
import { printInfo, printSucces } from "../print.ts";

const repoUrl = "https://github.com/mrLuisFer/neovim-dotfiles.git";

export const cloneCommand = async () => {
  printInfo("Clonando configuracion!");
  try {
    await clone(repoUrl, "./cloned");
    printSucces("Configuracion clonada exitosamente!");
  } catch (error) {
    console.log(error);
  }
};
