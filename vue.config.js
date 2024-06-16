export const publicPath = process.env.NODE_ENV === "production" ? "/RENEE-TEST/" : "/";
export function chainWebpack(config) {
  config.module
    .rule("ts")
    .use("ts-loader")
    .loader("ts-loader")
    .tap((options) => {
      options.transpileOnly = true;
      return options;
    });

  config.module
    .rule("tsx")
    .use("ts-loader")
    .loader("ts-loader")
    .tap((options) => {
      options.transpileOnly = true;
      return options;
    });
}
