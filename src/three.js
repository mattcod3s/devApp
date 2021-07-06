import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'
import galaxyFragmentShader from './shaders/galaxy/fragment.glsl'
import galaxyVertexShader from './shaders/galaxy/vertex.glsl'
import * as TWEEN from 'tween.js'
import { gsap } from "gsap"

/**
 * Responsive
 */
let sizeResValue = null
let cameraResValueX = 0
let cameraResValueY = 12
let cameraResValueZ = 16
let textPositionY = 10.6
let miniTextPositionY = 9.6

let particleCount = 800000

if(window.innerWidth > 1920) {
    sizeResValue = 80
} else if(window.innerWidth > 1440) {
    sizeResValue = 60
} else if(window.innerWidth > 800) {
    sizeResValue = 50
} else {
    sizeResValue = 75
    particleCount = 400000
}

if(window.innerWidth < 600)  {
    cameraResValueX = 0
    cameraResValueY = 15
    cameraResValueZ = 20
    sizeResValue = 50
    textPositionY = 12.6
    miniTextPositionY = 11.6
}

const projectCont = document.getElementById('projectCont')
const aboutCont = document.getElementById('aboutCont')
const contactCont = document.getElementById('contactCont')


window.addEventListener('load', () => {
    projectContent.style.opacity = '0'
    projectContent.style.pointerEvents = 'none'
    projectContent.style.transitionDelay = '0s'

    aboutContent.style.opacity = '0'
    aboutContent.style.pointerEvents = 'none'
    aboutContent.style.transitionDelay = '0s'

    contactContent.style.opacity = '0'
    contactContent.style.pointerEvents = 'none'
    contactContent.style.transitionDelay = '0s'

    document.getElementById('loading').style.transform = 'translateY(120vh)'

    let progressBar = document.getElementById('progressBar')
    
    progressBar.value = 100

    setTimeout(function(){ 
        gsap.to(text.material, 1, {opacity:1})
        gsap.to(miniText.material, 1, {opacity:1})
    }, 1500);

})


/**
 * Base
 */
// Debug
//const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

let text = null
let miniText = null

let pageX = 0.5;
let pageY = 0.5;

//GSAP MATERIALS

//Font Loader
const fontLoader = new THREE.FontLoader()
fontLoader.load(
    '/fonts/helvetiker_regular.typeface.json',
    (font) => {
        const textGeometry = new THREE.TextGeometry(
            'Matthew Kostka',
            {
                font: font,
                size: 0.9,
                height: 0.2,
                curveSegments: 8,
                bevelEnabled: true,
                bevelThickness: 0.03,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 4,
            }
        )

        textGeometry.center()

        const textMaterial = new THREE.MeshMatcapMaterial({ matcap: matcapTexture, transparent: true, opacity: 0 })
        text = new THREE.Mesh(textGeometry, textMaterial)
        text.position.set(0, textPositionY, 6)
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

        const miniTextMaterial = new THREE.MeshMatcapMaterial({ matcap: miniMatCapTexture, transparent: true, opacity: 0})
        miniText = new THREE.Mesh(miniTextGeomtery, miniTextMaterial)

        miniText.position.set(0, miniTextPositionY, 6)
        miniText.lookAt(camera.position)

        scene.add(text, miniText)
    }
)

//Texture Loader
const loadingManager = new THREE.LoadingManager()
loadingManager.onStart = () => {
}

let tempAdd = 0
loadingManager.onLoad = () => {
    
}
loadingManager.onProgress = () => {

    if(tempAdd < 90) {
        tempAdd += 10
    } else {
        tempAdd = tempAdd
    }

    progressBar.value = tempAdd

}

const textureLoader = new THREE.TextureLoader(loadingManager)
const matcapTexture = textureLoader.load('/textures/matcaps/13.png')
const miniMatCapTexture = textureLoader.load('/textures/matcaps/23.png')

const planet1ColorTexture = textureLoader.load('/textures/planet1/COLOR.jpg')
const planet1DispTexture = textureLoader.load('/textures/planet1/DISP.png')
const planet1NormTexture = textureLoader.load('/textures/planet1/NORM.jpg')
const planet1OccTexture = textureLoader.load('/textures/planet1/OCC.jpg')
const planet1RoughTexture = textureLoader.load('/textures/planet1/ROUGH.jpg')

//Planet380
const planet2ColorTexture = textureLoader.load('/textures/planet380/COLOR.jpg')
const planet2DispTexture = textureLoader.load('/textures/planet380/DISP.png')
const planet2NormTexture = textureLoader.load('/textures/planet380/NORM.jpg')
const planet2OccTexture = textureLoader.load('/textures/planet380/OCC.jpg')
const planet2MetalTexture = textureLoader.load('/textures/planet380/METAL.jpg')
const planet2RoughTexture = textureLoader.load('/textures/planet380/ROUGH.jpg')

//Planet381
const planet3ColorTexture = textureLoader.load('/textures/planet381/COLOR.jpg')
const planet3DispTexture = textureLoader.load('/textures/planet381/DISP.png')
const planet3NormTexture = textureLoader.load('/textures/planet381/NORM.jpg')
const planet3OccTexture = textureLoader.load('/textures/planet381/OCC.jpg')
const planet3MetalTexture = textureLoader.load('/textures/planet381/METAL.jpg')
const planet3RoughTexture = textureLoader.load('/textures/planet381/ROUGH.jpg')


/**
 * Galaxy
 */
const parameters = {}
parameters.count = particleCount
parameters.size = 0.003
parameters.radius = 20
parameters.branches = 5
parameters.spin = 1
parameters.randomness = 0.15
parameters.randomnessPower = 1.8
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
    blackHoleGeometry = new THREE.SphereGeometry(1.2, 64, 64)
    blackHoleMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 })
    blackHole = new THREE.Mesh( blackHoleGeometry, blackHoleMaterial );
    blackHole.position.set(0, -0.2, 0)
    scene.add(blackHole)

    /**
     * PLANETS
     */

     const color = 0xFFFFFF;
     const intensity = 1;
     const light = new THREE.AmbientLight(color, intensity);
     scene.add(light);

    // Planet 1
    projectPlanetGeometry = new THREE.SphereGeometry(0.15, 64, 64)
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
    projectPlanet.position.set(-8, 0.4, 0)


    // Planet 2
    resumePlanetGeometry = new THREE.SphereGeometry(0.16, 64, 64)
    resumePlanetMaterial = new THREE.MeshStandardMaterial()

    resumePlanetMaterial.map = planet2ColorTexture 
    resumePlanetMaterial.aoMap = planet2OccTexture
    resumePlanetMaterial.aoMapIntensity = 1
    resumePlanetMaterial.displacementMap = planet2DispTexture
    resumePlanetMaterial.displacementScale = 0.05
    resumePlanetMaterial.roughnessMap = planet2RoughTexture
    resumePlanetMaterial.normalMap = planet2NormTexture
    resumePlanetMaterial.metalnessMap = planet2MetalTexture

    resumePlanet = new THREE.Mesh( resumePlanetGeometry, resumePlanetMaterial )
    resumePlanet.geometry.setAttribute('uv2', new THREE.BufferAttribute(resumePlanet.geometry.attributes.uv.array, 2))
    resumePlanet.position.set(3, 0.2, -5)

    // Planet 3
    aboutPlanetGeometry = new THREE.SphereGeometry(0.14, 64, 64)
    aboutPlanetMaterial = new THREE.MeshStandardMaterial()

    aboutPlanetMaterial.map = planet3ColorTexture
    aboutPlanetMaterial.aoMap = planet3OccTexture
    aboutPlanetMaterial.aoMapIntensity = 1
    aboutPlanetMaterial.displacementMap = planet3DispTexture
    aboutPlanetMaterial.displacementScale = 0.02
    aboutPlanetMaterial.normalMap = planet3NormTexture
    aboutPlanetMaterial.metalnessMap = planet3MetalTexture
    aboutPlanetMaterial.roughnessMap = planet3RoughTexture

    aboutPlanet = new THREE.Mesh( aboutPlanetGeometry, aboutPlanetMaterial )
    aboutPlanet.geometry.setAttribute('uv2', new THREE.BufferAttribute(aboutPlanet.geometry.attributes.uv.array, 2))
    aboutPlanet.position.set(4, 0.3, 5)

    scene.add(projectPlanet, resumePlanet, aboutPlanet/*, contactPlanet*/)


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
        const randomAx = Math.pow(Math.random(), 1.8) * (Math.random() < 0.5 ? 1 : - 1) * 1 * radius
        const randomAy = Math.pow(Math.random(), 1.8) * (Math.random() < 0.5 ? 1 : - 1) * 1 * radius
        const randomAz = Math.pow(Math.random(), 1.8) * (Math.random() < 0.5 ? 1 : - 1) * 1 * radius
        positions[i3    ] = Math.cos(branchAngle) * radius
        positions[i3 + 1] = 0
        positions[i3 + 2] = Math.sin(branchAngle) * radius
    
        if(i % 12 == 0) {
            randomness[i3    ] = randomAx
            randomness[i3 + 1] = randomAy
            randomness[i3 + 2] = randomAz
        } else {
            randomness[i3    ] = randomX
            randomness[i3 + 1] = randomY
            randomness[i3 + 2] = randomZ
        }

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
            uSize: { value: sizeResValue * renderer.getPixelRatio() }
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
 * Update Hexagons
 */
const updateHexagons = () => {

    const tempP = new THREE.Vector3()
    const tempA = new THREE.Vector3()
    const tempC = new THREE.Vector3()
    projectPlanet.getWorldPosition(tempP)
    aboutPlanet.getWorldPosition(tempA)
    resumePlanet.getWorldPosition(tempC)

    const tempProject = tempP.project(camera)
    const tempAbout = tempA.project(camera)
    const tempContact = tempC.project(camera)

    const Px = (tempProject.x *  .5 + .5) * canvas.clientWidth
    const Py = (tempProject.y * -.5 + .5) * canvas.clientHeight

    const Ax = (tempAbout.x *  .5 + .5) * canvas.clientWidth
    const Ay = (tempAbout.y * -.5 + .5) * canvas.clientHeight

    const Cx = (tempContact.x *  .5 + .5) * canvas.clientWidth
    const Cy = (tempContact.y * -.5 + .5) * canvas.clientHeight


    projectCont.style.transform = `translate(-50%, -50%) translate(calc(${Px}px - 6.5vw),calc(${Py}px - 0.05vw))`
    aboutCont.style.transform = `translate(-50%, -50%) translate(calc(${Ax}px + 6.5vw),calc(${Ay}px - 0.05vw))`
    contactCont.style.transform = `translate(-50%, -50%) translate(calc(${Cx}px + 6.5vw),calc(${Cy}px + 0.4vw))`

    projectCont.style.opacity = '1'
    aboutCont.style.opacity = '1'
    contactCont.style.opacity = '1'

    projectCont.style.pointerEvents = 'all'
    aboutCont.style.pointerEvents = 'all'
    contactCont.style.pointerEvents = 'all'
}

const removeHexagons = () => {
    projectCont.style.opacity = '0'
    aboutCont.style.opacity = '0'
    contactCont.style.opacity = '0'

    projectCont.style.pointerEvents = 'none'
    aboutCont.style.pointerEvents = 'none'
    contactCont.style.pointerEvents = 'none'
}

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
const mouse = new THREE.Vector2()
window.addEventListener('mousemove', (_event) => {
    mouse.x = _event.clientX / sizes.width * 2 - 1
    mouse.y = - (_event.clientY / sizes.height) * 2 + 1
})

/**
 * Camera
 */
// Base camera

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = cameraResValueX
camera.position.y = cameraResValueY
camera.position.z = cameraResValueZ
scene.add(camera)


// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.enabled = false


/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    powerPreference: 'high-performance'
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


const exitButton = document.getElementById('exitBtn')
exitButton.addEventListener('click', () => {

    const tween = new TWEEN.Tween(camera.position)
    .to({x : cameraResValueX, y : cameraResValueY, z : cameraResValueZ}, 1200)
    .easing(TWEEN.Easing.Quadratic.Out)
	.onUpdate(() => {
	})
    .onComplete(()=> {
        gsap.to(text.material, 1, {opacity:1})
        gsap.to(miniText.material, 1, {opacity:1})
        scene.add(text, miniText)
    })
	.start()

    enterButton.style.opacity = '1'
    enterButton.style.transitionDuration = '0.5s'
    enterButton.style.pointerEvents = 'all'

    exitButton.style.opacity = '0'
    exitButton.style.pointerEvents = 'none'
    exitButton.style.transitionDelay = '0s'

    removeHexagons()
})

const returnButton = document.getElementById('returnBtn')
returnButton.addEventListener('click', () => {

    scene.remove(text, miniText)

    
    let enterCoord = {
        x : cameraResValueX, y : cameraResValueY, z : cameraResValueZ
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
        .to(to, 1600)
        .easing(TWEEN.Easing.Linear.None)
        .onUpdate(function () {
        camera.position.set(this.x, this.y, this.z);
        camera.lookAt(new THREE.Vector3(0, 0, 0));
    })
        .onComplete(function () {
        camera.lookAt(new THREE.Vector3(0, 0, 0));
        updateHexagons()
    })
        .start();


    enterButton.style.opacity = '0'
    enterButton.style.transitionDuration = '0.5s'
    enterButton.style.pointerEvents = 'none'

    exitButton.style.opacity = '1'
    exitButton.style.pointerEvents = 'all'
    exitButton.style.transitionDelay = '1.6s'

    returnButton.style.opacity = '0'
    returnButton.style.transitionDuration = '0.5s'
    returnButton.style.pointerEvents = 'none'
    returnButton.style.transitionDelay = '0s'

    projectContent.style.opacity = '0'
    projectContent.style.pointerEvents = 'none'
    projectContent.style.transitionDelay = '0s'

    aboutContent.style.opacity = '0'
    aboutContent.style.pointerEvents = 'none'
    aboutContent.style.transitionDelay = '0s'

    contactContent.style.opacity = '0'
    contactContent.style.pointerEvents = 'none'
    contactContent.style.transitionDelay = '0s'
})


const enterButton = document.getElementById('enterBtn')
enterButton.addEventListener('click', () => {

    let enterCoord = {
        x : cameraResValueX, y : cameraResValueY, z : cameraResValueZ
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
        .to(to, 1000)
        .easing(TWEEN.Easing.Linear.None)
        .onUpdate(function () {
        camera.position.set(this.x, this.y, this.z);
        camera.lookAt(new THREE.Vector3(0, 0, 0));
    })
        .onComplete(function () {
        camera.lookAt(new THREE.Vector3(0, 0, 0));
        updateHexagons()
    })
        .start();

    enterButton.style.opacity = '0'
    enterButton.style.transitionDuration = '0.5s'
    enterButton.style.pointerEvents = 'none'

    exitButton.style.opacity = '1'
    exitButton.style.pointerEvents = 'all'
    exitButton.style.transitionDelay = '0s'

    gsap.to(text.material, 0.2, {opacity:0})
    gsap.to(miniText.material, 0.2, {opacity:0})
})


const projectTween = () => {
    const tween = new TWEEN.Tween(camera.position)
    .to({x : -8.38948, y : 0.48485, z : -0.27225}, 2000)
    .easing(TWEEN.Easing.Quadratic.Out) // Use an easing function to make the animation smooth.
	.onUpdate(() => {
		// Called after tween.js updates 'coords'.
		// Move 'box' to the position described by 'coords' with a CSS translation.
	})
	.start()
}

const contactTween = () => {
    const tween = new TWEEN.Tween(camera.position)
    .to({x : 3.99994, y : 0.26698, z : -5.37808}, 2000)
    .easing(TWEEN.Easing.Quadratic.Out) // Use an easing function to make the animation smooth.
	.onUpdate(() => {
		// Called after tween.js updates 'coords'.
		// Move 'box' to the position described by 'coords' with a CSS translation.
	})
	.start()
}

const aboutTween = () => {
    const tween = new TWEEN.Tween(camera.position)
    .to({x : 3.93154, y : 0.33899, z : 5.74922}, 2000)
    .easing(TWEEN.Easing.Quadratic.Out) // Use an easing function to make the animation smooth.
	.onUpdate(() => {
		// Called after tween.js updates 'coords'.
		// Move 'box' to the position described by 'coords' with a CSS translation.
	})
	.start()
}


// Animate planet camera
const projectContent = document.getElementById('project_content')
const aboutContent = document.getElementById('about_content')
const contactContent = document.getElementById('cont_content')

const projectClickable = document.getElementById('projectClickable')
projectClickable.addEventListener('click', () => {
    
    removeHexagons()

    projectTween()

    exitButton.style.opacity = '0'
    exitButton.style.pointerEvents = 'none'
    exitButton.style.transitionDelay = '0s'

    returnButton.style.opacity = '1'
    returnButton.style.pointerEvents = 'all'
    returnButton.style.transitionDelay = '2.2s'

    projectContent.style.opacity = '1'
    projectContent.style.pointerEvents = 'all'
    projectContent.style.transitionDelay = '2.2s'

    projectContent.style.zIndex = '4'
    aboutContent.style.zIndex = '2'
    contactContent.style.zIndex = '2'

})

const aboutClickable = document.getElementById('aboutClickable')
aboutClickable.addEventListener('click', () => {

    removeHexagons()

    aboutTween()

    exitButton.style.opacity = '0'
    exitButton.style.pointerEvents = 'none'
    exitButton.style.transitionDelay = '0s'

    returnButton.style.opacity = '1'
    returnButton.style.pointerEvents = 'all'
    returnButton.style.transitionDelay = '2.2s'

    aboutContent.style.opacity = '1'
    aboutContent.style.pointerEvents = 'all'
    aboutContent.style.transitionDelay = '2.2s'

    projectContent.style.zIndex = '2'
    aboutContent.style.zIndex = '4'
    contactContent.style.zIndex = '2'
})

projectContent.style.opacity = '1'
projectContent.style.pointerEvents = 'all'
projectContent.style.transitionDelay = '2.2s'
aboutContent.style.opacity = '1'
aboutContent.style.pointerEvents = 'all'
aboutContent.style.transitionDelay = '2.2s'
contactContent.style.opacity = '1'
contactContent.style.pointerEvents = 'all'
contactContent.style.transitionDelay = '2.2s'

const contactClickable = document.getElementById('contactClickable')
contactClickable.addEventListener('click', () => {

    removeHexagons()

    contactTween()

    exitButton.style.opacity = '0'
    exitButton.style.pointerEvents = 'none'
    exitButton.style.transitionDelay = '0s'

    returnButton.style.opacity = '1'
    returnButton.style.pointerEvents = 'all'
    returnButton.style.transitionDelay = '2.2s'

    contactContent.style.opacity = '1'
    contactContent.style.pointerEvents = 'all'
    contactContent.style.transitionDelay = '2.2s'

    projectContent.style.zIndex = '2'
    aboutContent.style.zIndex = '2'
    contactContent.style.zIndex = '4'
})


/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    //Update text
    if(text !== null && window.innerWidth > 800) {
        render();
    }

    projectPlanet === null ? false : projectPlanet.rotation.y += 0.008
    projectPlanet === null ? false : projectPlanet.rotation.x += 0.004

    resumePlanet === null ? false : resumePlanet.rotation.y += 0.008
    resumePlanet === null ? false : resumePlanet.rotation.x += 0.004

    aboutPlanet === null ? false : aboutPlanet.rotation.y += 0.008
    aboutPlanet === null ? false : aboutPlanet.rotation.x += 0.004


    TWEEN.update();

    // Update material
    material.uniforms.uTime.value = elapsedTime + 500

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()