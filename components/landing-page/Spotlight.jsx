"use client";

import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const Spotlight = () => {
    const [fade, setFade] = useState(true);
    const [nextImageIndex, setNextImageIndex] = useState(1);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const spotlighData = [
        {
            title: "Experience The Summit of Luxury and Comfort",
            image: "/images/landing-page/spotlight-bg-1.png",
            smallImage: "/images/landing-page/spotlight-small-1.png",
            description:
                "Step beyond the ordinary and transcend into a world of unparalleled luxury. From the moment you arrive, be greeted with exquisite service, nuanced design, and amenities curated to elevate your experience.",
        },
        {
            title: "Escape the Ordinary and Rediscover the Art of Rejuvenation",
            image: "/images/landing-page/spotlight-bg-1.png",
            smallImage: "/images/landing-page/spotlight-small-2.png",
            // image: "https://arabdreams-static-assets.s3.me-south-1.amazonaws.com/causeway-whales/images/img-two.png",
            description:
                "Here awaits a heaven of serenity where your mind and body can truly rest. We've meticulously crafted an environment designed to melt away stress and awaken your inner peace. Relax in the best spa in Bahrain.",
        },
        {
            title: "Bespoke Spa,Invoked Wellness,Reawaken You",
            image: "/images/landing-page/spotlight-bg-1.png",
            smallImage: "/images/landing-page/spotlight-small-1.png",
            // image: "https://arabdreams-static-assets.s3.me-south-1.amazonaws.com/causeway-whales/images/img-three.png",
            description:
                "Perfect for soaking up the sun and enjoying a good book. Whether you're looking to cool off after a day of sightseeing or simply want to relax poolside. Dip into a tranquil pool for a guaranteed escape.",
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentImageIndex(nextImageIndex);
                setNextImageIndex((nextImageIndex + 1) % spotlighData.length);
                setFade(true);
            }, 1500);
        }, 4000);

        return () => clearInterval(interval);
    }, [nextImageIndex, spotlighData.length]);

    return (
        <Container id="spotlight" className="w-full">
            <BGImageContainer>
                <div
                    className={`background ${fade ? "fade-in" : "fade-out"}`}
                    style={{
                        backgroundImage: `url(${spotlighData[currentImageIndex]?.image})`,
                        zIndex: 1,
                    }}
                ></div>
                <div
                    className={`background ${fade ? "fade-out" : "fade-in"}`}
                    style={{
                        backgroundImage: `url(${spotlighData[nextImageIndex]?.image})`,
                        zIndex: 0,
                    }}
                ></div>
            </BGImageContainer>
            <SpotlightContent>
                <AnimatedContainer className="wrapper">
                    <div className="animation-container">
                        {spotlighData.map((item, i) => (
                            <div className="content" key={i}>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedContainer>
            </SpotlightContent>
            <BottomContainer className="flex items-end justify-end flex-col">
                <BottomContent className="flex items-center">
                    <div className="left w-[50%]">
                        <span className="next text-[#F3F3F3] text-[14px]">
                            Next
                        </span>
                        <p className="text-[#FFFFFF] text-[20px] font-['SF_UI_Display_Medium']">
                            {spotlighData[currentImageIndex]?.title}
                        </p>
                    </div>
                    <div className="right w-[50%]">
                        <div
                            className={`background ${
                                fade ? "fade-in" : "fade-out"
                            }`}
                            style={{
                                backgroundImage: `url(${spotlighData[currentImageIndex]?.smallImage})`,
                                zIndex: 1,
                            }}
                        ></div>
                        <div
                            className={`background ${
                                fade ? "fade-out" : "fade-in"
                            }`}
                            style={{
                                backgroundImage: `url(${spotlighData[nextImageIndex]?.smallImage})`,
                                zIndex: 0,
                            }}
                        ></div>
                    </div>
                </BottomContent>
                <MovingBarWrapper className="flex align-center gap-[7px]">
                    <span className="count text-[#fff]">
                        0{nextImageIndex + 1}
                    </span>
                    <MovingBarContainer>
                        <MovingBar
                            $width={
                                (nextImageIndex + 1) *
                                (100 / spotlighData.length)
                            }
                        />
                    </MovingBarContainer>
                    <span className="count text-[#fff]">
                        0{spotlighData.length}
                    </span>
                </MovingBarWrapper>
            </BottomContainer>
        </Container>
    );
};

export default Spotlight;

const Container = styled.section`
    position: relative;
    min-height: 100vh;
`;
const BGImageContainer = styled.div`
    z-index: -1;
    position: relative;
    .background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        min-height: 100vh;
        background-size: cover;
        background-position: center;
        transition: opacity 1.5s linear;
        opacity: 0;
    }

    .fade-in {
        opacity: 1;
    }

    .fade-out {
        opacity: 0.6;
    }

    /* & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    } */
`;
const SpotlightContent = styled.div`
    height: 100%;
    padding-top: 200px;
`;

const upanddown = keyframes`
    0%{
    transform: translateY(0);
    }
    30%{
    transform: translateY(0);
    }
    33%{
    transform: translateY(calc(-100% - 100px))
    }
    63%{
    transform: translateY(calc(-100% - 100px))
    }
    66%{
    transform: translateY(calc(-100% - 100px))
    }
    97%{
    transform: translateY(calc(-100% - 100px))
    }
    100%{
    transform: translateY(0)
    }
`;

const AnimatedContainer = styled.div`
    position: relative;
    z-index: 10;
    /* padding-top: 250px; */
    height: 100%;
    .animation-container {
        height: 240px;
        overflow: hidden;
        margin-bottom: 22px;

        @media all and (max-width: 920px) {
            height: 260px;
        }
        @media all and (max-width: 640px) {
            height: 220px;
        }

        .content {
            width: 80%;
            animation: ${upanddown} 12s infinite ease;
            margin: 0 auto;
            margin-bottom: 100px;
            text-align: center;
            @media all and (max-width: 1180px) {
                /* width: 70%; */
            }
            @media all and (max-width: 980px) {
                width: 100%;
            }
            h3 {
                font-size: 40px;
                color: #ffffff;
                margin-bottom: 20px;
                font-family: "SF UI Display Medium";

                @media all and (max-width: 1380px) {
                    font-size: 38px;
                }
                @media all and (max-width: 1280px) {
                    font-size: 34px;
                }
                @media all and (max-width: 768px) {
                    font-size: 32px;
                }
                @media all and (max-width: 640px) {
                    font-size: 25px;
                }
                @media all and (max-width: 480px) {
                    font-size: 22px;
                }
                @media all and (max-width: 420px) {
                    font-size: 18px;
                }
            }
            p {
                font-size: 18px;
                color: #ffffff;
                line-height: 1.5;
                font-family: "SF UI Display Thin";

                @media all and (max-width: 480px) {
                    font-size: 14px;
                }
            }
        }
    }
`;

const BottomContainer = styled.div`
    @media all and (max-width: 720px) {
        align-items: start;
        padding: 0 10%;
    }
`;
const BottomContent = styled.div`
    background-color: #58351d80;
    z-index: 100;
    width: 450px;
    height: 170px;
    padding: 24px;
    border-radius: 10px 0 0 10px;

    @media all and (max-width: 720px) {
        display: none;
    }

    .left {
        p {
            overflow-y: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
        }
    }
    .right {
        position: relative;
        height: 100%;

        .background {
            width: 200px;
            height: 120px;
            background-size: cover;
            background-position: center;
            transition: opacity 1.5s linear;
            opacity: 0;
            position: absolute;
            left: 0;
            top: 0;
        }
        .fade-in {
            opacity: 1;
        }

        .fade-out {
            opacity: 0.6;
        }
    }
`;

const MovingBarContainer = styled.div`
    width: 200px;
    height: 4px;
    background-color: #a8acb5;
    position: relative;
    overflow: hidden;
    z-index: 12;
    border-radius: 10px;
    /* @media all and (max-width: 1180px) {
                width: 300px;
            } */
    /* &::before {
                content: "01";
                font-size: 20px;
                color: #ffffff;
            } */
`;
const MovingBar = styled.div`
    width: ${({ $width }) => `${$width}%`};
    height: 4px;
    background-color: #ffffff;
    position: absolute;
    top: 0;
    transition: width 0.5s linear;
    border-radius: 10px;
    /* @media all and (max-width: 1180px) {
        width: 100px;
    } */
`;

const MovingBarWrapper = styled.div`
    width: 450px;
    margin-top: 26px;

    @media all and (max-width: 720px) {
        width: 100%;
    }
`;
