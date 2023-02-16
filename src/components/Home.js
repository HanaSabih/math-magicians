import { Container } from 'react-bootstrap';

const Home = () => (
  <Container className="  mt-5 homeContainer ">
    <h1 className="  mb-5  ">Welcome to Math magicians!</h1>

    <p>
      This is a simple calculator with memory functions similar to a small handheld calculator.
      Use this basic calculator online for math with addition,
      subtraction, division and multiplication.
    </p>
    <p>
      If it&apos;s your first time using a calculator,
      all the buttons and options can be a bit scary.
      But whether you&apos;re using a standard calculator or scientific calculator,
      the basics are pretty much the same.
      Once you learn what the buttons do and how to use them for different calculations,
      you&apos;ll be more than comfortable using your calculator whenever
      you need it—inside or outside of school!
    </p>
    <p>
      <strong>Add numbers</strong>
      {' '}
      with the &quot;+&quot; key. Hit the &quot;+&quot; button between
      any 2 numbers to add them.
      For example, to add 5 to 10, press &quot;5,&quot; &quot;+,&quot;
      and then &quot;10.&quot;
    </p>

    <p>
      <strong>Subtract numbers</strong>
      {' '}
      with the &quot;-&quot; key. Press the &quot;-&quot; button between
      any 2 numbers to subtract the second from the first.
      For example, hit &quot;7,&quot; &quot;-,&quot; and then &quot;5&quot; to
      subtract 5 from 7 and hit &quot;=&quot; to get an answer of &quot;2.&quot;
    </p>
    <p>
      <strong>Divide numbers</strong>
      {' '}
      &quot;&quot;

      or turn fractions into decimals with the &quot;÷&quot; or &quot;/&quot; key.
      For example, to divide 2 by 1, press &quot;2,&quot;
      &quot;÷&quot; and &quot;1&quot; and then &quot;=.&quot;
      To change the fraction 4/5 to a decimal, press &quot;4,&quot;
      &quot;/,&quot; &quot;5,&quot; and then &quot;=.&quot;
    </p>
    <p>
      <strong>Multiply numbers</strong>
      {' '}
      using the &quot;x&quot; or &quot;*&quot; key. For example,
      to multiply 6 by 5, press &quot;6,&quot; &quot;x,&quot; &quot;5,&quot;
      and then &quot;=.&quot; The final answer will read &quot;30.&quot;
    </p>
  </Container>
);

export default Home;
