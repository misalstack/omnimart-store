import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <a className="block md:flex items-center justify-center w-full flex-grow md:flex-grow-0">
        <img
          src="/images/OmniMart-logo.png"
          alt="OmniMart-logo"
          width={120}
          height={40}
          className="cursor-pointer object-contain md:ltr:-mr-3"
        />
      </a>
    </Link>
  );
};

export default Logo;
