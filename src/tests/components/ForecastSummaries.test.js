import React from 'react';
import { render, screen } from "@testing-library/react";
import ForecastSummaries from '../../components/ForecastSummaries';

describe("Forecast Summaries", () => {
    const validProps = {
        forecasts: [
            {
                date: 1111111,
                description: "Stub description",
                icon: 800,
                temperature: {
                    max: 22,
                    min: 12,
                },
            },
            {
                date: 2222222,
                description: "Stub description2",
                icon: 800,
                temperature: {
                    max: 24,
                    min: 13,
                },
            },
        ],
        onForecastSelect: () => {},
    };

    it("renders correctly", () => {
        const { asFragment } = render(<ForecastSummaries 
            forecasts={validProps.forecasts}
            onForecastSelect={validProps.onForecastSelect} />);
        expect(asFragment()).toMatchSnapshot();
    });
    it("renders the correct number of ForecastSummary instances", () => {
        const { getByText } = render(
            <ForecastSummaries onForecastSelect={validProps.onForecastSelect} />
        );
        expect(getByText("onForecastSelect")).toHaveBeenCalled()

    })
    it("renders the correct number of ForecastSummary instances", () => {
        const { getAllByTestId } = render(
            <ForecastSummaries forecasts={validProps} />
        );
        expect(getAllByTestId("forecast-summary")).toHaveLength(2)
    });
});