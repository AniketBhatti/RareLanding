import React, { useRef } from "react";
import "./landing.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { Link } from "react-router-dom";


import Marquee from "react-fast-marquee";
import { useScroll } from "framer-motion";

import lumber_main from "../../assets/images/07_ourWorks/LUMBERCRAFT/lumbercraft-main-product.png"
import lumber_all_products from "../../assets/images/07_ourWorks/LUMBERCRAFT/lumbercraft-all-products-list.png"
import lumber_customer from "../../assets/images/07_ourWorks/LUMBERCRAFT/lumbercraft-customer-services.png"
import place_it from "../../assets/images/07_ourWorks/LUMBERCRAFT/place-it.png"

import research from "../../assets/images/06_ropeEffectPlayables/research_square.png"
import strategy from "../../assets/images/06_ropeEffectPlayables/strategy_square.png"
import uiuxdesign from "../../assets/images/06_ropeEffectPlayables/uiux_square.png"
import branding from "../../assets/images/06_ropeEffectPlayables/branding_square.png"
import build from "../../assets/images/06_ropeEffectPlayables/build_square.png"


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


import dinaHome from "../../assets/images/07_ourWorks/DINAROLLING/phone-mock-homeScreen.png"
import dinaSmall from "../../assets/images/07_ourWorks/DINAROLLING/dina-bonus-small.png"
import dinaBig from "../../assets/images/07_ourWorks/DINAROLLING/dina-bonus-big.png"
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
					end: "top top", // End when the top of the section is 30% down the viewport
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
					start: "top top", // Trigger when the top of the section is 80% down the viewport
					end: "top -20%", // End when the top of the section is 30% down the viewport
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
					start: "top -20%", // Trigger when the top of the section is 80% down the viewport
					end: "top -40%", // End when the top of the section is 30% down the viewport
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
					start: "top -30%", // Trigger when the top of the section is 80% down the viewport
					end: "top -50%", // End when the top of the section is 30% down the viewport
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
					end: "top top", // End when the top of the section is 30% down the viewport
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
			{ x: -300, opacity: 0 },
			{
				x: 0,
				opacity: 1,
				duration: 2,
				scrollTrigger: {
					trigger: orchard.current,
					start: "top top", // Trigger when the top of the section is 80% down the viewport
					end: "top -20%", // End when the top of the section is 30% down the viewport
					scrub: 1,
				}
			}
		);


		gsap.fromTo(".find-prods",
			{ x: -400, opacity: 0 },
			{
				x: 0,
				opacity: 1,
				duration: 2,
				scrollTrigger: {
					trigger: orchard.current,
					start: "top -30%", // Trigger when the top of the section is 80% down the viewport
					end: "top -40%", // End when the top of the section is 30% down the viewport
					scrub: 1,
				}
			}
		);



		gsap.fromTo(".homescreen",
			{ x: 400, opacity: 0 },
			{
				x: 0,
				opacity: 1,
				duration: 2,
				scrollTrigger: {
					trigger: orchard.current,
					start: "top -40%", // Trigger when the top of the section is 80% down the viewport
					end: "top -50%", // End when the top of the section is 30% down the viewport
					scrub: 1,
				}
			}
		);

	}, []);



	const healthInsurance = useRef(null)
	React.useEffect(() => {
		gsap.fromTo(healthInsurance.current,
			{ x: -300, opacity: 0, },
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
	React.useEffect(() => {
		gsap.fromTo(dinaRollings.current,
			{ x: 500, opacity: 0 },
			{
				x: 0,
				opacity: 1,
				scrollTrigger: {
					trigger: dinaRollings.current,
					start: "top 90%",
					end: "top 30%",
					// scrub: 1,
				},
			}
		);

		gsap.fromTo(".dina",
			{ x: 0, y: 0, scale: 0.5, opacity: 0 },

			{
				x: 1100,
				y: -500,
				scale: 0.8,
				opacity: 1,
				scrollTrigger: {
					trigger: ".dinaRollings",
					start: "top top",
					end: "bottom 40%",
					// scrub: 1,
				},
				// attr: {
				// 	src: "path/to/your/image.jpg" // Replace with the actual image path
				// },
			},

		);

		gsap.fromTo(".gameGraph",
			{ x: 0, y: 0, scale: 0.5, opacity: 0 },

			{
				x: 550,
				y: 120,
				scale: 1.2,
				opacity: 1,
				scrollTrigger: {
					trigger: ".dinaRollings",
					start: "top top",
					end: "bottom 40%",
					// scrub: 1,
				},

			},

		);

		gsap.fromTo(".connectionBuild",
			{ x: 0, y: 0, scale: 0.5, opacity: 0 },

			{
				x: 900,
				y: -300,
				scale: 1,
				opacity: 1,
				scrollTrigger: {
					trigger: ".dinaRollings",
					start: "top top",
					end: "bottom 40%",
					// scrub: 1,
				},

			},

		);

		gsap.fromTo(".felindra",
			{ x: 0, y: 0, scale: 0.3, opacity: 0 },

			{
				x: 700,
				y: 300,
				scale: 0.8,
				opacity: 1,
				scrollTrigger: {
					trigger: ".dinaRollings",
					start: "top top",
					end: "bottom 40%",
					// scrub: 1,
				},

			},

		);


		gsap.fromTo(".sessions",
			{ x: 0, y: 0, scale: 0.3, opacity: 0 },

			{
				x: 1000,
				y: 400,
				scale: 0.9,
				opacity: 1,
				scrollTrigger: {
					trigger: ".dinaRollings",
					start: "top top",
					end: "bottom 40%",
					// scrub: 1,
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
					// scrub: 1,
				},
			},

		);

		gsap.fromTo(".connectRevealSquare",
			{
				x: -700
			},

			{
				x: 0,
				scrollTrigger: {
					trigger: ".vividContainer",
					start: "top -50%",
					end: "top -70%",
					// scrub: 1,
				},
			},
		)

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
					// scrub: 1,
				},
			});

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
					// scrub: 1,
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
					// scrub: 1,
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
					// scrub: 1,
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
					// scrub: 1,
				},
			},

		);

		gsap.fromTo(".logo",
			{
				x: 1200,
				y: -200,
			},

			{
				y: "30%",
				scrollTrigger: {
					trigger: ".cocktailCultureContainer",
					start: "top -51%",
					end: "top -55%",
					// scrub: 1,
				},
			},

		);

		gsap.fromTo(".introPara",
			{
				x: 1220,
				y: -320,
			},

			{
				y: "50%",
				scrollTrigger: {
					trigger: ".cocktailCultureContainer",
					start: "top -55%",
					end: "top -56%",
					// scrub: 1,
				},
			},

		);

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
					// scrub: 1,
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
					// scrub: 1,
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
					// scrub: 1,
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
					// scrub: 1,
				},
			},

		);

		gsap.fromTo(".beHappyKiwi",
			{
				x: 2000,
				y: -1500,
			},

			{
				x: 1500,
				scrollTrigger: {
					trigger: ".cocktailCultureContainer",
					start: "top -80%",
					end: "top -85%",
					// scrub: 1,
				},
			},

		);

		gsap.fromTo(".visitCocktail",
			{
				x: 300,
				y: 600
			},

			{
				x: -380,
				y: 600,
				scrollTrigger: {
					trigger: ".cocktailCultureContainer",
					start: "top -85%",
					end: "top -87%",
					// scrub: 1,
				},

			});

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
					// scrub: 1,
				},

			});

		gsap.fromTo(".sivSavor",
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
					// scrub: 1,
				},

			});



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


	// MOVING ANIMATION EFFECT


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
				rotation:45,
			},

			{
				opacity: 1,
				x: 385,
				y: 0,
				rotation:135,
				zIndex: 200,
				scrollTrigger: {
					trigger: ".design-process",
					start: "top -55%",
					end: "top -60%",
					scrub: 1,
				},
			}
		);

		// sACLLING UP THE INNER SQUARE
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
				x:"-100%",
				y:"-110%",
				opacity:0,
			},

			{
				x:50,
				opacity:1,
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
				x:50,
			},
			
			{
				x:"-100%",
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
				x:0,
				y:100,
				zIndex:-1,
			},
			
			{
				x:"-110%",
				zIndex:10,
				y:100,
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
				x:0,
				y:100,
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
				x:"-100%",
				// y:"-110%",
				opacity:0,
			},

			{
				x:0,
				y:0,
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
				x:"-100%",
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
				x:0,
				opacity:0,
			},

			{
				x:"-100%",
				y:"10%",
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


			<section className="our-work">

				<div ref={lumberCraftRef} className="lumber-craft w-screen h-[200vh]">
					<div className="lumberFrame h-[100vh] w-screen overflow-hidden">

						<div className="lumberContent flex justify-center items-center gap-20 h-screen w-screen">
							<div className="all-products">
								<img className="all-list" src={lumber_all_products} alt="" />
								<img className="place-it" src={place_it} alt="" />
							</div>

							<div className="main-product">
								<img src={lumber_main} alt="" />
							</div>

							<div className="customer-services">
								<img src={lumber_customer} alt="" />
							</div>
						</div>

					</div>
				</div>

		
				<div ref={regalFinance} className="regalFinance w-screen h-[200vh]">
					<div className="regalFrame h-screen w-screen">

						<div className="regalContent flex flex-col items-center justify-center gap-20 h-screen w-screen pt-10">

							<div className="regalNavbar">
								<div className="w-screen flex items-center justify-center">
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
									<div className="relative top-[-150px]">
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



				<div ref={orchard} className="orchard h-[200vh] w-screen">

					<div className="orchardScreens h-screen w-screen ">
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

				<div className="dinaRollings-container h-[200vh] w-screen">
					<div ref={dinaRollings} className="dinaRollings h-screen w-screen overflow-hidden">
						<div className="dinaRollings-data-container absolute top-0 left-0">
							<img src={dinaHome} alt="" />
							<img src={dinaActual} alt="" className="dina absolute top-[560px] left-[350px]" />
							<img src={gameGraph} alt="" className="gameGraph absolute top-[0px] left-[50px]" />
							<img src={connectionsBuild} alt="" className="connectionBuild absolute top-[400px] left-[50px]" />
							<img src={felindra} alt="" className="felindra absolute top-[0px] left-[0px]" />
							<img src={sessions} alt="" className="sessions absolute top-[100px] left-[250px]" />
						</div>
					</div>
				</div>

				<div className="vividContainer h-[200vh] w-screen">
					<div className="vividSpark h-screen w-screen overflow-hidden">

						<div className="vividText absolute top-0 left-0">
							<p>Connect</p>
							<h2>
								Vivid<span>spark</span>
							</h2>
						</div>

						<div className="connectRevealSquare h-[205px] w-[620px] bg-[#FFF5DE] absolute top-[80px] left-[50px]"></div>

						<img src={creativeInfo} alt="" className="creativeInfo absolute top-0" />
						<img src={continueInnovation} alt="" className="continueInnovation absolute top-0" />
						<img src={ladyModel} alt="" className="ladyModel absolute top-[150px] right-0 z-10" />

						<div className="whyUsReveal absolute top-0 right-0">
							<h2>Why<span><br />us?</span></h2>
						</div>



					</div>
				</div>

				<div className="cocktailCultureContainer h-[200vh] w-screen">
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

						<div className="layerForReadablity absolute h-screen w-screen">
						</div>

						<div className="cocktailData relative">

							<div className="strippingEffect absolute top-0 right-0 w-[620px] z-9">
								<Marquee direction="right">
									<img src={strippingLine} alt="" />
								</Marquee>
								<img src={sipSavor} alt="" className="sivSavor absolute z-10" />

							</div>

							<img className="logo" src={cocktailCultureLogo} alt="" />
							<img className="introPara" src={experienceASip} alt="" />
							<img className="startMakingDrink" src={startMakingDrink} alt="" />
							<img className="orangeJuice" src={orangeJuice} alt="" />
							<img className="lemonJuice" src={lemonJuice} alt="" />
							<img className="kiwiJuice" src={kiwiJuice} alt="" />
							<img className="beHappyKiwi z-10" src={beHappyKiwi} alt="" />
							<img src={visitCocktail} className="visitCocktail absolute top-0 right-0" alt="" />

						</div>

					</div>
				</div>

			</section>
			


		</main>
	);
};

export default Landing;



