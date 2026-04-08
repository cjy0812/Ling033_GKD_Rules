# Ling自用GKD订阅规则，偏细分与功能

[![Release](https://img.shields.io/badge/release-v{{VERSION}}-blue)](https://github.com/cjy0812/Ling033_GKD_Rules/releases/latest)
[![已适配应用](https://img.shields.io/badge/已适配应用-{{APP_SIZE}}-brightgreen)](./dist/README.md#应用规则)
[![全局规则组](https://img.shields.io/badge/全局规则组-{{GLOBALGROUP_SIZE}}-blueviolet)](./dist/README.md#全局规则)
[![应用规则组](https://img.shields.io/badge/应用规则组-{{GROUP_SIZE}}-orange)](./dist/README.md#应用规则)

## 📢声明

- **禁止在国内平台传播**
- **本仓库仅供本人学习使用**
- **精力有限，随缘更新**

## 🚀订阅链接

- CloudFlare源 (链接已对国内优选加速)

```txt
https://gkd.chenge.eu.org/gkd.json5
```

- bgithub源 (国内可用,同步及时30min内,但可能随时挂掉！)

```txt
https://raw.bgithub.xyz/Lin-arm/GKD_subscription/main/dist/gkd.json5
```

- jsdelivr源（滞后12h）:

```txt
https://fastly.jsdelivr.net/gh/cjy0812/Ling033_GKD_Rules@main/dist/gkd.json5
```

- Github源:

```txt
https://github.com/cjy0812/Ling033_GKD_Rules/raw/refs/heads/main/dist/gkd.json5
```

---

## 🌈其他

- 在 [GKD官网](https://gkd.li/) 查看 [GKD基础使用教程](https://gkd.li/guide/) 、[常见问题](https://gkd.li/guide/faq) 以及 [API文档](https://gkd.li/api/)

- 查看 [规则编写教程](https://github.com/Snoopy1866/notebook/blob/main/04%20Others/GKD%20%E8%A7%84%E5%88%99%E7%BC%96%E5%86%99%E6%95%99%E7%A8%8B/gkd-rule-tutorial.md) By [@Snoopy1866](https://github.com/Snoopy1866)

- 本人自用[GKD审查工具Plus版](https://github.com/cjy0812/inspect-plus) 基于原版做出更激进的增强体验与功能修改

- 使用 [GKD网页审查工具增强脚本](https://github.com/adproqwq/MakeGKDInspectBetter) 可以高度自定义从网页复制出来的规则，提高规则编写效率

- 使用 [GKD订阅模板](https://github.com/gkd-kit/subscription-template) 快速构建自己的订阅

- 如何编写订阅/贡献此项目 -> 查看 [贡献指南](https://github.com/Lin-arm/GKD_subscription/blob/main/CONTRIBUTING.md)

## 🎉感谢以下项目

- [gkd-kit/subscription](https://github.com/gkd-kit/subscription)
- [AIsouler/GKD_subscription](https://github.com/AIsouler/GKD_subscription)
- [Lin-arm/GKD_subscription](https://github.com/Lin-arm/GKD_subscription)

## 配置环境

请安装最新版 nodejs 和 pnpm 运行, 以及使用 vscode 打开项目

> [!IMPORTANT]
> 选择器需要使用 nodejs@22 的 WasmGc 来校验 Java/Kotlin 正则表达式, 确保使用 nodejs>=22

- nodejs>=**22** <https://nodejs.org/en/download>
- pnpm>=9 <https://pnpm.io/zh/installation>
- vscode <https://code.visualstudio.com>

安装好后使用模板, 假设您刚刚使用 `Use this template` 创建的仓库是 `https://github.com/username/subscription`

接下来下载并初始化环境

```shell
git clone https://github.com/username/subscription
cd subscription
pnpm install
```

如果因为网络问题安装失败, 将上面的 `pnpm install` 换成下面命令使用 阿里镜像源 重新安装即可

```sh
pnpm install --registry=https://registry.npmmirror.com
```

![image](https://github.com/gkd-kit/gkd/assets/38517192/64f9da9d-8c6b-4a57-8fe8-ef13ef91346a)

至此环境已在 `subscription` 目录下初始化完毕, 使用 vscode 打开目录即可开始开发

接下来下面所有的示例链接都基于 `username/subscription`, 请自行替换后打开

`pnpm install` 用于安装依赖, 如果您的 [./package.json](./package.json) 发生变化, 则需要再次运行 `pnpm install`

---

如果您无法初始化 nodejs 环境, 那可以直接使用 github 网页编辑文件后在线提交, 点击下面链接即可在线编辑

<https://github.com/username/subscription/edit/main/src/subscription.ts>

![image](https://github.com/gkd-kit/gkd/assets/38517192/6a724cd9-b2cd-429d-bf2e-87f2c8b3d566)

## 目录结构

- 订阅详情 [./src/subscription.ts](./src/subscription.ts)
- 全局规则 [./src/globalGroups.ts](./src/globalGroups.ts)
- 规则分类 [./src/categories.ts](./src/categories.ts)
- 应用规则 [./src/apps](./src/apps/)

在 vscode 内使用鼠标悬浮在任意字段上即可查看注释说明, 也可在 <https://gkd.li/api> 搜索查看

![image](https://github.com/gkd-kit/gkd/assets/38517192/35400b43-0d79-4a67-bd4c-6915613488db)

现在您可编辑 [./src](./src/) 下的文件来自定义您的订阅, 构建后的订阅文件处于 [./dist](./dist/) 目录下

另外您必须修改 订阅详情 [./src/subscription.ts](./src/subscription.ts) 下的 id 字段, 否则可能会和其它订阅冲突, 填一个较大的随机数字即可

## 格式修复

我们使用 [prettier](https://github.com/prettier/prettier) 来格式化代码 和 [eslint](https://github.com/eslint/eslint) 来检测并修复代码错误

同时使用 [simple-git-hooks](https://github.com/toplenboren/simple-git-hooks) 在您提交代码时运行格式化和代码检测修复脚本

当您的代码存在错误时, 它会阻止您提交代码并输出具体错误以供您手动修复后再次提交

当提交代码到仓库时, 我们也需要使用 github actions 来帮助自动格式化并修复代码, 因此您需要开启仓库的此项权限

打开 <https://github.com/username/subscription/settings/actions>

然后找到 Workflow permissions 点击 Read and write permissions 然后点击下方的 Save 即可

![image](https://github.com/gkd-kit/gkd/assets/38517192/e3bbefe3-7745-42c7-adc8-3cfe2757c9cf)

## 构建订阅

我们需要将 [./src](./src/) 分散的文件合并为一个 gkd.json5 的最终订阅文件并输出到 [./dist](./dist/) 目录下

推荐使用 github actions 进行构建, 在 [./.github/workflows](./.github/workflows) 下有 3 个工作流

我们使用其中的 `build_release.yml` 构建并发布

打开 <https://github.com/username/subscription/actions/workflows/build_release.yml>

然后点击右侧的 `Run workflow` 即可运行并发布

![image](https://github.com/gkd-kit/gkd/assets/38517192/bbaf5113-8ab3-4be0-9a79-ee7a7389a58c)

构建后订阅将输出到 dist 目录下, gkd.json 的文件订阅地址如下, 复制后到 GKD 添加即可

```txt
https://raw.githubusercontent.com/username/subscription/main/dist/gkd.json5
```

## 镜像加速

raw.githubusercontent.com 在大陆的访问常常无法访问

您可以换成 <https://fastly.jsdelivr.net/gh/username/subscription@main/dist/gkd.json5> 加速访问

如果无法访问 raw.githubusercontent.com 和 fastly.jsdelivr.net, 可以使用 CloudFlare 托管加速访问

## CloudFlare 中国大陆加速访问

  ### 前置条件:
   - 一个 CloudFlare 账号
   - 一个 自定义域名(可选，如果没有用自带也可以，就是没有中国大陆优选加速)
  
  ### 仓库添加`wrangler.toml`
  请在仓库根目录下添加 `wrangler.toml` 文件, 内容如下示例，根据情况修改
  ```toml
  name = "ling033-gkd-rules"          # ← 必须和你在 Cloudflare 创建 Worker 时填的项目名称**完全一致**（小写+连字符）
  compatibility_date = "2026-04-08"
  
  [assets]
  directory = "./dist"               # 关键！指向你的 JSON5 文件所在目录
  # not_found_handling = "404-page"  # 可选，你的订阅文件通常不需要
  ```

  ### 创建Worker
  - 登录 CloudFlare 账号
  - `Worker和Pages` - `创建应用程序`
      <img width="1565" height="733" alt="Image" src="https://github.com/user-attachments/assets/ca10816e-ddc7-4058-b642-892c7ceba7dd" />
  - 选择`Continue with GitHub`
      <img width="912" height="481" alt="Image" src="https://github.com/user-attachments/assets/6a324a4a-e97b-43d0-bdb1-a307921cbf63" />
  - 选择自己的账号`username`在下面选择自己的 `subscription` 仓库, 点击`下一步` 即可创建应用程序
      <img width="943" height="587" alt="Image" src="https://github.com/user-attachments/assets/e87f9a9d-6515-4ad9-8ca9-97792e57b0f6" />
  - 修改项目名称务必和`wrangler.toml`里`name`相同，删掉`构建命令`，注意项目名称`小写`只能使用`-`后点击`部署`。
      <img width="938" height="588" alt="Image" src="https://github.com/user-attachments/assets/739b7c07-3531-4ea9-9a81-71389db9864d" />

  ### Worker设置
  - 禁用`自带域名`没有自定义域名的不要禁用(你需要ta!!!)
      <img width="1034" height="232" alt="Image" src="https://github.com/user-attachments/assets/2910c26e-9421-49f1-8cef-c2cee3c31b63" />
  - 为了防止一提交就构建我们需要现在检测变动构建路径为产物构建我们需要限制构建产物的路径
      <img width="1424" height="842" alt="Image" src="https://github.com/user-attachments/assets/1c53e855-5fe2-4b5b-9e92-5cc63dee85f1" />
  - 到这里没有自定义域名, 就可以使用CF自带域名了，下面不用看了直接看结尾。
   
  ### 大陆优选加速
  有自己域名的可以进行下一步了
  `设置`-`+添加`-`路由`-`区域`选择`自己的域名`-路由填写一个自己喜欢的子域名，自己的根域也不是不行，你开心就好~然后给点击`添加路由`
  <img width="972" height="913" alt="Image" src="https://github.com/user-attachments/assets/0504db01-9ba3-48ed-88f9-efc8140e1243" />

  ### 添加CNAME记录到优选加速域名
  [CM大佬收集的优选加速域名](https://cf.090227.xyz/)
  <img width="1571" height="661" alt="Image" src="https://github.com/user-attachments/assets/da449271-8810-482c-b775-7b502ecfd3cb" />

  ### 结尾
  至此你可以在你的域名后面加上`/gkd.json5`即可访问

## 自定义配置文件

注意: **大多数情况下, 你不需要自定义, 使用默认配置时, 下面此节教程无需了解**

你可以在 [./package.json](./package.json) 下添加 gkd 属性配置自定义构建选项

```json
{
  "gkd": {
    "outDir": "dist",
    "file": "gkd.json5",
    "versionFile": "gkd.version.json5",
    "changelog": "CHANGELOG.md",
    "README.md": "README.md"
  }
}
```

这个 gkd 属性的类型如下

```ts
/**
 * @default package.json.gkd
 */
type GkdConfig = {
    /**
     * @default 'dist'
     */
    outDir?: string;
    /**
     * @default 'gkd.json5'
     */
    file?: string;
    /**
     * @default 'gkd.version.json5'
     */
    versionFile?: string;
    /**
     * @default 'CHANGELOG.md'
     */
    changelog?: string;
    /**
     * @default 'README.md'
     */
    readme?: string;
};
```

如果不想写配置文件, 也可以将这个参数直接传递给 `@gkd-kit/tools` 的 `updateDist` 函数

手动传递参数的时候, 你必须显式将路径(非文件名)参数传递给 [./.github/workflows/build_release.yml](./.github/workflows/build_release.yml) 下的 `updatePkgVersion` 和 `stdoutGkdVersion` 函数
