const generateRegExp = /generate\/dayjs/;
const updateResource = (resource) => {
  resource.request = resource.request.replace('dayjs', 'moment');
};
const plugin = 'AntdMomentWebpackPlugin';
class Plugin {
  constructor(options) {
    this.options = options || {};
  }
  apply (compiler) {
    compiler.hooks.normalModuleFactory.tap(plugin, (factory) => {
      factory.hooks.beforeResolve.tap(plugin, (result) => {
        if (generateRegExp.test(result.request)) {
          updateResource(result);
        }
      });
      factory.hooks.afterResolve.tap(plugin, (result) => {
        const createData = result.createData;
        if (generateRegExp.test(createData.resource)) {
          updateResource(result);
        }
      });
    });
  }
};
module.exports = Plugin;
