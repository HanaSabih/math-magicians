import Card from 'react-bootstrap/Card';

const Quote = () => (
  <Card className="w-75 border-0 mx-auto mt-5">
    <Card.Body>
      <blockquote className="blockquote mb-0">
        <p className="fs-2 mt-5">
          {' '}
          Mathematics is not about numbers, equations, computations
          or algorithms;
          <br />
          {' '}
          it&lsquo;s about understanding.
          {' '}
        </p>
        <footer className="blockquote-footer">
          <cite title="Source Title">William Paul Thurston</cite>
        </footer>
      </blockquote>
    </Card.Body>
  </Card>
);

export default Quote;
