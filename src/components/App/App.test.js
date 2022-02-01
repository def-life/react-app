import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


// delete this comment
// npx create-react-app my-app --use-npm
// if u get yarn.lock file or you see yarn start test or like that so you can replace yarn with npmcd

// to serve you just say npx serve -s build (-s maybe stand for static)
