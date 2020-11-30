import Navigation from './components/Navigation'
import Home from './pages/Home'
import NewPost from './pages/NewPost'
import About from './pages/About'
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="container mx-auto px-2 bg-white h-screen">
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route exact path="/post" component={NewPost} />
        <Route exact path='/about' component={About} />
    </div>
    </Router>
  );
}

export default App;
