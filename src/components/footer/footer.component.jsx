import React from "react";
import "./footer.style.css";

const FooterPanel = () => {
  return (
    // <div>
    //   <div className="py-2 text-center footer-style">© ANAND KUMAR JHA &nbsp; {new Date().getFullYear()}</div>
    // </div>
                <p class="text-center">
                  <span Made className="footer text-white" href="#" target="_blank">Made with 🤍  by</span>                    
                  <a className="footer text-white" href="https://github.com/vsasvipul0605" rel="noopener noreferrer" target="_blank"> Vipul Sinha</a>
                </p>
  );
};

export default FooterPanel;
