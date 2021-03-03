import React, { Component } from "react";
import BookList from "./BookList";
import BookContextProvider from "../contexts/BookContext";
import ThemeContextProvider from "../contexts/ThemeContext";

class App extends Component {
  
  render() {
    //books adında bir props ismi veriyorum.
    return (
      <ThemeContextProvider>
        <BookContextProvider>
          <BookList />
        </BookContextProvider>
      </ThemeContextProvider> 
    );
  }
}

export default App;
