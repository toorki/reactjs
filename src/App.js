import './App.css';
import {Button, Card, Container, Navbar, Nav, DropdownButton, Dropdown, Spinner }from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
       <Button variant="primary">Primary</Button>{' '}
       <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>myfirstapp</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">REACTJS</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link UNDER CONSTRUCTION</Card.Link>
        <Card.Link href="#">Another Link UNDER CONSTRUCTION</Card.Link>
      </Card.Body>
    </Card>
    <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        <span className="visually-hidden">Loading...</span>
      </Button>{' '}
      <DropdownButton id="dropdown-basic-button" title="Dropdown button">
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
    </div>
  );
}

export default App;
