import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './ui/header/header';
import { lazy, Suspense } from 'react';
import { PlaceholderPage } from './ui/placeholder-page.js';
import { useInterceptor } from './use-interceptor.js';
import { SiteMap } from './routes/sitemap/sitemap.js';

const Story = lazy(() => import('./routes/story/story'))
const Home = lazy(() => import('./routes/home/home'))

function App() {
  useInterceptor()

  return (
    <>
      <Router>
        <Header />
        <Suspense fallback={<PlaceholderPage />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/story/:id?" element={<Story />} />
            <Route path="/sitemap" element={<SiteMap />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
