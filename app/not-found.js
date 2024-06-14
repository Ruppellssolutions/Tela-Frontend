"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const notFound = () => {
    const router = useRouter();

    return (
        <section
            id="not-found"
            className="w-full h-[100vh] center-align flex-col"
        >
            <h2 className="text-[28px]">Requested page not found!</h2>
            <Link
                href="#"
                onClick={(e) => {
                    e.preventDefault();
                    router.back();
                }}
                className="flex align-center gap-[14px] border-[1px] border-[#000] border-solid w-max rounded-[20px] p-[6px_15px] mt-[24px]"
            >
                <span className="text">Go back</span>
                <span className="icon center-align w-[22px]">
                    <Image
                        className="w-[100%]"
                        src="/icons/main/right-arrow.svg"
                        alt="right arrow"
                        width={20}
                        height={20}
                    />
                </span>
            </Link>
        </section>
    );
};

export default notFound;
