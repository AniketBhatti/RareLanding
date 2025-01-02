import React, { useEffect } from "react";
import "./matter.scss";
import Matter from "matter-js";

import ae_logo from "../../assets/images/10_amazingTools/tools/afterEffects_logo.png";
import ae_text from "../../assets/images/10_amazingTools/tools/afterEffects_text.png";
import davinci_logo from "../../assets/images/10_amazingTools/tools/daVinci_logo.png";
import ps_logo from "../../assets/images/10_amazingTools/tools/photoshop_logo.png";
import ps_text from "../../assets/images/10_amazingTools/tools/photoshop_text.png";
import figma_logo from "../../assets/images/10_amazingTools/tools/figma_logo.png";
import figma_text from "../../assets/images/10_amazingTools/tools/figma_text.png";
import ai_logo from "../../assets/images/10_amazingTools/tools/illustrator_logo.png";
import ai_text from "../../assets/images/10_amazingTools/tools//illustrator_text.png";

const Matterjs = () => {
    useEffect(() => {
        const engine = Matter.Engine.create();

        const render = Matter.Render.create({
            element: document.body, // Append canvas to the body
            engine: engine,
            options: {
                width: 1920,
                height: 1080,
                background: '#ffffff',
                wireframes: false, // Set to false to display images
            },
        });

        // Ground
        const ground = Matter.Bodies.rectangle(960, 1060, 1920, 60, {
            isStatic: true,
            render: { fillStyle: "#ed1080" }, // Optional: Add color for debug
        });
        const ceiling = Matter.Bodies.rectangle(960, 0, 1920, 60, { isStatic: true, render: { fillStyle: "#ed1080" }, }); // Top
        const leftWall = Matter.Bodies.rectangle(0, 540, 60, 1080, { isStatic: true, render: { fillStyle: "#ed1080" }, }); // Left
        const rightWall = Matter.Bodies.rectangle(1920, 540, 60, 1080, { isStatic: true, render: { fillStyle: "#ed1080" }, }); // Right



        const ae_lo = Matter.Bodies.rectangle(400, 500, 100, 100, {
            render: {
                sprite: {
                    texture: ae_logo, // Replace with your image path
                },
            },
        });

        const ae_txt = Matter.Bodies.rectangle(700, 450, 100, 100, {
            render: {
                sprite: {
                    texture: ae_text, // Replace with your image path
                },
            },
        });

        const dv_lo = Matter.Bodies.rectangle(350, 300, 100, 100, {
            render: {
                sprite: {
                    texture: davinci_logo, // Replace with your image path
                },
            },
        });

        const ps_lo = Matter.Bodies.rectangle(750, 300, 100, 100, {
            render: {
                sprite: {
                    texture: ps_logo, // Replace with your image path
                },
            },
        });

        const ps_txt = Matter.Bodies.rectangle(1000, 300, 100, 100, {
            render: {
                sprite: {
                    texture: ps_text, // Replace with your image path
                },
            },
        });

        const fig_lo1 = Matter.Bodies.rectangle(800, 300, 100, 100, {
            render: {
                sprite: {
                    texture: figma_logo, // Replace with your image path
                },
            },
        });

        const fig_lo2 = Matter.Bodies.rectangle(1200, 300, 100, 100, {
            render: {
                sprite: {
                    texture: figma_logo, // Replace with your image path
                },
            },
        });

        const fig_txt1 = Matter.Bodies.rectangle(800, 300, 100, 100, {
            render: {
                sprite: {
                    texture: figma_text, // Replace with your image path
                },
            },
        });

        const fig_txt2 = Matter.Bodies.rectangle(1000, 300, 100, 100, {
            render: {
                sprite: {
                    texture: figma_text, // Replace with your image path
                },
            },
        });

        const illu_lo = Matter.Bodies.rectangle(1600, 300, 100, 100, {
            render: {
                sprite: {
                    texture: ai_logo, // Replace with your image path
                },
            },
        });

        const illu_txt = Matter.Bodies.rectangle(1600, 350, 100, 100, {
            render: {
                sprite: {
                    texture: ai_text, // Replace with your image path
                },
            },
        });



        // Add mouse control
c

        // Add all bodies to the world
        Matter.World.add(engine.world, [ground, ceiling, leftWall, rightWall, ae_lo, ae_txt, dv_lo, ps_lo, ps_txt, fig_lo1, fig_lo2, fig_txt1, fig_txt2, illu_lo, illu_txt, mouseConstraint]);

        // Create a runner and run it
        const runner = Matter.Runner.create();
        Matter.Runner.run(runner, engine);
        Matter.Render.run(render);

        // Cleanup on component unmount
        return () => {
            Matter.Render.stop(render);
            Matter.Runner.stop(runner);
            Matter.World.clear(engine.world);
            Matter.Engine.clear(engine);
        };
    }, []);

    return <></>;
};

export default Matterjs;
