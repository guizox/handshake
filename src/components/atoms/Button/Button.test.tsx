import { theme } from "../../../theme";
import { fireEvent, render } from "../../../helper/tests";
import { Button } from "./Button";

describe("Button tests", () => {
  it("should render button with primary variant", () => {
    const { getByTestId } = render(
      <Button testId="primary-button" variant="primary">
        primary
      </Button>
    );

    const element = getByTestId("primary-button");

    expect(element).toBeInTheDocument();
    expect(element).toHaveStyle(
      `background-color: ${theme.palette.primary.main}`
    );
  });

  it("should render button with secondary variant", () => {
    const { getByTestId } = render(
      <Button testId="secondary-button" variant="secondary">
        primary
      </Button>
    );

    const element = getByTestId("secondary-button");

    expect(element).toBeInTheDocument();
    expect(element).toHaveStyle(
      `background-color: ${theme.palette.secondary.main}`
    );
  });

  it("should call click mock function once it clicks", () => {
    const mockClickFunction = jest.fn();
    const { getByTestId } = render(
      <Button
        testId="secondary-button"
        variant="secondary"
        onClick={mockClickFunction}
      >
        primary
      </Button>
    );

    const element = getByTestId("secondary-button");
    fireEvent.click(element);

    expect(mockClickFunction).toHaveBeenCalled();
  });
});
