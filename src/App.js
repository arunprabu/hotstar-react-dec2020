import './App.css'; // CSS
import Footer from './components/Footer';
import Header from './components/Header';

// App Component - Main Component / Root Component
function App() {
  // Comp is returning -- JSX
  return (
    <div className="App">
      <Header />
      
      <div className='mt-5'>
        <h1>Success!</h1>
      </div>

      <Footer />
    </div>
  );
}

export default App;
