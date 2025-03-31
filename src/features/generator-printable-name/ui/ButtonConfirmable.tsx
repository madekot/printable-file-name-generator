import React from "react";
import clsx from "clsx";
import Button from "@shared/ui/Button";

type ButtonVariant = "default" | "delete" | "red" | "green" | "primary";

interface ConfirmableButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onConfirm: () => void;
  confirmMessage?: string;
  buttonText?: string;
  variant?: ButtonVariant;
  className?: string;
}

const ButtonConfirmable: React.FC<ConfirmableButtonProps> = ({
  onConfirm,
  confirmMessage = "Вы уверены?",
  buttonText = "Подтвердить",
  variant,
  className,
  ...buttonProps
}) => {
  const handleClick = () => {
    if (window.confirm(confirmMessage)) {
      onConfirm();
    }
  };

  return (
    <Button
      variant={variant}
      onClick={handleClick}
      className={clsx(className)}
      {...buttonProps}
    >
      {buttonText}
    </Button>
  );
};

export default ButtonConfirmable;
