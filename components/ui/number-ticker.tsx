"use client"

import { useEffect, useRef, type ComponentPropsWithoutRef } from "react"
import {
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion"

import { cn } from "@/lib/utils"

const formatNumber = (n: number, decimalPlaces: number) =>
  Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  }).format(Number(n.toFixed(decimalPlaces)))

interface NumberTickerProps extends ComponentPropsWithoutRef<"span"> {
  value: number
  startValue?: number
  direction?: "up" | "down"
  delay?: number
  decimalPlaces?: number
}

export function NumberTicker({
  value,
  startValue = 0,
  direction = "up",
  delay = 0,
  className,
  decimalPlaces = 0,
  ...props
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(direction === "down" ? value : startValue)
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  })
  const isInView = useInView(ref, { once: true, margin: "0px" })
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    // 모션을 줄이는 설정이면 카운트 없이 최종값만 표시
    if (reduceMotion) {
      if (ref.current) ref.current.textContent = formatNumber(value, decimalPlaces)
      return
    }

    let timer: ReturnType<typeof setTimeout> | null = null

    if (isInView) {
      timer = setTimeout(() => {
        motionValue.set(direction === "down" ? startValue : value)
      }, delay * 1000)
    }

    return () => {
      if (timer !== null) {
        clearTimeout(timer)
      }
    }
  }, [motionValue, isInView, delay, value, direction, startValue, reduceMotion, decimalPlaces])

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current) {
          ref.current.textContent = formatNumber(latest, decimalPlaces)
        }
      }),
    [springValue, decimalPlaces]
  )

  return (
    <>
      {/* 스크린리더가 0부터 올라가는 중간값을 읽지 않도록 최종값을 따로 둔다 */}
      <span className="sr-only">{formatNumber(value, decimalPlaces)}</span>
      <span
        ref={ref}
        aria-hidden="true"
        className={cn(
          "inline-block tracking-wider text-black tabular-nums dark:text-white",
          className
        )}
        {...props}
      >
        {startValue}
      </span>
    </>
  )
}
