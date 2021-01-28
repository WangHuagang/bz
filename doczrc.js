// https://www.docz.site/docs/project-configuration
// http://manual.k8s-new.qunhequnhe.com/baozheng/0.0.2
import path from 'path';
import muyaRemarkPlugin from '@qunhe/baozheng-remark-plugin';
import muyaRehypePlugin from '@qunhe/baozheng-rehype-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
const cssLoaderConfig = [
  "css-loader",
  {
    loader: "postcss-loader",
    options: {
      postcssOptions: {
        plugins: [
          "postcss-flexbugs-fixes",
          "autoprefixer",
        ],
      }
    },
  },
];
export default {
  codeSandbox: false,
  title: '小程序-docs',
  typescript: true,
  public: '/public',
  theme: '@qunhe/baozheng-docz-theme',
  propsParser: false,
  modifyBundlerConfig: config => {

    const isDev = process.env.NODE_ENV === "development";
    const styleLoaderConfig = isDev
      ? [
          {
            loader: "style-loader",
          },
        ]
      : [MiniCssExtractPlugin.loader];
    config.resolve.alias = {
      ...config.resolve.alias,
      ...{
        react: path.resolve('./node_modules/react'),
        'react-dom': path.resolve('./node_modules/react-dom'),
        '@mdx-js/react': path.resolve('./node_modules/@mdx-js/react')
      },
    };
    config.module.rules = [
      ...config.module.rules,


      {
        test: /.css$/,
        use: [...styleLoaderConfig, ...cssLoaderConfig],
      },
    ]
    return config;
  },
  themeConfig: {
    colors: {
      blackLight: '#232529',
      whiteLight: '#CCC',
    },
    logo: {
      light:
        '//qhstaticssl.kujiale.com/newt/23/image/png/1571225467035/708C2EE1345EFE5E03850336A48B5591.png',
      dark:
        '//qhstaticssl.kujiale.com/newt/23/image/png/1571225615286/E9608DA43C6389692DAAE8CD9B80BD2F.png',
      width: 180,
    },
  },
  mdPlugins: [muyaRemarkPlugin],
  hastPlugins: [muyaRehypePlugin],
  menu: [
    {
        // 多级目录下，name 为一级目录，对应文档中的 menu 配置
        name: '入门',
        // 二级目录下的内容对应文档中的 name 配置
        menu: [
            'test',
            'whg'
        ]
    },
    // 一级目录中对应文档中的 name 配置
    'Hello',
  ],
  noMenu: ['test']
};
