import type { ReactNode } from 'react'

type PlatformAdminLayoutProps = {
  children: ReactNode
}

export function PlatformAdminLayout({ children }: PlatformAdminLayoutProps) {
  return <>{children}</>
}
