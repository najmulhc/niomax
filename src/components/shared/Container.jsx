const Container = ({ id, children, className }) => {
  return (
    <section
      id={id}
      className={`w-full py-8 px-[1.875rem] md:py-[7.5rem] ${className} overflow-hidden`}
    >
      <div className="md:w-[82.5rem] mx-auto"> {children}</div>
    </section>
  );
};

export default Container;
