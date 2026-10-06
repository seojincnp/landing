import { type ComponentPropsWithoutRef, type CSSProperties } from "react"

import { cn } from "@/lib/utils"

interface ShimmerOwnProps {
  shimmerColor?: string
  shimmerSize?: string
  borderRadius?: string
  shimmerDuration?: string
  background?: string
  className?: string
  children?: React.ReactNode
}

// 페이지 내 이동은 버튼이 아니라 링크여야 하므로 href가 있으면 <a>로 렌더
export type ShimmerButtonProps = ShimmerOwnProps &
  (
    | ({ href?: undefined } & ComponentPropsWithoutRef<"button">)
    | ({ href: string } & ComponentPropsWithoutRef<"a">)
  )

export function ShimmerButton({
  shimmerColor = "#ffffff",
  shimmerSize = "0.05em",
  shimmerDuration = "3s",
  borderRadius = "100px",
  background = "rgba(0, 0, 0, 1)",
  className,
  children,
  ...props
}: ShimmerButtonProps) {
  const style = {
    "--spread": "90deg",
    "--shimmer-color": shimmerColor,
    "--radius": borderRadius,
    "--speed": shimmerDuration,
    "--cut": shimmerSize,
    "--bg": background,
  } as CSSProperties

  const classes = cn(
    "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden [border-radius:var(--radius)] border border-white/10 px-6 py-3 whitespace-nowrap text-white [background:var(--bg)]",
    "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px",
    className
  )

  const content = (
    <>
      {/* spark container */}
      <div
        className={cn(
          "-z-30 blur-[2px]",
          "@container-[size] absolute inset-0 overflow-visible"
        )}
      >
        {/* spark */}
        <div className="animate-shimmer-slide motion-reduce:animate-none absolute inset-0 aspect-[1] h-[100cqh] rounded-none [mask:none]">
          {/* spark before */}
          <div className="animate-spin-around motion-reduce:animate-none absolute -inset-full w-auto [translate:0_0] rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]" />
        </div>
      </div>
      {children}

      {/* Highlight */}
      <div
        className={cn(
          "absolute inset-0 size-full",

          "rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f]",

          // transition
          "transform-gpu transition-all duration-300 ease-in-out",

          // on hover
          "group-hover:shadow-[inset_0_-6px_10px_#ffffff3f]",

          // on click
          "group-active:shadow-[inset_0_-10px_10px_#ffffff3f]"
        )}
      />

      {/* backdrop */}
      <div
        className={cn(
          "absolute inset-(--cut) -z-20 [border-radius:var(--radius)] [background:var(--bg)]"
        )}
      />
    </>
  )

  if (props.href !== undefined) {
    return (
      <a style={style} className={classes} {...(props as ComponentPropsWithoutRef<"a">)}>
        {content}
      </a>
    )
  }

  return (
    <button style={style} className={classes} {...(props as ComponentPropsWithoutRef<"button">)}>
      {content}
    </button>
  )
}
