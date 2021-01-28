module.exports = {
  /**
   * @type {boolean | 'error'}
   * @default true
   * @description 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。这个值会在 @vue/cli-plugin-eslint 被安装之后生效。
   * @description 当 lintOnSave 是一个 truthy 的值时，eslint-loader 在开发和生产构建下都会被启用。如果你想要在生产构建时禁用 eslint-loader，你可以用如下配置。
   */
  lintOnSave: false, //process.env.NODE_ENV !== "production",

  /**
   * @type boolean
   * @default true
   * @description 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
   */
  productionSourceMap: false,
};
