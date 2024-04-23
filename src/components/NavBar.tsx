'use client';
import MainStackLogo from '@app/assets/svg/MainStackLogo';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import HomeIcon from '@app/assets/svg/HomeIcon';
import AnalyticsIcon from '@app/assets/svg/AnalyticsIcon';
import RevenueIcon from '@app/assets/svg/REvenueIcon';
import PeopleIcon from '@app/assets/svg/PeopleIcon';
import AppsIcon from '@app/assets/svg/AppsIcon';
import NotificationIcon from '@app/assets/svg/NotificationIcon';

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
    <nav className="items-centerh-16 shadow-[0_2px_4px_0px_rgba(45,59,67,0.05), 0_2px_6px_0px_rgba(45,59,67,0.06)] flex justify-between rounded-[100px] border-2 border-white p-4">
      <MainStackLogo />
      <ul className="flex items-center gap-5">
        {links.map((link, index) => (
          <li
            key={index}
            className={`${currentRoute === link.href ? activeStyle : nonActiveLink} rounded-[100px] py-2 pl-[14px] pr-[18px] font-semibold`}
          >
            <Link href={link.href} className="flex items-center gap-1">
              {link.icon}
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-2">
        <NotificationIcon />
      </div>
    </nav>
  );
}
