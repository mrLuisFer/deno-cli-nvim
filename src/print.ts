import * as Colors from "https://deno.land/std@0.100.0/fmt/colors.ts";

export const print = (param: any) => console.log(param);

export const printInfo = (param: any) => print(Colors.blue(param));

export const printError = (param: any) => print(Colors.bgRed(param));

export const printWarn = (param: any) => print(Colors.yellow(param));

export const printSucces = (param: any) => print(Colors.green(param));

/**
 * The text emits only a small amount of light.
 * @param {string} param - str text to dim
 * @returns {void}
 */
export const printDim = (param: string) => print(Colors.dim(param));
