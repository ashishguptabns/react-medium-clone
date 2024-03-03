import './App.css';
import { Home } from './routes/home/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './ui/header/header';
import { NewStory } from './routes/new-story/new-story';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-story" element={<NewStory />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
