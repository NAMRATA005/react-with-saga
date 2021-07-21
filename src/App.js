import { Provider } from 'react-redux'
import './App.css';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import Store from './store/store';

function App() {
  return (
    <div className="App">
       <Provider store={Store}>
       <TodoForm/>
    </Provider>
    </div>
  );
}

export default App;
