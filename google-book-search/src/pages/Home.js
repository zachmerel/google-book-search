//imports and dependencies
import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Form from "../components/Form";
import Book from "../components/Book";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

//creates a stateful class component that sets state: books empty to begin, q (title) to blank, message prompts user to search
class Home extends Component {
  state = {
    books: [],
    q: "",
    message: "Search For A Book To Begin!"
  };

  //this method handles what the user is inputing and updates the state for q, look at index.js in form to see where name comes from
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  //this grabs the api call from API.js in utils to 
  getBooks = () => {
      //injects whatever the user input was for the request
    API.getBooks(this.state.q)
    //when it comes back it sets the stte of books to the data that was returned with the call
      .then(res => {
       console.log(res.data.items);
        this.setState({ 
          books: res.data.items
        })
        console.log(this.state)
      }
      ) 
      //a catch is set here to set the state of books back to blank and the message to tell the user there was nothing returned 
      //from the API call
      .catch(() =>
        this.setState({
          books: [],
          message: "No New Books Found, Try a Different Query"
        })
      );
  };
  // this will prevents the default of the browser from occuring and should call the get boks method above to call to api call
  handleFormSubmit = event => {
    console.log("handFormSubmit")
    event.preventDefault();
    this.getBooks();
  };

  //method that find and saves the book with the id, id is a unquie value 
  handleBookSave = id => {
    const book = this.state.books.find(book => book.id === id);

    //calls the savebook function from API.js in utils and saves all the keys from the data object that was returned
    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail
      //? need this part explained?
    }).then(() => this.getBooks());
  };
//renders the layout of the home page
  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>Google Bookshelf</strong>
              </h1>
              <h2 className="text-center">Search for and Save Books of Interest.</h2>
            </Jumbotron>
          </Col>
          <Col size="md-12">
            <Card title="Book Search" icon="far fa-book">
              <Form
              //this is able to get the user input with use of the handInputChange method
                handleInputChange={this.handleInputChange}
                //this is able to get the event for the form submit button
                handleFormSubmit={this.handleFormSubmit}
                //this updates the title of the book state
                q={this.state.q}
              />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Results">
            {/* if there are any books you will know because books length will exist then you inject a list component if it does*/}
              {this.state.books.length ? (
                <List>
                    {/* loop through the books array and assign each prop to the book component */}
                  {this.state.books.map(book => (
                    <Book
                      key={book.id}
                      title={book.volumeInfo.title}
                      subtitle={book.volumeInfo.subtitle}
                      link={book.volumeInfo.infoLink}
                      authors={book.volumeInfo.authors.join(", ")}
                      description={book.volumeInfo.description}
                      image={book.volumeInfo.imageLinks.thumbnail}
                      Button={() => (
                        <button
                        //on the click event call the handleBookSave method to save the book, identified by the unquie id value
                          onClick={() => this.handleBookSave(book.id)}
                          className="btn btn-primary ml-2"
                        >
                          Save
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                  //puts the default no book message if no books in array
                <h2 className="text-center">{this.state.message}</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Home;
