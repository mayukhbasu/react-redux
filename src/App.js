import './App.css';
// eslint-disable-next-line
import CakeContainer from './containers/CakeContainer'; 
import { Provider } from 'react-redux';
import store from './redux/store';
// eslint-disable-next-line
import CounterContainer from './containers/CounterContainer';
import HooksCakeContainer from './containers/HooksCakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeContainer/> */}
        {/* <CounterContainer/> */}
        <HooksCakeContainer/>
      </div>
    </Provider>
    
  );
}

export default App;
