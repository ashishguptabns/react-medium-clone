import './App.css';
import { Home } from './routes/home/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './ui/header/header';
import { Story } from './routes/story/story';
import { addInterceptor, interceptFetch, removeInterceptor } from './networkInterceptor.js';
import { useEffect } from 'react';

function App() {
  useEffect(() => {

    interceptFetch()

    const interceptor = (requestDataOrResponse) => {
      // console.log('Intercepted:', requestDataOrResponse);
    };

    addInterceptor(interceptor);

    return () => {
      removeInterceptor(interceptor);
    };
  }, []);

  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story/:id?" element={<Story />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
