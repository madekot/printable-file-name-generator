import React from "react";
import clsx from "clsx";
import Button from "@shared/ui/Button";
import { useResetAll } from "../model/useResetAll";

interface ConfirmableButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const ButtonResetGenerator: React.FC<ConfirmableButtonProps> = ({
  className,
  ...buttonProps
}) => {
  const resetAll = useResetAll();

  const handleClick = () => {
    if (
      window.confirm("Вы уверены, что хотите сбросить настройки приложения?")
    ) {
      resetAll();
    }
  };

  return (
    <Button
      variant={"red"}
      onClick={handleClick}
      className={clsx(className)}
      {...buttonProps}
    >
      Очистить результат
    </Button>
  );
};

export default ButtonResetGenerator;
