import type { Metadata } from 'next'
import { ReactNode } from 'react'
import '../globals.css'

export const metadata: Metadata = {
  title: '沐Studio音乐 - 专业音乐制作工作室',
  description: '沐Studio音乐是一家专业的音乐制作工作室，提供词曲创作、编曲、录音混音等全方位的音乐制作服务。',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}
