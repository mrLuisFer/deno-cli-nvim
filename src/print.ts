import * as Colors from "https://deno.land/std@0.100.0/fmt/colors.ts";

export const print: Console["log"] = (param: any) => console.log(param);

export const printInfo = (param: any) => print(Colors.blue(param));

export const printError = (param: any) =>
  console.error(Colors.bgRed(Colors.black(param)));

export const printWarn = (param: any) => print(Colors.yellow(param));

export const printSucces = (param: any) => print(Colors.green(param));

export const printDim = (param: string) => print(Colors.dim(param));

export const printMagenta = (param: any) => print(Colors.brightMagenta(param));
