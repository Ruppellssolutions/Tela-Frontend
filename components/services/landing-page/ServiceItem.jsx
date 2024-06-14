const ServiceItem = ({
    backgroundImage = "",
    tags = [],
    title = "",
    description = "",
}) => {
    return (
        <div
            id="service-item"
            className="w-full sm:w-[70%] md:w-[40%] lg:w-[30%] h-[420px] rounded-[15px] overflow-hidden p-[34px] flex flex-col justify-between"
            style={{
                background: `url(${backgroundImage}) center center no-repeat`,
                backgroundSize: "cover",
            }}
        >
            <div id="top" className="flex flex-wrap gap-[8px] justify-end">
                {tags.map((tag, i) => (
                    <span
                        key={i}
                        className="bg-[#07070747] text-[14px] border-[1px] border-[#fff] text-[#fff] border-solid w-max rounded-[20px] p-[4px_8px]"
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <div id="bottom" className="">
                <h6 className="truncate text-[#fff] text-[24px] mb-[8px]">
                    {title}
                </h6>
                <p className="truncate text-[#ACACAC] text-[18px]">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default ServiceItem;
