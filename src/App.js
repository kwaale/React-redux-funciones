import './App.css';
import EstadoNumeros from './Components/EstadoNumeros';
import Botones from './Components/Botones';
import store from './redux/redux1';
import { Provider } from 'react-redux';

function App() {
  
  return (
    <div className="App">
      <Provider store={store}>
        <EstadoNumeros />
        <Botones />
      </Provider>
    </div>
  );
}

export default App;
