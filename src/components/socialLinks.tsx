"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function SocialLinks() {
  const [links, setLinks] = useState({
    instagram: "https://www.instagram.com/vilje.trauma.ciala/",
    tiktok: "https://www.tiktok.com/@vilje.psycholog",
    email: "mailto:vilje.katarzynapsycholog@gmail.com",
  });

  useEffect(() => {
    const ua = navigator.userAgent || navigator.vendor;

    const isMobile = /android|iphone|ipad|ipod/i.test(ua);

    if (isMobile) {
      setLinks({
        instagram: "instagram://user?username=vilje.trauma.ciala",
        tiktok: "https://www.tiktok.com/@vilje.psycholog",
        email: "mailto:vilje.katarzynapsycholog@gmail.com",
      });
    }
  }, []);

  return (
    <div className="flex flex-col justify-center items-center flex-wrap gap-2 text-sm md:font-semibold font-normal">
      <Link href={links.instagram} target={"_blank"}>
        INSTAGRAM
      </Link>
      <Link href={links.tiktok} target={"_blank"}>
        TIKTOK
      </Link>
      <Link href={links.email} target={"_self"}>
        EMAIL
      </Link>
    </div>
  );
}
