import { exists } from "https://deno.land/std@0.95.0/fs/mod.ts";

export const moveInlinux = async () => {
  const some = await exists("./cloned");
  console.log(some);

  // const process = Deno.run({
  //   cmd: [ "mv", "nvim", "../../../src"],
  // });

  // console.log(process);
};
