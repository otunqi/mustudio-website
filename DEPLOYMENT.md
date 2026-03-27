# 沐Studio音乐 - 网站部署指南

## 📋 部署前检查清单

- [ ] 修改联系方式（电话、邮箱、地址）
- [ ] 上传工作室照片到 `public/images/` 目录
- [ ] 更新作品集信息
- [ ] 配置表单提交后端
- [ ] 添加社交媒体链接
- [ ] 配置域名和 SSL 证书

## 🚀 部署选项

### 1. Vercel (推荐)
```bash
npm install -g vercel
vercel
```

### 2. Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

### 3. 自托管 (VPS)
```bash
npm run build
npm start
```

## 🔧 环境配置

创建 `.env.local` 文件：
```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_CONTACT_EMAIL=info@mustudio.com
```

## 📧 表单提交配置

### 使用 Formspree
1. 访问 https://formspree.io
2. 创建新表单
3. 在 `Contact.tsx` 中更新表单 action

### 使用 EmailJS
1. 注册 https://www.emailjs.com
2. 获取 Service ID 和 Template ID
3. 在 `Contact.tsx` 中集成

## 🖼️ 图片优化

将您的工作室照片放在 `public/images/` 目录：
```
public/
├── images/
│   ├── studio-1.jpg
│   ├── studio-2.jpg
│   ├── portfolio-1.jpg
│   └── ...
```

然后在组件中引用：
```tsx
<img src="/images/studio-1.jpg" alt="工作室" />
```

## 📱 SEO 优化

- 修改 `src/app/page.tsx` 中的 metadata
- 添加 Open Graph 标签
- 配置 robots.txt 和 sitemap.xml

## 🔐 安全建议

- 使用 HTTPS
- 配置 CORS
- 验证表单数据
- 隐藏敏感信息

## 📊 性能优化

- 图片压缩和懒加载
- 代码分割
- 缓存策略
- CDN 配置

## 🆘 常见问题

**Q: 如何修改颜色？**
A: 编辑 `tailwind.config.ts` 中的 colors 配置

**Q: 如何添加更多页面？**
A: 在 `src/app/` 中创建新的路由文件夹

**Q: 如何集成分析？**
A: 添加 Google Analytics 或其他分析工具的脚本

## 📞 技术支持

如有问题，请联系开发团队。
