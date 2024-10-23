import { useState } from "react";
import { Input } from "../design-system/molecules/Input";
import { Button } from "../design-system/molecules/Button";
import clsx from "clsx";
import "./FormSearch.scss";

export const FormSearch = ({
  onSubmit,
  value,
}: {
  onSubmit: (inputValue: string) => void;
  value: string;
}) => {
  const [inputValue, setInputValue] = useState<string>(value);
  const className = clsx("app-c-form-search");

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(inputValue);
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className={className}>
        <Input
          placeholder="Type your organization name"
          onChange={handleChangeInput}
          value={inputValue}
        />
        <Button type="submit">Search</Button>
      </div>
    </form>
  );
};
