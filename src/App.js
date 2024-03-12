import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './ui/header/header';
import { addInterceptor, interceptFetch, removeInterceptor } from './networkInterceptor.js';
import { useEffect, lazy, Suspense } from 'react';
import { PlaceholderPage } from './ui/placeholder-page.js';

const Story = lazy(() => import('./routes/story/story'))
const Home = lazy(() => import('./routes/home/home'))

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
      <Router>
        <Header />
        <Suspense fallback={<PlaceholderPage />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/story/:id?" element={<Story />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
