import React from "react";
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoTwitter,
} from "react-icons/io5";
import footerStyles from "./footer.module.css";

const SiteFooter = () => {
  return (
    <footer className={footerStyles.mainFooter}>
      <div className={footerStyles.infoSection}>
        <div className={footerStyles.infoBlock}>
          <div className={footerStyles.infoTitle}>Reach Out</div>
          <p>10th Avenue, Seattle, WA, United States</p>
          <p>(206) 123-4567</p>
          <p>connect@brandco.com</p>
        </div>
        <div className={footerStyles.infoBlock}>
          <div className={footerStyles.infoTitle}>Service Hours</div>
          <p>Mon - Thu: 9am - 6pm</p>
          <p>Fri - Sun: 11am - 10pm</p>
        </div>
      </div>
      <div className={footerStyles.socialSection}>
        <div className={footerStyles.infoTitle}>Stay Connected</div>
        <div className={footerStyles.socialLinks}>
          <a
            href="https://www.instagram.com/brandco"
            target="_blank"
            rel="noreferrer"
            className={footerStyles.socialLinkItem}
          >
            <IoLogoInstagram />
            <span className={footerStyles.socialHandle}>@brandco</span>
          </a>
          <a
            href="https://www.facebook.com/brandco"
            target="_blank"
            rel="noreferrer"
            className={footerStyles.socialLinkItem}
          >
            <IoLogoFacebook />
            <span className={footerStyles.socialHandle}>@brandco</span>
          </a>
          <a
            href="https://www.twitter.com/brandco"
            target="_blank"
            rel="noreferrer"
            className={footerStyles.socialLinkItem}
          >
            <IoLogoTwitter />
            <span className={footerStyles.socialHandle}>@brandco</span>
          </a>
        </div>
      </div>
      <div className={footerStyles.copySection}>
        &copy; {new Date().getFullYear()} BRAND. All rights reserved.
      </div>
    </footer>
  );
};

export default SiteFooter;
