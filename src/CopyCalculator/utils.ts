// Функция для расчета общего числа копий
const calculateTotalCopies = (
  totalQuantity: number,
  itemsPerSheet: number,
  extraCopies: number = 0
): number => {
  return Math.ceil(totalQuantity / itemsPerSheet) + extraCopies;
};

// Функция для расчета остатка
const calculateRemainingItems = (
  totalQuantity: number,
  itemsPerSheet: number,
  extraCopies: number = 0
): number => {
  const totalCopies = calculateTotalCopies(
    totalQuantity,
    itemsPerSheet,
    extraCopies
  );
  return totalCopies * itemsPerSheet - totalQuantity;
};

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

export { calculateRemainingItems, calculateTotalCopies, copyToClipboard };
