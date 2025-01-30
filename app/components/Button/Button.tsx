// // import React from 'react';

// // import './button.css';

// // export interface ButtonProps {
// //   /** Is this the principal call to action on the page? */
// //   primary?: boolean;
// //   /** What background color to use */
// //   backgroundColor?: string;
// //   /** How large should the button be? */
// //   size?: 'small' | 'medium' | 'large';
// //   /** Button contents */
// //   label: string;
// //   /** Optional click handler */
// //   onClick?: () => void;
// // }

// // /** Primary UI component for user interaction */
// // export const Button = ({
// //   primary = false,
// //   size = 'medium',
// //   backgroundColor,
// //   label,
// //   ...props
// // }: ButtonProps) => {
// //   const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
// //   return (
// //     <button
// //       type="button"
// //       className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
// //       {...props}
// //     >
// //       {label}
// //       <style jsx>{`
// //         button {
// //           background-color: ${backgroundColor};
// //         }
// //       `}</style>
// //     </button>
// //   );
// // };

// // import React from "react";

// // export interface ButtonProps {
// //   label: string;
// //   backgroundColor?: string;
// //   onClick: () => void;
// //   disabled?: boolean;
// // }

// // const Button: React.FC<ButtonProps> = ({
// //   label,
// //   backgroundColor = "#007bff", // Default to a blue color
// //   onClick,
// //   disabled = false,
// // }) => {
// //   const buttonStyle = {
// //     backgroundColor: disabled ? "#d6d6d6" : backgroundColor,
// //     color: disabled ? "#a1a1a1" : "#ffffff",
// //     padding: "10px 20px",
// //     border: "none",
// //     borderRadius: "5px",
// //     cursor: disabled ? "not-allowed" : "pointer",
// //     fontSize: "16px",
// //     fontWeight: "bold",
// //   };

// //   return (
// //     <button style={buttonStyle} onClick={onClick} disabled={disabled}>
// //       {label}
// //     </button>
// //   );
// // };

// // export default Button;


// import React from "react";

// export interface ButtonProps {
//   label: string;
//   className?: string;
//   backgroundColor?: string;
//   textColor?: string; // Added textColor prop
//   onClick: () => void;
// }

// const Button: React.FC<ButtonProps> = ({
//   label,
//   backgroundColor = "#007bff", 
//   textColor = "#ffffff",
//   onClick,
// }) => {
//   const buttonStyle = {
//     backgroundColor,
//     color: textColor, // Apply textColor to the button text
//     // padding: "10px 20px",
//     // border: "none",
//     // borderRadius: "5px",
//     // cursor: "pointer",
//     // fontSize: "16px",
//     // fontWeight: "bold",
//   };

//   return (
//     <button className={`w-28 h-7 md:w-36 md:h-10 xl:w-40 xl:h-12 2xl:w-[290px] 2xl:h-[67px] 
//       rounded-full cursor-pointer mt-2 text-[10px] md:text-[12px] xl:text-[16px] 
//       2xl:text-[22px] font-bold mb-2`} style={buttonStyle} onClick={onClick}>
//       {label}
//     </button>
//   );
// };

// export default Button;

// import React from "react";

// export interface ButtonProps {
//   label: string;
//   backgroundColor?: string; 
//   textColor?: string; 
//   onClick: () => void;
// }

// const Button: React.FC<ButtonProps> = ({
//   label,
//   backgroundColor,
//   textColor,
//   onClick,
// }) => {
//   return (
//     <button
//       onClick={onClick}
//       className={`w-28 h-7 md:w-36 md:h-10 xl:w-40 xl:h-12 2xl:w-[290px] 2xl:h-[67px] 
//         rounded-full cursor-pointer mt-2 text-[10px] md:text-[12px] xl:text-[16px] 
//         2xl:text-[22px] font-bold mb-2`}
//       style={{
//         backgroundColor: backgroundColor || undefined, 
//         color: textColor || undefined, 
//       }}
//     >
//       {label}
//     </button>
//   );
// };

// export default Button;

import React, { forwardRef } from "react";

export interface ButtonProps {
  label: string;
  backgroundColor?: string;
  textColor?: string;
  onClick?: () => void;
}
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ label, backgroundColor, textColor, onClick }, ref) => {
    return (
      <button
        onClick={onClick}
        ref={ref}
        className={`w-28 h-7 md:w-36 md:h-10 xl:w-40 xl:h-12 2xl:w-[290px] 2xl:h-[67px] 
          rounded-full cursor-pointer mt-2 text-[10px] md:text-[12px] xl:text-[16px] 
          2xl:text-[22px] font-bold mb-2`}
        style={{
          backgroundColor: backgroundColor || undefined,
          color: textColor || undefined,
        }}
      >
        {label}
      </button>
    );
  }
);

// Set displayName for better debugging in React dev tools
Button.displayName = "Button";

export default Button;
