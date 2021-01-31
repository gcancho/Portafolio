import Contacto from './componentes/Contacto';
import Header from './componentes/Header';
import Inicio from './componentes/Inicio';
import Portafolio from './componentes/Portafolio';
import Presentacion from './componentes/Presentacion';
import './scss/app.scss';


// Bloque, Elementos, Modificadores
function App() {
  return (
    <div>
      <Header/>
      <Inicio/>
      <Presentacion/>
      <Portafolio/>
      <Contacto/>
      
    </div>
  );
}

export default App;