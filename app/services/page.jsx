import Footer from "@/components/general/Footer";
import Service from "@/components/services/main/Service";
import React from "react";

const page = () => {
    const jobConsulting = [
        {
            image: "/images/services/service-1-1.png",
            title: "Job consulting",
            description:
                "Ut sodales, ex sit amet consectetur accumsan, nibh ex sollicitudin metus, volutpat lacinia arcu nibh vel ante. Proin dapibus dui eget justo tincidunt eleifend. ",
        },
        {
            image: "/images/services/service-1-2.png",
            title: "Job consulting",
            description:
                "Ut sodales, ex sit amet consectetur accumsan, nibh ex sollicitudin metus, volutpat lacinia arcu nibh vel ante. Proin dapibus dui eget justo tincidunt eleifend. ",
        },
        {
            image: "/images/services/service-1-3.png",
            title: "Job consulting",
            description:
                "Ut sodales, ex sit amet consectetur accumsan, nibh ex sollicitudin metus, volutpat lacinia arcu nibh vel ante. Proin dapibus dui eget justo tincidunt eleifend. ",
        },
    ];
    const cateringAndFood = [
        {
            image: "/images/services/service-2-1.png",
            title: "Job consulting",
            description:
                "Ut sodales, ex sit amet consectetur accumsan, nibh ex sollicitudin metus, volutpat lacinia arcu nibh vel ante. Proin dapibus dui eget justo tincidunt eleifend. ",
        },
        {
            image: "/images/services/service-2-2.png",
            title: "Job consulting",
            description:
                "Ut sodales, ex sit amet consectetur accumsan, nibh ex sollicitudin metus, volutpat lacinia arcu nibh vel ante. Proin dapibus dui eget justo tincidunt eleifend. ",
        },
        {
            image: "/images/services/service-2-3.png",
            title: "Job consulting",
            description:
                "Ut sodales, ex sit amet consectetur accumsan, nibh ex sollicitudin metus, volutpat lacinia arcu nibh vel ante. Proin dapibus dui eget justo tincidunt eleifend. ",
        },
    ];

    return (
        <section id="services">
            <main className="wrapper pt-[90px] sm:pt-[180px] pb-[60px] sm:pb-[100px]">
                <div className="head flex items-center gap-5 justify-between flex-wrap">
                    <h2 className="text-[28px] sm:text-[38px] w-full md:w-[35%] font-['SF_UI_Display_Medium']">
                        Services
                    </h2>
                    <p className="description w-full md:w-[60%] text-[17px] sm:text-[22px] lg:text-[26px] font-['SF_UI_Display_Thin']">
                        Dedicated to excellence, delivering results that exceed
                        industry standards.
                    </p>
                </div>
                <div id="job-consulting" className="m-[40px_0]">
                    <h3 className="text-[#000000] text-[26px] sm:text-[32px] font-['SF_UI_Display_Thin'] mb-[24px]">
                        Job consulting
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
