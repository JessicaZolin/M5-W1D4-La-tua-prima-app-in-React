import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './Components/MyNav';
import MyFooter from './Components/MyFooter';
import Welcome from './Components/Welcome';
import AllTheBooks from './Components/AllTheBooks';
import books from './Books/fantasy.json';

function App() {
  return (
    <div className="bg-dark text-white">
      
        <MyNav Brand="BOOKS ON A TREE" />
        <AllTheBooks books={books} />
        <MyFooter />
        <Welcome />
    </div>
  );
}

export default App;
