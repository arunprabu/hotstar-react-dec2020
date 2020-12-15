import './App.css'; // CSS
import Footer from './components/Shared/Footer';
import Header from './components/Shared/Header';
import Subscription from './components/Subscription';
import ChannelList from './containers/ChannelList';
import ContactForm from './containers/ContactForm';
import LifeCycleDemo from './containers/LifeCycleDemo';
import MyProfile from './containers/MyProfile';
import ProgramList from './containers/ProgramList';
import TrendingShows from './containers/TrendingShows';

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
          <hr />
          <TrendingShows />
          <hr />
          <Subscription />
          <hr />
          <MyProfile />
          <hr />
          <ContactForm />
          <hr/>
          <LifeCycleDemo feature='LifeCycle Of React JS Comp'/>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
