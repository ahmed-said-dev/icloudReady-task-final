import React from "react";
import "./Footer.css";


function FooterContent() {
  return (
    <div id="footer" className="bg-white text-center justify-content-center">
      <p>
        Got questions? Take a look at our <span>FAQs</span>, talk to us on
        Twitter <span>@icloudready</span>, or send an email to{" "}
        <span>team@icloud-ready.com</span>
      </p>
    </div>
  );
}

function Footer() {
  return (
    <>
      <FooterContent />
    </>
  );
}

export default Footer;
