import React from "react";

const Footer = () => {
  return (
    <footer className="bottom">
      <div className="bottom-Page">
        <div className="footer container">
          <div className="footer-left">
            <div className="footer-left">
              <h4 className="title">Về chúng tôi</h4>
              <span>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis a dicta id dolorum, ipsa fugiat maiores magnam
                laudantium culpa perferendis placeat doloremque nam omnis fuga
                modi doloribus autem eaque minima.
              </span>
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-right">
              <h4 className="title">Theo dõi chúng tôi tại</h4>
              <div className="socialIcon">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-facebook-messenger"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-youtube"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
