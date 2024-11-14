const Container = ({ id, children, className, Decoration }) => {
  return (
    <section
      id={id}
      className={`w-full py-8 px-[1.875rem] md:py-[7.5rem] ${className} overflow-hidden relative top-0 left-0`}
    >
     {
      Decoration && <Decoration />
     }
      <div className="md:w-[82.5rem] mx-auto z-10"> {children}</div>
    </section>
  );
};

export default Container;
