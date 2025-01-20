// import { cn } from "@/lib/utils"

// interface SparkleLineProps extends React.HTMLAttributes<HTMLDivElement> {
//   className?: string
// }

// export function SparkleLine({ className, ...props }: SparkleLineProps) {
//   return (
//     <div className={cn("group relative flex items-center h-8 right-8", className)} {...props}>
//       {/* Horizontal line */}
//       <div className="h-[1px] w-10 bg-gray-300 z-10 group-hover:bg-blue-500 transition-colors " />

//       {/* Circle and star container */}
//       <div className="relative">
//         {/* Circle background */}
//         <div className="absolute -left-[14px] -top-3 w-12 h-12 rounded-full bg-gray-50 group-hover:bg-blue-50 transition-colors" />

//         {/* Star shape */}
//         <svg
//           width="20"
//           height="20"
//           viewBox="0 0 24 24"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           className="relative text-gray-300 group-hover:text-blue-500 transition-colors"
//         >
//           <path
//             d="M12 3L16.5 8.5L22 12L16.5 15.5L12 21L7.5 15.5L2 12L7.5 8.5L12 3Z"
//             fill="currentColor"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//       </div>
//     </div>
//   )
// }



import { cn } from "@/lib/utils";

interface SparkleLineProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    hovered?: boolean; // New prop
}

export function SparkleLine({ className, hovered, ...props }: SparkleLineProps) {
    return (
        <div className={cn("group relative flex items-center h-8 right-8", className)} {...props}>
            {/* Horizontal line */}
            <div
                className={cn(
                    "h-[1px] w-10 bg-gray-300 z-10 transition-colors",
                    hovered ? "bg-blue-500" : ""
                )}
            />

            {/* Circle and star container */}
            <div className="relative">
                {/* Circle background */}
                <div
                    className={cn(
                        "absolute -left-[14px] -top-3 w-12 h-12 rounded-full bg-gray-50 transition-colors",
                        hovered ? "bg-blue-50" : ""
                    )}
                />

                {/* Star shape */}
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={cn(
                        "relative text-gray-300 transition-colors",
                        hovered ? "text-blue-500" : ""
                    )}
                >
                    <path
                        d="M12 3L16.5 8.5L22 12L16.5 15.5L12 21L7.5 15.5L2 12L7.5 8.5L12 3Z"
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
        </div>
    );
}
