import React from "react";
import home from "@/styles/Home.module.scss";
import common from "@/styles/common.module.scss";
import Image from "next/image";
import Link from "next/link";
// https://www.webfx.com/

const index = () => {
  // ==========How We Drive Revenue===============

  const howWeDriveContent = [
    // 1st
    {
      heading: "Drive website traffic",
      list1: [
        {
          listTitle: "SEO Services",
          listLink: "#",
        },
        {
          listTitle: "Local SEO Services",
          listLink: "#",
        },
      ],
      list2: [
        {
          listTitle: "Ecommerce SEO Services",
          listLink: "#",
        },
        {
          listTitle: "Content Marketing Services",
          listLink: "#",
        },
      ],
    },
    // 2nd
    {
      heading: "Create and manage powerful ad campaigns",
      list1: [
        {
          listTitle: "PPC Management Services",
          listLink: "#",
        },
        {
          listTitle: "Social Advertising Services",
          listLink: "#",
        },
      ],
      list2: [
        {
          listTitle: "Programmatic Advertising Services",
          listLink: "#",
        },
        {
          listTitle: "Geofencing Advertising Services",
          listLink: "#",
        },
      ],
    },
    // 3rd
    {
      heading: "Collect, analyze, and deploy marketing data",
      list1: [
        {
          listTitle: "MarketingCloudFX",
          listLink: "#",
        },
        {
          listTitle: "Nutshell",
          listLink: "#",
        },
      ],
      list2: [
        {
          listTitle: "Website Call Tracking",
          listLink: "#",
        },
        {
          listTitle: "Lead Management",
          listLink: "#",
        },
      ],
    },
    // 4th
    {
      heading: "Improve brand messaging and conversion",
      list1: [
        {
          listTitle: "Website Design Services",
          listLink: "#",
        },
        {
          listTitle: "CRO Services",
          listLink: "#",
        },
      ],
      list2: [
        {
          listTitle: "Landing Page Design Services",
          listLink: "#",
        },
        {
          listTitle: "Social Media Management Services",
          listLink: "#",
        },
      ],
    },
  ];

  return (
    <div>
      {/* ========Banner Section========= */}

      <section
        className={home.home_banner_section}
        style={
          {
            // background: 'url(/images/banner-wallpaper.jpg) no-repeat center/cover',
          }
        }
      >
        <div
          className={`${common.wrap}  ${common.pt_100}   ${common.pb_100}  ${home.home_banner_container}`}
        >
          <div className={home.home_banner_left_sec}>
            <h3>Digital Marketing That Drives Revenue®</h3>

            <h2>Unlock Revenue Growth through Digital Marketing</h2>
            <p>
              Not every digital marketing agency can seamlessly connect
              marketing activities to your bottom line. Our award-winning
              expertise, data-backed decision making, and innovative technology
              have generated over $10 billion in revenue for clients like you.
              Request your personalized strategy proposal today to start driving
              ROI from digital marketing!
            </p>
            <label className={home.home_banner_left_input_sec}>
              <input placeholder="Enter your website" />
              <button className={home.home_banner_left_input_btn}>
                Send me a proposal
              </button>
            </label>
          </div>

          {/* =========== */}

          <div className={home.home_banner_right_sec}>
            <div className={home.home_banner_right_img}>
              <Image
                src={"/images/banner-promo-img.webp"}
                height={800}
                width={800}
                alt=""
              />
            </div>
            <div className={home.home_banner_right_play_btn}>
              <div className={home.home_banner_right_play_btn_icon}>
                <Image
                  src={"/images/play-button.png"}
                  height={800}
                  width={800}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =============Entire Tab Section============== */}
      <div className={`${home.entire_tab_section} ${common.pt_100} `}>
        {/* ========How We Drive Revenue Section========= */}

        <section className={home.how_we_drive_revenue_section}>
          <div
            className={`${common.wrap}  ${common.pt_100}   ${common.pb_100}  ${home.how_we_drive_revenue_container}`}
          >
            <h3>How We&nbsp;<span>Drive Revenue</span> </h3>
            <p>
              By offering custom omnichannel marketing strategies, led by
              experts and backed by data, WebFX can help your business hit your
              revenue goals. Stop juggling multiple agencies and start working
              with a top-rated agency that will drive results.
            </p>
            <div className={home.how_we_drive_revenue_content_sec}>
            <div className={home.how_we_drive_revenue_funnel_img}>


                <Image src={'/images/funnel.webp'} height={800} width={200} alt="" />
              </div>


              {howWeDriveContent.map((data, index) => (
                <div className={home.how_we_drive_revenue_content_data} key={index}>
                  <h4>{data.heading}</h4>
                  <ul>
                    {data.list1.map((list1, index) => (
                      <li key={index}>
                        <Link href={list1.listLink}>
                          {list1.listTitle}

                          <div className={home.how_we_drive_list_arrow_icon}>
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
                  <ul>
                    {data.list2.map((list2, index) => (
                      <li key={index}>
                        <Link href={list2.listLink}>
                          {list2.listTitle}


                          <div className={home.how_we_drive_list_arrow_icon}>
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
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default index;
