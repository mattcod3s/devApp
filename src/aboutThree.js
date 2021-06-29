import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'
import galaxyFragmentShader from './shaders/galaxy/fragment.glsl'
import galaxyVertexShader from './shaders/galaxy/vertex.glsl'
import * as TWEEN from 'tween.js'
import { gsap } from "gsap"


const container = document.getElementById('skillsContainer')
let contSize = 20
container.style.width = `${contSize}vw`
container.style.height = `${contSize}vw`


const canvas = document.querySelector('canvas.skillsCanvas')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

/**
 * Sizes
 */
const sizes = {
    width: (window.innerWidth / 100) * 20,
    height: (window.innerWidth / 100) * 20
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

// // Scene
// const scene = new THREE.Scene()

// const sizes = {
//     width: container.style.width,
//     height: container.style.height
// }

// window.addEventListener('resize', () =>
// {
//     // Update sizes
//     sizes.width = container.style.width
//     sizes.height = container.style.height

//     // Update camera
//     camera.aspect = sizes.width / sizes.height
//     camera.updateProjectionMatrix()

//     // Update renderer
//     renderer.setSize(sizes.width, sizes.height)
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
// })


// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
// camera.position.x = 0
// camera.position.y = 12
// camera.position.z = 16
// scene.add(camera)

// // Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true


// /**
//  * Renderer
//  */
// const renderer = new THREE.WebGLRenderer({
//     canvas: canvas
// })
// renderer.setSize(sizes.width, sizes.height)
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))


// /**
//  * Animate
//  */
//  const clock = new THREE.Clock()

//  const tick = () =>
//  {
//     const elapsedTime = clock.getElapsedTime()

//     controls.update()

//     // Render
//     renderer.render(scene, camera)

//     // Call tick again on the next frame
//     window.requestAnimationFrame(tick)

//  }

// tick()