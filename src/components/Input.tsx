import { HTMLProps } from 'react';

const Input = (props: HTMLProps<HTMLInputElement>) => {
  return (
    <div className="relative mt-1 w-72">
      <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
        <input
          className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
          {...props}
        />
      </div>
    </div>
  );
};

export default Input;
