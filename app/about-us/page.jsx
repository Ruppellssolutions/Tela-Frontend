import Footer from "@/components/general/Footer";
import Image from "next/image";

const page = () => {
    return (
        <section id="about-us">
            <main className="wrapper pt-[90px] sm:pt-[180px] pb-[60px] sm:pb-[100px]">
                <div className="head flex items-center gap-5 justify-between flex-wrap">
                    <h2 className="text-[28px] sm:text-[38px] w-full md:w-[35%] font-['SF_UI_Display_Medium']">
                        About Us
                    </h2>
                    <p className="description w-full md:w-[60%] text-[17px] sm:text-[22px] lg:text-[26px] font-['SF_UI_Display_Thin']">
                        Delivering services that exceed your
                        <span className="font-['SF_UI_Display_Light'] mx-1">
                            expectations
                        </span>
                        and forging long-lasting memories.
                    </p>
                </div>
                <div className="image-container my-5 sm:my-10">
                    <Image
                        src="/images/about-us/about-us-hero.png"
                        alt="about us hero image"
                        width={700}
                        height={300}
                    />
                </div>
                <p className="description w-full lg:w-[80%] mx-auto text-[16px] sm:text-[22px] lg:text-[24px] font-['SF_UI_Display_Thin']">
                    We find it our responsibility to extend optimal service to
                    customers by providing culinary excellence and manpower
                    solutions to individuals, corporations, and entities. Adding
                    our best to the table, we take pride in providing
                    trustworthy and dependable services to our clients. With
                    experienced chefs and a team, we cook delicious marvels,
                    with an impression that stays ever after. With extensive
                    industry knowledge and data, we provide excellent candidates
                    for general and unique requirements.
                </p>
            </main>
            <div id="choose-us" className="bg-[#FFF7E8]">
                <div className="wrapper p-[60px_0] md:p-[100px_0]">
                    <div className="container bg-white p-[36px_20px] sm:p-[44px_28px] rounded-xl flex flex-wrap gap-[10%]">
                        <div className="left w-full md:w-[45%] flex flex-col justify-between mb-10 md:m-0">
                            <h6 className="text-[22px] md:text-[28px] lg:text-[34px] font-['SF_UI_Display_Thin'] mb-10">
                                Unmatched{" "}
                                <span className="font-['SF_UI_Display_Medium']">
                                    quality
                                </span>{" "}
                                meets Unparalleled{" "}
                                <span className="font-['SF_UI_Display_Medium']">
                                    Dedication!
                                </span>
                            </h6>
                            <ul className="counts flex  items-center gap-5">
                                <li className="count">
                                    <span className="count block text-[26px] font-['SF_UI_Display_Medium']">
                                        120+
                                    </span>
                                    <span className="title font-['SF_UI_Display_Thin'] text-[#070707] text-center block">
                                        Clients
                                    </span>
                                </li>
                                <li className="count">
                                    <span className="count block text-[26px] font-['SF_UI_Display_Medium']">
                                        3.4
                                    </span>
                                    <span className="title font-['SF_UI_Display_Thin'] text-[#070707] text-center block">
                                        Years
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="right w-full md:w-[45%]">
                            <ul className="mission-vision">
                                <li className="vision mb-10 last:mb-0">
                                    <div className="top flex items-center gap-5 mb-4">
                                        <span className="icon center-align w-9">
                                            <Image
                                                className="w-full"
                                                src="/icons/about-us/vision.svg"
                                                alt="vision"
                                                width={34}
                                                height={34}
                                            />
                                        </span>
                                        <h6 className="text-[#070707] text-[24px]">
                                            We Provide
                                        </h6>
                                    </div>
                                    <p className="description md:text-[18px] lg:text-[19px] font-['SF_UI_Display_Thin']">
                                        We follow two motos in our line of work.
                                        Choosing the superior one in quality and
                                        delivering credible service. Rest
                                        assured, you will have peace of mind.
                                    </p>
                                </li>
                                <li className="mission mb-10 last:mb-0">
                                    <div className="top flex items-center gap-5 mb-4">
                                        <span className="icon center-align w-9">
                                            <Image
                                                className="w-full"
                                                src="/icons/about-us/mission.svg"
                                                alt="mission"
                                                width={34}
                                                height={34}
                                            />
                                        </span>
                                        <h6 className="text-[#070707] text-[24px]">
                                            We Promise
                                        </h6>
                                    </div>
                                    <p className="description md:text-[18px] lg:text-[19px] font-['SF_UI_Display_Thin']">
                                        Our objectives are uncompromised
                                        dedication and going to any lengths to
                                        ensure you get the best out of the deal
                                        from us. That&apos;s our promise to you.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </section>
    );
};

export default page;
