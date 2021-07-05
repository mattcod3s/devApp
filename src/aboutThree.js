import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'
import galaxyFragmentShader from './shaders/galaxy/fragment.glsl'
import galaxyVertexShader from './shaders/galaxy/vertex.glsl'
import * as TWEEN from 'tween.js'
import { gsap } from "gsap"


/** 88888888888*/

let vecArray = []

/**888888888888888 */

const container = document.getElementById('skillsContainer')
let contSize = null
if(window.innerWidth < 600) {
    contSize = 90
} else {
    contSize = 50
}
container.style.width = `${contSize}vw`
container.style.height = `${contSize}vw`


const canvas = document.querySelector('canvas.skillsCanvas')

// Scene
const scene = new THREE.Scene()
scene.background = null;

/**
 * Textures
 */
 const textureLoader = new THREE.TextureLoader()
 const textTexture = textureLoader.load('/textures/matcaps/13.png')
 const subtextTexture = textureLoader.load('/textures/matcaps/22.png')

/**
 * Objects
 */
const geometry = new THREE.SphereGeometry(2, 5, 5)
const material = new THREE.MeshBasicMaterial({ color: 0x84FFF7, transparent: true, opacity: 0.1  })
material.wireframe = true
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

const position = mesh.geometry.attributes.position;
let vector = new THREE.Vector3();

const fontLoader = new THREE.FontLoader()

vecArray = []

for ( let i = 5, l = position.count; i < l; i ++ ){

    vector.fromBufferAttribute( position, i )
    vector.applyMatrix4( mesh.matrixWorld )
    let tempVec = vector.clone()
    vecArray.push(tempVec)
    // console.log(vecArray)
    // console.log(vector)


    // fontLoader.load(
    //     '/fonts/helvetiker_regular.typeface.json',
    //     (font) => {
    //         const textGeometry = new THREE.TextGeometry(
    //             'JavaScript',
    //             {
    //                 font: font,
    //                 size: 0.15,
    //                 height: 0.0025,
    //                 curveSegments: 8,
    //                 bevelEnabled: true,
    //                 bevelThickness: 0.03,
    //                 bevelSize: 0.02,
    //                 bevelOffset: 0,
    //                 bevelSegments: 4,
    //             }
    //         )
            
    //         const textMaterial = new THREE.MeshMatcapMaterial({ color: 0x00ff00 })

    //         const text = new THREE.Mesh(textGeometry, textMaterial)
    //         text.position.set(vector.x, vector.y, vector.z)
    //         text.lookAt(camera.position)
    
    
    //         scene.add(text)
    //     }
    // )

}

let tagArray = []
const fillTags = () => {
    const textMaterial = new THREE.MeshMatcapMaterial({ matcap: subtextTexture })
    

    fontLoader.load(
        '/fonts/helvetiker_regular.typeface.json',
        (font) => {
            const jsGeometry = new THREE.TextGeometry('JavaScript', {font: font, size: 0.15, height: 0.0025, curveSegments: 8, bevelEnabled: true,bevelThickness: 0.02,bevelSize: 0.01,bevelOffset: 0,bevelSegments: 6,})
            const htmlGeometry = new THREE.TextGeometry('HTML5', {font: font, size: 0.15, height: 0.0025, curveSegments: 8, bevelEnabled: true,bevelThickness: 0.02,bevelSize: 0.01,bevelOffset: 0,bevelSegments: 6,})
            const cssGeometry = new THREE.TextGeometry('CSS3', {font: font, size: 0.15, height: 0.0025, curveSegments: 8, bevelEnabled: true,bevelThickness: 0.02,bevelSize: 0.01,bevelOffset: 0,bevelSegments: 6,})
            const sassGeometry = new THREE.TextGeometry('SASS', {font: font, size: 0.15, height: 0.0025, curveSegments: 8, bevelEnabled: true,bevelThickness: 0.02,bevelSize: 0.01,bevelOffset: 0,bevelSegments: 6,})
            const lessGeometry = new THREE.TextGeometry('Testing', {font: font, size: 0.15, height: 0.0025, curveSegments: 8, bevelEnabled: true,bevelThickness: 0.02,bevelSize: 0.01,bevelOffset: 0,bevelSegments: 6,})
            const reactGeometry = new THREE.TextGeometry('React', {font: font, size: 0.15, height: 0.0025, curveSegments: 8, bevelEnabled: true,bevelThickness: 0.02,bevelSize: 0.01,bevelOffset: 0,bevelSegments: 6,})
            const angularGeometry = new THREE.TextGeometry('ThreeJS', {font: font, size: 0.15, height: 0.0025, curveSegments: 8, bevelEnabled: true,bevelThickness: 0.02,bevelSize: 0.01,bevelOffset: 0,bevelSegments: 6,})
            const nodeGeometry = new THREE.TextGeometry('NodeJS', {font: font, size: 0.15, height: 0.0025, curveSegments: 8, bevelEnabled: true,bevelThickness: 0.02,bevelSize: 0.01,bevelOffset: 0,bevelSegments: 6,})
            const expressGeometry = new THREE.TextGeometry('ExpressJS', {font: font, size: 0.15, height: 0.0025, curveSegments: 8, bevelEnabled: true,bevelThickness: 0.02,bevelSize: 0.01,bevelOffset: 0,bevelSegments: 6,})
            const mongoGeometry = new THREE.TextGeometry('MongoDB', {font: font, size: 0.15, height: 0.0025, curveSegments: 8, bevelEnabled: true,bevelThickness: 0.02,bevelSize: 0.01,bevelOffset: 0,bevelSegments: 6,})
            const mysqlGeometry = new THREE.TextGeometry('MySQL', {font: font, size: 0.15, height: 0.0025, curveSegments: 8, bevelEnabled: true,bevelThickness: 0.02,bevelSize: 0.01,bevelOffset: 0,bevelSegments: 6,})
            const postgresGeometry = new THREE.TextGeometry('PostgreSQL', {font: font, size: 0.15, height: 0.0025, curveSegments: 8, bevelEnabled: true,bevelThickness: 0.02,bevelSize: 0.01,bevelOffset: 0,bevelSegments: 6,})
            const javaGeometry = new THREE.TextGeometry('TypeScript', {font: font, size: 0.15, height: 0.0025, curveSegments: 8, bevelEnabled: true,bevelThickness: 0.02,bevelSize: 0.01,bevelOffset: 0,bevelSegments: 6,})
            const springGeometry = new THREE.TextGeometry('Spring Boot', {font: font, size: 0.15, height: 0.0025, curveSegments: 8, bevelEnabled: true,bevelThickness: 0.02,bevelSize: 0.01,bevelOffset: 0,bevelSegments: 6,})
            const jsonGeometry = new THREE.TextGeometry('JSON', {font: font, size: 0.15, height: 0.0025, curveSegments: 8, bevelEnabled: true,bevelThickness: 0.02,bevelSize: 0.01,bevelOffset: 0,bevelSegments: 6,})
            const responsiveGeometry = new THREE.TextGeometry('Responsive Design', {font: font, size: 0.15, height: 0.0025, curveSegments: 8, bevelEnabled: true,bevelThickness: 0.02,bevelSize: 0.01,bevelOffset: 0,bevelSegments: 6,})
            const webpackGeometry = new THREE.TextGeometry('WebPack', {font: font, size: 0.15, height: 0.0025, curveSegments: 8, bevelEnabled: true,bevelThickness: 0.02,bevelSize: 0.01,bevelOffset: 0,bevelSegments: 6,})
            const blenderGeometry = new THREE.TextGeometry('Blender', {font: font, size: 0.15, height: 0.0025, curveSegments: 8, bevelEnabled: true,bevelThickness: 0.02,bevelSize: 0.01,bevelOffset: 0,bevelSegments: 6,})
            const figmaGeometry = new THREE.TextGeometry('Figma', {font: font, size: 0.15, height: 0.0025, curveSegments: 8, bevelEnabled: true,bevelThickness: 0.02,bevelSize: 0.01,bevelOffset: 0,bevelSegments: 6,})
            const npmGeometry = new THREE.TextGeometry('npm', {font: font, size: 0.15, height: 0.0025, curveSegments: 8, bevelEnabled: true,bevelThickness: 0.02,bevelSize: 0.01,bevelOffset: 0,bevelSegments: 6,})
            const gitGeometry = new THREE.TextGeometry('git', {font: font, size: 0.15, height: 0.0025, curveSegments: 8, bevelEnabled: true,bevelThickness: 0.02,bevelSize: 0.01,bevelOffset: 0,bevelSegments: 6,})
            const githubGeometry = new THREE.TextGeometry('github', {font: font, size: 0.15, height: 0.0025, curveSegments: 8, bevelEnabled: true,bevelThickness: 0.02,bevelSize: 0.01,bevelOffset: 0,bevelSegments: 6,})
        
            const jsTag = new THREE.Mesh(jsGeometry, textMaterial)
            const htmlTag = new THREE.Mesh(htmlGeometry, textMaterial)
            const cssTag = new THREE.Mesh(cssGeometry, textMaterial)
            const sassTag = new THREE.Mesh(sassGeometry, textMaterial)
            const lessTag = new THREE.Mesh(lessGeometry, textMaterial)
            const reactTag = new THREE.Mesh(reactGeometry, textMaterial)
            const nodeTag = new THREE.Mesh(nodeGeometry, textMaterial)
            const angularTag = new THREE.Mesh(angularGeometry, textMaterial)
            const expressTag = new THREE.Mesh(expressGeometry, textMaterial)
            const mongoTag = new THREE.Mesh(mongoGeometry, textMaterial)
            const mysqlTag = new THREE.Mesh(mysqlGeometry, textMaterial)
            const postgresTag = new THREE.Mesh(postgresGeometry, textMaterial)
            const javaTag = new THREE.Mesh(javaGeometry, textMaterial)
            const springTag = new THREE.Mesh(springGeometry, textMaterial)
            const jsonTag = new THREE.Mesh(jsonGeometry, textMaterial)
            const responsiveTag = new THREE.Mesh(responsiveGeometry, textMaterial)
            const webpackTag = new THREE.Mesh(webpackGeometry, textMaterial)
            const blenderTag = new THREE.Mesh(blenderGeometry, textMaterial)
            const figmaTag = new THREE.Mesh(figmaGeometry, textMaterial)
            const npmTag = new THREE.Mesh(npmGeometry, textMaterial)
            const gitTag = new THREE.Mesh(gitGeometry, textMaterial)
            const githubTag = new THREE.Mesh(githubGeometry, textMaterial)

            tagArray = [
                jsTag, htmlTag, cssTag, sassTag, lessTag, reactTag, nodeTag, 
                angularTag, expressTag, mongoTag, mysqlTag, postgresTag, javaTag,
                springTag, jsonTag, responsiveTag, webpackTag, blenderTag,
                figmaTag, npmTag, gitTag, githubTag
            ]

            jsTag.position.set(vecArray[0].x, vecArray[0].y, vecArray[0].z)
            htmlTag.position.set(vecArray[1].x, vecArray[1].y, vecArray[1].z)
            cssTag.position.set(vecArray[2].x, vecArray[2].y, vecArray[2].z)
            sassTag.position.set(vecArray[3].x, vecArray[3].y, vecArray[3].z)
            lessTag.position.set(vecArray[4].x, vecArray[4].y, vecArray[4].z)
            reactTag.position.set(vecArray[5].x, vecArray[5].y, vecArray[5].z)
            expressTag.position.set(vecArray[8].x, vecArray[8].y, vecArray[8].z)
            mongoTag.position.set(vecArray[9].x, vecArray[9].y, vecArray[9].z)
            mysqlTag.position.set(vecArray[10].x, vecArray[10].y, vecArray[10].z)
            postgresTag.position.set(vecArray[11].x, vecArray[11].y, vecArray[11].z)
            javaTag.position.set(vecArray[12].x, vecArray[12].y, vecArray[12].z)
            springTag.position.set(vecArray[13].x, vecArray[13].y, vecArray[13].z)
            jsonTag.position.set(vecArray[14].x, vecArray[14].y, vecArray[14].z)
            responsiveTag.position.set(vecArray[15].x, vecArray[15].y, vecArray[15].z)
            webpackTag.position.set(vecArray[16].x, vecArray[16].y, vecArray[16].z)
            nodeTag.position.set(vecArray[17].x, vecArray[17].y, vecArray[17].z)
            angularTag.position.set(vecArray[19].x, vecArray[19].y, vecArray[19].z)
            blenderTag.position.set(vecArray[20].x, vecArray[20].y, vecArray[20].z)
            figmaTag.position.set(vecArray[21].x, vecArray[21].y, vecArray[21].z)
            npmTag.position.set(vecArray[22].x, vecArray[22].y, vecArray[22].z)
            gitTag.position.set(vecArray[23].x, vecArray[23].y, vecArray[23].z)
            githubTag.position.set(vecArray[25].x, vecArray[25].y, vecArray[25].z)
            

            for(let i = 0; i < tagArray.length; i++) {
                tagArray[i].geometry.center()
                scene.add(tagArray[i])
                
                //console.log(vecArray[i])
            }
        }
    )

}
fillTags()


/**
 * Sizes
 */
const sizes = {
    width: (window.innerWidth / 100) * contSize,
    height: (window.innerWidth / 100) * contSize
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 4.8
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
})
renderer.setClearColor( 0x000000, 0 );

renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)


// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Animate
 */
 const clock = new THREE.Clock()

 const tick = () =>
 {
    const elapsedTime = clock.getElapsedTime()

    if(tagArray.length > 0) {
        tagArray.forEach((tag) => {
            tag.lookAt(camera.position)
        })
    }
    // let rotSpeed = 0.002
    // camera.position.x = camera.position.x * Math.cos(rotSpeed) + camera.position.z * Math.sin(rotSpeed)
    // camera.position.z = camera.position.z * Math.cos(rotSpeed) - camera.position.x * Math.sin(rotSpeed)
   
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)

 }

tick()

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