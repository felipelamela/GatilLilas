import React from 'react'
import Header from '../Components/SectionsComponents/Header/Header'
import FilhotesDisponiveis from '../Components/SectionsComponents/FilhotesDisponiveis/FilhotesDisponiveis'
import SobreRaca from '../Components/SectionsComponents/SobreRaca/SobreRaca'
import SobreGatil from '../Components/SectionsComponents/SobreGatil/SobreGatil'
import Contato from '../Components/SectionsComponents/Contato/Contato'
import Footer from '../Components/SectionsComponents/Footer/Footer'

const index = () => {
  return (
    <>
      <Header />
      <main>
        <FilhotesDisponiveis />
        <SobreRaca />
      </main>
      <SobreGatil />
      <Contato />
      <Footer />


    </>
  )
}

export default index