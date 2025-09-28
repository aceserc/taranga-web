'use client'

import { cn } from '@/helpers/cn'
import { useState, useEffect } from 'react'

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export const CountdownTimer = ({ targetDate, className }: { targetDate: string, className?: string }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [isTimerOver, setIsTimerOver] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const targetTime = new Date(targetDate).getTime()
      const difference = targetTime - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        clearInterval(timer)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        setIsTimerOver(true)
      }
    }, 1000)
    setIsLoading(false)
    return () => clearInterval(timer)
  }, [targetDate])

  if (isTimerOver) return null
  return (
    <div className={cn("grid grid-cols-2 xs:grid-cols-4 max-w-sm sm:max-w-md mx-auto gap-4", className)}>
      {Object.entries(timeLeft).map(([key, value]) => (
        <div key={key} className="flex flex-col items-center ">
          <div className="w-full aspect-square flex items-center justify-center bg-muted/30 border border-border/30 rounded-md mb-2 max-xs:max-h-16">
            <div className="text-xl xs:text-2xl sm:text-4xl font-bold text-primary">{isLoading ? ".." : value.toString().padStart(2, '0')}</div>
          </div>
          <div className="text-sm text-muted-foreground capitalize">{key}</div>
        </div>
      ))}
    </div>
  )
}