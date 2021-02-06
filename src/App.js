import './App.css';
import SideBar from './Components/SideBar/SideBar';
import TopMenu from './Components/TopMenu/TopMenu';

function App() {
  return (
    <div className="App">
      <div id="wrapper">
         <SideBar />
         <TopMenu />
      </div>
    </div>
  );
}

export default App;
