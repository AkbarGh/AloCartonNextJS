"use client"; // برای استفاده از state و useEffect

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/site.config";
import { mainMenu } from "@/menu.config";
import Logo from "@/public/logo.svg";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // برای تشخیص اسکرول و تغییر استایل نوار
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'navbar-light bg-white shadow-sm' : 'navbar-dark bg-transparent'}`}>
      <div className="container">
        {/* لوگو و نام سایت */}
        <Link className="navbar-brand d-flex align-items-center gap-2" href="/">
          <Image
            src={Logo}
            alt="لوگو"
            width={42}
            height={26}
            className={isScrolled ? '' : 'filter brightness-0 invert'}
          />
          <span className={isScrolled ? 'text-dark' : 'text-white'}>
            {siteConfig.site_name}
          </span>
        </Link>

        {/* دکمه همبرگر برای موبایل */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="تغییر ناوبری"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* منوی اصلی */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            {/* آیتم‌های منو از فایل config */}
            {Object.entries(mainMenu).map(([key, href]) => (
              <li className="nav-item" key={href}>
                <Link 
                  className={`nav-link ${isScrolled ? 'text-dark' : 'text-white'} ${href === '/' ? 'active' : ''}`} 
                  href={href}
                  onClick={() => setIsOpen(false)}
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </Link>
              </li>
            ))}
            
            {/* دکمه ویژه (مثل Get Started) */}
            <li className="nav-item">
              <Link 
                href="https://github.com/9d8dev/next-wp" 
                className={`btn ${isScrolled ? 'btn-outline-primary' : 'btn-outline-light'} ms-2`}
                target="_blank"
              >
                شروع کنید
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}