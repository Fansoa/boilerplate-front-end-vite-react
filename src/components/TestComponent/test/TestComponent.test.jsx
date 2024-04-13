import { screen } from "@testing-library/react";
import TestComponent from "@/src/components/TestComponent";
import renderWithIntegrationProvider from "@/configs/vitest/customRender";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

describe("TestComponent", async () => {
  it("Label is displayed", async () => {
    const { container } = renderWithIntegrationProvider(
      <TestComponent label="label" />,
    );
    const label = screen.getByText("label");
    expect(label).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  it("Button has been clicked", async () => {
    const { container } = renderWithIntegrationProvider(
      <TestComponent label="label" />,
    );
    const user = userEvent.setup();
    await act(async () => {
      await user.click(screen.getByRole("button", { name: /label/i }));
    });
    const toastMessage = screen.getByText(/Button has been clicked/i);
    expect(toastMessage).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
