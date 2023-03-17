# antd-moment-webpack-plugin

A webpack plugin to replace [Day.js](https://day.js.org/) to [Moment.js](http://momentjs.com/) automatically.


## Installation
```bash
npm install --save-dev @ant-design/moment-webpack-plugin
```

## Default Usage
```js
// webpack-config.js
import AntdMomentWebpackPlugin from '@ant-design/moment-webpack-plugin';

module.exports = {
  // ...
  plugins: [new AntdMomentWebpackPlugin()],
};
```

## disableDayjsAlias
`disableDayjsAlias` option to allow dayjs not alias to `moment` outside antd
```js
// webpack-config.js
import AntdMomentWebpackPlugin from '@ant-design/moment-webpack-plugin';

module.exports = {
  // ...
  plugins: [new AntdMomentWebpackPlugin({
    disableDayjsAlias: true
  })],
};
```
