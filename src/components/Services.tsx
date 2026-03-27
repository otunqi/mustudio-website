'use client'

import { Music, Mic2, Headphones, Zap } from 'lucide-react'

const services = [
  {
    icon: Music,
    title: '词曲创作',
    description: '专业的词曲创作团队，为您打造独特的音乐作品，从概念到成品的全程指导。',
    features: ['原创歌词', '旋律编写', '风格定制', '修改打磨']
  },
  {
    icon: Headphones,
    title: '编曲制作',
    description: '运用最新的音乐制作技术，将您的想法转化为专业级的音乐编排。',
    features: ['编排设计', '乐器选择', '混音初稿', '效果处理']
  },
  {
    icon: Mic2,
    title: '录音服务',
    description: '配备专业录音设备和隔音棚，为您提供高保真的录音体验。',
    features: ['专业录音棚', '高保真录制', '多轨录音', '实时监听']
  },
  {
    icon: Zap,
    title: '混音母带',
    description: '经验丰富的混音师团队，让您的作品在各个平台都能完美呈现。',
    features: ['混音处理', '母带制作', '音质优化', '格式转换']
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">
            我们的服务
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            从创意到成品，沐Studio为您提供全方位的音乐制作解决方案
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="glass rounded-xl p-6 hover:shadow-lg hover:shadow-primary/20 transition-smooth group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-sm text-gray-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
