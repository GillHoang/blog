import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const AboutPage = () => {
    document.title = "Gill Coder | About";
    // check size của web k support cho mobile

    return (
      <Fragment>
        <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-backgroundColorLight rounded-3xl">
          <div>
            {/* ảnh bìa */}
            <div className="bg-[#ccc3bd] w-[90vw] lg:w-[40vw] lg:h-[150px] h-[80px] rounded-t-3xl"></div>
            {/* avatar */}
            <div className="relative">
              <img
                src="https://cdn.discordapp.com/avatars/962942072078348309/8bec511a02c0d6096b686127fac99f8a.webp?size=4096"
                alt="avatar"
                className="lg:w-[150px] lg:h-[150px] w-[100px] h-[100px] rounded-full object-cover absolute lg:-top-[75px] -top-[40px] left-5 border-[5px] border-backgroundColorLight"
              />
              <div className="flex items-center justify-between">
                <div className="bg-backgroundColor bg-opacity-30 lg:ml-[200px] ml-[130px] my-5 inline-block p-1 rounded-md ">
                  <img
                    src="/badge.svg"
                    alt="badge"
                    className="lg:w-[35px] lg:h-[35px] inline-block"
                  />
                </div>
                <div className="mr-5">
                  <Link to="contact">
                    <a className="bg-[#2eaf5c] px-4 py-2 rounded-md text-medium hover:bg-[#1a6334] hover:ease-in-out transition-all duration-300 min-[320px]:inline-block min-[320px]:text-sm">
                      Gửi tin nhắn
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-backgroundColor mx-5 mb-5 mt-3 p-5 rounded-2xl">
              <h3 className="text-white lg:text-3xl text-2xl font-bold">
                Zuucifer
                <span className="lg:text-[28px] text-[21px] opacity-70">
                  #7005
                </span>
              </h3>
              <p className="text-white lg:text-base text-sm mt-3 inline-block relative after:absolute after:bg-white after:w-full after:h-[2px] lg:after:-bottom-[11px] after:-bottom-[14px] after:left-0">
                Thông tin người dùng
              </p>
              <div className="w-full bg-backgroundColorLight h-[2px] mt-3"></div>
              <p className="uppercase my-4 font-semibold lg:text-sm text-xs">
                giới thiệu về tôi
              </p>
              <p className="text-sm lg:text-base">
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
              <p className="uppercase my-4 font-semibold lg:text-sm text-xs">
                gia nhập discord từ
              </p>
              <p className="text-sm lg:text-base">Th04,11,2022</p>
            </div>
          </div>
        </div>
      </Fragment>
    );
};

export default AboutPage;
