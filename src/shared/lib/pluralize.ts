/**
 * Склоняет слово по числу.
 * @param count Число
 * @param forms [Единственное, Множественное (родительный ед.ч.), Множественное (родительный мн.ч.)]
 * Например: ['копия', 'копии', 'копий']
 */
export function pluralize(count: number, forms: [string, string, string]): string {
  const mod10 = count % 10;
  const mod100 = count % 100;

  let form: string;

  if (mod10 === 1 && mod100 !== 11) {
    form = forms[0]; // копия
  } else if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) {
    form = forms[1]; // копии
  } else {
    form = forms[2]; // копий
  }

  return `${count} ${form}`;
}
