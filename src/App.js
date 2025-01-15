import logo from './logo.svg';
import './App.css';

// header component
function Header(){
  return <h1>Hello World</h1>
  // both are correct , without and with parenthesis
  // return (<h1>Hello World</h1>)
}
function App() {
  return <Header/>
}

export default App;
