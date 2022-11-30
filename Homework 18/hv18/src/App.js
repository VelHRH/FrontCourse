
import {Routes, Route} from 'react-router-dom'
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import {Layout} from "./pages/Layout";
import {NoPage} from './pages/NoPage';

function App() {
  return (
    <>
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </Layout>
    </>
  );
}

export default App;
