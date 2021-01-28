export const imports = {
  'hello.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "hello" */ 'hello.mdx'),
  'md/test.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "md-test" */ 'md/test.mdx'
    ),
  'md/whg.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "md-whg" */ 'md/whg.mdx'
    ),
}
