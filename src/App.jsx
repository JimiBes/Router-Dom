import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home'
import HtmlDefinition from './components/HtmlDefinition'
import CssDefinition from './components/CssDefinition'
import JsDefinition from './components/JsDefinition'

function App() {

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/html-definition">Html Definition</Link>
            </li>
            <li>
              <Link to="/css-definition">Css Definition</Link>
            </li>
            <li>
              <Link to="/js-definition">JS Definition</Link>
            </li>
          </ul>
        </nav>
        <div className="style">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/html-definition" element={<HtmlDefinition />} />
            <Route path="/css-definition" element={<CssDefinition />} />
            <Route path="/js-definition" element={<JsDefinition />} />
          </Routes>

        </div>

      </div>
    </Router>
  )
}

export default App
