# 🎵 沐Studio音乐 - 网站使用指南

## 项目概览

这是一个为"沐Studio音乐"工作室设计的专业网站，采用现代化的设计风格和交互体验。

## 📂 项目位置

```
C:\Users\Administrator\.qclaw\workspace\mu-studio-website\
```

## 🎯 核心功能

### 1. 首页 (Hero Section)
- 工作室品牌展示
- 核心优势介绍
- 关键数据统计
- 音乐波形动画效果

### 2. 服务介绍 (Services)
- **词曲创作** - 原创歌词和旋律编写
- **编曲制作** - 专业的音乐编排
- **录音服务** - 高保真录音棚
- **混音母带** - 专业混音和母带制作

### 3. 作品展示 (Portfolio)
- 作品集网格展示
- 作品详情轮播
- 分类筛选功能
- 高清图片展示

### 4. 工作室介绍 (Studio)
- 工作室统计数据
- 核心优势说明
- 工作室环境展示
- 设备和团队介绍

### 5. 联系表单 (Contact)
- 预约咨询表单
- 多种联系方式
- 表单验证
- 提交反馈

### 6. 导航和页脚
- 固定导航栏
- 移动端菜单
- 社交媒体链接
- 快速导航

## 🎨 设计特点

### 配色方案
- **主色紫色**: #8B5CF6 - 代表创意和专业
- **辅色粉色**: #EC4899 - 增加活力
- **深色背景**: #0F172A - 突出内容

### 动画效果
- 音乐波形动画
- 平滑过渡效果
- 悬停交互
- 浮动效果

### 响应式设计
- 桌面版 (1024px+)
- 平板版 (768px-1023px)
- 移动版 (< 768px)

## 🔧 自定义指南

### 修改工作室信息

**1. 修改联系方式** (`src/components/Contact.tsx`)
```tsx
<p className="text-gray-400">+86 138 0000 0000</p>  // 修改电话
<p className="text-gray-400">info@mustudio.com</p>   // 修改邮箱
<p className="text-gray-400">北京市朝阳区</p>       // 修改地址
```

**2. 修改统计数据** (`src/components/Studio.tsx`)
```tsx
const stats = [
  { icon: Music, label: '完成作品', value: '500+' },
  // 修改这里的数据
]
```

**3. 修改服务内容** (`src/components/Services.tsx`)
```tsx
const services = [
  {
    title: '词曲创作',
    description: '...',
    features: ['...', '...']
  }
  // 添加或修改服务
]
```

### 添加作品

在 `src/components/Portfolio.tsx` 中修改 `portfolioItems` 数组：

```tsx
const portfolioItems = [
  {
    id: 1,
    title: '作品名称',
    artist: '艺人名称',
    category: '分类',
    description: '作品描述',
    image: 'https://image-url.jpg',
  },
  // 添加更多作品
]
```

### 上传图片

1. 在项目根目录创建 `public/images/` 文件夹
2. 将图片放入该文件夹
3. 在组件中引用：
```tsx
<img src="/images/your-image.jpg" alt="描述" />
```

### 修改颜色主题

编辑 `tailwind.config.ts`：

```ts
theme: {
  extend: {
    colors: {
      primary: '#8B5CF6',      // 修改主色
      secondary: '#EC4899',    // 修改辅色
      dark: '#0F172A',         // 修改背景色
    },
  },
}
```

## 🚀 开发和部署

### 本地开发

```bash
# 进入项目目录
cd C:\Users\Administrator\.qclaw\workspace\mu-studio-website

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 访问 http://localhost:3000
```

### 生产构建

```bash
# 构建项目
npm run build

# 启动生产服务器
npm start
```

### 部署到 Vercel (推荐)

```bash
# 全局安装 Vercel CLI
npm install -g vercel

# 部署
vercel
```

### 部署到其他平台

- **Netlify**: 连接 GitHub 仓库，自动部署
- **自托管**: 使用 `npm run build && npm start`

## 📧 表单提交配置

### 方案 1: Formspree (简单)

1. 访问 https://formspree.io
2. 创建新表单，获取 form ID
3. 修改 `src/components/Contact.tsx`：

```tsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  // 表单内容
</form>
```

### 方案 2: EmailJS (推荐)

1. 注册 https://www.emailjs.com
2. 获取 Service ID 和 Template ID
3. 在 `src/components/Contact.tsx` 中集成

### 方案 3: 自建后端

创建 API 路由 `src/app/api/contact/route.ts`：

```ts
export async function POST(request: Request) {
  const data = await request.json()
  // 处理表单数据
  return Response.json({ success: true })
}
```

## 🔍 SEO 优化

### 修改元数据

编辑 `src/app/page.tsx`：

```tsx
export const metadata: Metadata = {
  title: '沐Studio音乐 - 专业音乐制作工作室',
  description: '...',
  keywords: '...',
}
```

### 添加 Open Graph 标签

在 `src/app/layout.tsx` 中添加：

```tsx
<meta property="og:title" content="沐Studio音乐" />
<meta property="og:description" content="..." />
<meta property="og:image" content="..." />
```

## 📱 移动端优化

网站已完全响应式设计，支持：
- 手机 (320px+)
- 平板 (768px+)
- 桌面 (1024px+)

## 🎯 下一步建议

1. **上传真实图片** - 替换占位符图片
2. **配置表单提交** - 选择合适的表单方案
3. **添加分析** - 集成 Google Analytics
4. **SEO 优化** - 优化关键词和元数据
5. **性能优化** - 压缩图片，优化加载速度
6. **域名配置** - 购买并配置自定义域名
7. **SSL 证书** - 配置 HTTPS

## 📞 技术支持

如有问题，请查看：
- README.md - 项目概览
- DEPLOYMENT.md - 部署指南
- 代码注释 - 详细的代码说明

## 🎉 完成！

您的音乐工作室网站已准备就绪！现在可以：
1. 自定义内容和图片
2. 配置表单提交
3. 部署到线上
4. 分享给客户和合作伙伴

祝您的音乐工作室生意兴隆！🎵
