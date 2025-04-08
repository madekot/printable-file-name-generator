export const filterInvalidChars = (val: string) => val.replace(/\D/g, "").replace(/^0\d/, "0");
