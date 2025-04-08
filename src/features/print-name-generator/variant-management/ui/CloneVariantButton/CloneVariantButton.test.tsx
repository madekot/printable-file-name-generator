import { render, screen, fireEvent } from "@testing-library/react";
import CloneVariantButton from "./CloneVariantButton";

// Мокаем стили для тестов
jest.mock("./CloneVariantButton.module.scss", () => ({
  cloneVariantButton: "cloneVariantButton_mockedClass", // Мокаем класс стилей
}));

describe("CloneVariantButton", () => {
  const mockClickHandler = jest.fn();

  beforeEach(() => {
    mockClickHandler.mockClear();
  });

  it("рендерит кнопку с кастомным текстом", () => {
    render(
      <CloneVariantButton variantId={1} clickHandler={mockClickHandler}>
        Копировать вариант
      </CloneVariantButton>
    );

    expect(screen.getByRole("button", { name: /Копировать вариант/i })).toBeInTheDocument();
  });

  it("рендерит кнопку с дефолтным именем если кастомный не передавали", () => {
    render(<CloneVariantButton variantId={2} clickHandler={mockClickHandler} />);

    expect(screen.getByRole("button", { name: /Дублировать/i })).toBeInTheDocument();
  });

  it("рендерит кнопку с текстом и иконкой", () => {
    render(<CloneVariantButton variantId={123} clickHandler={mockClickHandler} />);

    const button = screen.getByRole("button", { name: /дублировать/i });
    expect(button).toBeInTheDocument();
  });

  it("вызывает clickHandler с правильным variantId при клике", () => {
    render(<CloneVariantButton variantId={123} clickHandler={mockClickHandler} />);

    const button = screen.getByRole("button", { name: /дублировать/i });
    fireEvent.click(button);

    expect(mockClickHandler).toHaveBeenCalledTimes(1);
    expect(mockClickHandler).toHaveBeenCalledWith(123);
  });

  it("применяет базовый класс из SCSS-модуля", () => {
    render(<CloneVariantButton variantId={123} clickHandler={mockClickHandler} />);

    const button = screen.getByRole("button", { name: /дублировать/i });
    // Проверяем, что применился мокнутый класс из SCSS-модуля
    expect(button).toHaveClass("cloneVariantButton_mockedClass");
  });

  it("применяет переданный className", () => {
    render(
      <CloneVariantButton
        variantId={456}
        clickHandler={mockClickHandler}
        className="custom-class"
      />
    );

    const button = screen.getByRole("button", { name: /дублировать/i });
    expect(button).toHaveClass("custom-class");
  });

  it("отображает иконку внутри кнопки", () => {
    const { container } = render(
      <CloneVariantButton variantId={123} clickHandler={mockClickHandler} />
    );

    const svgIcon = container.querySelector("svg");
    expect(svgIcon).toBeInTheDocument();
  });
});
