import React from 'react';
import './cyberpunk.scss';
import * as THREE from 'three';

const CyberPunk = () => {
    
    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 5;
    
    // Create Object and Add to Scene
    const geomerty = new THREE.BoxGeometry(1, 1 ,1);
    const material = new THREE.MeshBasicMaterial({color: "red"})
    const mesh = new THREE.Mesh(geomerty, material)
    scene.add(mesh)

// Renderer

    const [renderer, setRenderer] = React.useState(null);

    React.useEffect(() => {
        const canvas = document.querySelector("#canvas");
        if (canvas) {
            const newRenderer = new THREE.WebGLRenderer({
                canvas,
                antialias: true,
            });
            newRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            newRenderer.setSize(window.innerWidth, window.innerHeight);
            setRenderer(newRenderer);
        }
    }, []);

    React.useEffect(() => {
        if (renderer) {
            const animate = () => {
                requestAnimationFrame(animate);
                renderer.render(scene, camera);
                mesh.rotation.x += 0.01;
                mesh.rotation.y += 0.01;
            };
            animate();

            const handleResize = () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            };
            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, [renderer, scene, camera]);




  return (
    <div>
        <canvas id='canvas'></canvas>
        
    </div>
  )
}

export default CyberPunk
