import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import Layout from './Layout';

describe('Should render a layout with a children', () => {
  test('Render layout', () => {
    render(
      <ThemeProvider theme={theme}>
        <Layout title="Home">
          <div>Hola</div>
        </Layout>
      </ThemeProvider>,
    );
    expect(screen.getByText(/Hola/)).toBeInTheDocument();
  });
});
