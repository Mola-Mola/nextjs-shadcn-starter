import Link from 'next/link'
import {
  Zap,
  Palette,
  Shield,
  Smartphone,
  Moon,
  Package,
  Github,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { siteConfig } from '@/config/site'

const features = [
  {
    icon: Zap,
    title: 'Next.js 15',
    description: 'App Router, React Server Components, 최신 기능 지원',
  },
  {
    icon: Shield,
    title: 'TypeScript',
    description: '타입 안전성과 개발자 경험 향상',
  },
  {
    icon: Palette,
    title: 'Tailwind CSS v4',
    description: '유틸리티 퍼스트 CSS, 빠른 스타일링',
  },
  {
    icon: Package,
    title: 'shadcn/ui',
    description: '재사용 가능한 컴포넌트 라이브러리',
  },
  {
    icon: Moon,
    title: '다크모드',
    description: '시스템 설정 연동, 라이트/다크 테마',
  },
  {
    icon: Smartphone,
    title: '반응형',
    description: '모바일부터 데스크톱까지 최적화',
  },
]

const techStack = [
  'Next.js 15',
  'React 19',
  'TypeScript',
  'Tailwind CSS v4',
  'shadcn/ui',
  'Zustand',
  'React Hook Form',
  'Zod',
  'TanStack Query',
  'Lucide Icons',
]

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container flex flex-col items-center justify-center gap-6 pb-8 pt-16 text-center md:pb-12 md:pt-24 lg:py-32">
        <Badge variant="secondary" className="mb-2">
          스타터킷 v1.0
        </Badge>
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
          모던 웹 개발을 위한
          <br />
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Next.js 스타터킷
          </span>
        </h1>
        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          Next.js 15, TypeScript, Tailwind CSS, shadcn/ui로 구성된 프로덕션
          레디 스타터킷. 빠르게 웹 개발을 시작하세요.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <Link href="/docs">시작하기</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Link>
          </Button>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="container py-8 md:py-12">
        <div className="flex flex-wrap justify-center gap-2">
          {techStack.map((tech) => (
            <Badge key={tech} variant="outline" className="px-3 py-1">
              {tech}
            </Badge>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
            주요 기능
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            빠른 개발을 위한 모든 것이 준비되어 있습니다
          </p>
        </div>
        <div className="mx-auto mt-12 grid gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card
                key={feature.title}
                className="relative overflow-hidden transition-colors hover:bg-muted/50"
              >
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            )
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
            지금 바로 시작하세요
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            복잡한 설정 없이 바로 개발을 시작할 수 있습니다
          </p>
          <div className="mt-4 rounded-lg bg-muted p-4">
            <code className="text-sm">
              npx create-next-app@latest --example{' '}
              {siteConfig.links.github.replace('https://github.com/', '')}
            </code>
          </div>
        </div>
      </section>
    </div>
  )
}
