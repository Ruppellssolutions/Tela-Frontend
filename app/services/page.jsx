import Footer from "@/components/general/Footer";
import Service from "@/components/services/main/Service";
import React from "react";

const page = () => {
    const jobConsulting = [
        {
            image: "/images/services/service-1-1.png",
            title: "Extensive Network",
            description:
                "We have a vast database of pre-vetted skilled laborers, ensuring you have access to the right candidate for the job.",
        },
        {
            image: "/images/services/service-1-2.png",
            title: "Tailored Solutions",
            description:
                "Following a detailed process, we build a keen understanding of your needs and project requirements to match you with the most qualified candidates.",
        },
        {
            image: "/images/services/service-1-3.png",
            title: "Cost-Effectiveness",
            description:
                "Our services are cost-effective, eliminating the overhead costs associated with in-house recruitment efforts.",
        },
    ];
    const cateringAndFood = [
        {
            image: "/images/services/service-2-1.png",
            title: "Culinary Expertise",
            description:
                "A team of passionate chefs, with years of experience, creates exquisite dishes from a diverse range of cuisines. Whether you crave classic elegance or innovative creations, we can create the wonder and taste you crave.",
        },
        {
            image: "/images/services/service-2-2.png",
            title: "Unparalleled Service",
            description:
                "Our dedicated planners work tirelessly to understand your vision and ensure every detail is flawlessly executed. From menu planning to service, we handle everything professionally and focus on exceeding your expectations.",
        },
        {
            image: "/images/services/service-2-3.png",
            title: "Customizable Packages",
            description:
                "Be convenient, there are a variety of catering packages to suit your event size, budget, and theme. Whether it's an intimate gathering or a grand celebration, we can create a personalized catering experience that fits your needs",
        },
    ];

    return (
        <section id="services">
            <main className="wrapper pt-[90px] sm:pt-[180px] pb-[60px] sm:pb-[100px]">
                <div className="head flex items-center gap-5 justify-between flex-wrap">
                    <h2 className="text-[28px] sm:text-[38px] w-full md:w-[35%] font-['SF_UI_Display_Medium']">
                        Our Services
                    </h2>
                    <p className="description w-full md:w-[60%] text-[17px] sm:text-[22px] lg:text-[26px] font-['SF_UI_Display_Thin']">
                        Dedicated to excellence, delivering results that exceed
                        industry standards.
                    </p>
                </div>
                <div id="job-consulting" className="m-[40px_0]">
                    <h3 className="text-[#000000] text-[26px] sm:text-[32px] font-['SF_UI_Display_Thin'] mb-[24px]">
                        Job Consulting
                    </h3>
                    <div className="md:overflow-x-scroll w-full">
                        <ul className="services w-full justify-center md:justify-normal flex flex-wrap md:flex-nowrap items-center gap-3">
                            {jobConsulting.map((item, i) => (
                                <li
                                    key={i}
                                    className="w-full sm:w-[calc(50%-6px)] md:w-[calc(33%-6px)]"
                                >
                                    <Service
                                        image={item.image}
                                        title={item.title}
                                        description={item.description}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div id="catering-and-food" className="m-[40px_0]">
                    <h3 className="text-[#000000] text-[26px] sm:text-[32px] font-['SF_UI_Display_Thin'] mb-[24px]">
                        Catering & Food
                    </h3>
                    <div className="md:overflow-x-scroll w-full">
                        <ul className="services w-full justify-center md:justify-normal flex flex-wrap md:flex-nowrap items-center gap-3">
                            {cateringAndFood.map((item, i) => (
                                <li
                                    key={i}
                                    className="w-full sm:w-[calc(50%-6px)] md:w-[calc(33%-6px)]"
                                >
                                    <Service
                                        image={item.image}
                                        title={item.title}
                                        description={item.description}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </main>
            <Footer />
        </section>
    );
};

export default page;
