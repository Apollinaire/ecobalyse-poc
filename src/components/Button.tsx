import { HTMLProps } from 'react';

const Button = (props: HTMLProps<HTMLButtonElement>) => (
  <button
    {...props}
    type="button"
    className="mt-1 block rounded-lg bg-gray-300 px-4 py-1 shadow-md hover:bg-gray-200"
  />
);

export default Button;
