import type { Plugin, Compiler } from "webpack";

declare namespace AntdMomentWebpackPlugin {
  interface Options {
    disableDayjsAlias?: boolean;
  }
}
declare class AntdMomentWebpackPlugin extends Plugin {
  constructor(
    options?: AntdMomentWebpackPlugin.Options
  );
  apply(compiler: Compiler): void;
}

export = AntdMomentWebpackPlugin;
