import { render, screen } from '@testing-library/react';

describe('Should render a layout with a children', () => {
  test('Render layout', () => {
    render(<div>Hola</div>);
    expect(screen.getByText(/Hola/)).toBeInTheDocument();
  });
});
