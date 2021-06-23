import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'
import galaxyFragmentShader from './shaders/galaxy/fragment.glsl'
import galaxyVertexShader from './shaders/galaxy/vertex.glsl'
import * as TWEEN from 'tween.js'

// Cursor
// const cursor = {
//     x: 0,
//     y: 0
// }

// window.addEventListener('mousemove', (event) => {
//     cursor.x = event.clientX / sizes.width - 0.5
//     cursor.y = event.clientY / sizes.height - 0.5
// })


/**
 * Base
 */
// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

let text = null
let miniText = null

let pageX = 0.5;
let pageY = 0.5;

//Font Loader
const fontLoader = new THREE.FontLoader()
fontLoader.load(
    '/fonts/helvetiker_regular.typeface.json',
    (font) => {
        const textGeometry = new THREE.TextGeometry(
            'Matthew Kostka',
            {
                font: font,
                size: 0.75,
                height: 0.2,
                curveSegments: 6,
                bevelEnabled: true,
                bevelThickness: 0.03,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 5,
            }
        )

        textGeometry.center()

        const textMaterial = new THREE.MeshMatcapMaterial({ matcap: matcapTexture })
        text = new THREE.Mesh(textGeometry, textMaterial)
        text.position.set(0, 0.4, -6)
        text.lookAt(camera.position)

        const miniTextGeomtery = new THREE.TextGeometry(
            '- FrontEnd Developer - BackEnd Experienced -',
            {
                font: font,
                size: 0.275,
                height: 0.01,
                curveSegments: 6,
                bevelEnabled: true,
                bevelThickness: 0.03,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 5,
            }
        )

        miniTextGeomtery.center()

        const miniTextMaterial = new THREE.MeshMatcapMaterial({ matcap: miniMatCapTexture})
        miniText = new THREE.Mesh(miniTextGeomtery, miniTextMaterial)

        miniText.position.set(0, -0.6, -6)
        miniText.lookAt(camera.position)

        scene.add(text, miniText)
    }
)



//Texture Loader
const loadingManager = new THREE.LoadingManager()
loadingManager.onStart = () => {
    console.log('satrted')
}
loadingManager.onLoad = () => {
    console.log('finished')
}
loadingManager.onProgress = () => {
    console.log('progress')
}

const textureLoader = new THREE.TextureLoader(loadingManager)
const matcapTexture = textureLoader.load('/textures/matcaps/13.png')
const miniMatCapTexture = textureLoader.load('/textures/matcaps/17.png')

const planet1ColorTexture = textureLoader.load('/textures/planet1/COLOR.jpg')
const planet1DispTexture = textureLoader.load('/textures/planet1/DISP.png')
const planet1NormTexture = textureLoader.load('/textures/planet1/NORM.jpg')
const planet1OccTexture = textureLoader.load('/textures/planet1/OCC.jpg')
const planet1RoughTexture = textureLoader.load('/textures/planet1/ROUGH.jpg')

const planet2ColorTexture = textureLoader.load('/textures/planet2/COLOR.jpg')
const planet2DispTexture = textureLoader.load('/textures/planet2/DISP.png')
const planet2NormTexture = textureLoader.load('/textures/planet2/NORM.jpg')
const planet2OccTexture = textureLoader.load('/textures/planet2/OCC.jpg')
const planet2RoughTexture = textureLoader.load('/textures/planet2/ROUGH.jpg')

const planet3ColorTexture = textureLoader.load('/textures/planet32/COLOR.jpg')
const planet3DispTexture = textureLoader.load('/textures/planet32/DISP.png')
const planet3NormTexture = textureLoader.load('/textures/planet32/NORM.jpg')
const planet3OccTexture = textureLoader.load('/textures/planet32/OCC.jpg')

// const planet4ColorTexture = textureLoader.load('/textures/planet4/COLOR.jpg')
// const planet4DispTexture = textureLoader.load('/textures/planet4/DISP.png')
// const planet4NormTexture = textureLoader.load('/textures/planet4/NORM.jpg')
// const planet4OccTexture = textureLoader.load('/textures/planet4/OCC.jpg')

/**
 * Galaxy
 */
const parameters = {}
parameters.count = 600000
parameters.size = 0.003
parameters.radius = 4
parameters.branches = 5
parameters.spin = 1
parameters.randomness = 1.2
parameters.randomnessPower = 4.6
parameters.insideColor = '#ffffff'
parameters.outsideColor = '#0174f7'

let geometry = null
let material = null
let points = null

let blackHoleGeometry = null
let blackHoleMaterial = null
let blackHole = null

let projectPlanetGeometry = null
let projectPlanetMaterial = null
let projectPlanet = null

let resumePlanetGeometry = null
let resumePlanetMaterial = null
let resumePlanet = null

let aboutPlanetGeometry = null
let aboutPlanetMaterial = null
let aboutPlanet = null

let contactPlanetGeometry = null
let contactPlanetMaterial = null
let contactPlanet = null

const generateGalaxy = () =>
{
    if(points !== null)
    {
        geometry.dispose()
        material.dispose()
        
        scene.remove(points)
        scene.remove(blackHole)
    }

    /**
     * Black Hole
     */
    blackHoleGeometry = new THREE.SphereGeometry(0.275, 64, 64)
    blackHoleMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 })
    blackHole = new THREE.Mesh( blackHoleGeometry, blackHoleMaterial );
    blackHole.position.set(0, -0.05, 0)
    scene.add(blackHole)

    /**
     * PLANETS
     */

     const color = 0xFFFFFF;
     const intensity = 1;
     const light = new THREE.AmbientLight(color, intensity);
     scene.add(light);

    // Planet 1
    projectPlanetGeometry = new THREE.SphereGeometry(0.1, 64, 64)
    projectPlanetMaterial = new THREE.MeshStandardMaterial()

    projectPlanetMaterial.map = planet1ColorTexture
    projectPlanetMaterial.aoMap = planet1OccTexture
    projectPlanetMaterial.aoMapIntensity = 1
    projectPlanetMaterial.displacementMap = planet1DispTexture
    projectPlanetMaterial.displacementScale = 0.05
    projectPlanetMaterial.roughnessMap = planet1RoughTexture
    projectPlanetMaterial.normalMap = planet1NormTexture

    projectPlanet = new THREE.Mesh( projectPlanetGeometry, projectPlanetMaterial )
    projectPlanet.geometry.setAttribute('uv2', new THREE.BufferAttribute(projectPlanet.geometry.attributes.uv.array, 2))
    projectPlanet.position.set(-2.15, 0, 0)


    // Planet 2
    resumePlanetGeometry = new THREE.SphereGeometry(0.08, 64, 64)
    resumePlanetMaterial = new THREE.MeshStandardMaterial()

    resumePlanetMaterial.map = planet2ColorTexture 
    resumePlanetMaterial.aoMap = planet2OccTexture
    resumePlanetMaterial.aoMapIntensity = 1
    resumePlanetMaterial.displacementMap = planet2DispTexture
    resumePlanetMaterial.displacementScale = 0.05
    resumePlanetMaterial.roughnessMap = planet2RoughTexture
    resumePlanetMaterial.normalMap = planet2NormTexture

    resumePlanet = new THREE.Mesh( resumePlanetGeometry, resumePlanetMaterial )
    resumePlanet.geometry.setAttribute('uv2', new THREE.BufferAttribute(resumePlanet.geometry.attributes.uv.array, 2))
    resumePlanet.position.set(1.78, 0, 0)

    // Planet 3
    aboutPlanetGeometry = new THREE.SphereGeometry(0.09, 64, 64)
    aboutPlanetMaterial = new THREE.MeshStandardMaterial()

    aboutPlanetMaterial.map = planet3ColorTexture
    aboutPlanetMaterial.aoMap = planet3OccTexture
    aboutPlanetMaterial.aoMapIntensity = 1
    aboutPlanetMaterial.displacementMap = planet3DispTexture
    aboutPlanetMaterial.displacementScale = 0.02
    aboutPlanetMaterial.normalMap = planet3NormTexture

    aboutPlanet = new THREE.Mesh( aboutPlanetGeometry, aboutPlanetMaterial )
    aboutPlanet.geometry.setAttribute('uv2', new THREE.BufferAttribute(aboutPlanet.geometry.attributes.uv.array, 2))
    aboutPlanet.position.set(-1, 0, 1.6)


    // // Planet 4
    // contactPlanetGeometry = new THREE.SphereGeometry(0.07, 64, 64)
    // contactPlanetMaterial = new THREE.MeshStandardMaterial()

    // contactPlanetMaterial.map = planet4ColorTexture
    // contactPlanetMaterial.aoMap = planet4OccTexture
    // contactPlanetMaterial.aoMapIntensity = 1
    // contactPlanetMaterial.displacementMap = planet4DispTexture
    // contactPlanetMaterial.displacementScale = 0.05
    // contactPlanetMaterial.normalMap = planet4NormTexture

    // contactPlanet = new THREE.Mesh( contactPlanetGeometry, contactPlanetMaterial )
    // contactPlanet.geometry.setAttribute('uv2', new THREE.BufferAttribute(contactPlanet.geometry.attributes.uv.array, 2))
    // contactPlanet.position.set(0, 0, -2)


    scene.add(projectPlanet, resumePlanet, aboutPlanet/*, contactPlanet*/)

    rayCast()


    /**
     * Geometry
     */
    geometry = new THREE.BufferGeometry()

    const positions = new Float32Array(parameters.count * 3)
    const randomness = new Float32Array(parameters.count * 3)
    const colors = new Float32Array(parameters.count * 3)
    const scales = new Float32Array(parameters.count * 1)

    const insideColor = new THREE.Color(parameters.insideColor)
    const outsideColor = new THREE.Color(parameters.outsideColor)

    for(let i = 0; i < parameters.count; i++)
    {
        const i3 = i * 3

        // Position
        const radius = Math.random() * parameters.radius

        const branchAngle = (i % parameters.branches) / parameters.branches * Math.PI * 2

        const randomX = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : - 1) * parameters.randomness * radius
        const randomY = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : - 1) * parameters.randomness * radius
        const randomZ = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : - 1) * parameters.randomness * radius

        positions[i3    ] = Math.cos(branchAngle) * radius
        positions[i3 + 1] = 0
        positions[i3 + 2] = Math.sin(branchAngle) * radius
    
        randomness[i3    ] = randomX
        randomness[i3 + 1] = randomY
        randomness[i3 + 2] = randomZ

        // Color
        const mixedColor = insideColor.clone()
        mixedColor.lerp(outsideColor, radius / parameters.radius)

        colors[i3    ] = mixedColor.r
        colors[i3 + 1] = mixedColor.g
        colors[i3 + 2] = mixedColor.b

        // Scale
        scales[i] = Math.random()
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('aRandomness', new THREE.BufferAttribute(randomness, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    geometry.setAttribute('aScale', new THREE.BufferAttribute(scales, 1))

    /**
     * Material
     */
    material = new THREE.ShaderMaterial({
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        vertexColors: true,
        uniforms:
        {
            uTime: { value: 0 },
            uSize: { value: 16 * renderer.getPixelRatio() }
        },    
        vertexShader: galaxyVertexShader,
        fragmentShader: galaxyFragmentShader
    })

    /**
     * Points
     */
    points = new THREE.Points(geometry, material)
    scene.add(points)
}

/**
 * RayCaster
 */
let rayToCast = false
const raycaster = new THREE.Raycaster()
const rayCast = () => {
    rayToCast = true
}


gui.add(parameters, 'count').min(100).max(1000000).step(100).onFinishChange(generateGalaxy)
gui.add(parameters, 'radius').min(0.01).max(20).step(0.01).onFinishChange(generateGalaxy)
gui.add(parameters, 'branches').min(2).max(20).step(1).onFinishChange(generateGalaxy)
gui.add(parameters, 'randomness').min(0).max(2).step(0.001).onFinishChange(generateGalaxy)
gui.add(parameters, 'randomnessPower').min(1).max(10).step(0.001).onFinishChange(generateGalaxy)
gui.addColor(parameters, 'insideColor').onFinishChange(generateGalaxy)
gui.addColor(parameters, 'outsideColor').onFinishChange(generateGalaxy)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Raycaster mouse coordinates
 */

/**
 * Camera
 */
// Base camera

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 3
camera.position.z = 3
scene.add(camera)


// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Generate the first galaxy
 */
generateGalaxy()

document.body.addEventListener('mousemove', (event) => {
    pageX = ( event.clientX / window.innerWidth ) * 2 - 1;
    pageY = - ( event.clientY / window.innerHeight ) * 2 + 1;
})

function render() {
    text.lookAt(camera.position)
    text.rotation.x = (-0.2 + (pageY - 0.1) * 0.2);
    text.rotation.y = (pageX - 0.1) * 0.2;
    
    miniText.lookAt(camera.position)
    miniText.rotation.x = -0.2 + (pageY - 0.1) * 0.2;
    miniText.rotation.y = (pageX - 0.1) * 0.2;
    
}

const enterButton = document.getElementById('enterBtn')
enterButton.addEventListener('click', () => {

    let enterCoord = {
        x: 0,
        y: 4.24,
        z: 0.1
    }

    let from = {
        x: camera.position.x,
        y: camera.position.y,
        z: camera.position.z
    };

    let to = {
        x: enterCoord.x,
        y: enterCoord.y,
        z: enterCoord.z
    };
    let tween = new TWEEN.Tween(from)
        .to(to, 600)
        .easing(TWEEN.Easing.Linear.None)
        .onUpdate(function () {
        camera.position.set(this.x, this.y, this.z);
        camera.lookAt(new THREE.Vector3(0, 0, 0));
    })
        .onComplete(function () {
        camera.lookAt(new THREE.Vector3(0, 0, 0));
    })
        .start();
})



/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    //Update text
    if(text !== null) {
        render();
    }

    projectPlanet === null ? false : projectPlanet.rotation.y += 0.008
    projectPlanet === null ? false : projectPlanet.rotation.x += 0.004

    resumePlanet === null ? false : resumePlanet.rotation.y += 0.008
    resumePlanet === null ? false : resumePlanet.rotation.x += 0.004

    aboutPlanet === null ? false : aboutPlanet.rotation.y += 0.008
    aboutPlanet === null ? false : aboutPlanet.rotation.x += 0.004
    
    // if(rayToCast === true) {
    //     const rayOrigin = new THREE.Vector3(-3, 0, 0)
    //     const rayDirection = new THREE.Vector3(10, 0, 0)
    //     rayDirection.normalize()
    //     raycaster.set(rayOrigin, rayDirection)

    //     const objectsToTest = [projectPlanet, resumePlanet, aboutPlanet]
    //     const intersect = raycaster.intersectObject(projectPlanet)
    //     //console.log(intersect)
    //     const intersects = raycaster.intersectObjects(objectsToTest)
    //     //console.log(intersects)

    //     for(const obj of objectsToTest) {
    //         obj.material.color.set(0xffffff)
    //     }

    //     for(const int of intersects) {
    //         int.object.material.color.set(0x0f00dc)
    //     }
    // }

    TWEEN.update();

    // Update material
    material.uniforms.uTime.value = elapsedTime + 150

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()