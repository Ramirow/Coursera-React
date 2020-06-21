import React,{Component} from 'react';
import Main from './components/MainComponent';
// import { Navbar, NavbarBrand } from 'reactstrap';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Main/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
