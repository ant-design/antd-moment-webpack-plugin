import type { Plugin, Compiler } from "webpack";

declare namespace AntdMomentWebpackPlugin {
  
}
declare class AntdMomentWebpackPlugin extends Plugin {
  constructor();
  apply(compiler: Compiler): void;
}

export = AntdMomentWebpackPlugin;
