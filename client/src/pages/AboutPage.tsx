import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
    document.title = "Gill Coder | About";

    return (
        <Fragment>
            <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-backgroundColorLight rounded-3xl">
                <div>
                    {/* ảnh bìa */}
                    <div className="bg-[#ccc3bd] w-[40vw] h-[150px] rounded-t-3xl md:w-[70vw] min-[320px]:w-[90vw]"></div>
                    {/* avatar */}
                    <div className="relative">
                        <img
                            src="https://cdn.discordapp.com/avatars/962942072078348309/8bec511a02c0d6096b686127fac99f8a.webp?size=4096"
                            alt="avatar"
                            className="w-[150px] h-[150px] rounded-full object-cover absolute -top-[75px] left-5 border-[5px] border-backgroundColorLight"
                        />
                        <div className="flex items-center justify-between">
                            <div className="bg-backgroundColor bg-opacity-30 ml-[200px] my-5 inline-block p-1 rounded-md min-[320px]:ml-[170px] ">
                                <img
                                    src="/badge.svg"
                                    alt="badge"
                                    className="w-[35px] h-[35px] inline-block"
                                />
                            </div>
                            <div className="mr-5">
                                <Link to="contact" >
                                <a
                                    className="bg-[#2eaf5c] px-4 py-2 rounded-md text-medium hover:bg-[#1a6334] hover:ease-in-out transition-all duration-300 min-[320px]:inline-block min-[320px]:text-sm" 
                                >
                                    Gửi tin nhắn
                                </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="bg-backgroundColor mx-5 mb-5 mt-3 p-5 rounded-2xl">
                        <h3 className="text-white text-3xl font-bold">
                            Zuucifer
                            <span className="text-[28px] opacity-70">
                                #7005
                            </span>
                        </h3>
                        <p className="text-white text-base mt-3 inline-block relative after:absolute after:bg-white after:w-full after:h-[2px] after:-bottom-[11px] after:left-0">
                            Thông tin người dùng
                        </p>
                        <div className="w-full bg-backgroundColorLight h-[2px] mt-3"></div>
                        <p className="uppercase my-4 font-semibold text-sm">
                            giới thiệu về tôi
                        </p>
                        <p className="">
                            he/him ; 22 [10/02]
                            <br />
                            J4F:{" "}
                            <a
                                href="https://twitch.tv/iamz4ri"
                                className="text-blue-500 hover:underline"
                            >
                                https://twitch.tv/iamz4ri
                            </a>
                            <br />
                            making Null RPG Bot
                        </p>
                        <p className="uppercase my-4 font-semibold text-sm">
                            gia nhập discord từ
                        </p>
                        <p className="">Th04,11,2022</p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default AboutPage;
