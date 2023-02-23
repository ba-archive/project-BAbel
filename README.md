# 翻译和发布规范

## Usage

你需要安装有基本的开发环境。如下：

- node.js：[node系列-安装nodejs - 掘金](https://juejin.cn/post/6940867941445894157)
- [Visual Studio Code （免费）](https://code.visualstudio.com/)，如果你是富老板或者是穷学生，可以使用 [WebStorm](https://www.jetbrains.com/zh-cn/webstorm/)。

### 安装依赖

有两种依赖管理方式， `npm` 和 `pnpm`。

使用哪种取决于你的个人喜好，**但是在本说明中的例子将会是 `pnpm`，并且所有工作流也只在 pnpm 上测试过。**

安装 `pnpm` 的方式如下。

在你的 Visual Studio Code（以下简称 vscode 或者 vsc）的终端中，运行：

```shell
npm install -g pnpm
pnpm install
```

如果你打算使用 `npm`，运行：

```shell
pnpm install
```

### 实时查看更改

```shell
pnpm dev
```

或者

```shell
npm run dev
```

默认情况下，你可以在 `http://localhost:5173/` 查看到当前的实时更改。

### 构建工程

如果你使用的是 `npm`，在 vscode 的终端中，运行：

```shell
npm run build
```

如果你使用的是 `pnpm`，在 vscode 的终端中，运行：

```shell
pnpm build
```
