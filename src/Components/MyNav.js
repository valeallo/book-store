import React, {useState} from "react";
import  Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import  Nav  from "react-bootstrap/Nav";
import fantasy from "../Books/fantasy.json"


// D2 Crea un componente di nome MyNav, 
// che renderizzerà una navigation bar di bootstrap con i seguenti link: Home, About e Browse.

const MyNav = () => {
    const [search, setSearch] = useState("")

    const searchBooks = (array, title) => {
      return array.filter((book) =>{
        if(title < 1 )
        { return;}
        else if (book.title.includes(title)){
          return book;
        }})
      }
    return (
      <>
      <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
      <input  type="text" onChange={(e)=>{setSearch(e.target.value)}} />
      <div>
        {searchBooks(fantasy, search).map((book, index)=>{
          return book.title
        })}
      </div>
    </Navbar>
    </>
    );
  }
  
  export default MyNav;

