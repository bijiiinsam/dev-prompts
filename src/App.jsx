import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <h2>Welcome to DevPrompts! </h2>
        <p>Your curated library of AI prompts is loading...</p>
      </main>
    </div>
  );
}

export default App;