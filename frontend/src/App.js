import './App.css';
import TodoList from './components/TodoList';
import { CartProvider } from './contexts/CartContext';

function App() {


  return (
    <>
     <CartProvider>
       <TodoList/>
     </CartProvider>
  
    </>
  );
}

export default App;
