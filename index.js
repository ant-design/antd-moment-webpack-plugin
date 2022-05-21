class Plugin {
  apply(compiler) {
    const { alias } = compiler.options.resolve;
    if (alias) {
      alias.dayjs = 'moment';
    } else {
      compiler.options.resolve.alias = {
        dayjs: 'moment'
      };
    }
  }
}

module.exports = Plugin;