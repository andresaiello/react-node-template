import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './index';

test('renders Metamask Test title', () => {
    render(<App />);
    const linkElement = screen.getByText(/Metamask Test/i);
    expect(linkElement).toBeInTheDocument();
});
