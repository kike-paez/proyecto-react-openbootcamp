/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/containers/task_list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import GreetingStyled from './components/pure/greetingStyled';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* Componente propio Greeting.jsx */}
        {/* <Greeting name="Kike"></Greeting> */}
        {/* Componente de ejemplo funcional */}
        {/* <GreetingF name="Kike"></GreetingF> */}
        {/* Componente de Listado de Tareas */}
        <TaskListComponent></TaskListComponent>
        {/* Ejemplos de uso de Hooks */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        {/* <Ejemplo4 nombre='Kike'> */}
          {/* Todo lo que hay aquí dentro es tratado como props.children */}
          {/* <h3>Contenido del props.children</h3> */}
        {/* </Ejemplo4> */}
        {/* <GreetingStyled name='Kike'></GreetingStyled> */}
      {/* </header> */}
    </div>
  );
}

export default App;
