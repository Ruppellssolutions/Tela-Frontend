"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const ResponsiveNavbar = ({ isActive = false, closeHandler = () => {} }) => {
    const pathname = usePathname();

    useEffect(() => {
        closeHandler();
    }, [pathname]);

    return (
        <section
            id="responsive-navbar"
            className={`fixed top-0 w-[100vw] h-[100vh] bg-[#130E19] p-[20px_8%] transition-[right] ${
                isActive ? "right-0" : "right-[-100vw]"
            }`}
        >
            <div className="head flex items-center justify-between mb-20">
                <Link href="/">
                    <h2>
                        <Image
                            width={200}
                            height={100}
                            src="/icons/logo/tela.svg"
                            alt="tela logo"
                        />
                    </h2>
                </Link>
                <div
                    className="close-container flex items-center justify-center cursor-pointer"
                    onClick={closeHandler}
                >
                    <Image
                        src="/icons/main/close.svg"
                        alt="close icon"
                        width={24}
                        height={24}
                    />
                </div>
            </div>
            <nav className="navigations">
                <ul className="navs">
                    <li>
                        <Link
                            href="/"
                            className={`text-[17px] text-[#fff] mb-[24px] block font-['SF_UI_Display_Thin'] ${
                                pathname === "/"
                                    ? "!font-['SF_UI_Display_Medium']"
                                    : ""
                            }`}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/services"
                            className={`text-[17px] text-[#fff] mb-[24px] block font-['SF_UI_Display_Thin'] ${
                                pathname === "/services"
                                    ? "!font-['SF_UI_Display_Medium']"
                                    : ""
                            }`}
                        >
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about-us"
                            className={`text-[17px] text-[#fff] mb-[24px] block font-['SF_UI_Display_Thin'] ${
                                pathname === "/about-us"
                                    ? "!font-['SF_UI_Display_Medium']"
                                    : ""
                            }`}
                        >
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/contact-us"
                            className={`text-[17px] text-[#fff] mb-[24px] block font-['SF_UI_Display_Thin'] ${
                                pathname === "/contact-us"
                                    ? "!font-['SF_UI_Display_Medium']"
                                    : ""
                            }`}
                        >
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </nav>
        </section>
    );
};

export default ResponsiveNavbar;
