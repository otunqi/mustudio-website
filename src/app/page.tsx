'use client'

import { useState } from 'react'
import { Menu, X, Play, Headphones, Music, Mic, Disc, Mail, Phone, MapPin, ChevronRight, Star } from 'lucide-react'

// 导航
function Header() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-zinc-800">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">沐</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-white">沐Studio音乐</h1>
            <p className="text-xs text-zinc-500">MUSIC PRODUCTION</p>
          </div>
        </div>
        <div className="hidden md:flex gap-8">
          {['首页', '服务', '作品', '关于', '联系'].map(item => (
            <a key={item} href="#" className="text-zinc-400 hover:text-white transition-colors text-sm tracking-wide">{item}</a>
          ))}
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-black/95 border-t border-zinc-800 p-4">
          {['首页', '服务', '作品', '关于', '联系'].map(item => (
            <a key={item} href="#" className="block py-3 text-zinc-400 hover:text-white">{item}</a>
          ))}
        </div>
      )}
    </header>
  )
}

// 首屏
function Hero() {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-black to-black"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/80 border border-zinc-800 rounded-full mb-8">
          <Disc className="w-4 h-4 text-amber-500" />
          <span className="text-zinc-400 text-sm">词曲 · 编曲 · 录音 · 混音</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          沐<span className="text-amber-500">Studio</span>音乐
        </h1>
        
        <p className="text-xl text-zinc-400 mb-4 max-w-2xl mx-auto leading-relaxed">
          用声音讲述故事，用音乐传递情感
        </p>
        <p className="text-base text-zinc-600 mb-12">
          专注声音制作，为每一位创作者打造专属的音乐作品
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-lg transition-all flex items-center justify-center gap-2">
            <Play className="w-5 h-5" /> 预约咨询
          </button>
          <button className="px-8 py-4 border border-zinc-700 hover:border-zinc-500 text-white font-semibold rounded-lg transition-all">
            了解服务
          </button>
        </div>
      </div>
    </section>
  )
}

// 服务
function Services() {
  const services = [
    { icon: Music, title: '词曲创作', desc: '根据你的想法，创作独一无二的歌词与旋律', detail: '从灵感到成品，全程专业指导' },
    { icon: Headphones, title: '编曲制作', desc: '将你的音乐编排成专业级别的作品', detail: '多种风格，精湛技艺' },
    { icon: Mic, title: '录音混音', desc: '专业录音棚，高保真录制与混音', detail: '设备顶级，环境专业' },
    { icon: Disc, title: '母带处理', desc: '让作品在各大平台呈现最佳状态', detail: '行业标准，音质保证' },
  ]
  
  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">我们的服务</h2>
          <div className="w-12 h-0.5 bg-amber-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, i) => (
            <div key={i} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-all group">
              <div className="w-12 h-12 bg-zinc-800 group-hover:bg-amber-500/10 rounded-xl flex items-center justify-center mb-5 transition-colors">
                <item.icon className="w-6 h-6 text-zinc-400 group-hover:text-amber-500 transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-zinc-400 text-sm mb-3">{item.desc}</p>
              <p className="text-zinc-600 text-xs">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// 作品
function Portfolio() {
  const works = [
    { title: '城市夜空', type: '原创', genre: '流行' },
    { title: '时光漫步', type: '编曲', genre: '民谣' },
    { title: '追光者', type: '词曲', genre: '摇滚' },
    { title: '午后咖啡', type: '混音', genre: '爵士' },
  ]
  
  return (
    <section className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">精选作品</h2>
          <div className="w-12 h-0.5 bg-amber-500 mx-auto mb-4"></div>
          <p className="text-zinc-500">每一个作品，都是一次用心的创作</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {works.map((work, i) => (
            <div key={i} className="group relative aspect-square bg-zinc-900 rounded-xl overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4">
                <span className="text-xs text-amber-500">{work.type} · {work.genre}</span>
                <h3 className="text-white font-medium">{work.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// 关于
function About() {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">关于沐Studio</h2>
            <div className="w-12 h-0.5 bg-amber-500 mb-8"></div>
            <p className="text-zinc-400 leading-relaxed mb-6">
              沐Studio音乐工作室成立于2018年，专注为独立音乐人、歌手、企业客户提供高品质的音乐制作服务。
            </p>
            <p className="text-zinc-400 leading-relaxed mb-8">
              我们相信每一个声音都值得被认真对待。从最初的灵感到最终的母带，我们的团队会用专业和热情，将你的音乐梦想变为现实。
            </p>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-500">200+</div>
                <div className="text-zinc-500 text-sm">完成作品</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-500">50+</div>
                <div className="text-zinc-500 text-sm">合作艺人</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-500">6+</div>
                <div className="text-zinc-500 text-sm">年经验</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video bg-zinc-900 rounded-2xl flex items-center justify-center border border-zinc-800">
              <div className="text-center">
                <Mic className="w-16 h-16 text-zinc-700 mx-auto mb-4" />
                <p className="text-zinc-600">专业录音棚环境</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-amber-500/10 rounded-xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

// 联系
function Contact() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">联系我们</h2>
          <div className="w-12 h-0.5 bg-amber-500 mx-auto mb-4"></div>
          <p className="text-zinc-500">准备好开始你的音乐之旅了吗？</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 text-center">
            <Phone className="w-8 h-8 text-amber-500 mx-auto mb-4" />
            <h3 className="text-white font-medium mb-2">电话</h3>
            <p className="text-zinc-400 text-sm">138-0000-0000</p>
          </div>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 text-center">
            <Mail className="w-8 h-8 text-amber-500 mx-auto mb-4" />
            <h3 className="text-white font-medium mb-2">邮箱</h3>
            <p className="text-zinc-400 text-sm">hello@mustudio.com</p>
          </div>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 text-center">
            <MapPin className="w-8 h-8 text-amber-500 mx-auto mb-4" />
            <h3 className="text-white font-medium mb-2">地址</h3>
            <p className="text-zinc-400 text-sm">北京市朝阳区</p>
          </div>
        </div>
        
        <div className="max-w-xl mx-auto">
          <form className="space-y-4">
            <input type="text" placeholder="你的名字" className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500 transition-colors" />
            <input type="email" placeholder="电子邮箱" className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500 transition-colors" />
            <textarea placeholder="说点什么..." rows={4} className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500 transition-colors resize-none"></textarea>
            <button type="submit" className="w-full py-4 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-lg transition-colors flex items-center justify-center gap-2">
              发送消息 <ChevronRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

// 页脚
function Footer() {
  return (
    <footer className="py-8 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">沐</span>
          </div>
          <span className="text-white font-medium">沐Studio音乐</span>
        </div>
        <p className="text-zinc-600 text-sm">© 2024 沐Studio音乐. 用心制作每一个音符.</p>
      </div>
    </footer>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
