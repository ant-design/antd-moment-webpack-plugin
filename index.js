const generateRegExp = /generate\/dayjs/;
const updateResource = (resource) => {
  resource.request = resource.request.replace('dayjs', 'moment');
};
const plugin = 'AntdMomentWebpackPlugin';
class Plugin {
  constructor(options) {
    this.options = options || {};
  }
  apply(compiler) {
    const { disableDayjsAlias } = this.options;
    const { alias } = compiler.options.resolve;
    if (!disableDayjsAlias) {
      if (alias) {
        alias.dayjs = 'moment';
      } else {
        compiler.options.resolve.alias = {
          dayjs: 'moment',
        };
      }
    }
    compiler.hooks.normalModuleFactory.tap(plugin, (factory) => {
      factory.hooks.beforeResolve.tap(plugin, (result) => {
        if (generateRegExp.test(result.request)) {
          updateResource(result);
        }
      });
      factory.hooks.afterResolve.tap(plugin, (result) => {
        const data = result.createData ? result.createData : result;
        if (generateRegExp.test(data.resource)) {
          data.resource = data.resource.replace('dayjs', 'moment')
        }
      });
    });
  }
};
module.exports = Plugin;
