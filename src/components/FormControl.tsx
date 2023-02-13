import { PropsWithChildren, FC } from 'react';

interface FormControlProps {
  label: string;
  htmlFor?: string;
  helper?: string;
}

const FormControl: FC<PropsWithChildren<FormControlProps>> = ({
  label,
  helper,
  children,
  htmlFor,
}) => (
  <div>
    <label
      htmlFor={htmlFor}
      className="mb-2 block text-sm font-medium text-gray-900"
    >
      {label}
    </label>
    {children}
    {helper && (
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{helper}</p>
    )}
  </div>
);

export default FormControl;
