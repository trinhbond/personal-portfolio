const style = {
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  width: "100%",
};

export const Section = ({ children }) => {
  return (
    <section className="section" style={style}>
      {children}
    </section>
  );
};
