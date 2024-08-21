import React, { useState } from "react";
import { Content, SideBar, Header, Footer } from "./index";
const Layout = () => {
  const [isSidebar, setIsSidebar] = useState(false);
  return (
    <div className="layout">
      <SideBar isSidebar={isSidebar} />
      <div className="layout-body">
        <Header setIsSidebar={setIsSidebar} />
        <Content />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
