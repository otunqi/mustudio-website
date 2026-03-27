'use client'

import { ArrowRight, Music, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
                <Zap size={16} className="text-primary" />
                <span className="text-sm text-primary">专业音乐制作工作室</span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-4">
                <span className="gradient-text">沐Studio音乐</span>
                <br />
                <span className="text-white">让音乐梦想成真</span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed">
                从词曲创作到混音母带，我们提供全方位的专业音乐制作服务。拥有业界顶尖的设备和经验丰富的团队，为您的音乐作品保驾护航。
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-smooth flex items-center justify-center gap-2">
                立即预约
                <ArrowRight size={20} />
              </button>
              <button className="px-8 py-4 border border-white/20 rounded-lg text-white font-semibold hover:bg-white/10 transition-smooth">
                了解更多
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div>
                <p className="text-3xl font-bold gradient-text">500+</p>
                <p className="text-gray-400 text-sm">完成作品</p>
              </div>
              <div>
                <p className="text-3xl font-bold gradient-text">200+</p>
                <p className="text-gray-400 text-sm">合作艺人</p>
              </div>
              <div>
                <p className="text-3xl font-bold gradient-text">10+</p>
                <p className="text-gray-400 text-sm">工作年限</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-96 md:h-full min-h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-3xl"></div>
            <div className="relative h-full glass rounded-2xl p-8 flex flex-col items-center justify-center">
              <div className="space-y-6 w-full">
                {/* Animated Music Bars */}
                <div className="flex items-end justify-center gap-2 h-32">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="w-2 bg-gradient-to-t from-primary to-secondary rounded-full wave-bar"
                      style={{
                        height: `${20 + Math.random() * 40}px`,
                        animationDelay: `${i * 0.05}s`,
                      }}
                    ></div>
                  ))}
                </div>

                <div className="text-center">
                  <Music className="mx-auto text-primary mb-4" size={48} />
                  <p className="text-gray-300 font-semibold">专业音乐制作</p>
                  <p className="text-gray-400 text-sm">高保真录音 · 专业混音 · 完整制作</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
