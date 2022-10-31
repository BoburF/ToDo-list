import './App.css';
import Input from './components/Input/Input';
import List from './components/List/List';

function App() {
  return (
    <div className="App">
      <div className="center">
      <Input/>
      <div className="list">
        <ul>
          <li><List text='paradise' completed={true}/></li>
          <li><List text='paradise' completed={true}/></li>
          <li><List text='paradise' completed={false}/></li>
          <li><List text='paradise' completed={true}/></li>
          <li><List text='paradise' completed={false}/></li>
          <li><List text='paradise' completed={true}/></li>
          <li><List text='paradise' completed={true}/></li>
          <li><List text='paradise' completed={true}/></li>
        </ul>
      </div>
      </div>
    </div>
  );
}

export default App;
