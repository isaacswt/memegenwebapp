import logo from './logo.svg';
import dbstower from './images/skyline.png'
import './App.css';
import Header from './components/Header'
import MemeForm from './components/MemeForm'
import LoginTemplate from './components/LoginTemplate'

function App() {
  console.log(localStorage.getItem("1"))
  return (
    <div className="app--container" style={{ backgroundImage:`url(${dbstower})` }}>
      <Header/> 
       <MemeForm/>
      {/* <LoginTemplate/> */}
    </div>
  );
}

export default App;
