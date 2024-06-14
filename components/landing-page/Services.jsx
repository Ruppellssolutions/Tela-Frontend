import ServiceItem from "../services/landing-page/ServiceItem";

const Services = () => {
    const services = [
        {
            title: "Service 01",
            description:
                "Enjoy our finest and most vibrant journey of top-class catering service, creating incredible memories and embracing the sense of taste.",
            image: "/images/landing-page/service-01.png",
            tags: [
                "Delightful Cuisine",
                "Premium Catering",
                "Extensive Buffet",
                "Unforgettable Events",
            ],
        },
        {
            title: "Service 02",
            description:
                "We specialize in connecting businesses with a diverse pool of talented and experienced professionals across various trades.",
            image: "/images/landing-page/service-02.png",
            tags: [
                "Increased Efficiency",
                "Reduced Costs",
                "Vast Network",
                "Tailored Solutions",
            ],
        },
        // {
        //     title: "Service 03",
        //     description:
        //         "Our commitment to quality means we select the finest ingredients with a ...",
        //     image: "/images/landing-page/service-03.png",
        //     tags: [
        //         "24 Hours service",
        //         "Corporate Events",
        //         "Weddings",
        //         "Private Parties",
        //     ],
        // },
    ];

    return (
        <section id="services" className="bg-[#130E19] p-[100px_0]">
            <div className="wrapper">
                <div id="top" className="w-[100%] md:w-[50%] mb-[48px]">
                    <h3 className="service text-[#fff] text-[18px] mb-[20px]">
                        Services
                    </h3>
                    <p className="text-[20px] md:text-[28px] text-[#fff]">
                        I am free, but neither are the players of life. For it
                        will be good in time. Let it be that the smile on the
                        throat needs
                    </p>
                </div>
                <div
                    id="content"
                    className="flex align-center gap-[32px] justify-center 2xl:justify-end flex-wrap"
                >
                    {services.map((service, i) => (
                        <ServiceItem
                            key={i}
                            backgroundImage={service.image}
                            tags={service.tags}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
