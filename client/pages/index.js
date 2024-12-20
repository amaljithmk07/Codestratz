import React, { useState } from "react";
import home from "@/styles/Home.module.scss";
import common from "@/styles/common.module.scss";
import Image from "next/image";
import Link from "next/link";
import DynamicImage from "@/components/DynamicImage";
// https://www.webfx.com/

const Index = () => {
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
  const [uncoverTabs, setUncoverTabs] = useState(0);

  // ===================Uncover The Impact==============

  const uncoverTheimpactTabs = [
    {
      title: "Actionable Analytics1",
      logo: "/images/tab-header-logo1.webp",
      contentHead: "Close the loop between marketing and revenue 1",
      contentImage: "/images/tab-content-img1.webp",
      contentPara1:
        "MarketingCloudFX simplifies your decision-making by clearly showing which marketing efforts are driving revenue for your business.",
      contentPara2:
        "By connecting the dots between your various marketing activities or channels and actual sales, you can confidently invest more in successful strategies and improve underperforming ones.",
    },
    {
      title: "Actionable Analytics2",
      logo: "/images/tab-header-logo1.webp",
      contentHead: "Close the loop between marketing and revenue2",
      contentImage: "/images/tab-content-img1.webp",
      contentPara1: "Marketinness.",
      contentPara2:
        "By connecting the dots between your various marketing activities or channels and actual sales, you can confidently invest more in successful strategies and improve underperforming ones.",
    },
    {
      title: "Actionable Analytics3",
      logo: "/images/tab-header-logo1.webp",
      contentHead: "Close the loop between marketing and revenue3",
      contentImage: "/images/tab-content-img1.webp",
      contentPara1:
        "MarketingCloudision-making by clearly showing which marketing efforts are driving revenue for your business.",
      contentPara2:
        "By connecting the dots betweenng activities or channels and actual sales, you can confidently invest more in successful strategies and improve underperforming ones.",
    },
    {
      title: "Actionable Analytics4",
      logo: "/images/tab-header-logo1.webp",
      contentHead: "Close the revenue4",
      contentImage: "/images/tab-content-img1.webp",
      contentPara1:
        "MarketingCloudFX simplifies your decision-making by clearly showing which marketing efforts are driving revenue for your business.",
      contentPara2:
        "By connecting the dots between your various marketing activities or channels and actual sales, you can confidently invest more in successful strategies and improve underperforming ones.",
    },
  ];

  const TabsChanger = (index) => {
    setUncoverTabs(index);
  };
  console.log(uncoverTheimpactTabs[uncoverTabs]);

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
            <h3>
              How We&nbsp;<span>Drive Revenue</span>{" "}
            </h3>
            <p>
              By offering custom omnichannel marketing strategies, led by
              experts and backed by data, WebFX can help your business hit your
              revenue goals. Stop juggling multiple agencies and start working
              with a top-rated agency that will drive results.
            </p>
            <div className={home.how_we_drive_revenue_content_sec}>
              <div className={home.how_we_drive_revenue_funnel_img}>
                <Image
                  src={"/images/funnel.webp"}
                  height={800}
                  width={200}
                  alt=""
                />
              </div>

              {howWeDriveContent.map((data, index) => (
                <div
                  className={home.how_we_drive_revenue_content_data}
                  key={index}
                >
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

        {/* ========Uncover The Impact of Marketing on Revenue Section========= */}

        <section className={home.uncover_the_impact_section}>
          <div
            className={`${common.wrap}  ${common.pt_100}   ${common.pb_100}  ${home.uncover_the_impact_container}`}
          >
            <h3>Uncover The Impact of Marketing on Revenue</h3>
            <p>
              Our expert-led strategies are backed by our award-winning
              technology. Together, our clients are empowered to make informed
              and strategic marketing decisions, ensuring they stay ahead in the
              ever-evolving digital landscape.
            </p>
            <span className={home.uncover_the_impact_sub_head}>
              Discover MarketingCloudFX
            </span>

            <ul
              className={`${home.uncover_the_impact_counter_sec} ${common.mt_50} `}
            >
              <li>
                <h4>100%</h4>

                <span>set up by webfx</span>
              </li>
              <li>
                <h4>$500K</h4>

                <span>built-in value</span>
              </li>
              <li>
                <h4>20%</h4>

                <span>avg increase in roi</span>
              </li>
              <li>
                <h4>1B</h4>

                <span>Data points that drive decision making</span>
              </li>
            </ul>

            <div className={`${home.uncover_the_impact_tab_sec} `}>
              <div className={`${home.uncover_the_impact_tab_left_sec} `}>
                {uncoverTheimpactTabs.map((data, index) => (
                  <div
                    className={`${home.uncover_the_impact_tab_body} ${uncoverTabs == index ? home.active : ""
                      } `}
                    key={index}
                    onClick={() => TabsChanger(index)}
                  >
                    <div
                      className={`${home.uncover_the_impact_tab_left_icon} `}
                    >
                      <DynamicImage src={data.logo} />
                    </div>
                    <h4>{data.title}</h4>
                  </div>
                ))}
              </div>

              <div className={`${home.uncover_the_impact_tab_right_sec} `}>
                <div
                  className={`${home.uncover_the_impact_tab_right_top_img} `}
                >
                  <DynamicImage
                    src={uncoverTheimpactTabs[uncoverTabs].contentImage}
                  />
                </div>

                <h4>{uncoverTheimpactTabs[uncoverTabs].contentHead}</h4>

                <p>{uncoverTheimpactTabs[uncoverTabs].contentPara1}</p>
                <p>{uncoverTheimpactTabs[uncoverTabs].contentPara2}</p>
              </div>

              {/* <div className={`${home.uncover_the_impact_tab_right_sec} `}>
                <div className={`${home.uncover_the_impact_tab_right_top_img} `}>

                  <DynamicImage src={'/images/tab-content-img1.webp'} />
                </div>

                <h4>
                  Close the loop between marketing and revenue
                </h4>

                <p>
                  MarketingCloudFX simplifies your decision-making by clearly showing which marketing efforts are driving revenue for your business.
                </p>
                <p>
                  By connecting the dots between your various marketing activities or channels and actual sales, you can confidently invest more in successful strategies and improve underperforming ones.
                </p>

              </div> */}
            </div>
          </div>
        </section>

        {/* ============== Unmatched Expertise ============= */}

        <section
          className={`${home.unmatched_expertise_section} ${common.pt_50}  ${common.pb_100}  ${common.wrap}  `}
        >
          <div className={`${home.unmatched_expertise_container}  `}>
            <h3>
              Unmatched Expertise <span> Driving Results</span>
            </h3>

            <div className={home.unmatched_expertise_content_section}>
              <ul className={home.unmatched_expertise_left_section}>
                <li>
                  <span>Industry SMEs</span>
                  <p>stay up to date and join business reviews.</p>
                </li>
                <li>
                  <span>Industry SMEs</span>
                  <p>stay up to date and join business reviews.</p>
                </li>
                <li>
                  <span>Industry SMEs</span>
                  <p>stay up to date and join business reviews.</p>
                </li>
                <li className={home.unmatched_expertise_left_list_section}>
                  <Link href={""}>About Us</Link>
                  <Link href={""}>About Us</Link>
                  <Link href={""}>About Us</Link>
                </li>{" "}
              </ul>

              <ul className={home.unmatched_expertise_right_section}>
                <li className={home.unmatched_expertise_right_li}>
                  <div className={home.unmatched_expertise_right_person_img}>
                    <DynamicImage src={"/images/person1.webp"} />
                  </div>

                  <span>28-year</span>
                  <p>track record</p>
                </li>
                <li className={home.unmatched_expertise_right_li}>
                  {" "}
                  <div className={home.unmatched_expertise_right_person_img}>
                    <DynamicImage src={"/images/person2.webp"} />
                  </div>
                  <span>1,000s </span>
                  <p>of reviews</p>
                </li>
                <li className={home.unmatched_expertise_right_li}>
                  {" "}
                  <div className={home.unmatched_expertise_right_person_img}>
                    <DynamicImage src={"/images/person3.webp"} />
                  </div>
                  <span>7 million+</span>
                  <p>calls generated </p>
                </li>
                <li className={home.unmatched_expertise_right_li}>
                  {" "}
                  <div className={home.unmatched_expertise_right_person_img}>
                    <DynamicImage src={"/images/person4.webp"} />
                  </div>
                  <span>500+</span>
                  <p>digital experts</p>
                </li>

                <li className={home.unmatched_expertise_right_li}>
                  {" "}
                  <h5>In-house technology</h5>
                  <ul className={home.unmatched_expertise_right_logo_section}>
                    <li className={home.unmatched_expertise_right_logo}>
                      <DynamicImage src={"/images/unmatched-logo1.webp"} />
                    </li>
                    <li className={home.unmatched_expertise_right_logo}>
                      <DynamicImage src={"/images/unmatched-logo2.webp"} />
                    </li>
                    <li className={home.unmatched_expertise_right_logo}>
                      <DynamicImage src={"/images/unmatched-logo3.webp"} />
                    </li>
                    <li className={home.unmatched_expertise_right_logo}>
                      <DynamicImage src={"/images/unmatched-logo4.png"} />
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============== Revenue & Beyond ================== */}

        <section
          className={` ${home.revenue_and_beyond_section} ${common.pt_50}  ${common.pb_100}   `}
        >
          <div
            className={`${home.revenue_and_beyond_container} ${common.wrap} `}
          >
            <div className={`${home.revenue_and_beyond_title_sec}  `}>
              <h3>
                Revenue & Beyond: <span> Proven Results</span> For Clients
              </h3>
              <p>
                See how WebFX improves the KPIs that drive actual business
                growth.
              </p>
            </div>

            <div className={`${home.revenue_and_beyond_swiper_sec}  `}>
              <div className={`${home.revenue_and_beyond_swiper_card}  `}>
                <div
                  className={`${home.revenue_and_beyond_swiper_card_notation}  `}
                >
                  Franchise
                </div>

                <div
                  className={`${home.revenue_and_beyond_swiper_card_top_sec}  `}
                >
                  <h4>Challenge</h4>
                  <p>
                    MarketingCloudFX simplifies your decision-making by clearly
                    showing
                  </p>
                  <h4>Approach</h4>
                  <ul
                    className={`${home.revenue_and_beyond_swiper_card_top_ul}  `}
                  >
                    <li>planning towards business goals.</li>
                    <li>planning towards business goals.</li>
                    <li>planning towards business goals.</li>
                    <li>planning towards business goals.</li>
                  </ul>
                </div>

                <div
                  className={`${home.revenue_and_beyond_swiper_card_bottom_sec}  `}
                >
                  <span>150%</span>
                  <p>proactive ideas</p>
                  <Link href={"/"}> View Case Study</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
