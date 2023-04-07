import React, { Component } from 'react';
import * as THREE from 'three';

class Sphere extends Component {
  componentDidMount() {
    // Set up the scene, camera and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(300, 250);
    this.mount.appendChild(renderer.domElement);

    // Create the sphere geometry
    const radius = 5; // set the radius of the sphere
    const widthSegments = 6; // number of horizontal segments
    const heightSegments = 6; // number of vertical segments
    const sphereGeometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);

    const pointLight = new THREE.PointLight(0xffe600, 0.5);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    const ambientLight = new THREE.AmbientLight(0xffe600, 0.25);
    scene.add(ambientLight);

    // Create the material
    // const material = new THREE.MeshBasicMaterial({ color: 0xffe600, wireframe: false });
    const material = new THREE.MeshLambertMaterial({ color: 0xffe600 });

    // Create the mesh and add it to the scene
    const sphereMesh = new THREE.Mesh(sphereGeometry, material);
    scene.add(sphereMesh);

    // Position the camera
    camera.position.z = 10;

    // Create an animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      sphereMesh.rotation.x += 0.01;
      sphereMesh.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();
  }

  render() {
    return <div ref={(ref) => (this.mount = ref)} />;
  }
}

export default Sphere;
