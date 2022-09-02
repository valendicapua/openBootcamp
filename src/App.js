import logo from './logo.svg';
import './App.css';
import GreetingF from './components/pure/greetingF';
import Greeting from './components/pure/greeting'
import TaskListComponent from './components/container/task_list';
import Contacto from './components/pure/Contacto.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*Componente de listado de tareas*/}
        {/*<Greeting name={"Valentin"}/>*/}
        {/*Componente de ejemplo funcional*/}
        {/*<GreetingF name="Valentin"/>*/}
        {/*Componente de listado de tareas*/}
        {/*<TaskListComponent />*/}
        <Contacto/>

        
      </header>
    </div>
  );
}

export default App;
