import react from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("Forecast Details", () => {
    const validProps = {
        date: 1111111,
        temperature: {
            max: 22,
            min: 11,
        },
        humidity: 50,
        wind: {
            speed: 300,
            direction:"n"
        },
    };

    it("snapshot testing", () => {
        const { asFragment } = render(
            <ForecastDetails
                date={validProps.date}
                maxTemperature={validProps.temperature.max}
                minTemperature={validProps.temperature.min}
                humidity={validProps.humidity}
                windSpeed={validProps.wind.speed}
                windDirection={validProps.wind.direction}
            />
        );
        expect(asFragment()).toMatchSnapshot();
    });

    test("renders correct value", () => {
        const { getByText } = render(
            <ForecastDetails
                date={validProps.date}
                maxTemperature={validProps.temperature.max}
                minTemperature={validProps.temperature.min}
                humidity={validProps.humidity}
                windSpeed={validProps.wind.speed}
                windDirection={validProps.wind.direction}
            />
        )

        expect(getByText("Thu Jan 01 1970")).toHaveClass("forecast-details__date")
        expect(getByText("22°C")).toHaveClass("forecast-details__maxTemperature")
        expect(getByText("11°C")).toHaveClass("forecast-details__temperature__min")
        expect(getByText("50")).toHaveClass("forecast-details__humidity")
        expect(getByText("300")).toHaveClass("forecast-details__wind__speed")
        expect(getByText("n")).toHaveClass("forecast-details__wind__direction")
    });

});