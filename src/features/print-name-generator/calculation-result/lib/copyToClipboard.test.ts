import { copyToClipboard } from "./copyToClipboard";

describe("copyToClipboard", () => {
  beforeEach(() => {
    Object.assign(navigator, {
      clipboard: {
        writeText: jest.fn().mockResolvedValue(undefined),
      },
    });
    jest.spyOn(window, "alert").mockImplementation(() => {});
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("должна вызывать navigator.clipboard.writeText с переданным текстом", async () => {
    const text = "Тестовый текст";
    await copyToClipboard(text);
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(text);
  });

  it("должна вызывать alert с подтверждением копирования", async () => {
    const text = "Тестовый текст";
    await copyToClipboard(text);
    expect(window.alert).toHaveBeenCalledWith("Текст скопирован: " + text);
  });

  it("должен вывести ошибку в консоль и alert, если clipboard.writeText не удаётся", async () => {
    // Мокаем clipboard.writeText, чтобы он возвращал отклонённый промис
    navigator.clipboard.writeText = jest.fn().mockRejectedValue(new Error("Ошибка доступа"));

    await copyToClipboard("Тестовый текст");

    // Добавляем задержку для ожидания асинхронных операций, иначе получим провал теста
    await new Promise((resolve) => setTimeout(resolve, 0));

    // Проверяем, что console.error был вызван с ошибкой
    expect(console.error).toHaveBeenCalledWith("Ошибка копирования: ", expect.any(Error));

    // Проверяем, что alert был вызван с нужным сообщением
    expect(window.alert).toHaveBeenCalledWith("Не удалось скопировать текст.");

    // Проверяем, что writeText был вызван с правильным текстом
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith("Тестовый текст");
  });
});
