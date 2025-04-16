import { pluralize } from "@shared/lib/pluralize";

export function pluralizeCopies(count: number): string {
  return pluralize(count, ["копия", "копии", "копий"]);
}

export function pluralizeTypes(count: number): string {
  return pluralize(count, ["вид", "вида", "видов"]);
}
