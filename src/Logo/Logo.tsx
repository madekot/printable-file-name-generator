import clsx from "clsx";

interface Props {
  className?: string;
}

export const Logo = ({ className }: Props) => {
  return (
    <a className={clsx(className)} href={"https://t.me/+IvpqDKzVkpdjMWEy"}>
      <img
        src="/Mishka-I-Shishka-production.png"
        width={100}
        height={100}
        alt="Мишка И Шишка продакшен"
      />
    </a>
  );
};
