import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer grid lg:justify-around footer-vertical lg:footer-horizontal bg-[#B34D00] text-neutral-content p-10 border-2 mt-24">
      <aside>
        <img
          className="size-12 hidden lg:block"
          src="/Logo1.png"
          alt="LiveMate"
        />
        <p className="font-medium">
          LiveMate ltd.
          <br />
          Providing reliable service since 2018.
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4 ">
          <a
            href={"https://www.facebook.com/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF size={28} />
          </a>
          <a href={"https://x.com/"} target="_blank" rel="noopener noreferrer">
            <FaTwitter size={28} />
          </a>
          <a
            href={"https://www.instagram.com/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={28} />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
