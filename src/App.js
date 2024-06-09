import { useEffect } from 'react';

const tg = window.Telegram.WebApp;
function App() {

  useEffect(() => {
    tg.ready();
  }, [])

  const closeHandler = () => {
    tg.close();
  }

  return (
    <div className="App">
      test
      <button onClick={closeHandler}>Закрыть</button>
    </div>
  );
}

export default App;
