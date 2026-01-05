import './App.css'
import AvatarComponent from './components/AvatarComponent'
import CardComponent from './components/CardComponent'
import IconCartComponent from './components/IconCartComponent'
import NavComponente from './components/NavComponent'
import ProductosContenedor from './components/ProductosContenedor'
import TituloComponente from './components/TituloComponente'

function App() {
  return <>
  <NavComponente></NavComponente>,
  <CardComponent title="User"> <AvatarComponent></AvatarComponent></CardComponent>
  <TituloComponente></TituloComponente>
  <ProductosContenedor></ProductosContenedor>
  </>
}

export default App
