'use client'

import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/molecules/theme-toggle'
import { MobileNav } from './mobile-nav'
import { useSidebarStore } from '@/stores/use-sidebar-store'
import { mainNav } from '@/config/navigation'
import { siteConfig } from '@/config/site'

export function Header() {
  const { setIsOpen } = useSidebarStore()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* 로고 */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">{siteConfig.name}</span>
        </Link>

        {/* 데스크톱 네비게이션 */}
        <nav className="hidden md:flex md:items-center md:gap-6">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* 우측 액션 */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* 모바일 메뉴 버튼 */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">메뉴 열기</span>
          </Button>
        </div>
      </div>

      {/* 모바일 네비게이션 */}
      <MobileNav />
    </header>
  )
}
