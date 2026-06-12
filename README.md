# 淘股吧摸鱼 🎣

> 一个简洁优雅的 Chrome 浏览器插件，让你在淘股吧安心摸鱼，老板看不出来！

## ✨ 功能特性

- 🚫 **隐藏导航栏** - 移除顶部导航栏，清爽视野
- 🚫 **隐藏标题栏** - 隐藏网页头部，简化界面
- 🚫 **隐藏侧边栏** - 去除左右两侧栏目，扩展内容区域
- 👻 **透明化图片** - 图片透明度设为 50%，不那么显眼
- 📉 **缩小图片** - 图片尺寸缩小至 60%，更加隐蔽

## 🚀 快速开始

### 安装步骤

1. **下载项目文件**
   ```bash
   git clone https://github.com/onestraw/tgbfish.git
   ```

2. **打开 Chrome 扩展程序页面**
   - 在地址栏输入：`chrome://extensions/`
   - 或通过菜单：☰ → 更多工具 → 扩展程序

3. **启��开发者模式**
   - 点击右上角的 **「开发者模式」** 开关

4. **加载未打包的扩展程序**
   - 点击 **「加载已解压的扩展程序」**
   - 选择包含本项目文件的文件夹

5. **完成！** ✅
   - 访问 www.tgb.cn 即可看到效果

## 📁 项目结构

```
tgbfish/
├── manifest.json      # 扩展程序配置文件
├── content.js         # 核心脚本，负责页面修改
├── popup.html         # 扩展图标弹窗页面
├── popup.css          # 弹窗样式
├── popup.js           # 弹窗交互逻辑
└── README.md          # 本文件
```

## ⚙️ 工作原理

### content.js
- 自动隐藏常见的导航栏、标题栏、侧边栏元素
- 为隐藏侧边栏后的主内容区自动扩展宽度
- 为所有图片添加透明度和缩小效果
- 使用 MutationObserver 监听 DOM 变化
- 定时检查新加载的内容，确保效果持续有效

### popup.html/css/js
- 提供友好的扩展程序弹窗界面
- 支持启用/禁用插件的快速切换
- 显示已启用的功能列表

## 🎯 使用方法

### 正常使用
1. 访问 www.tgb.cn
2. 插件会自动运行，隐藏导航栏、侧边栏等
3. 图片会自动变透明和缩小
4. 尽情摸鱼！😎

### 快速切换
- 点击 Chrome 工具栏上的扩展程序图标
- 弹窗中勾选/取消 **「启用插件」** 即可快速开关

## 🔧 自定义

### 修改隐藏选择器
编辑 `content.js` 中的 `SELECTORS_TO_HIDE` 数组：
```javascript
const SELECTORS_TO_HIDE = [
  'header',
  'nav',
  '.navbar',
  // ... 添加更多选择器
];
```

### 调整图片透明度
在 `content.js` 中修改 `processImages()` 函数：
```javascript
img.style.opacity = '0.5';  // 改为 0.3 更透明，0.8 更清晰
```

### 调整图片缩小比例
在 `content.js` 中修改 `processImages()` 函数：
```javascript
img.style.maxWidth = '60%';   // 改为其他百分比
img.style.maxHeight = '60%';
```

## ⚠️ 免责声明

本扩展程序仅供学习和娱乐目的使用。请遵守公司的工作政策，在工作时间内合理使用。

**摸鱼要适度，工作要认真！** 💼

## 📝 更新日志

### v1.0.0 (2026-06-12)
- ✨ 初始版本发布
- 🎨 实现核心功能：隐藏栏目、透明化缩小图片
- 🎯 提供友好的弹窗界面

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

有想法或发现 bug？请随时：
- [提交 Issue](https://github.com/onestraw/tgbfish/issues)
- [创建 Pull Request](https://github.com/onestraw/tgbfish/pulls)

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 🎉 致谢

感谢所有使用和支持本项目的朋友！

---

**祝你摸鱼愉快！** 🎣✨

*最后更新：2026-06-12*
