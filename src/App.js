import './App.css'; // CSS
import Footer from './components/Shared/Footer';
import Header from './components/Shared/Header';
import ChannelList from './containers/ChannelList';
import ProgramList from './containers/ProgramList';

// App Component - Main Component / Root Component
function App() {
  // Comp is returning -- JSX
  return (
    <div className="App">
      <Header></Header>
      
      <div className='mt-5'>
        <h1>My Hotstar App!</h1>
        <div className='container'>
          <ProgramList />
          <hr />
          <ChannelList />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
