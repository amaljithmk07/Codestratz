import React from "react";
import style from "@/styles/Footer.module.scss";
import common from "@/styles/common.module.scss";
import DynamicImage from "../DynamicImage";
import Link from "next/link";

const footer = () => {
  const footerData = [
    {
      title: "Services",
      subList: [
        {
          linkTitle: "Digital Marketing Services",
          link: "",
        },
        {
          linkTitle: "Digital Marketing Services",
          link: "",
        },
        {
          linkTitle: "Digital Marketing Services",
          link: "",
        },
        {
          linkTitle: "Digital Marketing Services",
          link: "",
        },
        {
          linkTitle: "Digital Marketing Services",
          link: "",
        },
      ],
    },
    {
      title: "Services",
      subList: [
        {
          linkTitle: "Digital Marketing Services",
          link: "",
        },
        {
          linkTitle: "Digital Marketing Services",
          link: "",
        },
        {
          linkTitle: "Digital Marketing Services",
          link: "",
        },
        {
          linkTitle: "Digital Marketing Services",
          link: "",
        },
        {
          linkTitle: "Digital Marketing Services",
          link: "",
        },
      ],
    },
    {
      title: "Services",
      subList: [
        {
          linkTitle: "Digital Marketing Services",
          link: "",
        },
        {
          linkTitle: "Digital Marketing Services",
          link: "",
        },
        {
          linkTitle: "Digital Marketing Services",
          link: "",
        },
        {
          linkTitle: "Digital Marketing Services",
          link: "",
        },
        {
          linkTitle: "Digital Marketing Services",
          link: "",
        },
      ],
    },
    {
      title: "Services",
      subList: [
        {
          linkTitle: "Digital Marketing Services",
          link: "",
        },
        {
          linkTitle: "Digital Marketing Services",
          link: "",
        },
        {
          linkTitle: "Digital Marketing Services",
          link: "",
        },
        {
          linkTitle: "Digital Marketing Services",
          link: "",
        },
        {
          linkTitle: "Digital Marketing Services",
          link: "",
        },
      ],
    },
    {
      title: "Services",
      subList: [
        {
          linkTitle: "Digital Marketing Services",
          link: "",
        },
        {
          linkTitle: "Digital Marketing Services",
          link: "",
        },
        {
          linkTitle: "Digital Marketing Services",
          link: "",
        },
        {
          linkTitle: "Digital Marketing Services",
          link: "",
        },
        {
          linkTitle: "Digital Marketing Services",
          link: "",
        },
      ],
    },
  ];

  return (
    <div className={style.footer_main_body}>
      <div className={`${style.footer_container} ${common.wrap}`}>
        <div className={style.footer_top_body}>
          <ul className={style.footer_top_left}>
            <li className={style.footer_top_left_list}>
              <h4>24,859,684+</h4>
              <p>LEADS DRIVEN FOR CLIENTS</p>
            </li>
            <li className={style.footer_top_left_list}>
              <h4>$10,085,355,239+</h4>
              <p>REVENUE DRIVEN FOR CLIENTS</p>
            </li>
            <li className={style.footer_top_left_list}>
              <h4>3,212,407</h4>
              <p>HOURS OF EXPERTISE</p>
            </li>
            <li className={style.footer_top_left_list}>
              <h4>500</h4>
              <p>EXPERTS ON STAFF</p>
            </li>
          </ul>
          <div className={style.footer_top_right}>
            <span>Discover how we can help your business grow</span>
            <label className={style.footer_top_right_input_sec}>
              <input
                type="text"
                placeholder="Enter Your Website"
                className={style.footer_top_right_input}
              />
              <button className={style.footer_top_right_input_btn}>
                Send Me A Proposal
              </button>
            </label>
          </div>
        </div>

        <div className={style.footer_content_body}>
          <div className={style.footer_content_logo_sec}>
            <div className={style.footer_content_logo}>
              <DynamicImage src={"/images/footer-log.webp"} />
            </div>
            <p>Celebrating 25+ Years of Digital Marketing Excellence</p>
            <span>Ready to speak with a marketing expert? Give us a ring</span>
            <button className={style.footer_content_btn}>
              +91- 82646 865 565
            </button>
          </div>

          <ul className={style.footer_content_menu_list_sec}>
            {footerData.map((data) => (
              <li>
                <ul className={style.footer_content_menu_list}>
                  <li>
                    <h4>{data.title}</h4>
                  </li>
                  {data.subList.map((list) => (
                    <li>
                      <Link href={list.link}>{list.linkTitle}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        <div className={style.footer_bottom_body}>
          <div className={style.footer_bottom_left_body}>
            <span>Proudly brought to you by WebFX</span>

            <ul className={style.footer_bottom_left_body_logo}>
              <li>
                <DynamicImage src={"/images/footer-log.webp"} />
              </li>
            </ul>
          </div>
          <div className={style.footer_bottom_right_body}>
            <span>WebFX® 1995-2024</span>
            <div className={style.footer_bottom_right_link_sec}>
              <Link href={''}>Sitemap</Link>
              <Link href={''}>Privacy & Terms of Use</Link>
            </div>
            <ul className={style.footer_bottom_right_socialmedia_sec}>
              <li>
                <Link href={'/'}>
                  <DynamicImage src={"/images/footer-log.webp"} />
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  <DynamicImage src={"/images/footer-log.webp"} />
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  <DynamicImage src={"/images/footer-log.webp"} />
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  <DynamicImage src={"/images/footer-log.webp"} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
