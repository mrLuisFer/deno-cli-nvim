import { colors } from "./utils/colors.ts";

export const print: Console["log"] = (param: any) => console.log(param);

export const printInfo = (param: any) => print(colors.blue(param));

export const printError = (param: any) =>
  console.error(colors.bgRed(colors.black(param)));

export const printWarn = (param: any) => print(colors.yellow(param));

export const printSucces = (param: any) => print(colors.green(param));

export const printDim = (param: string) => print(colors.dim(param));

export const printMagenta = (param: any) => print(colors.magenta(param));
