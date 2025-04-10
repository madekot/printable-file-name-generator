import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Checkbox from "./Checkbox";

describe("Checkbox component", () => {
  it("рендерится с меткой", () => {
    render(<Checkbox label="Test checkbox" checked={false} onChange={() => {}} />);

    const checkbox = screen.getByLabelText("Test checkbox");
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
  });

  it("отображает состояние checked", () => {
    render(<Checkbox label="Test checkbox" checked={true} onChange={() => {}} />);

    expect(screen.getByLabelText("Test checkbox")).toBeChecked();
  });

  it("вызывает onChange при клике", async () => {
    const handleChange = jest.fn();
    render(<Checkbox label="Test checkbox" checked={false} onChange={handleChange} />);

    await userEvent.click(screen.getByLabelText("Test checkbox"));
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it("применяет пользовательские классы", () => {
    const { container } = render(
      <Checkbox
        label="Test checkbox"
        checked={false}
        onChange={() => {}}
        className="custom-class"
      />
    );

    expect(container.querySelector("label.custom-class")).toBeInTheDocument();
  });

  it("рендерится без метки", () => {
    render(<Checkbox checked={false} onChange={() => {}} />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();

    expect(checkbox).not.toHaveAccessibleName();
  });

  it("передает дополнительные props в label", () => {
    render(<Checkbox checked={false} onChange={() => {}} aria-label="Custom label" />);

    expect(screen.getByLabelText("Custom label")).toBeInTheDocument();
  });
});
