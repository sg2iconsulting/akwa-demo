// import React from 'react';

// export interface SelectInputProps {
//   options: { value: string; label: string }[];
//   value?: string;
//   onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
//   className?: string;
// }

// const SelectInput = ({ options, value, onChange, className }: SelectInputProps) => {
//   return (
//     <select value={value} onChange={onChange} className={className}>
//       {options.map((option) => (
//         <option key={option.value} value={option.value}>
//           {option.label}
//         </option>
//       ))}
//     </select>
//   );
// };

// export default SelectInput;

import React from "react";

export interface SelectInputProps {
  options: { value: string; label: string }[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
}

const SelectInput = ({ options, value, onChange, className }: SelectInputProps) => {
  return (
    <select value={value} onChange={onChange} className={className}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectInput;