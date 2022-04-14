import Counter from './components/Counter';


import Todo from './components/Todo'

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='Learn React'/>
      <Todo text='Master React'/>
      <Todo text='Teach React'/>           
    </div>
  );
}

export default App;
