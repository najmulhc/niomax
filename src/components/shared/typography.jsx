/* eslint-disable react/prop-types */
export const H2 = ({ children, className }) => {
  return (
    <h2
      className={`font-bebas uppercase font-[500] text-[2.5rem] md:text-[3.875rem] md:leading-[3.875rem] leading-[3rem] ${className} `}
    >
      {children}
    </h2>
  );
};

export const P = ({ children, className }) => {
  return <p className={`font-roboto font-light text-lg leading-6 ${className}`}>{children}</p>;
};
