const copyIcon = document.getElementById('emailCircle')
const emailAddress = document.getElementById('emailAddressSidebar')
copyIcon.addEventListener('click', () => {
    let copyText = emailAddress.textContent
    const el = document.createElement('textarea')
    el.value = copyText
    document.body.appendChild(el)
    el.select()
    el.setSelectionRange(0, 99999)

    document.execCommand("copy")
    document.body.removeChild(el)

})