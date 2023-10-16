"use client"

import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";

const ActLink = ({ href, children }) => {
  const router = useRouter();
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    setActive(router.pathname === href);
  }, [router.pathname, href]);

  return (
    <Link href={href}>
      <a className={isActive ? "active" : "default"}>{children}</a>
    </Link>
  );
};

export default ActLink;
