import type { ReactNode } from "react";

export default function DashboardLayout({ children }: {children: ReactNode}) {
  return (
      <div className="min-w-screen min-h-screen">
        { children }
      </div>
  )
}
