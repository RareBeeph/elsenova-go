import Nav from './components/Nav';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import ProfilePicture from './assets/profile.png';

function App() {
  return (
    <>
      <Nav />
      <Container>
        <h1 className="mt-5">Elsenova</h1>
        <p className="my-2">
          Hey! We uh. We don't have a whole lot here right now. Stay tuned though!
        </p>

        <Card style={{ width: '18rem' }} className="mx-auto my-3">
          <Card.Img variant="top" src={ProfilePicture} />
          <Card.Body>
            <Card.Title>💖 Aria Taylor 💖</Card.Title>
            <Card.Text>
              Musician, software engineer, Axiom Verge lover, and developer of this bot!
            </Card.Text>
            <Button variant="primary">Okay</Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default App;
