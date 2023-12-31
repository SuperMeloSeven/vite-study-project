import { defineConfig, normalizePath } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer';
import windi from "vite-plugin-windicss";

// 引入 path 包注意两点:
// 1. 为避免类型报错，你需要通过 `pnpm i @types/node -D` 安装类型
// 2. tsconfig.node.json 中设置 `allowSyntheticDefaultImports: true`，以允许下面的 default 导入方式
// {
//   其他配置项...
//   root: path.join(__dirname, 'src'),
// }

// 全局 scss 文件的路径
// 用 normalizePath 解决 window 下的路径问题
const variablePath = normalizePath(path.resolve('./src/variable.scss'));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    babel: {
      // 加入 babel 插件
      // 以下插件包都需要提前安装
      // 当然，通过这个配置你也可以添加其它的 Babel 插件
      plugins: [
        // 适配 styled-component
        "babel-plugin-styled-components",
        // 适配 emotion
        "@emotion/babel-plugin"
      ]
    },
    // 注意: 对于 emotion，需要单独加上这个配置
    // 通过 `@emotion/react` 包编译 emotion 中的特殊 jsx 语法
    jsxImportSource: "@emotion/react"
  }), windi()], // 来提供 React 项目编译和热更新的功能。
  // css 相关的配置
  css: {
    modules: {
      // 一般我们可以通过 generateScopedName 属性来对生成的类名进行自定义
      // 其中，name 表示当前文件名，local 表示类名
      generateScopedName: "[name]__[local]___[hash:base64:5]"
    },
    preprocessorOptions: {
      scss: {
        // additionalData 的内容会在每个 scss 文件的开头自动注入
        additionalData: `@import "${variablePath}";`
      }
    },
    // 进行 PostCSS 配置
    postcss: {
      plugins: [
        autoprefixer({
          // 指定目标浏览器
          // overrideBrowserslist: ['Chrome > 40', 'ff > 31', 'ie 11'] // 小册写法
          overrideBrowserslist: ["> 1%", "last 2 versions"] // 评论区处理方式
        })
      ]
    }
  }
})
