import './App.css';
import { Button, Card } from 'react-bootstrap';

function App() {
  return (
    <>
      <h1 className='text-center text-danger text-capitalize my-5'  > welcome to my channel </h1>
      <div className='container'>
        <div className='row'>
          <div className='col-sm'>
            <Card >
              <Card.Img variant="top" src="https://picsum.photos/200/300" height='200px' />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className='col-sm'>
            <Card >
              <Card.Img variant="top" src="https://picsum.photos/201/300" height='200px' />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className='col-sm'>
            <Card >
              <Card.Img variant="top" src="https://picsum.photos/202/300" height='200px' />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>


        </div>
      </div>
      </>
  );
}

export default App;
