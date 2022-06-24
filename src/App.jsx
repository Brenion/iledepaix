import './App.css';
import FormNewNGO from './components/FormNewNGO'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='flex justify-center'>
        <p className='text-red-600 text-2xl'>Welcome to ile de paix</p>
      </div>
      </header>
      <FormNewNGO/>
    </div>
  );
}

export default App;
