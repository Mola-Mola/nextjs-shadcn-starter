'use client'

import Link from 'next/link'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { useSidebarStore } from '@/stores/use-sidebar-store'
import { mainNav } from '@/config/navigation'
import { siteConfig } from '@/config/site'

export function MobileNav() {
  const { isOpen, setIsOpen } = useSidebarStore()

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>{siteConfig.name}</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 pt-8">
          {mainNav.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 text-lg font-medium text-foreground transition-colors hover:text-primary"
              >
                {Icon && <Icon className="h-5 w-5" />}
                {item.label}
              </Link>
            )
          })}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
