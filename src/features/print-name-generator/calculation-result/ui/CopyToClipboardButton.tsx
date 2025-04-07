import Button from "@shared/ui/Button";
import { copyToClipboard } from "@shared/lib/copy-to-clipboard";
import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./CopyToClipboardButton.module.scss";

interface CopyToClipboardButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  copyContent: string;
}

const CopyToClipboardButton = ({ copyContent, className }: CopyToClipboardButtonProps) => {
  return (
    <Button
      onClick={() => copyToClipboard(copyContent)}
      className={clsx(styles.button, className)}
      variant="green"
    >
      Копировать имя
    </Button>
  );
};

export default CopyToClipboardButton;
