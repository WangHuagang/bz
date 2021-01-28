module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        useBuiltIns: false,
      },
    ],
    '@babel/preset-typescript',
    '@babel/preset-react',
  ],
  plugins: [
    ['@babel/proposal-class-properties', { loose: true }],
    ['@babel/proposal-object-rest-spread', { loose: true }],
    '@babel/plugin-transform-runtime',
    [
      'babel-plugin-styled-components',
      {
        ssr: false,
        fileName: false,
      },
    ],
  ],
  env: {
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            modules: 'commonjs',
            useBuiltIns: false,
          },
        ],
      ],
      plugins: [
        [
          'module-resolver',
          {
            root: ['./'],
            alias: {
              '@qunhe/muya-bu-test': './packages/test/src',
              test: './test',
              api: './api',
            },
          },
        ],
      ],
    },
  },
};
