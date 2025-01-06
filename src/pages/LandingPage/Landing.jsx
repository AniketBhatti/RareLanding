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
import lumber_all_products1 from "../../assets/images/07_ourWorks/LUMBERCRAFT/lumbercraft-all-products-list1.png"
import lumber_customer from "../../assets/images/07_ourWorks/LUMBERCRAFT/lumbercraft-customer-services.png"
import place_it from "../../assets/images/07_ourWorks/LUMBERCRAFT/place-it.png"


import intuitiveDes from "../../assets/images/07_ourWorks/REGALFINANCE/intuitiveMobile.png"
import rgl_nav from "../../assets/images/07_ourWorks/REGALFINANCE/navbar.png"
import rgl_explore from "../../assets/images/07_ourWorks/REGALFINANCE/exploreWorld.png"
import rgl_freedom from "../../assets/images/07_ourWorks/REGALFINANCE/discoverFreedom.png"
import rgl_financeCirc from "../../assets/images/07_ourWorks/REGALFINANCE/financialCircle.png"
import rgl_assets from "../../assets/images/07_ourWorks/REGALFINANCE/assets.png"

import xtr_sales from "../../assets/images/07_ourWorks/XTREAM/xtream_Status.gif"
import xtr_tablet from "../../assets/images/07_ourWorks/XTREAM/tabletMockup.png"
import xtr_activity from "../../assets/images/07_ourWorks/XTREAM/xtream_Activity.gif"
import xtr_analytics from "../../assets/images/07_ourWorks/XTREAM/xtream_Analytics.gif"
import xtr_sessions from "../../assets/images/07_ourWorks/XTREAM/xtream_Sessions.gif"
import xtr_country from "../../assets/images/07_ourWorks/XTREAM/xtrm_country.png"
import xtr_nabar from "../../assets/images/07_ourWorks/XTREAM/xtrm_navbar.png"


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
import whyUS from "../../assets/images/07_ourWorks/VIVIDSPARK/whyUS.png"


import cktl_rainbow from "../../assets/images/07_ourWorks/COCKTAILCULTURE/pngs/rainbow.png"
import cktl_cocktailCultureLogo from "../../assets/images/07_ourWorks/COCKTAILCULTURE/pngs/cocktailCulture.png"
import cktl_experienceASip from "../../assets/images/07_ourWorks/COCKTAILCULTURE/pngs/ExperienceASip.png"
import cktl_startMakingDrink from "../../assets/images/07_ourWorks/COCKTAILCULTURE/pngs/startMakingDrink.png"
import cktl_orangeJuice from "../../assets/images/07_ourWorks/COCKTAILCULTURE/pngs/orangeJuice.png"
import cktl_lemonJuice from "../../assets/images/07_ourWorks/COCKTAILCULTURE/pngs/lemonJuice.png"
import cktl_kiwiJuice from "../../assets/images/07_ourWorks/COCKTAILCULTURE/pngs/kiwiJuice.png"
import cktl_beHappyKiwi from "../../assets/images/07_ourWorks/COCKTAILCULTURE/pngs/kiwiBeHappy.png"
import cktl_visitCocktail from "../../assets/images/07_ourWorks/COCKTAILCULTURE/pngs/visitOurCocktailRestro.png"
import cktl_strippingLine from "../../assets/images/07_ourWorks/COCKTAILCULTURE/pngs/stripImage.png"
import cktl_sipSavor from "../../assets/images/07_ourWorks/COCKTAILCULTURE/pngs/sipSavorMarquee.png"
import cktl_sipSavorFull from "../../assets/images/07_ourWorks/COCKTAILCULTURE/pngs/sipSavorFull.png"


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


	/********* GSAP STARTS *********/



	const is4k = window.innerWidth < 2700 && window.innerWidth > 1927;
	const isLargeLaptop = window.innerWidth < 1926 && window.innerWidth > 1440;
	const isMediumLaptop = window.innerWidth < 1440 && window.innerWidth > 1024;
	const isSmallLaptop = window.innerWidth < 1024 && window.innerWidth > 768;
	const isTablet = window.innerWidth < 768 && window.innerWidth > 530;
	const isLargeMobile = window.innerWidth < 530;
	const isAnyMobile = window.innerWidth < 450 && window.innerWidth > 320;


	React.useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.fromTo(".blubs",
			{
				y: 0,
			},

			{
				y: -50,
				scrollTrigger: {
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
				scrollTrigger: {
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
				scrollTrigger: {
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


	React.useEffect(() => {
		
		// gsap.fromTo(".lmbr-container",
		// 	{
		// 		x: "100%"
		// 	},

		// 	{
		// 		x:0,
		// 		y:0,
		// 		scrollTrigger: {
		// 			trigger: ".lmbr-container",
		// 			start: "top 50%",
		// 			end: "top top",
		// 		}
		// 	}
		// )

		gsap.fromTo(".lmbr-header",
			{
				x: "150%"
			},

			{
				x:0,
				y:0,
				scrollTrigger: {
					trigger: ".lmbr-container",
					start: "top top",
					end: "top -20%",
				}
			}
		)

		gsap.fromTo(".lmbr-all-prod",
			{
				x: "-100%",
				opacity: 0,
			},

			{
				x:0,
				y:0,
				opacity: 1,
				scrollTrigger: {
					trigger: ".lmbr-container",
					start: "top -20%",
					end: "top -30%",
				}
			}
		)

		gsap.fromTo(".place-it",
			{
				scale: 0,
				rotation: 260,
			},
			
			{
				x:0,
				y:0,
				scale: 1,
				rotation: 0,
				scrollTrigger: {
					trigger: ".lmbr-container",
					start: "top -30%",
					end: "top -40%",
				}
			}
		)

		gsap.fromTo(".lmbr-mainProd",
			{
				x: "-30%",
				y: "30%",
				opacity:0,
			},

			{
				x:0,
				y:0,
				opacity:1,
				scrollTrigger: {
					trigger: ".lmbr-container",
					start: "top -40%",
					end: "top -60%",
				}
			}
		)

		gsap.fromTo(".lmbr-review",
			{
				x: "30%",
				y: "30%",
				opacity:0,
			},

			{
				x:0,
				y:0,
				opacity:1,
				scrollTrigger: {
					trigger: ".lmbr-container",
					start: "top -60%",
					end: "top -70%",
				}
			}
		)

	})


	


	const regalFinance = useRef(null);
	React.useEffect(() => {
		gsap.fromTo(regalFinance.current,
			{ x: 100, y: 100, opacity: 0 },
			{
				x: 0,
				y: 0,
				opacity: 1,
				scrollTrigger: {
					trigger: regalFinance.current,
					start: "top 80%", // Trigger when the top of the section is 80% down the viewport
					end: "top top", // End when the top of the section is 30% down the viewport
					scrub: 1,
				}
			}
		);

		gsap.fromTo(".headings",
			{
				x: "-120%",
			},
			{
				x: 0,
				y: 0,
				scrollTrigger: {
					trigger: ".regalFinance",
					start: "top 20%",
					end: "top top",
					// scrub: true,
				}
			});

		gsap.fromTo(".regal-mobileApp",
			{
				x: "-120%",
			},
			{
				x: 0,
				y: 0,
				scrollTrigger: {
					trigger: ".regalFinance",
					start: "top top",
					end: "top -10%",
					// scrub: true,
				}
			});

		gsap.fromTo(".rgl-nav",
			{
				opacity: 0,
				scale: 0,
			},
			{
				x: 0,
				y: 0,
				opacity: 1,
				scale: 1,
				scrollTrigger: {
					trigger: ".regalFinance",
					start: "top top",
					end: "top -10%",
					// scrub: true,
				}
			});

		gsap.fromTo(".rgl-explr",
			{
				y: "-100%",
				scale: 0,
			},
			{
				x: 0,
				y: 0,
				scale: 1,
				scrollTrigger: {
					trigger: ".regalFinance",
					start: "top -20%",
					end: "top -50%",
					// scrub: true,
				}
			});

		gsap.fromTo(".rgl-frdm",
			{
				y: "100%",
				opacity: 0,
			},
			{
				x: 0,
				y: 0,
				opacity: 1,
				scrollTrigger: {
					trigger: ".regalFinance",
					start: "top -20%",
					end: "top -50%",
					// scrub: true,
				}
			});

		gsap.fromTo(".rgl-ast",
			{
				x: "100%",
				opacity: 0,
			},
			{
				x: 0,
				y: 0,
				opacity: 1,
				scrollTrigger: {
					trigger: ".regalFinance",
					start: "top -50%",
					end: "top -70%",
					// scrub: true,
				}
			});

	}, []);




	React.useEffect(() => {
		
		gsap.fromTo(".orcd-headings",
			{
				x: "-100%",
			},

			{
				x: 0,
				scrollTrigger: {
					trigger: ".orchard",
					start: "top 30%",
					end: "top top",
				}
			}
		)

		gsap.fromTo(".orcd-crnr",
			{ x: -300, opacity: 0 },
			{
				x: 0,
				opacity: 1,
				scrollTrigger: {
					trigger: ".orchard",
					start: "top top",
					end: "top -20%",
				}
			}
		);

		gsap.fromTo(".orcd-findProducts",
			{ y: 300, opacity: 0 },
			{
				x: 0,
				y: 0,
				opacity: 1,
				scrollTrigger: {
					trigger: ".orchard",
					start: "top -20%",
					end: "top -40%",
				}
			}
		);

		gsap.fromTo(".orcd-infinity-scrl",
			{ display: "none" },
			{
				x: 0,
				y: 0,
				display: "block",
				scrollTrigger: {
					trigger: ".orchard",
					start: "top -50%",
					end: "top -50%",
				}
			}
		);

		gsap.fromTo(".orcd-home",
			{ x: "100%", opacity: 0 },
			{
				x: 0,
				y: 0,
				opacity: 1,
				scrollTrigger: {
					trigger: ".orchard",
					start: "top -60%",
					end: "top -70%",
				}
			}
		);




	}, []);


	React.useEffect(() => {


		gsap.fromTo(".heads",
			{ x: "-50%", opacity: 0, },
			{
				x: 0,
				y: 0,
				opacity: 1,
				scrollTrigger: {
					trigger: ".healthInsurance",
					start: "top 50%",
					end: "top 30%",
				}
			}
		);

		gsap.fromTo(".HI-phoneMock",
			{ x: "-50%", opacity: 0, },
			{
				x: 0,
				y: 0,
				opacity: 1,
				scrollTrigger: {
					trigger: ".healthInsurance",
					start: "top 20%",
					end: "top top",
				}
			}
		);

		gsap.fromTo(".HI-statistic-screen",
			{ x: "-30%", opacity: 0, },
			{
				x: 0,
				y: 0,
				opacity: 1,
				scrollTrigger: {
					trigger: ".healthInsurance",
					start: "top top",
					end: "top -20%",
				}
			}
		);

		gsap.fromTo(".HI-customize",
			{ y: "-50%", opacity: 0, },
			{
				x: 0,
				y: 0,
				opacity: 1,
				scrollTrigger: {
					trigger: ".healthInsurance",
					start: "top -30%",
					end: "top -50%",
				}
			}
		);

		gsap.fromTo(".HI-individual",
			{ y: "50%", opacity: 0, },
			{
				x: 0,
				y: 0,
				opacity: 1,
				scrollTrigger: {
					trigger: ".healthInsurance",
					start: "top -30%",
					end: "top -50%",
				}
			}
		);





		gsap.fromTo(".Add",
			{ x: 0, y: 0 },
			{
				x: -800,
				y: -200,
				scrollTrigger: {
					trigger: ".healthInsurance",
					start: "bottom bottom",
					end: "bottom top",
					scrub: 1,
				}
			},);

		gsap.fromTo(".And",
			{ x: 0, y: 0 },
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
			{ x: 0, y: 0 },
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
			{ x: 0, y: 0 },
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
			{ x: 0, y: 0 },
			{
				x: -400,
				y: -100,
				scrollTrigger: {
					trigger: ".healthInsurance",
					start: "bottom bottom",
					end: "bottom top",
					scrub: 1,
				}
			},);

		gsap.fromTo(".Health",
			{ x: 0, y: 0 },
			{
				x: -400,
				y: -300,
				scrollTrigger: {
					trigger: ".healthInsurance",
					start: "bottom bottom",
					end: "bottom top",
					scrub: 1,
				}
			},);

		gsap.fromTo(".Mind",
			{ x: 0, y: 0 },
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
			{ x: 0, y: 0 },
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
			{ x: 0, y: 0 },
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
			{ x: 0, y: 0 },
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
			{ x: 0, y: 0 },
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
			{ x: 0, y: 0 },
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


	React.useEffect(() => {


		gsap.fromTo(".dina-hearder",
			{
				x: 200,
				opacity: 0,
			},

			{
				x: 0,
				y: 0,
				opacity: 1,
				scrollTrigger: {
					trigger: ".dinaRollings",
					start: "top 30%",
					end: "top top",
					scrub: true,
				}
		})

		gsap.fromTo(".dina-phoneMock",
			{
				x: "-100%",
				opacity: 0,
			},

			{
				x: 0,
				y: 0,
				opacity: 1,
				scrollTrigger: {
					trigger: ".dinaRollings",
					start: "top 10%",
					end: "top -10%",
					scrub: true,
				}
		})

		gsap.fromTo(".dina-gameGraph",
			{
				x: -100,
				opacity: 0,
			},

			{
				x: 0,
				y: 0,
				opacity: 1,
				scrollTrigger: {
					trigger: ".dinaRollings",
					start: "top -20%",
					end: "top -40%",
					scrub: 1,
				}
		})

		gsap.fromTo(".connections",
			{
				x: -150,
				opacity: 0,
			},

			{
				x: 0,
				y: 0,
				opacity: 1,
				scrollTrigger: {
					trigger: ".dinaRollings",
					start: "top -20%",
					end: "top -40%",
					scrub: 1,
				}
		})


		gsap.fromTo(".dina-felindra",
			{
				x: -150,
				y: 150,
				opacity: 0,
			},

			{
				x: 0,
				y: 0,
				opacity: 1,
				scrollTrigger: {
					trigger: ".dinaRollings",
					start: "top -30%",
					end: "top -50%",
					scrub: 1,
				}
		})

		gsap.fromTo(".dina-session",
			{
				x: 150,
				y: 150,
				opacity: 0,
			},

			{
				x: 0,
				y: 0,
				opacity: 1,
				scrollTrigger: {
					trigger: ".dinaRollings",
					start: "top -30%",
					end: "top -50%",
					scrub: 1,
				}
		})

		gsap.fromTo(".dina-roll",
			{
				x: 0,
				y: 150,
				opacity: 0,
			},

			{
				x: 0,
				y: 0,
				opacity: 1,
				scrollTrigger: {
					trigger: ".dinaRollings",
					start: "top -60%",
					end: "top -80%",
					scrub: 1,
				}
		})


	}, []);


	React.useEffect(() => {
		
		

		gsap.fromTo(".vivid-headings",
			{
				x: -150,
				opacity: 0,
			},

			{
				x: 0,
				y: 0,
				opacity: 1,
				scrollTrigger: {
					trigger: ".vividSpark",
					start: "top 40%",
					end: "top 20%",
					scrub: 1,
				}
		})

		gsap.fromTo(".vivid-heads",
			{
				x: -150,
				opacity: 0,
			},

			{
				x: 0,
				y: 0,
				opacity: 1,
				scrollTrigger: {
					trigger: ".vividSpark",
					start: "top 20%",
					end: "top top",
					scrub: 1,
				}
		})

		gsap.fromTo(".connect-reveal",
			{
				x: "-110%",
			},

			{
				x: 0,
				y: 0,
				opacity: 1,
				scrollTrigger: {
					trigger: ".vividSpark",
					start: "top top",
					end: "top 10%",
					scrub: 1,
				}
		})

		gsap.fromTo(".vivid-creative-dsgn",
			{
				x: "-110%",
			},

			{
				x: "20%",
				y: "-15%",
				opacity: 1,
				scrollTrigger: {
					trigger: ".vividSpark",
					start: "top -10%",
					end: "top -20%",
					scrub: 1,
				}
		})

		gsap.fromTo(".vivid-crtv-h2",
			{
				y: 50,
				opacity: 0,
			},

			{
				x: 0,
				y: 0,
				opacity: 1,
				scrollTrigger: {
					trigger: ".vividSpark",
					start: "top -20%",
					end: "top -25%",
					scrub: 1,
				}
		})

		gsap.fromTo(".vivid-crtv-p",
			{
				y: 50,
				opacity: 0,
			},

			{
				x: 0,
				y: 0,
				opacity: 1,
				scrollTrigger: {
					trigger: ".vividSpark",
					start: "top -25%",
					end: "top -30%",
					scrub: 1,
				}
		})

		gsap.fromTo(".vivid-continued",
			{
				x: -100,
				opacity: 0,
			},

			{
				x: 0,
				y: "-60%",
				opacity: 1,
				scrollTrigger: {
					trigger: ".vividSpark",
					start: "top -30%",
					end: "top -40%",
					scrub: 1,
				}
		})

		gsap.fromTo(".vivid-lady-img",
			{
				x: -100,
				opacity: 0,
			},

			{
				x: 0,
				y: 0,
				opacity: 1,
				scrollTrigger: {
					trigger: ".vividSpark",
					start: "top -40%",
					end: "top -50%",
					scrub: 1,
				}
		})

		gsap.fromTo(".whyUs",
			{
				x: 100,
				opacity: 0,
			},

			{
				x: 0,
				y: 0,
				opacity: 1,
				scrollTrigger: {
					trigger: ".vividSpark",
					start: "top -50%",
					end: "top -60%",
					scrub: 1,
				}
		})

	});


	// const cocktailCulture = useRef(null)
	React.useEffect(() => {

		gsap.fromTo(".cktl-rainbow-reveal",
			{
				y: 0,
			},

			{
				y: "100%",
				scrollTrigger: {
					trigger: ".cocktailCulture",
					start: "top top",
					end: "top -20%",
					scrub: 1,
				},
			},

		);


		gsap.fromTo(".cktl-heads",
			{
				x: "-150%",
			},

			{
				x:0,
				y: 0,
				scrollTrigger: {
					trigger: ".cocktailCulture",
					start: "top -20%",
					end: "top -30%",
					scrub: 1,
				},
			},

		);

		gsap.fromTo(".cktl-strt-mking",
			{
				x: "-150%",
			},

			{
				x:0,
				y: 0,
				scrollTrigger: {
					trigger: ".cocktailCulture",
					start: "top -30%",
					end: "top -35%",
					scrub: 1,
				},
			},

		);

		gsap.fromTo(".cktl-behappy",
			{
				x: "30%",
				scale: 0,
			},

			{
				x: 0,
				y: 0,
				scale: 1,
				scrollTrigger: {
					trigger: ".cocktailCulture",
					start: "top -35%",
					end: "top -45%",
					scrub: 1,
				},
			},

		);

		gsap.fromTo(".cktl-orange",
			{
				x: "-100%",
				y: "50%",
				scale: 0,
			},

			{
				x: 0,
				y: 0,
				scale: 1,
				scrollTrigger: {
					trigger: ".cocktailCulture",
					start: "top -35%",
					end: "top -45%",
					scrub: 1,
				},
			},

		);

		gsap.fromTo(".cktl-details",
			{
				y: "50%",	
				opacity: 0,
			},

			{
				x: 0,
				y: 0,
				opacity:1,
				scrollTrigger: {
					trigger: ".cocktailCulture",
					start: "top -50%",
					end: "top -60%",
					scrub: 1,
				},
			},

		);

		gsap.fromTo(".cktl-experience",
			{
				y: "50%",	
				opacity: 0,
			},

			{
				x: 0,
				y: 0,
				opacity:1,
				scrollTrigger: {
					trigger: ".cocktailCulture",
					start: "top -60%",
					end: "top -70%",
					scrub: 1,
				},
			},

		);

		gsap.fromTo(".cktl-restro",
			{
				y: "-50%",	
				opacity: 0,
			},

			{
				x: 0,
				y: 0,
				opacity:1,
				scrollTrigger: {
					trigger: ".cocktailCulture",
					start: "top -60%",
					end: "top -70%",
					scrub: 1,
				},
			},

		);


		gsap.fromTo(".cktl-sipSavor-strip",
			{
				x: "110%",
			},

			{
				x: 0,
				y: 0,
				scrollTrigger: {
					trigger: ".cocktailCulture",
					start: "top -70%",
					end: "top -80%",
					scrub: 1,
				},
			},

		);



	});

	// DESIGN PROCESS SECTION ANIMATIONS
	React.useEffect(() => {
		gsap.fromTo(".designRevealAnimation",
			{
				x: -1000,
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






	/********* GSAP ENDS *********/










	return (
		<main>

			<section className='every-pixels'>

				<div className="strt-prjct-link">
					<a href=''>
						Start your Project
					</a>
				</div>

				<div className="landing-main-headings">

					<div className="brng-yr-idea">
						<p>Bringing your ideas to life where</p>
					</div>

					<div className="evry-pxl">
						<h1>Every Pixel</h1>
					</div>

					<div className="tls-yr-stry">
						<p>Tells Your story</p>
					</div>
				</div>



			</section>

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
				<h3>
					We transform ideas into memorable experiences through branding web design,  and digital strategy.
				</h3>

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

				<div className="lmbr-container w-screen h-[200vh]">
					<div className='lmbr-main'>

						<div className="lmbr-header">
							<h2>Lumbercraft</h2>
							<p>Where Comfort Meets Style: Crafted for a Seamless Experience</p>
							<hr />
							<div className="lmbr-works">
								<span>UI/UX Design</span>
								<span>Mobile Application</span>
								<span>Frontend Development</span>
							</div>
						</div>

						<div className="lmbr-body">
							<div className="image-container">
								<div className='lmbr-all-prod'>
									<img src={lumber_all_products1} alt="" />

									<img className="place-it" src={place_it} alt="" />
								</div>

								<div className='lmbr-mainProd'>
									<img src={lumber_main} alt="" />
								</div>

								<div className='lmbr-review'>
									<img src={lumber_customer} alt="" />
								</div>

							</div>
						</div>

					</div>
				</div>


				<div className="regalFinance w-screen h-[200vh]">
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


				<div className="xtreme h-[200vh] w-screen">
					<div className="xtreme-main">

						<div className="xtrm-headings-saleStatus">

							<div className="xtrm-header">
								<h2>Xtreme</h2>
								<p>Driving Sales Success with Insightful and Intuitive Design</p>
								<hr />
								<div className="xtrm-work">
									<span>UI/UX Design</span>
									<span>Dashboard Design</span>
									<span>Backend Development</span>
								</div>
							</div>

							<div className="xtrm-saleStatus">
								<img src={xtr_sales} alt="" />
							</div>
						</div>

						<div className="xtrm-charts">
							<div className="xtrm-activity">
								<img src={xtr_activity} alt="" />
							</div>

							<div className="xtrm-country">
								<img src={xtr_country} alt="" />
							</div>
						</div>

						<div className="xtrm-homepage">
							<div className="xtrm-navbar">
								<img src={xtr_nabar} alt="" />
							</div>

							<div className="xtrm-screens-tabMock">

								<div className="xtrm-sessions-analysis">

									<div className="xtrm-sessions">
										<img src={xtr_sessions} alt="" />
									</div>

									<div className="xtrm-analystics">
										<img src={xtr_analytics} alt="" />
									</div>
								</div>

								<div className="xtrm-tabMock">
									<img src={xtr_tablet} alt="" />
								</div>
							</div>
						</div>

					</div>
				</div>


				<div className="orchard h-[200vh] w-screen">

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
							<div className="orcd-headings">
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


				<div className="healthInsurance h-[200vh] w-screen">

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
								<p>Level Up Your Play: Designed for Gamers, Powered by Precision</p>
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

				<div className="vividSpark h-[200vh] w-screen">
					<div className="vivid-main">

						<div className="vivid-headings">

							<div className="vivid-connect relative">
								<p>connect</p>

								<div className='connect-reveal h-[100%] w-[100%] absolute top-0 left-0 bg-[#FFF5DE] z-[-1]'></div>
							</div>

							<div className="vivid-heads">
								<h2>Vivid<span>spark</span></h2>
								<p>Transforming Ideas into Impactful Designs, Seamlessly</p>
								<hr />
								<div className="vivid-works">
									<span>Research</span>
									<span>Typography</span>
									<span>UI/UX design</span>
									<span>Website Layout</span>
									<span>Frontend Development</span>
								</div>
							</div>

						
						</div>

						<div className="vividBottom">

							<div className="vivid-crtiv-cotnue">

								<div className="vivid-creative-dsgn">
									<h3 className='vivid-crtv-h2'>Creative Design <span>Service that</span> </h3>
									<p className='vivid-crtv-p'>Good design isn't just about looks—it’s about combining style with function. Our talented team creates visuals that grab attention and encourage people to take action. Whether it’s a logo, website, or brand identity, we make sure your message comes through clearly, leaving a strong impression on your customers.</p>
								</div>

								<div className="vivid-continued">
									<img src={continueInnovation} alt="" />
								</div>

							</div>

							<div className="vivid-whyus">

								<div className="whyUs">
									<img src={whyUS} alt="" />
								</div>

								<div className="vivid-lady-img">
									<img src={ladyModel} alt="" />
								</div>
							</div>

						</div>

					</div>
				</div>

				<div className="cocktailCulture h-[200vh] w-screen">
					<div className="cktl-main">

						<div className="cktl-rainbow">
							<img src={cktl_rainbow} alt="" />

							<div className="cktl-rainbow-reveal absolute top-0 left-0 z-2 bg-[#575757] h-screen w-screen"></div>
						</div>

						<div className="cktl-container">
							<div className="cktl-headings-details">

								<div className="cktl-headers">

									<div className="cktl-heads">
										<div className="cktl-logo">
											<h2>Cocktail Culture</h2>
										</div>

										<p>Stirring Up Creativity: A Menu as Bold as Your Cocktails</p>
										<hr />

										<div className="cktl-works">
											<span>Research</span>
											<span>Restaurant menu design</span>
											<span>Graphic design</span>
											<span>Illustration</span>
											<span>Design system</span>
										</div>
									</div>

									<div className="cktl-showcase">
										<div className="cktl-strt-mking">
											<img src={cktl_startMakingDrink} alt="" />
										</div>

										<div className="cktl-behappy-orng">
											<div className="cktl-behappy">
												<img src={cktl_beHappyKiwi} alt="" />
											</div>
											<div className="cktl-orange">
												<img src={cktl_orangeJuice} alt="" />
											</div>
										</div>
									</div>

								</div>

								<div className="cktl-details">
									<img src={cktl_lemonJuice} alt="" />
								</div>

							</div>

							<div className="cktl-paras">

								<div className="cktl-paraContainer">
									<div className="cktl-experience">
										<img src={cktl_experienceASip} alt="" />
									</div>

									<div className="cktl-restro">
										<img src={cktl_visitCocktail} alt="" />
									</div>
								</div>

								<div className="cktl-sipSavor-strip">
									<img src={cktl_sipSavorFull} alt="" />
								</div>

							</div>
						</div>
					</div>
				</div>

			</section>

			<section className="design-process">
				<div className="data">

					<div className="dp-headers h-screen w-screen bg-white h-full">
						<p>Explore how our</p>
						<h2><span className="relative z-10">design</span> process</h2>
						<p>works</p>

						<div className="designRevealAnimation h-[180px] w-[1000px] bg-black absolute top-[300px] left-0"></div>

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
			</section>
			

			<section className="relative z-10 companyOverview">
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
			</section>

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
							<h3>Silvania</h3>
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






