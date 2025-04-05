import { getMaxCopies } from "./getMaxCopies";
import { calculateTotalCopies } from "./calculateTotalCopies";
import { Variant } from "../model/types";

jest.mock("./calculateTotalCopies");
const mockedCalculateTotalCopies = calculateTotalCopies as jest.MockedFunction<
  typeof calculateTotalCopies
>;

describe("getMaxCopies", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockedCalculateTotalCopies.mockImplementation(() => 0);
  });

  it("возвращает максимальное число из calculateTotalCopies для всех вариантов", () => {
    const variants: Variant[] = [{}, {}, {}] as Variant[];

    mockedCalculateTotalCopies
      .mockReturnValueOnce(5)
      .mockReturnValueOnce(12)
      .mockReturnValueOnce(9);

    const result = getMaxCopies(variants, 0);
    expect(result).toBe(12);
    expect(mockedCalculateTotalCopies).toHaveBeenCalledTimes(3);
  });

  it("возвращает 0, если массив variants пуст", () => {
    const result = getMaxCopies([], 3);
    expect(result).toBe(0);
    expect(mockedCalculateTotalCopies).not.toHaveBeenCalled();
  });

  it("обрабатывает отрицательные значения, возвращённые calculateTotalCopies", () => {
    const variants: Variant[] = [{}, {}] as Variant[];

    mockedCalculateTotalCopies.mockReturnValueOnce(-4).mockReturnValueOnce(-7);

    const result = getMaxCopies(variants, 0);
    expect(result).toBe(0);
    expect(mockedCalculateTotalCopies).toHaveBeenCalledTimes(2);
  });
});
