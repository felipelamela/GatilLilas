import React from 'react'
import Button from '../../GlobalComponents/Button'
import Title from '../../GlobalComponents/Title'

const Header = () => {
  return (
    <>
      <section className='headerSec'>
        <img src="image/img-header.jpg" className='headerImg' alt="" />
        <div className='headerDiv'>
          <Button text="O gatil" />
          <Button text="Filhotes" />
          <Button text="Maine Coon" />
          <Button text="Contato" />
        </div>
        <div className='headerContentContato'>
          <Title typeTag="h2" text="Gatil Lila's" />
          <Button text='Contato' />
        </div>
      </section>

      <style jsx>{`
      .headerSec{
        display: grid;
        height: 600px;
      }
      .headerImg{
        position:absolute;
        width:100%;
        height:600px;
        object-fit:cover;
        z-index: -99999
      }
      .headerDiv{
        text-align-last: end;
        padding: 1rem 2rem;
      }
      .headerContentContato{
        padding: 4rem 3rem;
        align-self: end;
      }
    
    
    `}</style>





    </>
  )
}

export default Header