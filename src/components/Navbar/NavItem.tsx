"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { FC } from "react";
import React, { memo } from "react";

interface IProps {
  href: string;
  name: string;
}

const NavItem: FC<IProps> = (props) => {
  const { href, name } = props;
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={clsx(
        "text-base-content h-full items-center flex justify-center font-medium hover:border-b-3 hover:border-base-content ",
        {
          "text-primary border-b-3 border-primary": href === pathname,
        },
      )}
    >
      {name}
    </Link>
  );
};

export default memo(NavItem);
