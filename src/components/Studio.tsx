'use client'

import { Music, Users, Award, Zap } from 'lucide-react'

const stats = [
  { icon: Music, label: '完成作品', value: '500+' },
  { icon: Users, label: '合作艺人', value: '200+' },
  { icon: Award, label: '获奖项目', value: '50+' },
  { icon: Zap, label: '工作年限', value: '10+' },
]

const studioFeatures = [
  {
    title: '专业录音棚',
    description: '配备国际一流的录音设备，隔音效果达到专业标准，为您提供最佳录音环境。',
  },
  {
    title: '高端制作设备',
    description: '拥有最新的音乐制作工作站和专业监听系统，确保音质达到国际水准。',
  },
  {
    title: '经验丰富的团队',
    description: '汇聚业界顶尖的音乐制作人、混音师和录音师，为您的作品保驾护航。',
  },
  {
    title: '完整的服务流程',
    description: '从创意策划到最终成品，提供一站式的专业音乐制作服务。',
  },
]

export default function Studio() {
  return (
    <section id="studio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="glass rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-white" size={24} />
                </div>
                <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
                <p className="text-3xl font-bold gradient-text">{stat.value}</p>
              </div>
            )
          })}
        </div>

        {/* Studio Features */}
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text text-center">
            工作室优势
          </h2>
          <p className="text-gray-400 text-lg text-center max-w-2xl mx-auto mb-12">
            沐Studio拥有业界领先的设备和专业团队
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {studioFeatures.map((feature, index) => (
              <div key={index} className="glass rounded-xl p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                  <Music className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Studio Gallery */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 gradient-text text-center">
            工作室环境
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="glass rounded-xl overflow-hidden h-64 group cursor-pointer"
              >
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20 transition-smooth"></div>
                  <Music className="text-primary/50 group-hover:text-primary/80 transition-smooth" size={48} />
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-4">
            点击上传您的工作室照片到这些位置
          </p>
        </div>
      </div>
    </section>
  )
}
