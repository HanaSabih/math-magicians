import renderer from 'react-test-renderer';
import Navbar from '../components/Navbar';

it('renders correctly', () => {
  const testQuote = renderer.create(<Navbar />).toJSON();
  expect(testQuote).toMatchSnapshot();
});