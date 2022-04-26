import { screen, render } from '@testing-library/react';
import Layout from './Layout';

describe('Layout test', () => {
  it('Should show children correctly', () => {
    render(
      <Layout title="Example page">
        <div>Im a div</div>
      </Layout>,
    );
    expect(screen.getByText(/Im a div/i)).toBeInTheDocument();
  });
});
