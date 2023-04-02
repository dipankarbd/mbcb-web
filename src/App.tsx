import './App.css';
import { Provider } from 'react-redux';
import { store } from './store';
import BalancePage from './components/BalancePage';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BalancePage />
      </Provider>
    </div>
  );
}

export default App;
