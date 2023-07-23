import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans/Vans';
import VanDetail from './pages/Vans/VanDetail';
import '../server';
import Layout from './components/Layout';
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Review from './pages/Host/Review';
import HostLayout from './components/HostLayout';
import VansLayout from './components/VansLayout';
import HostVans from './pages/Host/Vans/HostVans';
import HostVanDetail from './pages/Host/Vans/HostVanDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />

            <Route path="vans" element={<VansLayout />}>
              <Route index element={<HostVans />} />
              <Route path=":id" element={<HostVanDetail />} />
            </Route>

            <Route path="review" element={<Review />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
