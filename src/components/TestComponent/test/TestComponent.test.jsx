import { screen } from "@testing-library/react";
import TestComponent from "@/src/components/TestComponent";
import renderWithIntegrationProvider from "@/configs/vitest/customRender";

it("Label is displayed", () => {
  const result = renderWithIntegrationProvider(
    <TestComponent label="label" />,
  ).container;

  const label = screen.getByText("label");
  expect(label).toBeInTheDocument();
  expect(result).toMatchSnapshot();
});
