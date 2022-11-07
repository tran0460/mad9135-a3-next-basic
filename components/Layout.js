const Layout = (props) => {
  const children = props.children;
  return (
    <div className="content">
      {children} {/** To load <Component/> in _app.js */}
    </div>
  );
};

export default Layout;
