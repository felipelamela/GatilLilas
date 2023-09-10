import React from 'react'



interface ButtonTypes {
  text: string,
}

const Button: React.FC<ButtonTypes> = ({ text }) => {
  return (
    <>
      <button>{text}</button>

      <style jsx>{`
        button{
          border:none;
          display:inline;
          margin:.5rem;
          padding:.8rem 1.6rem;
          cursor: pointer;
          border-radius: 6px;
          background:red;
          border:1px sold, red;
          color: white;
        }
      
      
      `}</style>

    </>
  )
}

export default Button