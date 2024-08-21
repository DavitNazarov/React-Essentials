const Tabs = ({ children, buttons, ButtonsConteiner = "div" }) => {
  // const ButtonConteiner = buttonsConteiner;
  return (
    <>
      <ButtonsConteiner>{buttons} </ButtonsConteiner>
      {children}
    </>
  );
};

export default Tabs;
