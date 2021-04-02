import { render, screen } from '@testing-library/react';
import Post from '../components/Post';

describe('Post', () => {
  it('renders text', () => {
    render(<Post author="foo" message="bar"/>);
    const postElement = screen.queryByText('bar');
    expect(postElement).toBeTruthy();
  });
  it('renders text correctly', () => {
    render(<Post author="foo" message="bar"/>);
    const postText = screen.queryByTestId('text');
    expect(postText.textContent).toEqual('bar');
  });
});