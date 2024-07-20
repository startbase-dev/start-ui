declare module "csstype" {
  interface Properties {
    // Allow any CSS Custom Properties
    [index: `--${string}`]: any;
  }
}
