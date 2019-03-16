//imports and dependencies
import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Book from "../components/Book";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

//creates a stateful class with state of empty books array
class Saved extends Component {
  state = {
    books: []
  };
//when the constructor loads  on the page it calls the getSaved books API call to get books saved in database
  componentDidMount() {
    this.getSavedBooks();
  }

//   getSaved books API call to get books saved in database
  getSavedBooks = () => {
    API.getSavedBooks()
      .then(res =>
        //updates the state of books with the array of books that is saved in the database
        this.setState({
          books: res.data
        })
      )
      .catch(err => console.log(err));
  };
//method to call the delete book API call and then run saved books call to clear it out of books array
  handleBookDelete = _id => {
    API.deleteBook(_id).then(res => this.getSavedBooks());
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>Google Bookshelf</strong>
              </h1>
              <h2 className="text-center">Saved Books of Interest.</h2>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Saved Books" icon="save">
            {/* if books array is not empty */}
              {this.state.books.length ? (
                <List>
                    {/* loops through book array and put props of books into book component */}
                  {this.state.books.map(book => (
                    <Book
                      key={book._id}
                      title={book.title}
                      subtitle={book.subtitle}
                      url={book.link ? book.link : "https://via.placeholder.com/128x124"}
                      authors={book.authors}
                      description={book.description ? book.description: "No description available"}
                      image={book.image}
                      Button={() => (
                        <button
                        //listens for click even of delete button gets book by unquie ID number
                          onClick={() => this.handleBookDelete(book._id)}
                          className="btn btn-danger ml-2"
                        >
                          Delete
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                  //if books array is empty display this
                <h2 className="text-center">No Saved Books</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Saved;
