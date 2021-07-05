const stagedTitle = document.getElementById('stagedTitle')
const stagedDesc = document.getElementById('stagedDesc')
const tagArea = document.getElementById('techTags')

let stagedLink = document.getElementById('stagedLink')
let stagedGithub = document.getElementById('stagedGithub')

const project1 = document.getElementById('project-1')
const project2 = document.getElementById('project-2')
const project3 = document.getElementById('project-3')
const project4 = document.getElementById('project-4')
const project5 = document.getElementById('project-5')
const project6 = document.getElementById('project-6')

const htmlTag = 
    `<div class='tag' id='htmlTag' style='background: rgba(96, 165, 255, 0.6)'>
        <div class='tagContent'>
            <h3>HTML5</h3>
            <img src='/icons/html-5.svg'/>
        </div>
    </div> `

const cssTag = 
    `<div class='tag' id='cssTag' style='background: rgba(255, 205, 129, 0.6)'>
        <div class='tagContent'>
            <h3>CSS3</h3>
            <img src='/icons/css-3.svg'/>
        </div>
    </div> `

const scssTag = 
    `<div class='tag' id='scssTag' style='background: rgba(255, 192, 203, 0.6)'>
        <div class='tagContent'>
            <h3>SCSS/SASS</h3>
            <img src='/icons/sass.svg'/>
        </div>
    </div> `

const jsTag = 
    `<div class='tag' id='jsTag' style='background: rgba(177, 177, 177, 0.6)'>
        <div class='tagContent'>
            <h3>JS-ES6</h3>
            <img src='/icons/javascript.svg'/>
        </div>
    </div> `

const reactTag = 
    `<div class='tag' id='reactTag' style='background: rgba(173, 216, 230, 0.6)'>
        <div class='tagContent'>
            <h3>ReactJS</h3>
            <img src='/icons/react.svg'/>
        </div>
    </div> `

const mongoTag = 
    `<div class='tag' id='mongoTag' style='background: rgba(200, 255, 195, 0.6)'>
        <div class='tagContent'>
            <h3>MongoDB</h3>
            <img src='/icons/mongodb.svg'/>
        </div>
    </div> `

const sqlTag = 
    `<div class='tag' id='sqlTag' style='background: rgba(255, 239, 209, 0.6)'> 
        <div class='tagContent'>
            <h3>MySQL</h3>
            <img src='/icons/mysql.svg'/>
        </div>
    </div> `

const postgresTag = 
    `<div class='tag' id='postgresTag' style='background: rgba(218, 209, 255, 0.6)'>
        <div class='tagContent'>
            <h3>PostgreSQL</h3>
            <img src='/icons/postgresql.svg'/>
        </div>
    </div> `

const nodeTag = 
    `<div class='tag' id='nodeTag' style='background: rgba(87, 87, 87, 0.6)'>
        <div class='tagContent'>
            <h3>NodeJS</h3>
            <img src='/icons/node-js.svg'/>
        </div>
    </div> `

const expressTag = 
    `<div class='tag' id='expressTag' style='background: rgba(200, 200, 200, 0.6)'>
        <div class='tagContent'>
            <h3>ExpressJS</h3>
            <img src='/icons/express.svg'/>
        </div>
    </div> `

const springTag = 
    `<div class='tag' id='springTag' style='background: rgba(224, 255, 248, 0.6)'>
        <div class='tagContent'>
            <h3>Java Spring Boot</h3>
            <img src='/icons/spring.svg'/>
        </div
    </div> `

const webpackTag = 
    `<div class='tag' id='webpackTag' style='background: rgba(220,220,220,0.6)'>
        <div class='tagContent'>
            <h3>Webpack</h3>
            <img src='/icons/webpack.svg'/>
        </div
    </div> `

window.addEventListener('load', () => {
    tagArea.innerHTML = `${reactTag} ${scssTag} ${nodeTag} ${expressTag} ${mongoTag}`
})

project1.addEventListener('click', () => {
    project1.classList.add('activeProject')
    project2.classList.remove('activeProject')
    project3.classList.remove('activeProject')
    project4.classList.remove('activeProject')
    project5.classList.remove('activeProject')
    project6.classList.remove('activeProject')

    stagedLink.href = "https://adoring-pasteur-26cb54.netlify.app/"

    stagedGithub.href = "https://github.com/mattcod3s/cosmocoinPWA"

    changeProject()
})

project2.addEventListener('click', () => {
    project2.classList.add('activeProject')
    project1.classList.remove('activeProject')
    project3.classList.remove('activeProject')
    project4.classList.remove('activeProject')
    project5.classList.remove('activeProject')
    project6.classList.remove('activeProject')

    stagedLink.href = "https://suspicious-visvesvaraya-06e9fd.netlify.app/"

    stagedGithub.href = "https://github.com/mattcod3s/FinalBreffniWebsite"

    changeProject()
})

project3.addEventListener('click', () => {
    project3.classList.add('activeProject')
    project2.classList.remove('activeProject')
    project1.classList.remove('activeProject')
    project4.classList.remove('activeProject')
    project5.classList.remove('activeProject')
    project6.classList.remove('activeProject')

    stagedLink.href = "https://practical-hodgkin-456093.netlify.app/"

    stagedGithub.href = "https://github.com/mattcod3s/mountaineerFullstack"

    changeProject()
})

project4.addEventListener('click', () => {
    project4.classList.add('activeProject')
    project2.classList.remove('activeProject')
    project3.classList.remove('activeProject')
    project1.classList.remove('activeProject')
    project5.classList.remove('activeProject')
    project6.classList.remove('activeProject')

    stagedLink.href = "https://www.kostek.pl/"

    stagedGithub.href = "https://github.com/mattcod3s/kostekpl"

    changeProject()
})

project5.addEventListener('click', () => {
    project5.classList.add('activeProject')
    project2.classList.remove('activeProject')
    project3.classList.remove('activeProject')
    project4.classList.remove('activeProject')
    project1.classList.remove('activeProject')
    project6.classList.remove('activeProject')

    stagedLink.href = "https://hopeful-ritchie-338cf0.netlify.app/"

    stagedGithub.href = "https://github.com/mattcod3s/disneyplus-clone-react"

    changeProject()
})

project6.addEventListener('click', () => {
    project6.classList.add('activeProject')
    project2.classList.remove('activeProject')
    project3.classList.remove('activeProject')
    project4.classList.remove('activeProject')
    project5.classList.remove('activeProject')
    project1.classList.remove('activeProject')

    stagedLink.href = "#"

    stagedGithub = "https://github.com/mattcod3s/devApp"
    

    changeProject()
})

const changeProject = () => {
    const stagedImage = document.getElementById('stagedImage')
    for(let i = 1; i <= 6; i++) {
        let projectString = `project-${i}`
        let tempProject = document.getElementById(projectString)
        if(tempProject.classList.contains('activeProject')) {
            switch (projectString) {
                case 'project-1':
                    stagedImage.style.backgroundImage = "url('/assets/cosmocoin.png')"
                    stagedTitle.textContent = 'Cosmocoin Cryptocurrency Watchlist'
                    stagedDesc.textContent = 
                    'Full Stack Cryptocurrency Tracker Progressive-Web-App (PWA), built with React.js, Node.js/Express.js & MongoDB. Login & Reg included, along with OAuth2 Google log-in. Users can choose cryptocurrencies to include in their watchlist. The app uses the CoinMarketCap API to fetch and present users with real-time data. Chart.js implemented to create accurate price charts. Uses localStorage.'

                    tagArea.innerHTML = `${reactTag} ${scssTag} ${nodeTag} ${expressTag} ${mongoTag}`

                    break;
                case 'project-2':
                    stagedImage.style.backgroundImage = "url('/assets/breffniInn.png')"
                    stagedTitle.textContent = 'The Breffni Inn'
                    stagedDesc.textContent = 
                    "A landing page for a restaurant business, built with HTML, CSS and Vanilla JS."

                    tagArea.innerHTML = `${htmlTag} ${cssTag} ${jsTag}`

                    break;
                case 'project-3':
                    stagedImage.style.backgroundImage = "url('/assets/mountaineerV2.png')"
                    stagedTitle.textContent = 'Mountaineer V2.0'
                    stagedDesc.textContent = 
                    "Full Stack Mountaineering Tracker for recording achievemnts and planning adventures. Built with HTML, CSS, Vanilla JS, Three.js, Java Spring Boot & mySQL. Login and Registration functionality included. Using a 3rd Party API to fetch real-time weather data of a given mountains co-ordinates. Chart.js & progressBar.js implemented to create progress-tracking charts."

                    tagArea.innerHTML = 
                    ` ${htmlTag} ${scssTag} ${jsTag} ${sqlTag} ${postgresTag} ${springTag}`     

                    break;
                case 'project-4':
                    stagedImage.style.backgroundImage = "url('/assets/kostekpl.png')"
                    stagedTitle.textContent = 'Kostek PL'
                    stagedDesc.textContent = 
                    "Brochure website for Holiday Homes, built with React.js. Using React-Router for navigation & React Redux for state management. Contact page includes a functional email form created with Email.js which allows users to contact owners."

                    tagArea.innerHTML = `${reactTag} ${scssTag}`

                    break;
                case 'project-5':
                    stagedImage.style.backgroundImage = "url('/assets/disneyPlus.png')"
                    stagedTitle.textContent = 'Disney +'
                    stagedDesc.textContent = 
                    "A clone of the Disney Plus Streaming App, using 3rd Party API to fetch movie data. Conveys my ability to create products in the PSD -> HTML/CSS workflow. Used React-Context-API for state management."

                    tagArea.innerHTML = `${reactTag} ${cssTag}`

                    break;
                case 'project-6':
                    stagedImage.style.backgroundImage = "url('/assets/mountaineerV1.png')"
                    stagedTitle.textContent = 'Mountaineer V1.0'
                    stagedDesc.textContent = 
                    "This Portfolio website, created using HTML, CSS, JS and Three.JS"

                    tagArea.innerHTML = `${htmlTag} ${scssTag} ${jsTag}`

                    break;
                default:
                    stagedImage.style.backgroundImage = "url('/assets/cosmocoin.png')"
                    stagedTitle.textContent = 'Cosmocoin Cryptocurrency Watchlist'
                    stagedDesc.textContent = 
                    'Full Stack Cryptocurrency Tracker, built with React.js, Node.js/Express.js & MongoDB. Login and Registration functionality included, along with OAuth2 Google log-in. Users can choose cryptocurrencies to include in their watchlist. The app uses the CoinMarketCap API to fetch and present users with real-time data. Chart.js implemented to create accurate price charts.'
                    break;
            }
            
        }
    }

}