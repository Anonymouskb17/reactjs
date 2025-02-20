import HomePage from "./Pages/Home";
import NewPage from "./Pages/News";
import ContactPage from "./Pages/Contact";
import { Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div style={{ padding: 20 }}>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/new" element={<NewPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
      </Routes>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/new">News</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
