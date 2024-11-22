import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Resource from './pages/Resource';
import Social from './pages/Social'
import Wuwa from './pages/Wuwa'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resource" element={<Resource />} />
          <Route path="/social" element={<Social />} />
          <Route path="/wuwa" element={<Wuwa />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;