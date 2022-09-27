import logo from './logo.svg';
import './App.css';
import Content from './components/Content';
import Navbar from './components/Navbar';

function App() {
  return (
      <div className="main">
        <Navbar />
        <Content />
      </div>
  );
}

export default App;
