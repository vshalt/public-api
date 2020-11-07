import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Random from './components/Random';
import Categories from './components/Categories'
import Category from './components/Category'

function App() {
    return (
        <BrowserRouter>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/categories">
                        <Categories />
                    </Route>
                    <Route path="/random">
                        <Random />
                    </Route>
                    <Route path="/category/:categoryName">
                        <Category />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
