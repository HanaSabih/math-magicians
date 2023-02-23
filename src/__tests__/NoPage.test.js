import renderer from 'react-test-renderer';
import NoPage from '../components/NoPage';

it('renders correctly', () => {
  const testQuote = renderer.create(<NoPage />).toJSON();
  expect(testQuote).toMatchSnapshot();
});