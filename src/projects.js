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
    for(let i = 1; i <= 6; i++) {
        let projectString = `project-${i}`
        let tempProject = document.getElementById(projectString)
        if(tempProject.classList.contains('activeProject')) {
            console.log(tempProject)
        }
    }
}