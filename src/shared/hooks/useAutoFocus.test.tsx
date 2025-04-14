import { render, screen } from "@testing-library/react";
import { useAutoFocus } from "./useAutoFocus";

const TestComponent = ({ shouldFocus = true }: { shouldFocus?: boolean }) => {
  const { ref } = useAutoFocus<HTMLInputElement>(shouldFocus);

  return <input ref={ref} data-testid="test-input" />;
};

describe("useAutoFocus", () => {
  it("должен установить фокус при монтировании, если shouldFocus = true", () => {
    render(<TestComponent />);
    const input = screen.getByTestId("test-input");

    // Проверка, что input получил фокус
    expect(document.activeElement).toBe(input);
  });

  it("не должен устанавливать фокус, если shouldFocus = false", () => {
    render(<TestComponent shouldFocus={false} />);
    const input = screen.getByTestId("test-input");

    // Проверка, что input НЕ в фокусе
    expect(document.activeElement).not.toBe(input);
  });
});
