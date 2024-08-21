import React, { useEffect } from "react";
import { useTheme } from "@mui/material";
const Footer = () => {
  const theme = useTheme();
  const background = theme.palette.mode;
  useEffect(() => {
    if (background === "dark") {
      document.getElementById("footer").style.backgroundColor = "#141b2d";
    } else {
      document.getElementById("footer").style.backgroundColor = "white";
    }
  }, [background]);

  return (
    <div id="footer" className="footer">
      MADE BY MANHVU DEV
    </div>
  );
};

export default Footer;
