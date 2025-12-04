import { Home, Info, CreditCard, Mail, type LucideIcon } from 'lucide-react'

export interface NavItem {
  href: string
  label: string
  icon?: LucideIcon
  disabled?: boolean
  external?: boolean
}

// 메인 네비게이션
export const mainNav: NavItem[] = [
  { href: '/', label: '홈', icon: Home },
  { href: '/about', label: '소개', icon: Info },
  { href: '/pricing', label: '가격', icon: CreditCard },
  { href: '/contact', label: '문의', icon: Mail },
]

// 푸터 링크
export const footerLinks = {
  product: [
    { href: '/features', label: '기능' },
    { href: '/pricing', label: '가격' },
    { href: '/docs', label: '문서' },
  ],
  company: [
    { href: '/about', label: '회사 소개' },
    { href: '/blog', label: '블로그' },
    { href: '/careers', label: '채용' },
  ],
  legal: [
    { href: '/privacy', label: '개인정보처리방침' },
    { href: '/terms', label: '이용약관' },
  ],
}

export type FooterLinks = typeof footerLinks
