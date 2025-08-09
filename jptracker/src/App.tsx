import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

import LandingPage from './pages/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
  <Route path="/" element={<LandingPage />} />
  {/* los demás placeholders siguen igual */}
</Routes>

    </BrowserRouter>
  );
}

export default App;
