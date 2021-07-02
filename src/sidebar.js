const copyIcon = document.getElementById('emailCircle')
const emailAddress = document.getElementById('emailAddressSidebar')
const toolTip = document.getElementById('copyTootTip')
const checkIcon = document.getElementById('checkIcon')
const sideBarOptions = document.querySelectorAll('.sidebarOption')
const sideBarTexts = document.querySelectorAll('.sidebarText')

copyIcon.addEventListener('click', () => {
    let copyText = emailAddress.textContent
    const el = document.createElement('textarea')
    el.value = copyText
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el)
    el.select()
    el.setSelectionRange(0, 99999)

    document.execCommand("copy")
    document.body.removeChild(el)

    toolTip.textContent = 'Copied!'
    toolTip.style.background = 'rgb(56, 218, 91)'
    toolTip.style.color = '#333'
    checkIcon.style.display = 'flex'

})

copyIcon.addEventListener('mouseleave', () => {
    toolTip.textContent = 'Copy to Clipboard'
    toolTip.style.background = '#333'
    toolTip.style.color = '#fff'
    checkIcon.style.display = 'none'
})

for(let i = 0; i < sideBarOptions.length; i++) {
    sideBarOptions[i].addEventListener('mouseover', () => {
        
    })
}

for(let i = 0; i < sideBarOptions.length; i++) {
    sideBarOptions[i].addEventListener('mouseleave', () => {
       
    })
}