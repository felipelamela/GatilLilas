import React from 'react'

interface TitleTypes {
  text: string;
  typeTag: "h1" | "h2" | "h3" | "h4" | "h5";
}


const Title: React.FC<TitleTypes> = ({ text, typeTag = "h2" }) => {
  const Tag = typeTag as keyof JSX.IntrinsicElements;
  return (
    <Tag>{text}</Tag>
  )
}

export default Title