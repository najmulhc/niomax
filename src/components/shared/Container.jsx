const Container = ({ id, children, className }) => {
  return (
    <section
      id={id}
      className={`w-full py-8 px-[1.875rem] md:px-[18.75rem] md:py-[7.5rem] ${className}`}
    >
      {children}
    </section>
  );
};

export default Container;
