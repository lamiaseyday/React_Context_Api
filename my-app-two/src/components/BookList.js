import React, { Component } from "react";
import Book from "./Book";
import "./BookList.css";
import { BookContext } from "../contexts/BookContext";
import { ThemeContext } from "../contexts/ThemeContext";

class BookList extends Component {
  //static contextType = BookContext;
  render() {
    // console.log(this.props.books);

    //const books = this.context;

    return (
      <ThemeContext.Consumer>
        {(contextTheme) => (
          //burda bir arrow function yapılıyor veriyi almak için
          //veriyi alma işlemi yapılıyor.

          <BookContext.Consumer>
            {(contextBook) => {
              const { changeTheme, isDarkTheme, dark, light } = contextTheme;
              const theme = isDarkTheme ? dark : light;
              const { books } = contextBook;

              return (
                <section
                  className="page-section"
                  style={{ background: theme.bg, color: theme.txt }}
                  id="portfolio"
                >
                  <div className="container">
                    <div className="text-center">
                      <h2 className="section-heading text-uppercase">
                        BOOKFOLİO
                      </h2>
                      <h3 className="section-subheading text-muted">
                        Lorem ipsum dolor sit amet consectetur.
                      </h3>
                      <button type="button" className="btn btn-sm btn-danger"
                      style={{marginTop:'-70px'}} onClick={changeTheme}>Change Theme</button>
                    </div>
                    <div className="row">
                      {/* veriyi burda context üzerinden alıyoruz. */}
                      {books.map((book, i) => {
                        return <Book book={book} key={i} />;
                      })}
                    </div>
                  </div>
                </section>
              );
            }}
          </BookContext.Consumer>
    )}
      </ThemeContext.Consumer>
    );
  }
}

export default BookList;
