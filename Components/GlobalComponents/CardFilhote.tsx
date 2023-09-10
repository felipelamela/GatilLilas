import React from 'react'

const CardFilhote = () => {
  return (
    <>
      <figure>
        <img src="/image/img-card1.jpg" alt="" />
        <figcaption className='titleCard'>Red - Macho</figcaption>
        <figcaption className='textCard'>Ninhada: 02/01/2023</figcaption>
        <figcaption className='textCard'>Pais: Buzz e Milk</figcaption>
      </figure>
      <style jsx>{`
          img{
            max-width:180px
          }

      `}</style>

    </>
  )
}

export default CardFilhote