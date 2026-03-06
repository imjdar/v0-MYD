"use client"

import { useEffect, useRef } from "react"

/**
 * Attach to a container element. All children with class `reveal`,
 * `reveal-left`, `reveal-right`, `reveal-scale`, or `reveal-fade`
 * inside it will get the `revealed` class added when they enter the viewport.
 */
export function useScrollReveal(threshold = 0.12) {
    const ref = useRef<HTMLElement>(null)

    useEffect(() => {
        const container = ref.current
        if (!container) return

        const targets = container.querySelectorAll<HTMLElement>(
            ".reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-fade"
        )

        if (targets.length === 0) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("revealed")
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold }
        )

        targets.forEach((t) => observer.observe(t))
        return () => observer.disconnect()
    }, [threshold])

    // Cast to any to allow assignment to section / div / etc. refs
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return ref as React.RefObject<any>
}
