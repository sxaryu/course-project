import './App.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NewsFeed from './components/NewsFeed/NewsFeed';
import PlayerStats from './components/PlayerStats/PlayerStats';

function App() {

  return (
    <>
    <Router>
      <nav>
        <Link to = "/">News</Link>
        <Link to = "/">Stats</Link>
      </nav>
      <Routes>
        <Route path = "/" element = {<NewsFeed />}/>
        <Route path = "/stats" element = {<PlayerStats />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
