import './App.css';
import Left1 from './components/Left1';
import Right1 from './components/Right1';

function App() {
  return (
    <div id="container">
      <h3>redux-react test</h3>
      <div id="grid">
        <Left1 />
        <Right1 />
      </div>
    </div>
  );
}

export default App;
