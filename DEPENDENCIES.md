# 依赖管理

本项目提供了几个脚本来帮助管理和清理未使用的依赖。

## 脚本说明

### 检查未使用的依赖

运行以下命令检查项目中未使用的依赖：

```bash
npm run check-deps
```

或者

```bash
yarn check-deps
```

这将使用 `depcheck` 工具分析您的项目并列出可能未使用的依赖。

### 自动清理未使用的依赖

如果您想自动移除未使用的依赖，可以运行：

```bash
npm run clean-deps
```

或者

```bash
yarn clean-deps
```

此命令将：
1. 使用 `depcheck` 检查未使用的依赖
2. 显示未使用的依赖列表
3. 询问您是否要移除这些依赖
4. 如果确认，将从 `package.json` 中移除这些依赖
5. 提示您运行 `npm install` 或 `yarn` 来更新 node_modules

### 自动检查未使用的依赖（安装后）

每次运行 `npm install` 或 `yarn` 后，系统会自动检查是否有未使用的依赖，并显示提示信息。这是通过 `postinstall` 钩子实现的，使用 `scripts/auto-check-deps.js` 脚本。

## 配置文件

`.depcheckrc.json` 文件配置了 `depcheck` 的行为，包括：
- 忽略的模式（如 build、dist、coverage、node_modules）
- 忽略的匹配项（如 @types/* 和 babel-plugin-react-compiler）

## 自动化工作流

1. 当您添加新依赖时，系统会在安装后自动检查是否有未使用的依赖
2. 如果发现未使用的依赖，会显示提示信息
3. 您可以随时运行 `npm run clean-deps` 来清理这些依赖
4. 清理后，系统会提示您重新安装依赖

## 注意事项

- 类型定义包（@types/*）通常不会被直接导入，但它们是必需的，因此默认被忽略
- 某些插件（如 babel-plugin-react-compiler）可能不会被直接引用，但它们是必需的，因此也被忽略
- 在运行清理脚本后，请确保项目仍然可以正常构建和运行
- 自动检查功能不会自动删除依赖，只会提示您，以避免误删
