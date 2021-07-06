const { args, run } = Deno;
import { clone } from "https://deno.land/x/clone/mod.ts";
import { print } from "./src/print.ts";

const repoUrl = "https://github.com/mrLuisFer/neovim-dotfiles.git";

const build = async () => {
  print("Clonando Configuracion!");
  print(args);

  await clone(repoUrl, "./cloned");

  // const p = run({ cmd: [clone, repoUrl] });
  // console.log(p);
};

build();
