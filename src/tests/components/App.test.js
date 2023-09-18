import { render, screen } from '@testing-library/react';
import App from '../../components/App';
import forecast from "../../data/forecast.json";

describe("App", () => {
  test('renders correctly', () => {
    render(
    <App location={forecast.location}
    forecasts={forecast.forecasts}
    />);
    const h1Element = screen.getByText(/Manchester, UK/i);
    const divElement = screen.getAllByTestId(forecast);
    expect(h1Element).toBeInTheDocument();
    expect(divElement).toBeInTheDocument();
  });

});
