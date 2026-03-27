# 🎵 沐Studio音乐 - 快速参考

## 📂 项目位置
```
C:\Users\Administrator\.qclaw\workspace\mu-studio-website\
```

## 🚀 快速命令

```bash
# 进入项目
cd C:\Users\Administrator\.qclaw\workspace\mu-studio-website

# 安装依赖
npm install

# 开发模式 (http://localhost:3000)
npm run dev

# 生产构建
npm run build

# 启动生产服务器
npm start

# 部署到 Vercel
vercel
```

## 📁 关键文件位置

| 文件 | 位置 | 用途 |
|------|------|------|
| 首页 | `src/app/page.tsx` | 主页面 |
| 导航栏 | `src/components/Header.tsx` | 顶部导航 |
| 首屏 | `src/components/Hero.tsx` | 品牌展示 |
| 服务 | `src/components/Services.tsx` | 服务介绍 |
| 作品 | `src/components/Portfolio.tsx` | 作品展示 |
| 工作室 | `src/components/Studio.tsx` | 工作室信息 |
| 联系 | `src/components/Contact.tsx` | 联系表单 |
| 页脚 | `src/components/Footer.tsx` | 页脚 |
| 样式 | `src/globals.css` | 全局样式 |
| 配置 | `tailwind.config.ts` | Tailwind 配置 |

## 🎨 快速修改

### 修改联系方式
**文件**: `src/components/Contact.tsx`
```tsx
// 电话
<p className="text-gray-400">+86 138 0000 0000</p>

// 邮箱
<p className="text-gray-400">info@mustudio.com</p>

// 地址
<p className="text-gray-400">北京市朝阳区</p>
```

### 修改颜色主题
**文件**: `tailwind.config.ts`
```ts
colors: {
  primary: '#8B5CF6',      // 主色 (紫色)
  secondary: '#EC4899',    // 辅色 (粉色)
  dark: '#0F172A',         // 背景 (深蓝)
}
```

### 修改工作室名称
**文件**: `src/components/Header.tsx`
```tsx
<h1 className="text-xl font-bold gradient-text">沐Studio音乐</h1>
```

### 添加作品
**文件**: `src/components/Portfolio.tsx`
```tsx
const portfolioItems = [
  {
    id: 1,
    title: '作品名称',
    artist: '艺人名称',
    category: '分类',
    description: '描述',
    image: 'https://image-url.jpg',
  },
]
```

## 📊 页面结构

```
首页 (/)
├── Header (导航栏)
├── Hero (首屏)
├── Services (服务介绍)
├── Portfolio (作品展示)
├── Studio (工作室介绍)
├── Contact (联系表单)
└── Footer (页脚)
```

## 🎯 常见任务

### 上传图片
1. 创建 `public/images/` 文件夹
2. 放入图片文件
3. 在组件中引用: `<img src="/images/name.jpg" />`

### 配置表单提交
1. 选择方案 (Formspree / EmailJS / 自建)
2. 获取 API 密钥
3. 在 `Contact.tsx` 中集成

### 部署到线上
```bash
# Vercel (推荐)
npm install -g vercel
vercel

# Netlify
netlify deploy

# 自托管
npm run build && npm start
```

## 🔗 重要链接

- **Next.js 文档**: https://nextjs.org
- **Tailwind CSS**: https://tailwindcss.com
- **Lucide 图标**: https://lucide.dev
- **Vercel 部署**: https://vercel.com
- **Netlify 部署**: https://netlify.com

## 📚 文档

- `README.md` - 项目概览
- `GUIDE.md` - 详细使用指南
- `DEPLOYMENT.md` - 部署指南
- `PROJECT_SUMMARY.md` - 项目总结

## 💡 提示

- 所有组件都是 React 函数组件
- 使用 Tailwind CSS 进行样式设计
- 响应式设计已内置
- 所有代码都有注释说明
- 可直接修改和扩展

## 🎉 下一步

1. ✅ 安装依赖: `npm install`
2. ✅ 启动开发: `npm run dev`
3. ✅ 自定义内容
4. ✅ 上传图片
5. ✅ 配置表单
6. ✅ 部署上线

---

**项目状态**: ✅ 完成并可部署
**最后更新**: 2026-03-28
