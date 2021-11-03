import * as React from "react"

function Delete(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 15H2a1.001 1.001 0 01-1-1v-3a1.001 1.001 0 011-1h10a1.001 1.001 0 011 1v3a1.001 1.001 0 01-1 1zM2 11h-.001L2 14h10v-3H2zM15 1.705L14.295 1 12.5 2.795 10.705 1 10 1.705 11.795 3.5 10 5.295l.705.705L12.5 4.205 14.295 6 15 5.295 13.205 3.5 15 1.705z"
        fill="#47848F"
      />
      <path
        d="M2 7V4h7V3H2a1 1 0 00-1 1v3a1 1 0 001 1h11V7H2z"
        fill="#47848F"
      />
    </svg>
  )
}

export default Delete
