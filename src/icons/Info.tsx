import * as React from "react"

function Info(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9 2.667a1 1 0 100 2 1 1 0 000-2zm-.24 3.18C7.967 5.913 5.8 7.64 5.8 7.64c-.133.1-.093.093.013.28.107.18.094.193.22.107.134-.087.354-.227.72-.454 1.414-.906.227 1.187-.38 4.714-.24 1.746 1.334.846 1.74.58.4-.26 1.474-1 1.58-1.074.147-.1.04-.18-.073-.346-.08-.114-.16-.034-.16-.034-.433.287-1.227.887-1.333.507-.127-.38.686-2.987 1.133-4.78.073-.427.273-1.36-.5-1.293z"
        fill="#47848F"
      />
    </svg>
  )
}

export default Info
