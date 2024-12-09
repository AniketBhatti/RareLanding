import React from 'react'
import * as Matter from 'matter-js';
import "./matter.scss";

const Matterjs = () => {

    const { Engine, Render, World, Bodies, Mouse, MouseConstraint } = Matter;

    const engine = Engine.create();
    const render = Render.create({
        element: document.body,
        engine: engine
    });

    const box1 = Bodies.rectangle(200, 200, 50, 50);
    const box2 = Bodies.rectangle(300, 200, 50, 50);
    const box3 = Bodies.rectangle(400, 200, 50, 50);

    World.add(engine.world, [box1, box2, box3]);

    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse
    });

    World.add(engine.world, mouseConstraint);

    render.mouse = mouse;

    // Add event listener for mouse hover
    render.canvas.addEventListener('mousemove', (event) => {
        const mousePosition = { x: event.clientX, y: event.clientY };
        const bodies = Matter.Query.point([box1, box2, box3], mousePosition);
        bodies.forEach(body => {
            Matter.Body.setVelocity(body, { x: 0, y: -10 }); // Move the box up when hovered
        });
    });

    Engine.run(engine);
    Render.run(render);



    return (
        <>
        </>

    )
}

export default Matterjs
