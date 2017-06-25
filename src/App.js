import React, { Component } from 'react';

import Head from "./components/head/head"
import Contenta from "./components/contenta/content"
import Contentb from "./components/contentb/content"
class App extends Component {
  render() {
    return (
      <div className="App">
       <Head />
       <Contenta />
       <Contentb />
      </div>
    );
  }
}

export default App;
