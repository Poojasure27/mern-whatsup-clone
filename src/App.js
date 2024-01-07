import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';

function App() {
  return (
    <div className="app">
      <div className="app__body">
      

      {/* sidebar */}
      <Sidebar />

      {/* Chat component */}
      <Chat />
       </div>
       </div>
  );
}

export default App;
