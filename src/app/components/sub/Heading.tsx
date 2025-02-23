import React from 'react'

type HeadingProps = {
  text: string
}

const Heading = ({ text }: HeadingProps) => {
  return (
    <h1 className="text-3xl sm:text-2xl font-bold text-gray-600 mb-14 self-start transition-colors">
      {text}
    </h1>
  )
}

export default Heading