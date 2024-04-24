'use client';
import MainStackLogo from '@app/assets/svg/MainStackLogo';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import HomeIcon from '@app/assets/svg/HomeIcon';
import AnalyticsIcon from '@app/assets/svg/AnalyticsIcon';
import RevenueIcon from '@app/assets/svg/RevenueIcon';
import PeopleIcon from '@app/assets/svg/PeopleIcon';
import AppsIcon from '@app/assets/svg/AppsIcon';
import NotificationIcon from '@app/assets/svg/NotificationIcon';
import ChatIcon from '@app/assets/svg/ChatIcon';
import MenuIcon from '@app/assets/svg/MenuIcon';

const links = [
  {
    href: '',
    name: 'Home',
    icon: <HomeIcon />,
  },
  {
    href: '',
    name: 'Analytics',
    icon: <AnalyticsIcon />,
  },
  {
    href: '/',
    name: 'Revenue',
    icon: <RevenueIcon />,
  },
  {
    href: '',
    name: 'CRM',
    icon: <PeopleIcon />,
  },
  {
    href: '',
    name: 'Apps',
    icon: <AppsIcon />,
  },
];

export default function NavBar() {
  const currentRoute = usePathname();

  const activeStyle = 'bg-[#131316] text-white';
  const nonActiveLink = 'bg-white text-[#56616B] hover:bg-[#EFF1F6]';
  return (
    <nav className="shadow-navShadow flex h-16 items-center justify-between rounded-[100px] border-2 border-white p-2 lg:p-4">
      <MainStackLogo />
      <ul className="hidden md:flex items-center md:gap-1 lg:gap-5">
        {links.map((link, index) => (
          <li
            key={index}
            className={`${currentRoute === link.href ? activeStyle : nonActiveLink} rounded-[100px] py-2 pl-[14px] pr-[18px] font-semibold text-xs lg:text-base`}
          >
            <Link href={link.href} className="flex items-center gap-1">
              {link.icon}
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-0 lg:gap-2">
        <span className="flex w-10 justify-center">
          <NotificationIcon />
        </span>
        <span className="flex w-10 justify-center">
          <ChatIcon />
        </span>
        <div className="flex items-center gap-2 rounded-[100px] bg-[#EFF1F6] py-1 pl-[5px] pr-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-[#5C6670] to-[#131316] text-white">
            OJ
          </div>
          <MenuIcon />
        </div>
      </div>
    </nav>
  );
}
