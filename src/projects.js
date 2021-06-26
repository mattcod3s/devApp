




const project1 = document.getElementById('project-1')
const project2 = document.getElementById('project-2')
const project3 = document.getElementById('project-3')
const project4 = document.getElementById('project-4')
const project5 = document.getElementById('project-5')
const project6 = document.getElementById('project-6')

let currentProject = 1

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
                    break;
                case 'project-2':
                    stagedImage.style.backgroundImage = "url('/assets/breffniInn.png')"
                    break;
                case 'project-3':
                    stagedImage.style.backgroundImage = "url('/assets/mountaineerV2.png')"
                    break;
                case 'project-4':
                    stagedImage.style.backgroundImage = "url('/assets/kostekpl.png')"
                    break;
                case 'project-5':
                    stagedImage.style.backgroundImage = "url('/assets/disneyPlus.png')"
                    break;
                case 'project-6':
                    stagedImage.style.backgroundImage = "url('/assets/mountaineerV1.png')"
                    break;
                default:
                    stagedImage.style.backgroundImage = "url('/assets/cosmocoin.png')"
                    break;
            }
            
        }
    }

}