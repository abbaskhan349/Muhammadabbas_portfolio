import { cn } from "@/lib/utils"

interface SparkleIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string
}

export function SparkleIcon({ className, ...props }: SparkleIconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-white", className)}
      {...props}
    >
      {/* Vertical line */}
      <path d="M12 2L12 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* Sparkle shape */}
      <path
        d="M8 14L12 20L16 14M10 16L12 18L14 16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
