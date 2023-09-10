import React from 'react'
import Title from '../../GlobalComponents/Title'
import Button from '../../GlobalComponents/Button'
import CardFilhote from '../../GlobalComponents/CardFilhote'

const FilhotesDisponiveis = () => {
  return (
    <>
      <section className='secDisponivel'>
        <div className='secDispoButtons'>
          <Title text='Filhotes Disponiveis' typeTag='h2' />

          <Button text='Femeas' />
          <Button text='Machos' />
          <Button text='Proximas Ninhadas' />

        </div>
        <div className='secDispoCards'>
          <CardFilhote />
          <CardFilhote />
          <CardFilhote />
        </div>

      </section>
      <style jsx>{`
        .secDisponivel{
          display:grid;
          grid-template-columns: 200px 1fr;
        }
        .secDispoButtons{
          display:flex;
          flex-wrap:wrap;
        }
        .secDispoCards{
          display:flex;
          
        }
      
      `}</style>


    </>
  )
}

export default FilhotesDisponiveis