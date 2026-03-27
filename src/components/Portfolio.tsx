'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const portfolioItems = [
  {
    id: 1,
    title: '《梦想之光》',
    artist: '原创音乐',
    category: '词曲创作',
    description: '一首充满希望的原创歌曲，融合了现代流行和传统民族元素。',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop',
  },
  {
    id: 2,
    title: '《城市夜景》',
    artist: '编曲制作',
    category: '编曲',
    description: '为独立音乐人打造的专业编曲，展现城市的繁华与孤独。',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=500&fit=crop',
  },
  {
    id: 3,
    title: '《心声》',
    artist: '录音混音',
    category: '混音',
    description: '高保真录音和专业混音，让每一个音符都清晰可闻。',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&h=500&fit=crop',
  },
  {
    id: 4,
    title: '《未来序曲》',
    artist: '完整制作',
    category: '全流程',
    description: '从创意到成品的完整制作案例，展现专业工作流程。',
    image: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=500&h=500&fit=crop',
  },
]

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolioItems.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length)
  }

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">
            作品展示
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            精选我们的优秀作品，展现专业制作水准
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className={`glass rounded-xl overflow-hidden transition-smooth cursor-pointer ${
                index === currentIndex ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-4">
                <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold mt-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.artist}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Item */}
        <div className="glass rounded-xl overflow-hidden p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img
                src={portfolioItems[currentIndex].image}
                alt={portfolioItems[currentIndex].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="text-sm bg-primary/20 text-primary px-4 py-2 rounded-full inline-block">
                {portfolioItems[currentIndex].category}
              </span>
              <h3 className="text-3xl font-bold mt-4 mb-2">
                {portfolioItems[currentIndex].title}
              </h3>
              <p className="text-gray-400 mb-4">{portfolioItems[currentIndex].artist}</p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {portfolioItems[currentIndex].description}
              </p>
              <div className="flex gap-4">
                <button
                  onClick={prev}
                  className="p-3 bg-primary/20 hover:bg-primary/40 rounded-lg transition-smooth"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={next}
                  className="p-3 bg-primary/20 hover:bg-primary/40 rounded-lg transition-smooth"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
