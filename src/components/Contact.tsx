'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 这里可以添加实际的表单提交逻辑
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">
            联系我们
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            有任何问题或想要了解更多？欢迎随时与我们联系
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="glass rounded-xl p-8 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
              <Phone className="text-white" size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2">电话</h3>
            <p className="text-gray-400">+86 138 0000 0000</p>
          </div>

          <div className="glass rounded-xl p-8 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
              <Mail className="text-white" size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2">邮箱</h3>
            <p className="text-gray-400">info@mustudio.com</p>
          </div>

          <div className="glass rounded-xl p-8 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-white" size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2">地址</h3>
            <p className="text-gray-400">北京市朝阳区</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="glass rounded-xl p-8 max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">姓名</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-primary transition-smooth text-white placeholder-gray-500"
                  placeholder="您的姓名"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">邮箱</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-primary transition-smooth text-white placeholder-gray-500"
                  placeholder="您的邮箱"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">电话</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-primary transition-smooth text-white placeholder-gray-500"
                  placeholder="您的电话"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">服务类型</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-primary transition-smooth text-white"
                >
                  <option value="">选择服务</option>
                  <option value="songwriting">词曲创作</option>
                  <option value="arrangement">编曲制作</option>
                  <option value="recording">录音服务</option>
                  <option value="mixing">混音母带</option>
                  <option value="other">其他</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">留言</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-primary transition-smooth text-white placeholder-gray-500 resize-none"
                placeholder="请告诉我们您的需求..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-smooth flex items-center justify-center gap-2"
            >
              <Send size={20} />
              发送消息
            </button>

            {submitted && (
              <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-center">
                ✓ 消息已发送，我们会尽快与您联系！
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
