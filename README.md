# 沐Studio音乐 - 官方网站

一个现代、专业的音乐制作工作室网站，采用 Next.js 14 + TypeScript + Tailwind CSS 构建。

## 🎵 功能特性

- **响应式设计** - 完美适配桌面、平板和移动设备
- **现代UI设计** - 采用玻璃态效果和渐变色彩
- **动画效果** - 流畅的过渡和交互动画
- **完整页面**
  - 首页 (Hero + 统计数据)
  - 服务介绍 (词曲创作、编曲、录音、混音)
  - 作品展示 (作品集和详情展示)
  - 工作室介绍 (优势、环境、统计)
  - 联系表单 (预约咨询)

## 🚀 快速开始

### 安装依赖
```bash
npm install
```

### 开发模式
```bash
npm run dev
```

访问 http://localhost:3000

### 生产构建
```bash
npm run build
npm start
```

## 📁 项目结构

```
mu-studio-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # 根布局
│   │   ├── page.tsx        # 首页
│   │   └── globals.css     # 全局样式
│   └── components/
│       ├── Header.tsx      # 导航栏
│       ├── Hero.tsx        # 首屏
│       ├── Services.tsx    # 服务介绍
│       ├── Portfolio.tsx   # 作品展示
│       ├── Studio.tsx      # 工作室介绍
│       ├── Contact.tsx     # 联系表单
│       └── Footer.tsx      # 页脚
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── postcss.config.js
```

## 🎨 设计特点

- **配色方案**
  - 主色: 紫色 (#8B5CF6)
  - 辅色: 粉色 (#EC4899)
  - 背景: 深蓝色 (#0F172A)

- **动画效果**
  - 音乐波形动画
  - 浮动效果
  - 平滑过渡

## 📝 自定义

### 修改工作室信息
编辑各个组件中的文本内容和联系方式

### 添加作品
在 `Portfolio.tsx` 中修改 `portfolioItems` 数组

### 上传图片
将工作室照片放在 `public/` 目录中，然后在组件中引用

## 🔧 技术栈

- **框架**: Next.js 14
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **图标**: Lucide React
- **动画**: Framer Motion (可选)

## 📞 联系方式

- 电话: +86 138 0000 0000
- 邮箱: info@mustudio.com
- 地址: 北京市朝阳区

## 📄 许可证

MIT License
