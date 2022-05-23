import logo from './logo.png';
import './App.css';
import Image from 'react-bootstrap/Image';

function App() {
  return (
    <div className="App">
      <Image src={logo} width="60%"  className="App-logo" alt="logo"/>
    </div>
  );
}

export default App;
