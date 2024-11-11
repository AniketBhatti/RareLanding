import React, { useRef } from "react";
import "./landing.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

import { useScroll } from "framer-motion";
import { Link } from "react-router-dom";


import research from "../../assets/images/06_ropeEffectPlayables/research_square.png"
import strategy from "../../assets/images/06_ropeEffectPlayables/strategy_square.png"
import uiuxdesign from "../../assets/images/06_ropeEffectPlayables/uiux_square.png"
import branding from "../../assets/images/06_ropeEffectPlayables/branding_square.png"
import build from "../../assets/images/06_ropeEffectPlayables/build_square.png"

import lumber_main from "../../assets/images/07_ourWorks/LUMBERCRAFT/lumbercraft-main-product.png"
import lumber_all_products from "../../assets/images/07_ourWorks/LUMBERCRAFT/lumbercraft-all-products-list.png"
import lumber_customer from "../../assets/images/07_ourWorks/LUMBERCRAFT/lumbercraft-customer-services.png"

import regal_navbar from "../../assets/images/07_ourWorks/REGALFINANCE/navbar.png"
import regal_leftpanel from "../../assets/images/07_ourWorks/REGALFINANCE/leftPanal.png"
import rewards from "../../assets/images/07_ourWorks/REGALFINANCE/rewards.png"
import assets from "../../assets/images/07_ourWorks/REGALFINANCE/assets.png"

import xtream_full from "../../assets/images/07_ourWorks/Xtream/xtreamFullImage.png"

import topLeftVeggies from "../../assets/images/07_ourWorks/ORCHARD/top-left-veggies.png"
import bottomLeftPhone from "../../assets/images/07_ourWorks/ORCHARD/bottom-left-phone.png"
import rightHome from "../../assets/images/07_ourWorks/ORCHARD/right-orchard-home.png"

import favoriteScreen from "../../assets/images/07_ourWorks/ORCHARD/VerticalScroll/favorites-screen.png"
import filterScreen from "../../assets/images/07_ourWorks/ORCHARD/VerticalScroll/filters-screen.png"
import homeScreen from "../../assets/images/07_ourWorks/ORCHARD/VerticalScroll/home-screen.png"
import beveragesScreen from "../../assets/images/07_ourWorks/ORCHARD/VerticalScroll/listof-beverages.png"
import locationScreen from "../../assets/images/07_ourWorks/ORCHARD/VerticalScroll/location-screen.png"
import loginScreen from "../../assets/images/07_ourWorks/ORCHARD/VerticalScroll/login-screen.png"
import mobileScreen from "../../assets/images/07_ourWorks/ORCHARD/VerticalScroll/mobile-screen.png"
import mycartScreen from "../../assets/images/07_ourWorks/ORCHARD/VerticalScroll/mycart-screen.png"
import productDetailsScreen from "../../assets/images/07_ourWorks/ORCHARD/VerticalScroll/product-detail-screen.png"
import searchScreen from "../../assets/images/07_ourWorks/ORCHARD/VerticalScroll/search-screen.png"

import hiLogo from "../../assets/images/07_ourWorks/HEALTHINSURANCE/hi-logo.png"
import phoneMockup from "../../assets/images/07_ourWorks/HEALTHINSURANCE/phone-mockup.png"
import statistics from "../../assets/images/07_ourWorks/HEALTHINSURANCE/statistics.png"
import lineGraph from "../../assets/images/07_ourWorks/HEALTHINSURANCE/hi-linegraph.png"
import customize from "../../assets/images/07_ourWorks/HEALTHINSURANCE/customize.png"


import add from "../../assets/images/07_ourWorks/HEALTHINSURANCE/widgets/add.png"
import and from "../../assets/images/07_ourWorks/HEALTHINSURANCE/widgets/and.png"
import arrow from "../../assets/images/07_ourWorks/HEALTHINSURANCE/widgets/arrow.png"
import bulb from "../../assets/images/07_ourWorks/HEALTHINSURANCE/widgets/bulb.png"
import coverage from "../../assets/images/07_ourWorks/HEALTHINSURANCE/widgets/coverage.png"
import health from "../../assets/images/07_ourWorks/HEALTHINSURANCE/widgets/health.png"
import mind from "../../assets/images/07_ourWorks/HEALTHINSURANCE/widgets/mind.png"
import phonebook from "../../assets/images/07_ourWorks/HEALTHINSURANCE/widgets/phonebook.png"
import safe from "../../assets/images/07_ourWorks/HEALTHINSURANCE/widgets/safe.png"
import schedule from "../../assets/images/07_ourWorks/HEALTHINSURANCE/widgets/schedule.png"
import secure from "../../assets/images/07_ourWorks/HEALTHINSURANCE/widgets/secure.png"
import teeth from "../../assets/images/07_ourWorks/HEALTHINSURANCE/widgets/teeth.png"




const Landing = () => {
	// FOR PATH
	const pathRef = useRef(null);
	React.useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.to(pathRef.current, {
			scrollTrigger: {
				trigger: pathRef.current,
				start: "top center",
				end: "bottom center",
				scrub: 1,
			},
			attr: {
				d: "M0 4.5C1902.08 3.82732 5151.34 2.67819 7273 1.92785",
				// d: "M3017 1C3005.17 50.3333 2970.6 146.4 2927 136C2872.5 123 2715 197 2763.5 242C2802.3 278 2779.67 308.333 2763.5 319C2732.33 339.333 2663.6 374.2 2638 351C2606 322 2465 303 2452 351C2439 399 2330 421.5 2330 351C2330 280.5 2166 351 2160 283.5C2154 216 1996 177.5 1919 197C1842 216.5 1835.5 303 1758.5 283.5C1696.9 267.9 1580.83 322 1530.5 351C1479.17 404.5 1329.6 479.4 1142 351H0",
			},
			ease: "none",
		});
	}, []);


	// For HORIZONTAL SCROLL
	React.useEffect(() => {
		realPageAnimation();
	}, []);

	function realPageAnimation() {
		gsap.to(".slide", {
			scrollTrigger: {
				trigger: ".our-services",
				start: "top top",
				end: "bottom bottom",
				scrub: 1,
			},
			xPercent: -200,
			ease: "power4.inOut", // Ensure ease is a string
		});
	}


	React.useEffect(() => {
		gsap.registerPlugin(MotionPathPlugin);

		gsap.set(".item-1, .item-2, .item-3, .item-4, .item-5, .item-6", {
			xPercent: -50, yPercent: -50, transformOrigin: "50% 50%"
		})

		gsap.to(".item-1, .item-2, .item-3, .item-4, .item-5, .item-6", {
			motionPath: "#myPath",
			transformOrigin: "50% 50%",
			scrollTrigger: {
				trigger: ".usp-list",
				start: "top top",
				end: "bottom top",
				scrub: 1,
			},
			duration: 5,

		});

	}, []);






	// Hide the horizontal scrollbar during the transition
	const hideScrollbar = () => {
		document.body.style.overflowX = 'hidden';
	};

	const showScrollbar = () => {
		document.body.style.overflowX = 'auto';
	};

	React.useEffect(() => {
		hideScrollbar();
		return () => showScrollbar();
	}, []);


	// For OUR-WORK PAGE1 Animation [LumberCraft]


	const lumberCraftRef = useRef(null);

	React.useEffect(() => {
		gsap.fromTo(lumberCraftRef.current,
			{ x: 1800, opacity: 0 },
			{
				x: 0,
				opacity: 1,
				scrollTrigger: {
					trigger: lumberCraftRef.current,
					start: "top 80%", // Trigger when the top of the section is 80% down the viewport
					end: "top 30%", // End when the top of the section is 30% down the viewport
					scrub: 1,
				},

			}
		);

		gsap.fromTo(".main-product",
			{ y: 300, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				duration: 1,
				scrollTrigger: {
					trigger: ".main-product",
					start: "top 80%", // Trigger when the top of the section is 80% down the viewport
					end: "top 40%", // End when the top of the section is 30% down the viewport
					scrub: 1,
				}
			}
		);

		gsap.fromTo(".all-products",
			{ x: -300, opacity: 0 },
			{
				x: 150,
				opacity: 1,
				duration: 2,
				scrollTrigger: {
					trigger: ".all-products",
					start: "top 80%", // Trigger when the top of the section is 80% down the viewport
					end: "top 40%", // End when the top of the section is 30% down the viewport
					scrub: 1,
				}
			}
		);

		gsap.fromTo(".customer-services",
			{ x: 300, opacity: 0 },
			{
				x: -130,
				opacity: 1,
				duration: 2,
				scrollTrigger: {
					trigger: ".customer-services",
					start: "top 80%", // Trigger when the top of the section is 80% down the viewport
					end: "top 40%", // End when the top of the section is 30% down the viewport
					scrub: 1,
				}
			}
		);

	}, []);


	// For OUR-WORK PAGE2 Animation [RegalFinance]


	const regalFinance = useRef(null);

	React.useEffect(() => {
		gsap.fromTo(regalFinance.current,
			{ x: 300, y: 200, opacity: 0 },
			{
				x: 0,
				y: 0,
				opacity: 1,
				scrollTrigger: {
					trigger: regalFinance.current,
					start: "top 90%", // Trigger when the top of the section is 80% down the viewport
					end: "top 30%", // End when the top of the section is 30% down the viewport
					scrub: 1,
				}
			}
		);

		gsap.fromTo(".leftPanel",
			{ x: -400, opacity: 1 },
			{
				x: 150,
				opacity: 1,
				duration: 2,
				scrollTrigger: {
					trigger: ".leftPanel",
					start: "top 90%", // Trigger when the top of the section is 80% down the viewport
					end: "top 30%", // End when the top of the section is 30% down the viewport
					scrub: 1,
				}
			}
		);

		gsap.fromTo(".rewards",
			{ opacity: 1, scale: 0.5 }, // Start from below the viewport
			{
				opacity: 1,
				scale: 1,
				duration: 1,
				scrollTrigger: {
					trigger: ".rewards",
					start: "top 90%", // Trigger when the top of the section is 90% down the viewport
					end: "top 30%", // End when the top of the section is 30% down the viewport
					scrub: 1,
				}
			}
		);

		gsap.fromTo(".assets",
			{ opacity: 1, scale: 0.5, x: 200 }, // Start from below the viewport
			{
				opacity: 1,
				scale: 1,
				x: -100,
				duration: 1,
				scrollTrigger: {
					trigger: ".assets",
					start: "top 90%", // Trigger when the top of the section is 90% down the viewport
					end: "top 30%", // End when the top of the section is 30% down the viewport
					scrub: 1,
				}
			}
		);

		gsap.fromTo(".regalNavbar",
			{ opacity: 1, scale: 0.5, x: 200 }, // Start from below the viewport
			{
				opacity: 1,
				scale: 1,
				x: 0,
				duration: 1,
				scrollTrigger: {
					trigger: ".regalNavbar",
					start: "top 90%", // Trigger when the top of the section is 90% down the viewport
					end: "top 30%", // End when the top of the section is 30% down the viewport
					scrub: 1,
				}
			}
		);

	}, []);



	gsap.fromTo(".xtream",
		{ x: -600, opacity: 0 },
		{
			x: 0,
			opacity: 1,
			duration: 2,
			scrollTrigger: {
				trigger: ".xtream",
				start: "top bottom", // Trigger when the top of the section is 80% down the viewport
				end: "top 40%", // End when the top of the section is 30% down the viewport
				scrub: 1,
			}
		}
	);


	const orchard = useRef(null);
	React.useEffect(() => {
		gsap.fromTo(orchard.current,
			{ x: 300, y: 500, opacity: 0 },
			{
				x: 0,
				y: 0,
				opacity: 1,
				scrollTrigger: {
					trigger: orchard.current,
					start: "top 90%",
					end: "top 30%",
					scrub: 1,
				}
			}
		);

		gsap.fromTo(".veggies",
			{ x: -300, opacity: 1 },
			{
				x: 0,
				opacity: 1,
				duration: 2,
				scrollTrigger: {
					trigger: ".veggies",
					start: "top 90%", // Trigger when the top of the section is 80% down the viewport
					end: "top 30%", // End when the top of the section is 30% down the viewport
					scrub: 1,
				}
			}
		);


		gsap.fromTo(".find-prods",
			{ x: 400, opacity: 1 },
			{
				x: 0,
				opacity: 1,
				duration: 2,
				scrollTrigger: {
					trigger: ".find-prods",
					start: "top bottom", // Trigger when the top of the section is 80% down the viewport
					end: "bottom bottom", // End when the top of the section is 30% down the viewport
					scrub: 1,
				}
			}
		);


		gsap.fromTo(".homescreen",
			{ x: 400, opacity: 1 },
			{
				x: 0,
				opacity: 1,
				duration: 2,
				scrollTrigger: {
					trigger: ".homescreen",
					start: "top 90%", // Trigger when the top of the section is 80% down the viewport
					end: "top 30%", // End when the top of the section is 30% down the viewport
					scrub: 1,
				}
			}
		);

	}, []);



	const healthInsurance = useRef(null)
	React.useEffect(() => {
		gsap.fromTo(healthInsurance.current,
			{ x: -300, opacity: 0 },
			{
				x: 0,
				opacity: 1,
				scrollTrigger: {
					trigger: healthInsurance.current,
					start: "top 90%",
					end: "top 30%",
					scrub: 1,
				}
			}
		);

		gsap.fromTo(".phoneMock",
			{ x: 1000, y: 200, opacity: 1, scale: 2 },
			{
				x: 0,
				y: 0,
				opacity: 1,
				scale: 1,
				scrollTrigger: {
					trigger: ".healthScreens",
					start: "top 80%",
					end: "top 30%",
					scrub: 1,
				}
			}
		);

		gsap.fromTo(".statistics",
			{ x: -1400, opacity: 1 },

			{
				x: -400,
				opacity: 1,
				scale: 1,
				scrollTrigger: {
					trigger: ".healthInsurance",
					start: "top 50%",
					end: "top 90%",
					scrub: 1,
				}
			}
		);

		gsap.fromTo(".graph-customize",
			{ x: 400, opacity: 1 },

			{
				x: 0,
				opacity: 1,
				scale: 1,
				scrollTrigger: {
					trigger: ".healthScreens",
					start: "top 50%",
					end: "top top",
					scrub: 1,
				}
			}
		);

		gsap.fromTo(".widgets-container",
			{ x: 400, opacity: 1 },

			{
				x: 0,
				opacity: 1,
				scale: 1,
				scrollTrigger: {
					trigger: ".healthScreens",
					start: "top 50%",
					end: "top top",
					scrub: 1,
				}
			}
		);







		gsap.fromTo(".Add",
			{ x: 0, y: 550 },
			{
				x: -200,
				y: 0,
				scrollTrigger: {
					trigger: ".healthInsurance",
					start: "bottom bottom",
					end: "bottom top",
					scrub: 1,
				}
			},);

		gsap.fromTo(".And",
			{ x: -200, y: 500 },
			{
				x: -200,
				y: 0,
				scrollTrigger: {
					trigger: ".healthInsurance",
					start: "bottom bottom",
					end: "bottom top",
					scrub: 1,
				}
			},);

		gsap.fromTo(".Arrow",
			{ x: 0, y: 500 },
			{
				x: -200,
				y: 0,
				scrollTrigger: {
					trigger: ".healthInsurance",
					start: "bottom bottom",
					end: "bottom top",
					scrub: 1,
				}
			},);

		gsap.fromTo(".Bulb",
			{ x: -100, y: 200 },
			{
				x: -700,
				y: -200,
				scrollTrigger: {
					trigger: ".healthInsurance",
					start: "bottom bottom",
					end: "bottom top",
					scrub: 1,
				}
			},);

		gsap.fromTo(".Coverage",
			{ x: -130, y: -50 },
			{
				x: -400,
				y: -400,
				scrollTrigger: {
					trigger: ".healthInsurance",
					start: "bottom bottom",
					end: "bottom top",
					scrub: 1,
				}
			},);

		gsap.fromTo(".Health",
			{ x: -150, y: 0 },
			{
				x: -300,
				y: -300,
				scrollTrigger: {
					trigger: ".healthInsurance",
					start: "bottom bottom",
					end: "bottom top",
					scrub: 1,
				}
			},);

		gsap.fromTo(".Mind",
			{ x: -300, y: -150 },
			{
				x: -600,
				y: -600,
				scrollTrigger: {
					trigger: ".healthInsurance",
					start: "bottom bottom",
					end: "bottom top",
					scrub: 1,
				}
			},);

		gsap.fromTo(".Phonebook",
			{ x: 0, y: -300 },
			{
				x: -600,
				y: -900,
				scrollTrigger: {
					trigger: ".healthInsurance",
					start: "bottom bottom",
					end: "bottom top",
					scrub: 1,
				}
			},);

		gsap.fromTo(".Safe",
			{ x: -250, y: -300 },
			{
				x: -800,
				y: -600,
				scrollTrigger: {
					trigger: ".healthInsurance",
					start: "bottom bottom",
					end: "bottom top",
					scrub: 1,
				}
			},);

		gsap.fromTo(".Schedule",
			{ x: -100, y: -420 },
			{
				x: -600,
				y: -800,
				scrollTrigger: {
					trigger: ".healthInsurance",
					start: "bottom bottom",
					end: "bottom top",
					scrub: 1,
				}
			},);

		gsap.fromTo(".Secure",
			{ x: -200, y: -500 },
			{
				x: -250,
				y: -1200,
				scrollTrigger: {
					trigger: ".healthInsurance",
					start: "bottom bottom",
					end: "bottom top",
					scrub: 1,
				}
			},);

		gsap.fromTo(".Teeth",
			{ x: -350, y: -700 },
			{
				x: -600,
				y: -1200,
				scrollTrigger: {
					trigger: ".healthInsurance",
					start: "bottom bottom",
					end: "bottom top",
					scrub: 1,
				}
			},);






	}, []);

	
	
	const dinaRollings = useRef(null)







	return (
		<main>
			<section className="every-pixel">
				<Link className="start-your-project">Start your Project</Link>

				<p className="bring-idea">Bringing your ideas to life where</p>

				<div className="headers">
					<h1>
						Every <span>pixels</span>
					</h1>
				</div>

				<p className="tells-your-story">Tells Your Story</p>
			</section>

			<div className="intro">
				<section className="welcome2rp">
					<h2>
						Welcome to
						<span>
							Rarepi
							<div className="x" />
							els
						</span>
					</h2>
				</section>

				<section className="visually-captivating">
					<h2>
						A creative design agency specializing in crafting innovative{" "}
						<div className="wind-mill" />
						and visually captivating <div className="eye" /> solutions
					</h2>
				</section>
			</div>

			<section className="transform-ideas">
				<h2>
					We transform ideas <div className="bulbs" /> into memorable
					experiences <div className="squares" /> through branding{" "}
					<div className="shapes" /> web design, and digital strategy.
				</h2>
			</section>

			<section className="our-services w-full">
				<div className="container h-[200vh] relative">

					<div className="slides overflow-hidden sticky top-0 left-0 flex w-full h-[100vh]">
						<div className="slide w-full flex items-center justify-center h-screen flex-shrink-0 bg-green-500">
							<svg
								viewBox="0 0 1615 500"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									ref={pathRef}
									id="animatedPath"
									d="M0.5 162.5C301.5 339 1385 -211.5 1614 97"
									stroke="#ED0180"
									stroke-width="3"
								/>
							</svg>
						</div>

						<div className="slide w-full h-screen flex items-center justify-center flex-shrink-0 relative bg-yellow-500">
							<svg
								viewBox="0 0 1615 500"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									id="myPath"
									// d="M0 351C188.6 479.4 338.167 404.5 389.5 351C439.833 322 555.9 267.9 617.5 283.5C694.5 303 701 216.5 778 197C855 177.5 1013 216 1019 283.5C1025 351 1189 280.5 1189 351C1189 421.5 1298 399 1311 351C1324 303 1465 322 1497 351C1522.6 374.2 1591.33 339.333 1622.5 319C1638.67 308.333 1661.3 278 1622.5 242C1574 197 1731.5 123 1786 136C1829.6 146.4 1864.17 50.3333 1876 1"
									d="M3433 1C3444.33 62.8333 3436.2 190.5 3313 206.5C3189.8 222.5 3117.33 315.833 3096.5 360.5C3088 405.167 3015.1 467.7 2791.5 360.5C2512 226.5 2569 468.5 2503.5 414.5C2451.1 371.3 2240.33 386.833 2141.5 400C2096.67 413.5 2007.6 424.5 2010 360.5C2012.4 296.5 1840 333.833 1753.5 360.5H0"
									stroke="#ED0180"
									stroke-width="3"
								/>
							</svg>


							<div className="usp-list h-screen w-[100% - 100vw] absolute flex items-center justify-center">
								<div className="item-1 h-[300px] w-[300px]">
									<img src={research} alt="" />
								</div>

								<div className="item-2 h-[400px] w-[400px]">
									<img src={strategy} alt="" />
								</div>

								<div className="item-3 h-[300px] w-[300px]">
									<img src={uiuxdesign} alt="" />
								</div>

								<div className="item-4 h-[400px] w-[400px]">
									<img src={branding} alt="" />
								</div>

								<div className="item-5 h-[300px] w-[300px]">
									<img src={build} alt="" />
								</div>

							</div>

						</div>

					</div>

				</div>
			</section>

			<section className="our-work">

				<div ref={lumberCraftRef} className="lumber-craft w-full h-screen">
					<div className="lumberFrame absolute top-0 left-0 h-full w-full">

						<div className="lumberContent flex justify-center items-center gap-20 h-full w-full">
							<div className="all-products">
								<img src={lumber_all_products} alt="" />
							</div>

							<div className="main-product">
								<img className="h-[800px]" src={lumber_main} alt="" />
							</div>

							<div className="customer-services">
								<img src={lumber_customer} alt="" />
							</div>
						</div>

					</div>
				</div>

				<div ref={regalFinance} className="regalFinance w-full h-screen">
					<div className="regalFrame absolute top-0 left-0 h-full w-full">

						<div className="regalContent flex flex-col gap-20 h-full w-full pt-10">

							<div className="regalNavbar">
								<div className="w-full flex items-center justify-center">
									<img src={regal_navbar} alt="" />
								</div>
							</div>


							<div className="regalData flex justify-center items-center gap-20">
								<div className="leftPanel">
									<div className="">
										<img className="h-[600px]" src={regal_leftpanel} alt="" />
									</div>
								</div>

								<div className="rewards">
									<div className="">
										<img className="h-[400px]" src={rewards} alt="" />
									</div>
								</div>

								<div className="assets">
									<div className="relative top-[-200px]">
										<img className="h-[400px]" src={assets} alt="" />
									</div>
								</div>
							</div>

						</div>

					</div>
				</div>

				<div className="xtream h-screen w-screen flex justify-center items-center">
					<img className="image absolute h-[90%] w-[90%] z-10" src={xtream_full} alt="" />
				</div>

				<div ref={orchard} className="orchard h-screen w-screen">

					<div className="orchardScreens absolute top-0 left-0 h-screen w-screen">
						<div className="screen-showcase">
							<div className="veggie-menu">
								<div className="relative h-full">
									<img className="veggies absolute top-0 left-0 z-1" src={topLeftVeggies} alt="" />
									<img className="find-prods relative z-2 top-[25%] left-[12.5%]" src={bottomLeftPhone} alt="" />
								</div>
							</div>


							<div className="vertical-scroll">

								<div className="marquee">
									<img src={favoriteScreen} alt="" />
									<img src={filterScreen} alt="" />
									<img src={homeScreen} alt="" />
									<img src={beveragesScreen} alt="" />
									<img src={locationScreen} alt="" />
									<img src={loginScreen} alt="" />
									<img src={mobileScreen} alt="" />
									<img src={mycartScreen} alt="" />
									<img src={productDetailsScreen} alt="" />
									<img src={searchScreen} alt="" />
								</div>

							</div>
						</div>
						<div className="homescreen">
							<img src={rightHome} alt="" />
						</div>
					</div>


				</div>

				<div ref={healthInsurance} className="healthInsurance h-[200vh] w-screen">
					<div className="healthScreens h-screen w-screen flex">

						<div className="screenContainer absolute top-0 left-0 flex z-10">

							<div className="phone flex relative left-[-250px]">
								<img className="phoneMock h-[1100px] relative z-10" src={phoneMockup} alt="" />
								<img className="statistics h-[700px] relative z-2 top-[180px]" src={statistics} alt="" />
							</div>

							<div className="graph-customize flex items-start justify-center relative top-[200px] left-[-300px]">
								<img src={lineGraph} alt="" />
								<img className="relative top-[65px] left-[-100px]" src={customize} alt="" />
							</div>

							<div className="hiLogo">
								<img className="relative left-[-200px] top-[100px]" src={hiLogo} alt="" />
							</div>
						</div>

						<div className="widgets-container relative right-[1px]">
							<img src={add} alt="" className="Add" />
							<img src={and} alt="" className="And" />
							<img src={arrow} alt="" className="Arrow" />
							<img src={bulb} alt="" className="Bulb" />
							<img src={coverage} alt="" className="Coverage" />
							<img src={health} alt="" className="Health" />
							<img src={mind} alt="" className="Mind" />
							<img src={phonebook} alt="" className="Phonebook" />
							<img src={safe} alt="" className="Safe" />
							<img src={schedule} alt="" className="Schedule" />
							<img src={secure} alt="" className="Secure" />
							<img src={teeth} alt="" className="Teeth" />
						</div>


					</div>

				</div>

				<div ref={dinaRollings} className="dinaRollings h-screen w-screen bg-pink-200">
					
				</div>






				<div className="h-screen w-screen bg-red-500"></div>


			</section>
		</main>
	);
};

export default Landing;
