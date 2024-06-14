import Image from "next/image";
import Footer from "@/components/general/Footer";
import ContactForm from "@/components/contact-us/ContactForm";

const ContactUs = () => {
    return (
        <>
            <main
                id="contact-us"
                className="pt-[120px] pb-[68px] md:pb-[100px]"
            >
                <section
                    id="content"
                    className="wrapper flex items-center justify-between flex-wrap gap-[58px] md:gap-0"
                >
                    <div className="left w-full md:w-[45%]">
                        <h2 className="text-black text-[32px] md:text-[38px] lg:text-[46px] font-['SF_UI_Display_Medium'] mb-5">
                            Let&apos;s collaborate
                        </h2>
                        <p className="text-[16px]  md:text-[18px] lg:text-[20px] text-[#868686] font-['SF_UI_Display_Light']">
                            Let Us Help You Create Seamless Experiences!
                            <br /> At Tela, we are dedicated to creating
                            meaningful collaboration. Let&apos;s work together
                            to achieve your goals and reach new heights!
                        </p>
                        <div className="img-container my-10">
                            <Image
                                src="/icons/contact-us/map.svg"
                                alt="map"
                                width={500}
                                height={300}
                            />
                        </div>
                        <div
                            id="contact-details"
                            className="flex items-center flex-col lg:flex-row flex-wrap"
                        >
                            <p className="contact w-full lg:w-1/2 mb-[20px] lg:mb-0 flex items-start gap-[12px] md:gap-[14px] ">
                                <span className="icon center-align w-[24px]">
                                    <Image
                                        src="/icons/contact-us/phone-dark.svg"
                                        alt="phone"
                                        width={20}
                                        height={20}
                                    />
                                </span>
                                <span className="right flex  items-center flex-wrap gap-[12px]">
                                    <a
                                        href="tel:+917994720767"
                                        className="text-[#111] text-[15px]"
                                    >
                                        +91 7994 720 767
                                    </a>
                                    <a
                                        href="tel:+917994720767"
                                        className="text-[#111] text-[15px]"
                                    >
                                        +91 7994 720 767
                                    </a>
                                </span>
                            </p>
                            <p className="contact w-full lg:w-1/2 flex flex-wrap items-start gap-[12px] md:gap-[14px] ">
                                <span className="icon center-align w-[24px]">
                                    <Image
                                        src="/icons/contact-us/location.svg"
                                        alt="phone"
                                        width={20}
                                        height={20}
                                    />
                                </span>
                                <span className="right text-[#111] text-[15px] flex-1">
                                    612 Shadowmar Drive, New Orleans, adowmar ,
                                    New Orleans, LA 70115
                                </span>
                            </p>
                        </div>
                    </div>
                    <ContactForm />
                </section>
            </main>
            <Footer />
        </>
    );
};

export default ContactUs;
