'use client'

import { Music } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Music className="text-white" size={20} />
              </div>
              <span className="font-bold gradient-text">沐Studio音乐</span>
            </div>
            <p className="text-gray-400 text-sm">
              专业的音乐制作工作室，为您的音乐梦想保驾护航。
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">服务</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#services" className="hover:text-primary transition-smooth">词曲创作</a></li>
              <li><a href="#services" className="hover:text-primary transition-smooth">编曲制作</a></li>
              <li><a href="#services" className="hover:text-primary transition-smooth">录音服务</a></li>
              <li><a href="#services" className="hover:text-primary transition-smooth">混音母带</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">关于</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#studio" className="hover:text-primary transition-smooth">工作室介绍</a></li>
              <li><a href="#portfolio" className="hover:text-primary transition-smooth">作品展示</a></li>
              <li><a href="#contact" className="hover:text-primary transition-smooth">联系我们</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">社交媒体</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-primary transition-smooth">微博</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">抖音</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">微信</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} 沐Studio音乐. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
