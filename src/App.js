import './App.css';

import { Route , Routes} from 'react-router-dom'
import Home from './component/Home';
import Projects from './component/Projects';
import Resume from './component/Resume';
import Contact from './component/Contact';


function App() {
  return (
    <div className="App">
      {/*<Header/>*/}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
    </div>
  );
}

export default App;
