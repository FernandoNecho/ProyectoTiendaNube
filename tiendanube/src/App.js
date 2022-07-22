//import logo from './logo.svg';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <header className="header">
        <Navbar/>
      </header>
      <ItemListContainer saludo="Bienvenido a TiendaNube"/>

    </>
  );
}

export default App;
