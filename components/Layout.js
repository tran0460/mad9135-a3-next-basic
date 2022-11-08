import Header from "./Header";

const Layout = (props) => {
  const children = props.children;
  return (
    <div className="content">
      <Header />
      {children} {/** To load <Component/> in _app.js */}
    </div>
  );
};

export default Layout;
