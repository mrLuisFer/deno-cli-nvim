import * as fs from "https://deno.land/std@0.95.0/fs/mod.ts";
import { colors } from "./src/utils/colors.ts";
import { printInfo, printSucces, printError } from "./src/print.ts";

const { bold } = colors;

export const linux = async () => {
  const isNvimFolder = await fs.exists("./nvim");
  console.log(isNvimFolder);

  if (isNvimFolder) {
    printInfo(`🐧 Moving nvim folder into ${bold("~./config")}`);
    printSucces(bold("Repository cloned successfully! \n"));
  } else {
    printError("No se pudo mover el archivo");
  }
};
