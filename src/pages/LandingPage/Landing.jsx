import React, { useEffect, useRef } from 'react';
import "./landing.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { Link } from "react-router-dom";

import Slider from "react-slick";
import Marquee from "react-fast-marquee";
import { useScroll } from "framer-motion";

import bulbs from "../../assets/images/04_transformIdeas/trybulb.gif"
import bwSquare from "../../assets/images/04_transformIdeas/blackWhiteSquare.gif"
import shapes from "../../assets/images/04_transformIdeas/jumpingShapes.gif"



import research from "../../assets/images/06_ropeEffectPlayables/research_square.png"
import strategy from "../../assets/images/06_ropeEffectPlayables/strategy_square.png"
import uiuxdesign from "../../assets/images/06_ropeEffectPlayables/uiux_square.png"
import branding from "../../assets/images/06_ropeEffectPlayables/branding_square.png"
import build from "../../assets/images/06_ropeEffectPlayables/build_square.png"


import lumber_main from "../../assets/images/07_ourWorks/LUMBERCRAFT/lumbercraft-main-product.png"
import lumber_all_products from "../../assets/images/07_ourWorks/LUMBERCRAFT/lumbercraft-all-products-list.png"
import lumber_customer from "../../assets/images/07_ourWorks/LUMBERCRAFT/lumbercraft-customer-services.png"
import place_it from "../../assets/images/07_ourWorks/LUMBERCRAFT/place-it.png"


import intuitiveDes from "../../assets/images/07_ourWorks/REGALFINANCE/intuitiveMobile.png"
import rgl_nav from "../../assets/images/07_ourWorks/REGALFINANCE/navbar.png"
import rgl_explore from "../../assets/images/07_ourWorks/REGALFINANCE/exploreWorld.png"
import rgl_freedom from "../../assets/images/07_ourWorks/REGALFINANCE/discoverFreedom.png"
import rgl_financeCirc from "../../assets/images/07_ourWorks/REGALFINANCE/financialCircle.png"
import rgl_assets from "../../assets/images/07_ourWorks/REGALFINANCE/assets.png"

import xtream_full from "../../assets/images/07_ourWorks/Xtream/xtreamFullImage.png"

import orcd_veggies from "../../assets/images/07_ourWorks/ORCHARD/veggies.png"
import orcd_products from "../../assets/images/07_ourWorks/ORCHARD/findProducts.png"
import orcd_home from "../../assets/images/07_ourWorks/ORCHARD/orchardHome.png"

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


import dinaHome from "../../assets/images/07_ourWorks/DINAROLLING/phone-mock-homeScreen.png"
import dinaActual from "../../assets/images/07_ourWorks/DINAROLLING/dina-bonus-actual.png"
import gameGraph from "../../assets/images/07_ourWorks/DINAROLLING/game-metrics-graph.png"
import connectionsBuild from "../../assets/images/07_ourWorks/DINAROLLING/connection-building.png"
import felindra from "../../assets/images/07_ourWorks/DINAROLLING/felindra-lucen.png"
import sessions from "../../assets/images/07_ourWorks/DINAROLLING/sessions.png"


import creativeInfo from "../../assets/images/07_ourWorks/VIVIDSPARK/creativedesigninfo.png"
import continueInnovation from "../../assets/images/07_ourWorks/VIVIDSPARK/continueInnovation.png"
import ladyModel from "../../assets/images/07_ourWorks/VIVIDSPARK/ladyCutout.png"


import cocktailCultureLogo from "../../assets/images/07_ourWorks/COCKTAILCULTURE/pngs/cocktailCulture.png"
import experienceASip from "../../assets/images/07_ourWorks/COCKTAILCULTURE/pngs/ExperienceASip.png"
import startMakingDrink from "../../assets/images/07_ourWorks/COCKTAILCULTURE/pngs/startMakingDrink.png"
import orangeJuice from "../../assets/images/07_ourWorks/COCKTAILCULTURE/pngs/orangeJuice.png"
import lemonJuice from "../../assets/images/07_ourWorks/COCKTAILCULTURE/pngs/lemonJuice.png"
import kiwiJuice from "../../assets/images/07_ourWorks/COCKTAILCULTURE/pngs/kiwiJuice.png"
import beHappyKiwi from "../../assets/images/07_ourWorks/COCKTAILCULTURE/pngs/kiwiBeHappy.png"
import visitCocktail from "../../assets/images/07_ourWorks/COCKTAILCULTURE/pngs/visitOurCocktailRestro.png"
import strippingLine from "../../assets/images/07_ourWorks/COCKTAILCULTURE/pngs/stripImage.png"
import sipSavor from "../../assets/images/07_ourWorks/COCKTAILCULTURE/pngs/sipSavorMarquee.png"


import girl from "../../assets/images/09_companyOverview/imgs/girlPotrait.png"
import flower from "../../assets/images/09_companyOverview/imgs/flowerInPeach.png"
import ovalSpring from "../../assets/images/09_companyOverview/gifs/springAnimation.gif"
import satisfactionGraph from "../../assets/images//09_companyOverview/imgs/customerSatisfactionGraph.png"
import movingEye from "../../assets/images/09_companyOverview/gifs/movingEyeCropped.mp4"
import arrowAnimation from "../../assets/images/09_companyOverview/gifs/arrowAnimation.gif"
import movingBallAnimation from "../../assets/images/09_companyOverview/gifs/ballInTheBox.gif"
import circleAnimation from "../../assets/images/09_companyOverview/gifs/greenBallAnimations.gif"


import arrowPinkHeadSmall from "../../assets/images/08_designProcess/arrowPinkHeadSmall.png"


import onboarding from "../../assets/images/08_designProcess/onBoarding.png"
import startProject from "../../assets/images/08_designProcess/startProject.png"
import design from "../../assets/images/08_designProcess/design.png"
import delivery from "../../assets/images/08_designProcess/delivery.png"


import movingPen from "../../assets/images/10_amazingTools/movingPen.gif"


import ashlynn from "../../assets/images/11_testimonial/Ashlynn.png"
import ann from "../../assets/images/11_testimonial/Ann.png"
import talan from "../../assets/images/11_testimonial/Talan.png"

import maria from "../../assets/images/12_peoples/mariaRosser.png"
import brandon from "../../assets/images/12_peoples/brandonPhilips.png"
import hannah from "../../assets/images/12_peoples/blackWhiteShirt.png"
import dua from "../../assets/images/12_peoples/whiteTshirt.png"


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


const Landing = () => {

	/********* CHECKING AREA *********/


	/******************/



	React.useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.fromTo(".blubs",
			{
				y: 0,
			},

			{
				y: -50,	
				scrollTrigger:{
					trigger: ".transform-ideas",
                    start: "top bottom",
                    end: "top top",
                    scrub: 1,
				}				
			},
		)

		gsap.fromTo(".bwSquare",
			{
				y: 0,
			},

			{
				y: -100,	
				scrollTrigger:{
					trigger: ".transform-ideas",
                    start: "top bottom",
                    end: "top top",
                    scrub: 1,
				}				
			},
		)

		gsap.fromTo(".shapes",
			{
				y: 0,
			},

			{
				y: -80,	
				scrollTrigger:{
					trigger: ".transform-ideas",
                    start: "top bottom",
                    end: "top top",
                    scrub: 1,
				}				
			},
		)
	})


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


	const lumberCraftRef = useRef(null);
	React.useEffect(() => {

		// gsap.fromTo(lumberCraftRef.current,
		// 	{ x: 100, opacity: 0, },
		// 	{
		// 		x: 0,
		// 		overflow: 'hidden',
		// 		opacity: 1,
		// 		scrollTrigger: {
		// 			trigger: lumberCraftRef.current,
		// 			start: "top 80%",
		// 			end: "top top",
		// 			scrub: 1,
		// 		},

		// 	}
		// );

		gsap.fromTo(".main-product",
			{ y: 300, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				scrollTrigger: {
					trigger: ".main-product",
					start: "top -10%",
					end: "top -30%",
					// scrub: 1,
				}
			}
		);

		gsap.fromTo(".all-products",
			{ x: -300, opacity: 0 },
			{
				x: 150,
				opacity: 1,
				scrollTrigger: {
					trigger: ".all-products",
					start: "top -30%",
					end: "top -50%",
					// scrub: 1,
				}
			}
		);

		gsap.fromTo(".customer-services",
			{ x: 100, opacity: 0 },
			{
				x: -130,
				opacity: 1,
				scrollTrigger: {
					trigger: ".customer-services",
					start: "top -50%",
					end: "top -70%",
					// scrub: 1,
				}
			}
		);

	}, []);


	const regalFinance = useRef(null);
	React.useEffect(() => {
		// gsap.fromTo(regalFinance.current,
		// 	{ x: 100, y: 100, opacity: 0 },
		// 	{
		// 		x: 0,
		// 		y: 0,
		// 		opacity: 1,
		// 		scrollTrigger: {
		// 			trigger: regalFinance.current,
		// 			start: "top 80%", // Trigger when the top of the section is 80% down the viewport
		// 			end: "top top", // End when the top of the section is 30% down the viewport
		// 			scrub: 1,
		// 		}
		// 	}
		// );

		gsap.fromTo(".leftPanel",
			{ x: -400, opacity: 1 },
			{
				x: 0,
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
				x: 0,
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
		// 	
		// 	{ x: 100, y: 100, opacity: 0 },
		// 	{
		// 		x: 0,
		// 		y: 0,
		// 		opacity: 1,
		// 		scrollTrigger: {
		// 			trigger: orchard.current,
		// 			start: "top 90%",
		// 			end: "top 30%",
		// 			scrub: 1,
		// 		}
		// 	}
		// );

		// gsap.fromTo(".veggies",
		// 	{ x: -300, opacity: 0 },
		// 	{
		// 		x: 0,
		// 		opacity: 1,
		// 		duration: 2,
		// 		scrollTrigger: {
		// 			trigger: orchard.current,
		// 			start: "top top", // Trigger when the top of the section is 80% down the viewport
		// 			end: "top -20%", // End when the top of the section is 30% down the viewport
		// 			scrub: 1,
		// 		}
		// 	}
		// );


		// gsap.fromTo(".find-prods",
		// 	{ x: -400, opacity: 0 },
		// 	{
		// 		x: 0,
		// 		opacity: 1,
		// 		duration: 2,
		// 		scrollTrigger: {
		// 			trigger: orchard.current,
		// 			start: "top -30%", // Trigger when the top of the section is 80% down the viewport
		// 			end: "top -40%", // End when the top of the section is 30% down the viewport
		// 			scrub: 1,
		// 		}
		// 	}
		// );


		// gsap.fromTo(".homescreen",
		// 	{ x: 100, opacity: 0 },
		// 	{
		// 		x: 0,
		// 		opacity: 1,
		// 		duration: 2,
		// 		scrollTrigger: {
		// 			trigger: orchard.current,
		// 			start: "top -40%", // Trigger when the top of the section is 80% down the viewport
		// 			end: "top -50%", // End when the top of the section is 30% down the viewport
		// 			scrub: 1,
		// 		}
		// 	}
		// );

	}, []);



	const healthInsurance = useRef(null)
	React.useEffect(() => {

		// gsap.fromTo(healthInsurance.current,
		// 	{ x: -300, opacity: 0, },
		// 	{
		// 		x: 0,
		// 		opacity: 1,
		// 		scrollTrigger: {
		// 			trigger: healthInsurance.current,
		// 			start: "top 90%",
		// 			end: "top 30%",
		// 			scrub: 1,
		// 		}
		// 	}
		// );

		// gsap.fromTo(".phoneMock",
		// 	{ x: 1000, y: 200, opacity: 1, scale: 2 },
		// 	{
		// 		x: 0,
		// 		y: 0,
		// 		opacity: 1,
		// 		scale: 1,
		// 		scrollTrigger: {
		// 			trigger: ".healthScreens",
		// 			start: "top 80%",
		// 			end: "top 30%",
		// 			scrub: 1,
		// 		}
		// 	}
		// );

		// gsap.fromTo(".statistics",
		// 	{ x: -1400, opacity: 1 },

		// 	{
		// 		x: -400,
		// 		opacity: 1,
		// 		scale: 1,
		// 		scrollTrigger: {
		// 			trigger: ".healthInsurance",
		// 			start: "top 50%",
		// 			end: "top 90%",
		// 			scrub: 1,
		// 		}
		// 	}
		// );

		// gsap.fromTo(".graph-customize",
		// 	{ x: 400, opacity: 1 },

		// 	{
		// 		x: 0,
		// 		opacity: 1,
		// 		scale: 1,
		// 		scrollTrigger: {
		// 			trigger: ".healthScreens",
		// 			start: "top 50%",
		// 			end: "top top",
		// 			scrub: 1,
		// 		}
		// 	}
		// );

		// gsap.fromTo(".widgets-container",
		// 	{ x: 400, opacity: 1 },

		// 	{
		// 		x: 0,
		// 		opacity: 1,
		// 		scale: 1,
		// 		scrollTrigger: {
		// 			trigger: ".healthScreens",
		// 			start: "top 50%",
		// 			end: "top top",
		// 			scrub: 1,
		// 		}
		// 	}
		// );



		// gsap.fromTo(".Add",
		// 	{ x: 0, y: 550 },
		// 	{
		// 		x: -200,
		// 		y: 0,
		// 		scrollTrigger: {
		// 			trigger: ".healthInsurance",
		// 			start: "bottom bottom",
		// 			end: "bottom top",
		// 			scrub: 1,
		// 		}
		// 	},);

		// gsap.fromTo(".And",
		// 	{ x: -200, y: 500 },
		// 	{
		// 		x: -200,
		// 		y: 0,
		// 		scrollTrigger: {
		// 			trigger: ".healthInsurance",
		// 			start: "bottom bottom",
		// 			end: "bottom top",
		// 			scrub: 1,
		// 		}
		// 	},);

		// gsap.fromTo(".Arrow",
		// 	{ x: 0, y: 500 },
		// 	{
		// 		x: -200,
		// 		y: 0,
		// 		scrollTrigger: {
		// 			trigger: ".healthInsurance",
		// 			start: "bottom bottom",
		// 			end: "bottom top",
		// 			scrub: 1,
		// 		}
		// 	},);

		// gsap.fromTo(".Bulb",
		// 	{ x: -100, y: 200 },
		// 	{
		// 		x: -700,
		// 		y: -200,
		// 		scrollTrigger: {
		// 			trigger: ".healthInsurance",
		// 			start: "bottom bottom",
		// 			end: "bottom top",
		// 			scrub: 1,
		// 		}
		// 	},);

		// gsap.fromTo(".Coverage",
		// 	{ x: -130, y: -50 },
		// 	{
		// 		x: -400,
		// 		y: -400,
		// 		scrollTrigger: {
		// 			trigger: ".healthInsurance",
		// 			start: "bottom bottom",
		// 			end: "bottom top",
		// 			scrub: 1,
		// 		}
		// 	},);

		// gsap.fromTo(".Health",
		// 	{ x: -150, y: 0 },
		// 	{
		// 		x: -300,
		// 		y: -300,
		// 		scrollTrigger: {
		// 			trigger: ".healthInsurance",
		// 			start: "bottom bottom",
		// 			end: "bottom top",
		// 			scrub: 1,
		// 		}
		// 	},);

		// gsap.fromTo(".Mind",
		// 	{ x: -300, y: -150 },
		// 	{
		// 		x: -600,
		// 		y: -600,
		// 		scrollTrigger: {
		// 			trigger: ".healthInsurance",
		// 			start: "bottom bottom",
		// 			end: "bottom top",
		// 			scrub: 1,
		// 		}
		// 	},);

		// gsap.fromTo(".Phonebook",
		// 	{ x: 0, y: -300 },
		// 	{
		// 		x: -600,
		// 		y: -900,
		// 		scrollTrigger: {
		// 			trigger: ".healthInsurance",
		// 			start: "bottom bottom",
		// 			end: "bottom top",
		// 			scrub: 1,
		// 		}
		// 	},);

		// gsap.fromTo(".Safe",
		// 	{ x: -250, y: -300 },
		// 	{
		// 		x: -800,
		// 		y: -600,
		// 		scrollTrigger: {
		// 			trigger: ".healthInsurance",
		// 			start: "bottom bottom",
		// 			end: "bottom top",
		// 			scrub: 1,
		// 		}
		// 	},);

		// gsap.fromTo(".Schedule",
		// 	{ x: -100, y: -420 },
		// 	{
		// 		x: -600,
		// 		y: -800,
		// 		scrollTrigger: {
		// 			trigger: ".healthInsurance",
		// 			start: "bottom bottom",
		// 			end: "bottom top",
		// 			scrub: 1,
		// 		}
		// 	},);

		// gsap.fromTo(".Secure",
		// 	{ x: -200, y: -500 },
		// 	{
		// 		x: -250,
		// 		y: -1200,
		// 		scrollTrigger: {
		// 			trigger: ".healthInsurance",
		// 			start: "bottom bottom",
		// 			end: "bottom top",
		// 			scrub: 1,
		// 		}
		// 	},);

		// gsap.fromTo(".Teeth",
		// 	{ x: -350, y: -700 },
		// 	{
		// 		x: -600,
		// 		y: -1200,
		// 		scrollTrigger: {
		// 			trigger: ".healthInsurance",
		// 			start: "bottom bottom",
		// 			end: "bottom top",
		// 			scrub: 1,
		// 		}
		// 	},);


	}, []);


	const is4k = window.innerWidth < 2700 && window.innerWidth > 1927;
	const isLargeLaptop = window.innerWidth < 1926 && window.innerWidth > 1440;
	const isMediumLaptop = window.innerWidth < 1440 && window.innerWidth > 1024;
	const isSmallLaptop = window.innerWidth < 1024 && window.innerWidth > 768;
	const isTablet = window.innerWidth < 768 && window.innerWidth > 530;
	const isLargeMobile = window.innerWidth < 530;
	const isAnyMobile = window.innerWidth < 450 && window.innerWidth > 320;



	const dinaRollings = useRef(null)
	React.useEffect(() => {
		gsap.fromTo(dinaRollings.current,
			{ x: 100, opacity: 0 },
			{
				x: 0,
				opacity: 1,
				scrollTrigger: {
					trigger: dinaRollings.current,
					start: "top 90%",
					end: "top 30%",
					scrub: 1,
				},
			}
		);

		gsap.fromTo(".dina",
			{
				x: is4k ? 200 : isLargeLaptop ? 100 : isMediumLaptop ? 50 : isSmallLaptop ? 25 : isTablet ? 12 : isLargeMobile ? 6 : isAnyMobile ? 3 : 0,
				scale: 0,
				opacity: 0,
			},

			{
				x: 0,
				y: 0,
				scale: 1,
				opacity: 1,
				scrollTrigger: {
					trigger: ".dinaRollings",
					start: "top top",
					end: "top -10%",
					scrub: 1,
				},
			},

		);

		gsap.fromTo(".gameGraph",
			{ x: 0, y: 0, scale: 0, opacity: 0 },

			{
				x: 0,
				y: 0,
				scale: 1,
				opacity: 1,
				scrollTrigger: {
					trigger: ".dinaRollings",
					start: "top -10%",
					end: "top -20%",
					scrub: 1,
				},

			},

		);

		gsap.fromTo(".connectionBuild",
			{ x: 0, y: 0, scale: 0, opacity: 0 },

			{
				x: 0,
				y: 0,
				scale: 1,
				opacity: 1,
				scrollTrigger: {
					trigger: ".dinaRollings",
					start: "top -20%",
					end: "top -30%",
					scrub: 1,
				},

			},

		);

		gsap.fromTo(".felindra",
			{ x: 0, y: 0, scale: 0, opacity: 0 },

			{
				x: 0,
				y: 0,
				scale: 1,
				opacity: 1,
				scrollTrigger: {
					trigger: ".dinaRollings",
					start: "top -30%",
					end: "top -40%",
					scrub: 1,
				},

			},

		);

		gsap.fromTo(".sessions",
			{ x: 0, y: 0, scale: 0, opacity: 0 },

			{
				x: 0,
				y: 0,
				scale: 1,
				opacity: 1,
				scrollTrigger: {
					trigger: ".dinaRollings",
					start: "top -40%",
					end: "top -50%",
					scrub: 1,
				},

			},

		);


	}, []);


	// const vividSpark = useRef(null)
	React.useEffect(() => {

		gsap.fromTo(".vividText",
			{
				left: "100%",
			},

			{
				left: "0%",
				scrollTrigger: {
					trigger: ".vividContainer",
					start: "top top",
					end: "top -50%",
					scrub: 1,
				},
			},

		);

		// gsap.fromTo(".connect",
		// 	{
		// 		x: -700
		// 	},

		// 	{
		// 		x: 0,
		// 		scrollTrigger: {
		// 			trigger: ".vividContainer",
		// 			start: "top -50%",
		// 			end: "top -70%",
		// 			scrub: 1,
		// 		},
		// 	},
		// );

		gsap.fromTo(".creativeInfo",
			{
				x: -780, y: 300,
			},
			{
				x: "100%", y: 300,
				scrollTrigger: {
					trigger: ".vividContainer",
					start: "top -70%",
					end: "top -75%",
					scrub: 1,
				},
			}
		);

		gsap.fromTo(".continueInnovation",
			{
				x: -650,
				y: 580,
			},
			{
				x: 60,
				y: 580,
				scrollTrigger: {
					trigger: ".vividContainer",
					start: "top -75%",
					end: "top -80%",
					scrub: 1,
				},
			},
		);

		gsap.fromTo(".ladyModel",
			{
				x: 550,
				scale: 1,
			},
			{
				x: 0,
				scrollTrigger: {
					trigger: ".vividContainer",
					start: "top -75%",
					end: "top -80%",
					scrub: 1,
				},
			},
		);

		gsap.fromTo(".whyUsReveal",
			{
				x: 0,
				y: 700,
				scale: 0.5,
				opacity: 0,

			},
			{
				x: -450,
				scale: 1,
				opacity: 1,
				scrollTrigger: {
					trigger: ".vividContainer",
					start: "top -82%",
					end: "top -90%",
					scrub: 1,
				},
			},
		);

	});


	// const cocktailCulture = useRef(null)
	React.useEffect(() => {

		gsap.fromTo(".rainbowRevealBox",
			{
				y: 0,
			},

			{
				y: "100%",
				scrollTrigger: {
					trigger: ".cocktailCultureContainer",
					start: "top top",
					end: "top -50%",
					scrub: 1,
				},
			},

		);

		// gsap.fromTo(".logo",
		// 	{
		// 		x: 1200,
		// 		y: -200,
		// 	},

		// 	{
		// 		y: "30%",
		// 		scrollTrigger: {
		// 			trigger: ".cocktailCultureContainer",
		// 			start: "top -51%",
		// 			end: "top -55%",
		// 			scrub: 1,
		// 		},
		// 	},

		// );

		// gsap.fromTo(".introPara",
		// 	{
		// 		x: 1220,
		// 		y: -320,
		// 	},

		// 	{
		// 		y: "50%",
		// 		scrollTrigger: {
		// 			trigger: ".cocktailCultureContainer",
		// 			start: "top -55%",
		// 			end: "top -56%",
		// 			scrub: 1,
		// 		},
		// 	},

		// );

		gsap.fromTo(".startMakingDrink",
			{
				x: -550,
				y: -300,
			},

			{
				x: 150,
				y: -120,
				scrollTrigger: {
					trigger: ".cocktailCultureContainer",
					start: "top -56%",
					end: "top -60%",
					scrub: 1,
				},
			},

		);

		gsap.fromTo(".orangeJuice",
			{
				x: 350,
				y: -100,
				scale: 0,
			},

			{
				x: 350,
				y: -100,
				scale: 1,
				scrollTrigger: {
					trigger: ".cocktailCultureContainer",
					start: "top -65%",
					end: "top -70%",
					scrub: 1,
				},
			},

		);

		gsap.fromTo(".lemonJuice",
			{
				x: 600,
				y: -500,
				scale: 0,
			},

			{
				scale: .9,
				scrollTrigger: {
					trigger: ".cocktailCultureContainer",
					start: "top -70%",
					end: "top -75%",
					scrub: 1,
				},
			},

		);

		gsap.fromTo(".kiwiJuice",
			{
				x: 100,
				y: -900,
				scale: 0,
			},

			{
				scale: 1.2,
				scrollTrigger: {
					trigger: ".cocktailCultureContainer",
					start: "top -70%",
					end: "top -75%",
					scrub: 1,
				},
			},

		);

		gsap.fromTo(".beHappyKiwi",
			{
				x: -350,
				y: -1800,
				scale: 0.8
			},

			{
				x: 20,
				scrollTrigger: {
					trigger: ".cocktailCultureContainer",
					start: "top -80%",
					end: "top -85%",
					scrub: 1,
				},
			},

		);

		gsap.fromTo(".visitCocktail",
			{
				x: 300,
				y: 600,
			},

			{
				x: -50,
				y: 450,
				scrollTrigger: {
					trigger: ".cocktailCultureContainer",
					start: "top -85%",
					end: "top -87%",
					scrub: 1,
				},

			}
		);

		gsap.fromTo(".strippingEffect",
			{
				x: 620,
				y: 850,
			},

			{
				x: -100,
				y: 850,
				scrollTrigger: {
					trigger: ".cocktailCultureContainer",
					start: "top -87%",
					end: "top -90%",
					scrub: 1,
				},

			}
		);

		gsap.fromTo(".sipSavor",
			{
				x: 0,
				y: -55,
			},

			{
				x: 50,
				y: -55,
				scrollTrigger: {
					trigger: ".cocktailCultureContainer",
					start: "top -87%",
					end: "top -90%",
					scrub: 1,
				},

			}
		);

	});


	// DESIGN PROCESS SECTION ANIMATIONS
	React.useEffect(() => {
		gsap.fromTo(".designRevealAnimation",
			{
				x: -820,
			},
			{
				x: 0,
				scrollTrigger: {
					trigger: ".design-process",
					start: "top top",
					end: "top -0.2%",
					scrub: 1
				}
			},
		);

		gsap.fromTo(".dp-headers h2 span",
			{
				color: "black",
			},
			{
				color: "white",
				scrollTrigger: {
					trigger: ".design-process",
					start: "top top",
					end: "top -0.2%",
					scrub: 1,
				}
			},
		);


		gsap.set(".arrowBlack", {
			xPercent: -50,
			yPercent: -1500,
			transformOrigin: "50% 50%"
		});
		gsap.to(".arrowBlack", {
			motionPath: {
				path: ".arrowPath svg path",
				autoRotate: true,
			},
			transformOrigin: "50% 50%",
			scrollTrigger: {
				trigger: ".design-process",
				start: "top -15%",
				end: "top -25%",
				scrub: 1,
			},
		});

	}, []);


	// MOVING SCREEN ANIMATION EFFECT
	React.useEffect(() => {

		// PAGE BLACK AND WHITE ANIMATION SO LEFTSCREEN WILL APPEAR WITH B/W  MOVING SQUARE
		gsap.fromTo(".processAnimationStart",
			{
				background: "black",
			},

			{
				background: "white",
				scrollTrigger: {
					trigger: ".design-process",
					start: "top -60%",
					end: "top -65%",
					scrub: 1,
				},
			}
		);


		// MOVING SQUARE SET TO THE MIDDILE AND ROTATE THERE
		gsap.fromTo(".movingSquare",
			{
				opacity: 1,
				x: 500,
				y: 0,
				rotation: 45,
			},

			{
				opacity: 1,
				x: 385,
				y: 0,
				rotation: 135,
				zIndex: 200,
				scrollTrigger: {
					trigger: ".design-process",
					start: "top -55%",
					end: "top -60%",
					scrub: 1,
				},
			}
		);

		// SACLLING UP THE INNER SQUARE
		gsap.fromTo(".innerSquare",
			{
				scale: 1,
			},
			{
				scale: 2,
				scrollTrigger: {
					trigger: ".design-process",
					start: "top -55%",
					end: "top -60%",
					scrub: 1,
				},
			}
		);




		// ACCTUAL SLIDES ROTATION ANIMATION STARTS FROM HERE


		// MOVING WHOLE DIV 0 DEGREE FROM -90 DEGREE
		gsap.fromTo(".movableDiv",
			{
				opacity: 1,
				rotation: -90,
			},

			{
				opacity: 1,
				rotation: 0,
				scrollTrigger: {
					trigger: ".design-process",
					start: "top -60%",
					end: "top -70%",
					scrub: 1,
				},
			}
		);

		// SET OPACITY 0 TO 1 FOR LEFT SCREEN FOR VISIBLE IMPACT
		gsap.fromTo(".leftScreen",
			{
				opacity: 0,
			},

			{
				opacity: 1,
				scrollTrigger: {
					trigger: ".design-process",
					start: "top -60%",
					end: "top -70%",
					scrub: 1,
				},
			}
		);

		// ONBOARDING TEXT REVEAL EFFECT
		gsap.fromTo(".onboarding",
			{
				x: "-100%",
				y: "-110%",
				opacity: 0,
			},

			{
				x: 50,
				opacity: 1,
				scrollTrigger: {
					trigger: ".design-process",
					start: "top -70%",
					end: "top -75%",
					scrub: 1,
				},
			}
		);

		// ONBOARDING TEXT HIDE AGAIN EFFECT
		gsap.fromTo(".onboarding",
			{
				x: 50,
			},

			{
				x: "-100%",
				scrollTrigger: {
					trigger: ".design-process",
					start: "top -100%",
					end: "top -120%",
					scrub: 1,
				},
			}
		);

		// SET OPACITY 1 TO 0 FOR LEFT SCREEN FOR VISIBLE IMPACT
		gsap.fromTo(".leftScreen",
			{
				opacity: 1,
			},

			{
				opacity: 0,
				scrollTrigger: {
					trigger: ".design-process",
					start: "top -110%",
					end: "top -120%",
					scrub: 1,
				},
			}
		);



		// ROTATION 222222222222222222222222

		// MOVING WHOLE DIV 180 DEGREE FROM 0 DEGREE
		gsap.fromTo(".movableDiv",
			{
				rotation: 0,
			},

			{
				rotation: 180,
				scrollTrigger: {
					trigger: ".design-process",
					start: "top -120%",
					end: "top -140%",
					scrub: 1,
				},
			}
		);

		// SET OPACITY 0 TO 1 FOR LEFT SCREEN FOR VISIBLE IMPACT
		gsap.fromTo(".leftScreen",
			{
				opacity: 0,
			},

			{
				opacity: 1,
				scrollTrigger: {
					trigger: ".design-process",
					start: "top -130%",
					end: "top -140%",
					scrub: 1,
				},
			}
		);

		// START PROJECT TEXT REVEAL EFFECT
		gsap.fromTo(".startProject",
			{
				x: 0,
				y: 100,
				zIndex: -1,
			},

			{
				x: "-110%",
				zIndex: 10,
				y: 100,
				scrollTrigger: {
					trigger: ".design-process",
					start: "top -140%",
					end: "top -145%",
					scrub: 1,
				},
			}
		);

		// START PROJECT TEXT HIDE AGAIN SCALE-0 EFFECT
		gsap.fromTo(".startProject",
			{

			},
			{
				x: 0,
				y: 100,
				scrollTrigger: {
					trigger: ".design-process",
					start: "top -150%",
					end: "top -165%",
					scrub: 1,
				},
			}
		);

		// SET OPACITY 1 TO 0 FOR LEFT SCREEN FOR VISIBLE IMPACT
		gsap.fromTo(".leftScreen",
			{
				opacity: 1,
			},

			{
				opacity: 0,
				scrollTrigger: {
					trigger: ".design-process",
					start: "top -155%",
					end: "top -165%",
					scrub: 1,
				},
			}
		);


		// ROTATION 3333333333333333333333

		// MOVING WHOLE DIV 360 DEGREE FROM 180 DEGREE
		gsap.fromTo(".movableDiv",
			{
				rotation: 180,
			},

			{
				rotation: 360,
				scrollTrigger: {
					trigger: ".design-process",
					start: "top -160%",
					end: "top -170%",
					scrub: 1,
				},
			}
		);

		// SET OPACITY 0 TO 1 FOR LEFT SCREEN FOR VISIBLE IMPACT
		gsap.fromTo(".leftScreen",
			{
				opacity: 0,
			},

			{
				opacity: 1,
				scrollTrigger: {
					trigger: ".design-process",
					start: "top -165%",
					end: "top -170%",
					scrub: 1,
				},
			}
		);

		// DESIGN TEXT REVEAL EFFECT
		gsap.fromTo(".design",
			{
				x: "-100%",
				// y:"-110%",
				opacity: 0,
			},

			{
				x: 0,
				y: 0,
				opacity: 1,
				scrollTrigger: {
					trigger: ".design-process",
					start: "top -170%",
					end: "top -180%",
					scrub: 1,
				},
			}
		);

		// DESIGN TEXT HIDE AGAIN SCALE-0 EFFECT
		gsap.fromTo(".design",
			{

			},

			{
				x: "-100%",
				scrollTrigger: {
					trigger: ".design-process",
					start: "top -185%",
					end: "top -190%",
					scrub: 1,
				},
			}
		);

		// SET OPACITY 1 TO 0 FOR LEFT SCREEN FOR VISIBLE IMPACT
		gsap.fromTo(".leftScreen",
			{
				opacity: 1,
			},

			{
				opacity: 0,
				scrollTrigger: {
					trigger: ".design-process",
					start: "top -190%",
					end: "top -200%",
					scrub: 1,
				},
			}
		);



		// ROTATION 44444444444444444444

		// MOVING WHOLE DIV 360 DEGREE FROM 180 DEGREE
		gsap.fromTo(".movableDiv",
			{
				rotation: 0,
			},

			{
				rotation: 180,
				scrollTrigger: {
					trigger: ".design-process",
					start: "top -195%",
					end: "top -205%",
					scrub: 1,
				},
			}
		);

		gsap.fromTo(".leftScreen",
			{
				opacity: 0,
			},

			{
				opacity: 1,
				scrollTrigger: {
					trigger: ".design-process",
					start: "top -200%",
					end: "top -205%",
					scrub: 1,
				},
			}
		);

		gsap.fromTo(".delivery",
			{
				x: 0,
				opacity: 0,
			},

			{
				x: "-100%",
				y: "10%",
				opacity: 1,
				scrollTrigger: {
					trigger: ".design-process",
					start: "top -205%",
					end: "top -215%",
					scrub: 1,
				},
			}
		);



	}, []);


	// TESTIMONIAL BLACK AND WHITE ANIMATIONS

	React.useEffect(() => {

		// BLACK TO WHITE TEXT
		gsap.fromTo(".ttmnalWhiteBlack",
			{
				x: "-100%",
			},

			{
				x: 0,
				scrollTrigger: {
					trigger: ".RPtestimonialsContainer",
					start: "top 30%",
					end: "top 20%",
					scrub: 1,
				},
			}
		);


		// TEXT BLACK TO WHITE
		gsap.to(".testimonialText h2",
			{
				color: "#fff",
				scrollTrigger: {
					trigger: ".RPtestimonialsContainer",
					start: "top 30%",
					end: "top 20%",
					scrub: 1,
				},
			}
		)


		// BLACK BG HEIGHT INCREASE
		gsap.fromTo(".ttmnalWhiteBlack",
			{
				height: "300px",
			},
			{
				height: "100vh",
				scrollTrigger: {
					trigger: ".RPtestimonialsContainer",
					start: "top 10%",
					end: "top top",
					scrub: 1,
				},
			}
		)


		gsap.fromTo(".testimonialsList",
			{
				scale: 0
			},
			{
				scale: 1,
				scrollTrigger: {
					trigger: ".RPtestimonialsContainer",
					start: "top top",
					end: "bottom bottom",
					scrub: 1,
				},
			},
		);

	}, []);




	let particles = [];
	const particlesCount = 250;
	const particlesSize = 12;
	const spacing = particlesSize * 12;

	let gravity;
	let deltaTime = 1 / 60;
	let mousePrevX = 0;
	let mousePrevY = 0;


	class Particle {
		constructor(x, y) {
			this.pos = createVector(x, y);
			this.vel = createVector(random(-20, 20), random(-20, 20));
			this.acc = createVector(0, 0);
			this.color = color(0, 0, 0);
			this.lastPos = createVector(x, y);

		}
	}




	return (
		<main>

			{/* <section className="every-pixel">
				<Link className="start-your-project">Start your Project</Link>

				<p className="bring-idea">Bringing your ideas to life where</p>

				<div className="headers">
					<h1>
						Every <span>pixels</span>
					</h1>
				</div>

				<p className="tells-your-story">Tells Your Story</p>
			</section> */}

			<div className="intro">
				{/* <section className="welcome2rp">
					<h2>
						Welcome to
						<span>
							Rarepi
							<div className="x" />
							els
						</span>
					</h2>
				</section> */}

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
					We transform ideas into memorable experiences through branding web design,  and digital strategy.
				</h2>

				<div className='trnsfm-gifs'>
					<div className='blubs' >
						<img src={bulbs} alt="" />
					</div>

					<div className="bwSquare">
						<img src={bwSquare} alt="" />
					</div>

					<div className="shapes">
						<img src={shapes} alt="" /> 
					</div>
				</div>

			</section>

			<section className="our-work">

				<div ref={lumberCraftRef} className="lmbr-container w-screen h-[150vh]">
					<div className='lmbr-main'>
						<div className="lmbr-header">
							<h2>Lumbercraft</h2>
							<p>Where Comfort Meets Style: Crafted for a Seamless Experience</p>
							<hr />
							<div className="lmbr-work">
								<span>UI/UX Design</span>
								<span>Mobile Application</span>
								<span>Frontend Development</span>
							</div>
						</div>

						<div className="lmbr-body">
							<div className="image-container">
								<div className='lmbr-all-prod'>
									<img src={lumber_all_products} alt="" />
								</div>

								<div className='lmbr-main'>
									<img src={lumber_main} alt="" />
								</div>

								<div className='lmbr-review'>
									<img src={lumber_customer} alt="" />
								</div>


							</div>
						</div>
					</div>
				</div>


				<div ref={regalFinance} className="regalFinance w-screen h-[200vh]">
					<div className='regal-main'>

						<div className="regal-header">
							<div className="headings">
								<h2>Regal Finance</h2>
								<p>Empowering Your Finances with Clarity and Control</p>
								<hr />
								<div className="regal-work">
									<span>UI/UX Design</span>
									<span>Website Design</span>
									<span>Frontend Development</span>
								</div>
							</div>

							<div className="regal-mobileApp">
								<img src={intuitiveDes} alt="" />
							</div>
						</div>


						<div className="regal-body">
							<div className="regal-navbar">
								<div className='rgl-nav'>
									<img src={rgl_nav} alt="" />
								</div>

								<div className='rgl-explr'>
									<img src={rgl_explore} alt="" />
								</div>

							</div>

							<div className="regal-WSContent">
								<div className="rgl-frdm">
									<img src={rgl_freedom} alt="" />
									<img id='fin-cir' src={rgl_financeCirc} alt="" />
								</div>

								<div className="rgl-ast">
									<img src={rgl_assets} alt="" />
								</div>
							</div>
						</div>

					</div>
				</div>


				<div className="xtream h-screen w-screen flex justify-center items-center">
					<img className="image absolute h-[90%] w-[90%] z-10" src={xtream_full} alt="" />
				</div>


				<div ref={orchard} className="orchard h-[200vh] w-screen">

					<div className="orcd-main">
						<div className='orcd-crnr'>
							<img src={orcd_veggies} alt="" />
						</div>

						<div className='orcd-screens'>
							<div className="orcd-findProducts">
								<img src={orcd_products} alt="" />
							</div>

							<div className="orcd-infinity-scrl">
								<div className='scroller'>
									<div className='orcd-custom-scroll'>
										<img src={loginScreen} alt="" />
										<img src={mobileScreen} alt="" />
										<img src={locationScreen} alt="" />
										<img src={homeScreen} alt="" />
										<img src={searchScreen} alt="" />
										<img src={favoriteScreen} alt="" />
										<img src={filterScreen} alt="" />
										<img src={beveragesScreen} alt="" />
										<img src={productDetailsScreen} alt="" />
										<img src={mycartScreen} alt="" />
									</div>
								</div>
							</div>

						</div>

						<div className='orcd-header'>
							<div className="headings">
								<h2>Orchard</h2>
								<p>Fresh Picks, Seamless Clicks: Designed for Everyday Ease</p>
								<hr />
								<div className="orcd-works">
									<span>UI/UX design</span>
									<span>Mobile Application</span>
									<span>Frontend Development</span>
								</div>
							</div>


							<div className="orcd-home">
								<img src={orcd_home} alt="" />
							</div>
						</div>
					</div>

				</div>


				<div ref={healthInsurance} className="healthInsurance h-[200vh] w-screen">

					<div className="hlth-insur-main">

						<div className="HI-phoneMock-screen">
							<div className="HI-phoneMock">
								<img src={phoneMockup} alt="" />
							</div>

							<div className="HI-statistic-screen">
								<img src={statistics} alt="" />
							</div>
						</div>

						<div className="HI-header">
							<div className="HI-heading-customize">

								<div className="heads">
									<h2>Health Insurance</h2>
									<p>Carefully Crafted for Your Care: Simplifying Health Coverage</p>
									<hr />
									<div className="HI-work">
										<span>UI/UX Design</span>
										<span>Mobile Flow</span>
										<span>Wireframes</span>
									</div>
								</div>

								<div className="HI-customize">
									<img src={customize} alt="" />
								</div>

							</div>


							<div className="HI-individual">
								<img src={lineGraph} alt="" />
							</div>

						</div>

						<div className="HI-widgets-container">

							<div>
								<img src={add} alt="" className="Add" />
							</div>

							<div>
								<img src={and} alt="" className="And" />
							</div>

							<div>
								<img src={arrow} alt="" className="Arrow" />
							</div>

							<div>
								<img src={bulb} alt="" className="Bulb" />
							</div>

							<div>
								<img src={coverage} alt="" className="Coverage" />
							</div>

							<div>
								<img src={health} alt="" className="Health" />
							</div>

							<div>
								<img src={mind} alt="" className="Mind" />
							</div>

							<div>
								<img src={phonebook} alt="" className="Phonebook" />
							</div>

							<div>
								<img src={safe} alt="" className="Safe" />
							</div>

							<div>
								<img src={schedule} alt="" className="Schedule" />
							</div>

							<div>
								<img src={secure} alt="" className="Secure" />
							</div>

							<div>
								<img src={teeth} alt="" className="Teeth" />
							</div>


						</div>
					</div>

				</div>


				<div className="dinaRollings h-[200vh] w-screen">
					<div className="dina-main">

						<div className="dina-screens">
							<div className="dina-phoneMock">
								<img src={dinaHome} alt="" />
							</div>

							<div className="dina-screens-layouts">
								<div className="dina-game-connect">
									<div className='dina-gameGraph'>
										<img src={gameGraph} alt="" />
									</div>

									<div className="connections">
										<img src={connectionsBuild} alt="" />
									</div>
								</div>

								<div className="dina-felindra">
									<img src={felindra} alt="" />
								</div>

								<div className="dina-roll">
									<img src={dinaActual} alt="" />
								</div>
							</div>

						</div>

						<div className="dina-heading-session">

							<div className="dina-hearder">
								<h2>Gaming Dashboard</h2>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, impedit!</p>
								<hr />
								<div className="dina-works">
									<span>UI/UX Design</span>
									<span>Mobile Dashboard Design</span>
									<span>Frontend Development</span>
								</div>
							</div>

							<div className="dina-session">
								<img src={sessions} alt="" />
							</div>
						</div>

					</div>
				</div>



				{/* <div className="vividContainer h-[200vh] w-screen">
					
				</div> */}

				{/* <div className="cocktailCultureContainer h-[200vh] w-screen">
					<div className="cocktailCulture h-screen w-screen overflow-hidden">

						<div className="rainBows">
							<div className="pinkRainbow absolute top-0 left-[50%]">
								<svg width="257" height="956" viewBox="0 0 257 956" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M222.396 0H256.25V684H256.26L94.4256 976.801H0L222.391 684H222.396V0Z" fill="#ED2390" />
								</svg>
							</div>

							<div className="blueRainbow absolute top-0 left-[58%]">
								<svg width="162" height="956" viewBox="0 0 162 956" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M127.562 0H161.415V684.013H161.399L95.2309 976.801H0.805359L127.358 684H127.562V0Z" fill="#05AFE6" />
								</svg>

							</div>

							<div className="greenRainbow absolute top-0 left-[66.2%]">
								<svg width="95" height="956" viewBox="0 0 95 956" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M30.7156 0H64.5689V684.013H64.5271L94.6014 976.814H0.175903L30.6716 684.013H30.7156V0Z" fill="#59BA47" />
								</svg>

							</div>

							<div className="yellowRainbow absolute top-0 left-[70.8%]">
								<svg width="162" height="956" viewBox="0 0 162 956" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M0.881104 0H34.7344V684.006H34.7367L161.689 976.807H67.2518L0.887744 684.013H0.881104V0Z" fill="#FED401" />
								</svg>

							</div>

							<div className="redRainbow absolute top-0 left-[74%]">
								<svg width="257" height="956" viewBox="0 0 257 956" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M0.03479 0H33.8881L33.8884 684.006L256.776 976.807H162.339L0.0433792 684.013H0.03479V0Z" fill="#E41E26" />
								</svg>

							</div>

							<div className="rainbowRevealBox absolute top-[0] left-[50%] h-[100%] w-[720px] bg-[#575757]">
							</div>
						</div>

						<div className="layerForReadablity absolute h-screen w-screen"></div>

						<div className="cocktailData relative">

							<div className="strippingEffect absolute top-0 right-0 w-[620px] z-9">
								<Marquee direction="right">
									<img src={strippingLine} alt="" />
								</Marquee>
								<img src={sipSavor} alt="" className="sipSavor absolute z-10" />
							</div>

							<div className="cockTailLogoAndTextContainer">
								<div className="startMaking">
									<img className="startMakingDrink" src={startMakingDrink} alt="" />
								</div>

								<div className="cockTailLogo relative z-12">
									<img className="logo" src={cocktailCultureLogo} alt="" />
									<img className="introPara" src={experienceASip} alt="" />
								</div>
							</div>

							<img className="orangeJuice" src={orangeJuice} alt="" />
							<img className="lemonJuice" src={lemonJuice} alt="" />
							<img className="kiwiJuice" src={kiwiJuice} alt="" />
							<img className="beHappyKiwi z-10" src={beHappyKiwi} alt="" />
							<img src={visitCocktail} className="visitCocktail absolute top-0 right-0" alt="" />

						</div>

					</div>
				</div> */}

			</section>

			{/* <section className="design-process">
				<div className="data">

					<div className="dp-headers h-screen w-screen bg-white h-full">
						<p>Explore how our</p>
						<h2><span className="relative z-10">design</span> process</h2>
						<p>works</p>

						<div className="designRevealAnimation h-[180px] w-[820px] bg-black absolute top-[300px] left-0"></div>

					</div>

					<div className="processAnimationStart h-[200vh]">
						

						<div className="movableDiv relative bg-black-500 h-[100vh] w-[100vw] flex items-center justify-center">
							<div className="movingSquare h-[200px] w-[200px] bg-white relative flex justify-center items-center rounded-[10px] transform rotate-45 z-10">
								<div className="innerSquare h-[60px] w-[60px] bg-black rounded-[5px]"></div>
							</div>

							<div className="leftScreen absolute top-0 left-0 bg-black h-screen w-[70%]"></div>
							<div className="rightScreen absolute top-0 h-screen right-0 w-[30%]"></div>


						</div>



						<div className="processPoints ml-9 text-white">

							<div className="onboarding w-[50vw] h-[80vh]">
								<h2 className=" text-[64px]">ONBOARDING</h2>

								<div className="OBimageAndData flex flex-col items-center justify-center h-[80vh] gap-[30px]">
									<img src={onboarding} alt="" />
									<p className="w-[50%]">Lorem ipsum dolor sit amet consectetur. Neque magna risus suscipit nisl lorem ut commodo. Sagittis ac eleifend at praesent magna neque vel. Id cras tempor eget blandit. Fermentum etiam enim egestas morbi nulla dolor eros.</p>
								</div>
								
							</div>


							<div className="startProject absolute top-0 left-[100%] w-[50vw] h-[80vh]">
								<h2 className="text-[64px]">START PROJECT</h2>

								<div className="SPimageAndData flex flex-col items-center justify-center h-[80vh] gap-[30px]">
									<img src={startProject} alt="" />
									<p className="w-[50%]">Lorem ipsum dolor sit amet consectetur. Neque magna risus suscipit nisl lorem ut commodo. Sagittis ac eleifend at praesent magna neque vel. Id cras tempor eget blandit. Fermentum etiam enim egestas morbi nulla dolor eros.</p>
								</div>

							</div>


							<div className="design absolute top-0 left-0 w-[50vw] h-[80vh]">
								<h2 className="text-[64px] pl-[100px] pt-[100px]">DESIGN</h2>

								<div className="DSimageAndData flex flex-col items-center justify-center h-[80vh] gap-[30px]">
									<img src={design} alt="" />
									<p className="w-[50%]">Lorem ipsum dolor sit amet consectetur. Neque magna risus suscipit nisl lorem ut commodo. Sagittis ac eleifend at praesent magna neque vel. Id cras tempor eget blandit. Fermentum etiam enim egestas morbi nulla dolor eros.</p>
								</div>

							</div>

							
							<div className="delivery absolute top-0 left-[100%] w-[50vw] h-[80vh]">
								<h2 className="text-[64px]">DELIVERY</h2>

								<div className="DLVRimageAndData flex flex-col items-center justify-center h-[80vh] gap-[30px]">
									<img src={delivery} alt="" />
									<p className="w-[50%]">Lorem ipsum dolor sit amet consectetur. Neque magna risus suscipit nisl lorem ut commodo. Sagittis ac eleifend at praesent magna neque vel. Id cras tempor eget blandit. Fermentum etiam enim egestas morbi nulla dolor eros.</p>
								</div>

							</div>


						</div>

					</div>


				</div>
			</section> */}

			{/* <section className="relative z-10 companyOverview">
				<div className="boxContainer h-screen w-screen flex">

					<div className="left h-screen w-[50%]">

						<div className="leftRow flex h-[33.33%] w-[100%]">

							<div className="h-[100%] w-[33.33%] bg-white flex flex-col items-center justify-center gap-8">
								<p className="text-5xl">Team Size</p>
								<p className="text-8xl">9</p>
							</div>

							<div className="h-[100%] w-[33.33%] bg-black text-white flex flex-col pl-12 justify-center gap-4">
								<p className="text-3xl">3 Founders</p>
								<p className="text-3xl">1 Operations</p>
								<p className="text-3xl">3 Creative</p>
								<p className="text-3xl">1 Communications</p>
								<p className="text-3xl">1 UX Writer</p>
							</div>

							<div className="h-[100%] w-[33.33%] bg-white">
								<div className="h-full w-full rounded-[20px]" style={{ backgroundImage: `url(${girl})`, backgroundRepeat: "no-repeat", backgroundSize: "contain" }}>
									<div className="h-[100%] w-[100%] rounded-[20px] flex flex-col justify-end pl-6 pb-8" style={{ background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(141, 139, 136, 0.5))' }}>
										<p className="text-[40px] text-white">Joanne Billings</p>
										<p className="text-[24px] text-white" style={{ fontWeight: "bold", lineHeight: "10px" }}>Operations</p>
									</div>
								</div>

							</div>
						</div>

						<div className="leftRow flex h-[33.33%] w-[100%]">
							<div className="flower-hover-effect h-[100%] w-[33.33%] bg-black flex items-center justify-center ">
								<img src={flower} alt="" />
							</div>

							<div className="h-[100%] w-[33.33%] bg-white flex flex-col justify-center pl-12">
								<p className="text-4xl"><span className="text-6xl">50</span> projects</p>
								<p className="text-4xl">for</p>
								<p className="text-4xl">40 clients</p>
							</div>

							<div className="h-[100%] w-[33.33%] bg-black flex items-center justify-center">
								<img src={ovalSpring} alt="" />
							</div>
						</div>

						<div className="leftRow flex h-[33.33%] w-[100%]">
							<div className="h-[100%] w-[33.33%] bg-white overflow-hidden">
								<div className="text-5xl flex justify-end mr-4"><p>+</p></div>
								<div className="h-[100%] flex flex-col justify-center items-left pl-12 pb-4">
									<p className="text-5xl">Company</p>
									<p className="text-5xl">satisfaction</p>
									<p className="text-5xl">survey</p>
								</div>
							</div>
							<div className="h-[100%] w-[33.33%] bg-black text-white text-4xl flex justify-end pr-1">
								<p>Survey</p>
							</div>
							<div className="h-[100%] w-[33.33%] bg-white text-4xl pl-1">
								<p>data</p>
							</div>

							<div className="absolute left-[18%] mt-14">
								<img src={satisfactionGraph} alt="" />
							</div>
						</div>
					</div>


					<div className="right h-screen w-[50%]">
						<div className="rightRow flex h-[33.33%] w-[100%]">
							<div className="h-[100%] w-[33.33%] bg-black">
								<img src={circleAnimation} alt="" className="pb-5" />
							</div>

							<div className="h-[100%] w-[33.33%] bg-white flex justify-between p-6">
								<div className="text-5xl pl-4 pt-2">
									<p>Art Not</p>
									<p>Evidence</p>
								</div>
								<div className="text-5xl">+</div>
							</div>

							<div className="h-[100%] w-[33.33%] bg-black flex items-center justify-center p-4">
								<video autoPlay muted loop src={movingEye}></video>
							</div>
						</div>

						<div className="rightRow flex h-[33.33%] w-[100%]">
							<div className="h-[100%] w-[33.33%] bg-white flex justify-between pr-4">
								<div className="flex flex-col justify-center pl-12 text-5xl" style={{ lineHeight: "60px" }}>
									<p>A route of</p>
									<p>impact</p>
									<p>through</p>
									<p>design</p>
								</div>
								<div className="text-5xl">+</div>
							</div>

							<div className="h-[100%] w-[33.33%] bg-black flex items-center justify-center pl-[50px] overflow-hidden">
								<img src={arrowAnimation} alt="" style={{ scale: "1.5" }} />
							</div>

							<div className="h-[100%] w-[33.33%] bg-white flex justify-between pr-4">
								<div className="flex flex-col justify-center pl-12 text-4xl" style={{ lineHeight: "50px" }}>
									<p>Guiding</p>
									<p>principles on</p>
									<p>design and</p>
									<p>impact</p>
								</div>
								<div className="text-5xl">+</div>
							</div>

						</div>

						<div className="rightRow flex h-[33.33%] w-[100%]">
							<div className="h-[100%] w-[33.33%] bg-black text-white flex items-center justify-center text-8xl">
								<p>98%</p>
							</div>

							<div className="h-[100%] w-[33.33%] bg-white">

								<div className="flex justify-between">
									<p className="text-4xl pl-4 pt-4">Services</p>
									<p className="text-5xl pr-4 pt-2">+</p>
								</div>

								<div className=" overflow-hidden mt-[58px]">
									<div className="transform rotate-[-20deg] mt-[100px]" style={{ scale: '1.8' }}>
										<div className="m-4">
											<Marquee>
												<p className="h-full w-full ml-2 mr-2">GRAPHIC DESIGN</p>
												<p className="h-full w-full ml-2 mr-2">UI/UX</p>
												<p className="h-full w-full ml-2 mr-2">LOGO</p>
												<p className="h-full w-full ml-2 mr-2">WEBSITE DESIGN</p>
												<p className="h-full w-full ml-2 mr-2">BRANDING</p>
											</Marquee>
										</div>
										<div className="m-4">
											<Marquee direction="right">
												<p className="h-full w-full ml-2 mr-2">GRAPHIC DESIGN</p>
												<p className="h-full w-full ml-2 mr-2">UI/UX</p>
												<p className="h-full w-full ml-2 mr-2">LOGO</p>
												<p className="h-full w-full ml-2 mr-2">WEBSITE DESIGN</p>
												<p className="h-full w-full ml-2 mr-2">BRANDING</p>
											</Marquee>
										</div>
										<div>
											<Marquee>
												<p className="h-full w-full ml-2 mr-2">LOGO</p>
												<p className="h-full w-full ml-2 mr-2">WEBSITE DESIGN</p>
												<p className="h-full w-full ml-2 mr-2">UI/UX</p>
												<p className="h-full w-full ml-2 mr-2">BRANDING</p>
												<p className="h-full w-full ml-2 mr-2">GRAPHIC DESIGN</p>
											</Marquee>
										</div>
									</div>
								</div>
							</div>

							<div className="h-[100%] w-[33.33%] bg-black flex items-center justify-center">
								<img src={movingBallAnimation} alt="" />
							</div>
						</div>
					</div>

				</div>
			</section>  */}

			{/* <section className="RPtools h-screen w-screen">
				<h2>OUR AMAZING TOOL</h2>
				<div className="movingPencil">
					<img src={movingPen} alt="" />
				</div>
			</section> */}

			<section className="RPsolutions h-screen w-screen">

				<div className="solutionsLeft">
					<h2>Solutions</h2>

					<div className="para-mobileApp">
						<p>
							We specialize in delivering innovative solutions for mobile applications,
							website design, and enterprise application development.
						</p>

						<div className="mobileApp">
							<h3>Mobile application</h3>

							<div className="messagesListMobile">
								<div className="msg1">
									<p>Crafting apps for smartphones and tablets, focusing on performance, usability, and accessibility.</p>
								</div>

								<div className="msg2"></div>
								<div className="msg3"></div>
								<div className="msg4"></div>
							</div>
						</div>
					</div>
				</div>

				<div className="solutionsRight">

					<div className="websitedesign">
						<h3>Website Design</h3>

						<div className="WSlayouts">
							<div className="WSsidebar"></div>

							<div className="WScontent">
								<div className="WSText">
									<p>Creating layouts, graphics, and user interfaces (UI) for websites to ensure they are visually appealing, functional, and user-friendly.</p>
								</div>

								<div className="WSemptyUI">
									<div className="row1"></div>
									<div className="row2">
										<div className="col1Square"></div>
										<div className="col2Rect"></div>
									</div>
								</div>

							</div>
						</div>
					</div>

					<div className="enterpriseApp">
						<h3>Enterprise application</h3>

						<div className="enterpriseUI">
							<div className="itemsList">
								<div className="rect1"></div>
								<div className="rect2"></div>
								<div className="rect3"></div>
								<div className="rect4"></div>
								<div className="rect5"></div>
							</div>

							<div className="enterpriseContent">
								<div className="EPsidebar"></div>
								<div className="EPtext">
									<p>Developing robust software solutions to support complex business operations and processes (e.g., ERP, CRM, HRMS).</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>


			{/* <section className="RPtestimonialsContainer h-[100vh]">
				<div className="testimonialStick">

					<div className="testimonialText">
						<h2>Testimonials</h2>
					</div>

					<div className="ttmnalWhiteBlack"></div>

					<div className="testimonialsList">
						<div className="prevButton">
							<button className='text-white'>
								<FaChevronLeft size={36} />
							</button>
						</div>

						<div id="splide">
							<div className="slider-container bg-red-500">
								<Slider {...settings}>
									<div className='h-[150px] w-[200px] bg-red-500'>
										<h3>1</h3>
									</div>
									<div className='h-[150px] w-[200px] bg-green-500'>
										<h3>2</h3>
									</div>
									<div className='h-[150px] w-[200px] bg-yellow-500'>
										<h3>3</h3>
									</div>
									<div className='h-[150px] w-[200px] bg-pink-500'>
										<h3>4</h3>
									</div>
									<div className='h-[150px] w-[200px] bg-blue-500'>
										<h3>5</h3>
									</div>
									<div className='h-[150px] w-[200px] bg-purple-500'>
										<h3>6</h3>
									</div>
								</Slider>
							</div>
						</div>

						<div className="nextButton">
							<button className='text-white'>
								<FaChevronRight size={36} />
							</button>
						</div>
					</div>

				</div>
			</section> */}

			<section className="RPpeoples h-screen w-screen">
				<h2>Kind words from people we have worked with</h2>

				<div className="Peopleslist">
					<div className='person1'>
						<div className="peopleNameRole">
							<h3>Bina Mam</h3>
							<p>UX Head</p>
						</div>

						<div className="peopleImage">
							<img src={maria} alt="" />
						</div>

						<div className="hoveredData">
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, quidem! Quisquam, voluptatum. Voluptatum, laboriosam! Ipsam, repellendus? Quis, vel? Ipsam, voluptatum.</p>
						</div>

					</div>


					<div className='person2'>
						<div className="peopleNameRole">
							<h3>Yogesh Sir</h3>
							<p>UX Head</p>
						</div>

						<div className="peopleImage">
							<img src={brandon} alt="" />
						</div>

						<div className="hoveredData">
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, quidem! Quisquam, voluptatum. Voluptatum, laboriosam! Ipsam, repellendus? Quis, vel? Ipsam, voluptatum.</p>
						</div>
					</div>



					<div className='person3'>
						<div className="peopleNameRole">
							<h3>Silvqnia</h3>
							<p>UX Head</p>
						</div>

						<div className="peopleImage">
							<img src={hannah} alt="" />
						</div>

						<div className="hoveredData">
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, quidem! Quisquam, voluptatum. Voluptatum, laboriosam! Ipsam, repellendus? Quis, vel? Ipsam, voluptatum.</p>
						</div>
					</div>


					<div className='person4'>
						<div className="peopleNameRole">
							<h3>Nirali Mam</h3>
							<p>UX Head</p>
						</div>

						<div className="peopleImage">
							<img src={dua} alt="" />
						</div>

						<div className="hoveredData">
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, quidem! Quisquam, voluptatum. Voluptatum, laboriosam! Ipsam, repellendus? Quis, vel? Ipsam, voluptatum.</p>
						</div>
					</div>
				</div>
			</section>

		</main>
	);
};

export default Landing;






