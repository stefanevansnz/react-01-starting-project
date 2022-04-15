import Modal from './components/Modal';
import Backdrop from './components/Backdrop';
import Todo from './components/Todo'

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='Learn React'/>
      <Todo text='Master React'/>
      <Todo text='Teach React'/>           
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
