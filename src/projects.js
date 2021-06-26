const stagedTitle = document.getElementById('stagedTitle')
const stagedDesc = document.getElementById('stagedDesc')
const tagArea = document.getElementById('techTags')

const project1 = document.getElementById('project-1')
const project2 = document.getElementById('project-2')
const project3 = document.getElementById('project-3')
const project4 = document.getElementById('project-4')
const project5 = document.getElementById('project-5')
const project6 = document.getElementById('project-6')

const htmlTag = 
    `<div class='tag' id='htmlTag' style='background: blue'>
        <h3>HTML5</h3>
    </div> `

const cssTag = 
    `<div class='tag' id='cssTag' style='background: orange'>
        <h3>CSS3</h3>
    </div> `

const scssTag = 
    `<div class='tag' id='scssTag' style='background: pink'>
        <h3>SCSS/SASS</h3>
    </div> `

const jsTag = 
    `<div class='tag' id='jsTag' style='background: yellow'>
        <h3>JS-ES6</h3>
    </div> `

const reactTag = 
    `<div class='tag' id='reactTag' style='background: lightBlue'>
        <h3>ReactJS</h3>
    </div> `

const mongoTag = 
    `<div class='tag' id='mongoTag' style='background: green'>
        <h3>MongoDB</h3>
    </div> `

const sqlTag = 
    `<div class='tag' id='sqlTag' style='background: red'> 
        <h3>MySQL</h3>
    </div> `

const postgresTag = 
    `<div class='tag' id='postgresTag' style='background: darkRed'>
        <h3>PostgreSQL</h3>
    </div> `

const nodeTag = 
    `<div class='tag' id='nodeTag' style='background: lightGreen'>
        <h3>NodeJS</h3>
    </div> `

const expressTag = 
    `<div class='tag' id='expressTag' style='background: rgb(200, 200, 200)'>
        <h3>ExpressJS</h3>
    </div> `

const springTag = 
    `<div class='tag' id='springTag' style='background: darkGreen'>
        <h3>Java Spring Boot</h3>
    </div> `

project1.addEventListener('click', () => {
    project1.classList.add('activeProject')
    project2.classList.remove('activeProject')
    project3.classList.remove('activeProject')
    project4.classList.remove('activeProject')
    project5.classList.remove('activeProject')
    project6.classList.remove('activeProject')

    changeProject()
})

project2.addEventListener('click', () => {
    project2.classList.add('activeProject')
    project1.classList.remove('activeProject')
    project3.classList.remove('activeProject')
    project4.classList.remove('activeProject')
    project5.classList.remove('activeProject')
    project6.classList.remove('activeProject')

    changeProject()
})

project3.addEventListener('click', () => {
    project3.classList.add('activeProject')
    project2.classList.remove('activeProject')
    project1.classList.remove('activeProject')
    project4.classList.remove('activeProject')
    project5.classList.remove('activeProject')
    project6.classList.remove('activeProject')

    changeProject()
})

project4.addEventListener('click', () => {
    project4.classList.add('activeProject')
    project2.classList.remove('activeProject')
    project3.classList.remove('activeProject')
    project1.classList.remove('activeProject')
    project5.classList.remove('activeProject')
    project6.classList.remove('activeProject')

    changeProject()
})

project5.addEventListener('click', () => {
    project5.classList.add('activeProject')
    project2.classList.remove('activeProject')
    project3.classList.remove('activeProject')
    project4.classList.remove('activeProject')
    project1.classList.remove('activeProject')
    project6.classList.remove('activeProject')

    changeProject()
})

project6.addEventListener('click', () => {
    project6.classList.add('activeProject')
    project2.classList.remove('activeProject')
    project3.classList.remove('activeProject')
    project4.classList.remove('activeProject')
    project5.classList.remove('activeProject')
    project1.classList.remove('activeProject')

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
                    'Full Stack Cryptocurrency Tracker, built with React.js, Node.js/Express.js & MongoDB. Login and Registration functionality included, along with OAuth2 Google log-in. Users can choose cryptocurrencies to include in their watchlist. The app uses the CoinMarketCap API to fetch and present users with real-time data. Chart.js implemented to create accurate price charts.'

                    tagArea.innerHTML = `${reactTag} ${scssTag} ${nodeTag} ${expressTag} ${mongoTag}`

                    break;
                case 'project-2':
                    stagedImage.style.backgroundImage = "url('/assets/breffniInn.png')"
                    stagedTitle.textContent = 'The Breffni Inn'
                    stagedDesc.textContent = 
                    "A landing page for a restaurant business, built with HTML, CSS and Vanilla JS."

                    tagArea.innerHTML = `${htmlTag} ${cssTag} ${scssTag} ${jsTag}`

                    break;
                case 'project-3':
                    stagedImage.style.backgroundImage = "url('/assets/mountaineerV2.png')"
                    stagedTitle.textContent = 'Mountaineer V2.0'
                    stagedDesc.textContent = 
                    "Full Stack Mountaineering Tracker for recording achievemnts and planning adventures. Built with HTML, CSS, Vanilla JS, Three.js, Java Spring Boot & mySQL. Login and Registration functionality included. Using a 3rd Party API to fetch real-time weather data of a given mountains co-ordinates. Chart.js & progressBar.js implemented to create progress-tracking charts."

                    tagArea.innerHTML = `${htmlTag} ${cssTag} ${scssTag} ${jsTag} ${sqlTag} ${postgresTag} ${springTag}`

                    break;
                case 'project-4':
                    stagedImage.style.backgroundImage = "url('/assets/kostekpl.png')"
                    stagedTitle.textContent = 'Kostek PL'
                    stagedDesc.textContent = 
                    "Brochure website for Holiday Homes, built with React.js. Using React-Router for navigation & React Redux for state management. Contact page includes a functional email form created with Email.js which allows users to contact owners."

                    tagArea.innerHTML = `${reactTag} ${cssTag} ${scssTag} `

                    break;
                case 'project-5':
                    stagedImage.style.backgroundImage = "url('/assets/disneyPlus.png')"
                    stagedTitle.textContent = 'Disney +'
                    stagedDesc.textContent = 
                    "A clone of the Disney Plus Streaming App, using 3rd Party API to fetch movie data. Conveys my ability to create products in the PSD -> HTML/CSS workflow. Used React-Context-API for state management."

                    tagArea.innerHTML = `${reactTag} ${cssTag} ${scssTag}`

                    break;
                case 'project-6':
                    stagedImage.style.backgroundImage = "url('/assets/mountaineerV1.png')"
                    stagedTitle.textContent = 'Mountaineer V1.0'
                    stagedDesc.textContent = 
                    "Front-end Mountaineering Progressive-Web-App (PWA) for tracking conquered mountains and planned adventures. Built with React.js and MaterialUI and uses Chart.js, React-Context-API & 3rd Party Weather API. Implements the use of Local Storage to keep track of Trips."

                    tagArea.innerHTML = `${reactTag} ${cssTag} ${scssTag}`

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