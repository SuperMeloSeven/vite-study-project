import { defineConfig } from 'vite'
// import path from 'path'
import react from '@vitejs/plugin-react'

// 引入 path 包注意两点:
// 1. 为避免类型报错，你需要通过 `pnpm i @types/node -D` 安装类型
// 2. tsconfig.node.json 中设置 `allowSyntheticDefaultImports: true`，以允许下面的 default 导入方式
// {
//   其他配置项...
//   root: path.join(__dirname, 'src'),
// }

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], // 来提供 React 项目编译和热更新的功能。
})
