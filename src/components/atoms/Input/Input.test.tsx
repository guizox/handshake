import { render, fireEvent } from "../../../helper/tests";
import { Input } from "./Input";

const testId = "input";

describe("Input tests", () => {
  it("should render with proper fields", () => {
    const { getByTestId } = render(<Input testId={testId} />);
    expect(getByTestId(testId)).toBeInTheDocument();
  });

  it("should trigger onChange mock function", () => {
    const { getByTestId } = render(<Input testId={testId} />);
    const element = getByTestId(testId) as HTMLInputElement;
    fireEvent.change(element, { target: { value: "test" } });
    expect(element.value).toBe("test");
  });
});
