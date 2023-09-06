import type { Plugin } from "webpack";

declare namespace AntdMomentWebpackPlugin {
  interface Options {
    disableDayjsAlias?: boolean;
  }
}
declare class AntdMomentWebpackPlugin extends Plugin {
  constructor(
    options?: AntdMomentWebpackPlugin.Options
  );
}

export = AntdMomentWebpackPlugin;
