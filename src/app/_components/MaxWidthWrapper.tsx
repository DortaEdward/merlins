import type { ReactNode } from "react";

export default function MaxWidthWrapper({
  className,
  children
}: {
  className?: string,
  children: ReactNode
}) {
  return (
    <div className={
      className 
      ? `mx-auto w-full max-w-screen-xl px-2.5 md:px-20 ${className}` 
      : `mx-auto w-full max-w-screen-xl px-2.5 md:px-20`
    }>
      {children}
    </div>
  )
}