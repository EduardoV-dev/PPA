import * as React from "react"

function Edit(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 1.333A6.667 6.667 0 1014.667 8h-1.334A5.333 5.333 0 118 2.667V1.333zM12.52 2a.46.46 0 00-.32.133l-.813.807 1.666 1.667.814-.807a.45.45 0 000-.633l-1.034-1.034A.445.445 0 0012.52 2zm-1.607 1.413L6 8.333V10h1.667l4.913-4.92-1.667-1.667z"
        fill="#47848F"
      />
    </svg>
  )
}

export default Edit
