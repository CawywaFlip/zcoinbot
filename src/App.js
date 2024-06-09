import { useEffect } from 'react';
import { Footer } from './components/Footer.jsx';
import { Smth } from './components/Smth.jsx';
import { Main } from './components/Main.jsx';
import { Upgrade } from './components/Upgrade.jsx';
import {Routes, Route} from 'react-router-dom';

const tg = window.Telegram.WebApp;
function App() {

  useEffect(() => {
    tg.ready();
  }, [])

  return (
    <div className="App">
      <main>
      <Routes>
        <Route index element={<Main />} />
        <Route path={'/upgrade'} element={<Upgrade />} />
        <Route path={'/smth'} element={<Smth />} />
      </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
