'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import BioLinkIcon from '@app/assets/svg/BioLinkIcon';
import StoreIcon from '@app/assets/svg/StoreIcon';
import MediaKitIcon from '@app/assets/svg/MediaKitIcon';
import InvoiceIcon from '@app/assets/svg/InvoiceIcon';
import LeftArrowIcon from '@app/assets/svg/LeftArrowIcon';

const links = [
  {
    href: '',
    icon: <BioLinkIcon />,
    name: 'Link in Bio',
  },
  {
    href: '',
    icon: <StoreIcon />,
    name: 'Store',
  },
  {
    href: '',
    icon: <MediaKitIcon />,
    name: 'Media Kit',
  },
  {
    href: '',
    icon: <InvoiceIcon />,
    name: 'Invoicing',
  },
];

export default function SideBar() {
  const [hoverOnItem, setHoverOnItem] = useState<number | null>(null);
  return (
    <div className="shadow-sideBarShadow w-12 rounded-[100px] p-1">
      <ul className="flex flex-col gap-2">
        {links.map((link, index) => (
          <li
            key={index}
            onMouseEnter={() => setHoverOnItem(index)}
            onMouseLeave={() => setHoverOnItem(null)}
            className="relative flex h-10 w-10 items-center justify-center rounded-full hover:bg-[#EFF1F6]"
          >
            <Link href={link.href} className="flex items-center gap-1">
              {link.icon}
            </Link>
            <div
              className={`${hoverOnItem === index ? 'visible' : 'invisible'} absolute left-12 z-10 flex items-center`}
            >
              <LeftArrowIcon />
              <div className=" text-nowrap rounded-lg bg-[#131316] px-3 py-2 text-sm font-medium text-white shadow-sm">
                {link.name}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
