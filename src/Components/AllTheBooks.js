import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import '../App.css';
import Container from 'react-bootstrap/esm/Container';

function AllTheBooks(props) {
    return ( 
        <div className="container d-flex justify-content-center flex-wrap gap-4 mt-5">
    {props.books.map((book, index) => (
        
    <Card key={index} style={{ width: '18rem', height: '47rem' }}>
      <Card.Img variant="top" src={book.img} className='h-100 object-fit-cover'/>
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush d-flex justify-content-flex-start">
        <ListGroup.Item>{book.category}</ListGroup.Item>
        <ListGroup.Item>{book.asin}</ListGroup.Item>
        <ListGroup.Item>{(book.price).toFixed(2).replace('.', ',')} €</ListGroup.Item>
      </ListGroup>
      <Card.Body className='d-flex justify-content-center gap-3'>
        <Button variant="outline-success">Add to cart</Button>
        <Button variant="outline-danger">Details</Button>
      </Card.Body>
    </Card>
    ))}
        </div>
    );
}

export default AllTheBooks;