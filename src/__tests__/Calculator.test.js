import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

it('renders correctly ', () => {
  const testQuote = renderer.create(<Calculator />).toJSON();
  expect(testQuote).toMatchSnapshot();
});
