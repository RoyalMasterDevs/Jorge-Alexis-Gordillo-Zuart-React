
import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import Prueba from './components/Prueba'

function App() {
 

  return (
    <>
      <Header />
      <Prueba />
      
      <Card title="Esto es un titulo" description="Esto es una descripcion" price={500}  />


      <h1>Hola Mundo</h1>
     
    </>
  )
}

export default App
