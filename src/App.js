import logo from './logo.svg';
import './App.css';
import Home from './components/home';

import store from './redux/cake/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <Home />
    </div>
    </Provider>
  );
}

export default App;
