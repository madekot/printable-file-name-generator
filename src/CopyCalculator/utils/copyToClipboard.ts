// Универсальная функция для копирования текста в буфер обмена
const copyToClipboard = (text: string) => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("Текст скопирован: " + text);
    })
    .catch((err) => {
      console.error("Ошибка копирования: ", err);
      alert("Не удалось скопировать текст.");
    });
};
export { copyToClipboard };
