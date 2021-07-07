import { TCommands } from "./types/Commands.d.ts";
import { help } from "./commands/help.ts";
import { info } from "./commands/info.ts";

export const commands: Array<TCommands> = [
  {
    commandName: "help",
    func: help,
  },
  {
    commandName: "info",
    func: info,
  },
];
