import renderer from 'react-test-renderer';
import Home from '../components/Home';

it('renders correctly', () => {
  const testQuote = renderer.create(<Home />).toJSON();
  expect(testQuote).toMatchSnapshot();
});
