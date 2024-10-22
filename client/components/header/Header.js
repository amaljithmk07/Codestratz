import React, { useState } from "react";
import style from "@/styles/Header.module.scss";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  const [dropdownstate, setDropdownstate] = useState(null);

  const DropdownHandler = (index) => {
    console.log(index);

    setDropdownstate(dropdownstate === index ? null : index);
  };
  // =======Main Header=========

  const mainHeader = [
    " SEO & Lead Generation",
    "Revenue Marketing & CRO",
    " UX & Interactive",
    "Technology",
    "Who We Are",
  ];

  const header_nav1 = [
    {
      head: "Marketing Automation",
      img_icon: "/images/header/header-dropdown-11.svg",
      sub_list: [
        {
          title: "SEO Services",
          Link: "#",
        },
        {
          title: "Enterprise SEO Services",
          Link: "#",
        },
        {
          title: "Digital Marketing Services ",
          Link: "#",
        },
        {
          title: " Local SEO Services ",
          Link: "#",
        },
        {
          title: "Google Local Services Ads Management ",
          Link: "#",
        },
        {
          title: "SEO Audits ",
          Link: "#",
        },
        {
          title: "Generative Engine & Chat Optimization",
          Link: "#",
        },
      ],
    },
    {
      head: "Marketing Automation",
      img_icon: "/images/header/header-dropdown-12.svg",
      sub_list: [
        {
          title: "SEO Services",
          Link: "#",
        },
        {
          title: "Enterprise SEO Services",
          Link: "#",
        },
        {
          title: "Digital Marketing Services ",
          Link: "#",
        },
        {
          title: " Local SEO Services ",
          Link: "#",
        },
        {
          title: "Google Local Services Ads Management ",
          Link: "#",
        },
        {
          title: "SEO Audits ",
          Link: "#",
        },
        {
          title: "Generative Engine & Chat Optimization",
          Link: "#",
        },
      ],
    },
    {
      head: "Marketing Automation",
      img_icon: "/images/header/header-dropdown-13.svg",
      sub_list: [
        {
          title: "SEO Services",
          Link: "#",
        },
        {
          title: "Enterprise SEO Services",
          Link: "#",
        },
        {
          title: "Digital Marketing Services ",
          Link: "#",
        },
        {
          title: " Local SEO Services ",
          Link: "#",
        },
        {
          title: "Google Local Services Ads Management ",
          Link: "#",
        },
        {
          title: "SEO Audits ",
          Link: "#",
        },
        {
          title: "Generative Engine & Chat Optimization",
          Link: "#",
        },
      ],
    },
    {
      head: "Marketing Automation",
      img_icon: "/images/header/header-dropdown-14.svg",
      sub_list: [
        {
          title: "SEO Services",
          Link: "#",
        },
        {
          title: "Enterprise SEO Services",
          Link: "#",
        },
        {
          title: "Digital Marketing Services ",
          Link: "#",
        },
        {
          title: " Local SEO Services ",
          Link: "#",
        },
        {
          title: "Google Local Services Ads Management ",
          Link: "#",
        },
        {
          title: "SEO Audits ",
          Link: "#",
        },
        {
          title: "Generative Engine & Chat Optimization",
          Link: "#",
        },
      ],
    },
    {
      head: "Marketing Automation",
      img_icon: "/images/header/header-dropdown-11.svg",
      background: "/images/header/sub-nav-background.png",
      sub_list: [
        {
          title: "SEO Services",
          Link: "#",
        },
        {
          title: "Enterprise SEO Services",
          Link: "#",
        },
        {
          title: "Digital Marketing Services ",
          Link: "#",
        },
        {
          title: " Local SEO Services ",
          Link: "#",
        },
        {
          title: "Google Local Services Ads Management ",
          Link: "#",
        },
        {
          title: "SEO Audits ",
          Link: "#",
        },
        {
          title: "Generative Engine & Chat Optimization",
          Link: "#",
        },
      ],
    },
  ];

  const header_nav2 = [
    {
      head: "Marketing Automation",
      img_icon: "/images/header/header-dropdown-11.svg",
      sub_list: [
        {
          title: "SEO Services",
          Link: "#",
        },
        {
          title: "Enterprise SEO Services",
          Link: "#",
        },
        {
          title: "Digital Marketing Services ",
          Link: "#",
        },
        {
          title: " Local SEO Services ",
          Link: "#",
        },
        {
          title: "Google Local Services Ads Management ",
          Link: "#",
        },
        {
          title: "SEO Audits ",
          Link: "#",
        },
        {
          title: "Generative Engine & Chat Optimization",
          Link: "#",
        },
      ],
    },
    {
      head: "Marketing Automation",
      img_icon: "/images/header/header-dropdown-11.svg",
      sub_list: [
        {
          title: "SEO Services",
          Link: "#",
        },
        {
          title: "Enterprise SEO Services",
          Link: "#",
        },
        {
          title: "Digital Marketing Services ",
          Link: "#",
        },
        {
          title: " Local SEO Services ",
          Link: "#",
        },
        {
          title: "Google Local Services Ads Management ",
          Link: "#",
        },
        {
          title: "SEO Audits ",
          Link: "#",
        },
        {
          title: "Generative Engine & Chat Optimization",
          Link: "#",
        },
      ],
    },
    {
      head: "Marketing Automation",
      img_icon: "/images/header/header-dropdown-11.svg",
      sub_list: [
        {
          title: "SEO Services",
          Link: "#",
        },
        {
          title: "Enterprise SEO Services",
          Link: "#",
        },
        {
          title: "Digital Marketing Services ",
          Link: "#",
        },
        {
          title: " Local SEO Services ",
          Link: "#",
        },
        {
          title: "Google Local Services Ads Management ",
          Link: "#",
        },
        {
          title: "SEO Audits ",
          Link: "#",
        },
        {
          title: "Generative Engine & Chat Optimization",
          Link: "#",
        },
      ],
    },
    {
      head: "Marketing Automation",
      img_icon: "/images/header/header-dropdown-11.svg",
      sub_list: [
        {
          title: "SEO Services",
          Link: "#",
        },
        {
          title: "Enterprise SEO Services",
          Link: "#",
        },
        {
          title: "Digital Marketing Services ",
          Link: "#",
        },
        {
          title: " Local SEO Services ",
          Link: "#",
        },
        {
          title: "Google Local Services Ads Management ",
          Link: "#",
        },
        {
          title: "SEO Audits ",
          Link: "#",
        },
        {
          title: "Generative Engine & Chat Optimization",
          Link: "#",
        },
      ],
    },
    {
      head: "Marketing Automation",
      img_icon: "/images/header/header-dropdown-11.svg",
      sub_list: [
        {
          title: "SEO Services",
          Link: "#",
        },
        {
          title: "Enterprise SEO Services",
          Link: "#",
        },
        {
          title: "Digital Marketing Services ",
          Link: "#",
        },
        {
          title: " Local SEO Services ",
          Link: "#",
        },
        {
          title: "Google Local Services Ads Management ",
          Link: "#",
        },
        {
          title: "SEO Audits ",
          Link: "#",
        },
        {
          title: "Generative Engine & Chat Optimization",
          Link: "#",
        },
      ],
    },
  ];

  return (
    <div>
      <section className={style.header_main_body}>
        <div className={style.header_top_section}>
          <div className={style.header_top_left}>
            <p>REVENUE DRIVEN FOR OUR CLIENTS</p>
            <span>
              <div className={style.header_top_left_icon}>
                <Image
                  src={"/images/header/header-tower-icon.png"}
                  height={25}
                  width={25}
                  alt=""
                />{" "}
              </div>
              $25,085,355,119+
              <div className={style.header_top_left_icon}>
                <Image
                  src={"/images/header/header-info-icon.png"}
                  height={25}
                  width={25}
                  alt=""
                />{" "}
              </div>
            </span>
          </div>

          <ul className={style.header_top_right}>
            <li className={style.header_top_right_li_sec}>
              <div className={style.header_top_right_search_icon}>
                <Image
                  src={"/images/header/search-icon.png"}
                  height={25}
                  width={25}
                  alt=""
                />{" "}
              </div>
              Search
            </li>

            <li className={style.header_top_right_li_sec}>
              <Link href={"#"}>Client Login</Link>
            </li>
            <li className={style.header_top_right_li_sec}>
              <div className={style.header_top_right_phone_icon}>
                <Image
                  src={"/images/header/phone.png"}
                  height={25}
                  width={25}
                  alt=""
                />{" "}
              </div>
              <Link href={"#"} className={style.header_top_right_phone}>
                888-601-5359
              </Link>
            </li>
          </ul>
        </div>{" "}
        {/* =================== */}
        <div className={style.header_main_section}>
          <div className={style.header_main_logo_sec}>
            <div className={style.header_main_logo}>
              <Image
                src={"/images/header/header-logo.svg"}
                height={30}
                width={100}
                alt=""
              />
            </div>

            <p>Digital Marketing That Drives Revenue®</p>
          </div>

          <div className={style.header_main_list_section}>
            <ul className={style.header_main_ul_sec}>
              {mainHeader.map((header, index) => (
                <li key={index}
                  className={`${style.header_main_ul_li_sec} ${dropdownstate === index
                    ? `${style.header_main_ul_li_sec_active}`
                    : ""
                    }
                  `}
                  onClick={() => DropdownHandler(index)}
                >
                  {header}
                  <div
                    className={`${style.header_main_list_down_arrow} ${dropdownstate === index ? `${style.active}` : ""
                      }`}
                  >
                    <Image
                      src={"/images/header/down-arrow.png"}
                      height={10}
                      width={10}
                      alt=""
                    />
                  </div>
                </li>
              ))}
            </ul>

            <Link
              href={"https://www.webfx.com/"}
              className={style.header_main_btn}
            >
              Get A Proposal
            </Link>
          </div>
          {/* maks */}

          {/* ======dropdown1========= */}
          <ul
            className={`${style.header_main_dropdown_sec} ${dropdownstate === 0 ? `${style.header_main_dropdown_sec_visible}` : ""
              }`}
          >
            {header_nav1.map((data, index) => (
              <li key={index}
                className={style.header_main_dropdown_card}
                style={
                  data.background && {
                    background: `url(${data.background}) no-repeat center/cover `,
                  }
                }
              >
                <div className={style.header_main_dropdown_card_head}>
                  <h4>{data.head}</h4>
                  <div className={style.header_main_dropdown_card_head_logo}>
                    <Image src={data.img_icon} height={50} width={50} alt="" />
                  </div>
                </div>
                <ul className={style.header_main_dropdown_card_ul_sec}>
                  {data.sub_list.map((sublist,index) => (
                    <li key={index}>
                      <Link href={sublist.Link}> {sublist.title}







                        <div className={style.header_main_dropdown_card_li_arrow_icon}>
                          <Image
                            src={"/images/right-arrow.png"}
                            height={100}
                            width={100}
                            alt=""
                          />
                        </div> </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          {/* ======dropdown2========= */}
          <ul
            className={`${style.header_main_dropdown_sec} ${dropdownstate === 1 ? `${style.header_main_dropdown_sec_visible}` : ""
              }`}
          >
            {header_nav2.map((data,index) => (
              <li className={style.header_main_dropdown_card} key={index}>
                <div className={style.header_main_dropdown_card_head}>
                  <h4>{data.head}</h4>
                  <div className={style.header_main_dropdown_card_head_logo}>
                    <Image src={data.img_icon} height={50} width={50} alt="" />
                  </div>
                </div>
                <ul className={style.header_main_dropdown_card_ul_sec}>
                  {data.sub_list.map((sublist,index) => (
                    <li key={index}>
                      <Link href={sublist.Link}> {sublist.title}



                        <div className={style.header_main_dropdown_card_li_arrow_icon}>
                          <Image
                            src={"/images/right-arrow.png"}
                            height={100}
                            width={100}
                            alt=""
                          />
                        </div>
                      </Link>

                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Header;
