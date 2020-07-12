import React from 'react';
import MPage from './pages/main-rout';
import AddPost from './pages/add-post';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Posts from './pages/posts';
import Nav from './components/nav';
import Former from './components/form';


function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        
        <Route path="/" exact component={MPage}/>
        <Route path="/addpost" component={AddPost}></Route>
        <Route path="/posts" component={Posts}/>
      </Switch>  
      </div>
    </Router>
  );
}

export default App;
