import { Route, Routes } from "react-router-dom";
import { Home } from './Components/pages/Home'

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={ <Home /> } exact />
      </Routes>
    </main>
  );
}

export default App;
