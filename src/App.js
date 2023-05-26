import './App.css';
import Register from './components/Register';
import Navbar from './components/Navbar';
import User from './components/User';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1>Hello every body</h1>
      <Register/>
      <User/>
    </div>
  );
}

export default App;
