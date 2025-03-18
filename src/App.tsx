import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { NewsFeed } from './components/NewsFeed/NewsFeed';

const App = () => {
    return (
        <Router>
            <Navbar />
            <NewsFeed />
        </Router>
    );
};

export default App;