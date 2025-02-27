// Функция для расчета общего числа копий
const calculateTotalCopies = (
  totalQuantity: number,
  itemsPerSheet: number,
  extraCopies: number = 0
): number => {
  return Math.ceil(totalQuantity / itemsPerSheet) + extraCopies;
};

export { calculateTotalCopies };
