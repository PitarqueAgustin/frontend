import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from "react";
import { 
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Index from "./pages/Login";
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
