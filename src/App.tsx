import { useEffect } from 'react';
import AOS from 'aos';

import './App.css';
import 'aos/dist/aos.css';

import Introduction from './components/Introduction';
import Projects from './components/Projects';


function App() {

  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <div className="App">
        <Introduction />
        <Projects />
    </div>
  );
}

export default App;
