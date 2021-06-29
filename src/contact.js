import emailjs from 'emailjs-com'
emailjs.init("user_8BGlNtwfcxRLGOmyLjsFH")

const nameInput = document.getElementById('nameInput')
const emailInput = document.getElementById('emailInput')
const messageInput = document.getElementById('mesInput')

const nameError = document.getElementById('nameError')
const emailError = document.getElementById('emailError')
const messageError = document.getElementById('messageError')


let templateParams = {
    name: '',
    email: '',
    message: ''
}

nameInput.addEventListener('keydown', () => {
    if(validateName(nameInput.value)) {
        templateParams.name = nameInput.value
        nameError.style.opacity = '0'
    } else {
        nameError.style.opacity = '1'
    }
})
nameInput.addEventListener('keypress', () => {
    if(validateName(nameInput.value)) {
        templateParams.name = nameInput.value
        nameError.style.opacity = '0'
    } else {
        nameError.style.opacity = '1'
    }
})
nameInput.addEventListener('keyup', () => {
    if(validateName(nameInput.value)) {
        templateParams.name = nameInput.value
        nameError.style.opacity = '0'
    } else {
        nameError.style.opacity = '1'
    }
})

emailInput.addEventListener('keydown', () => {
    if(validateEmail(emailInput.value)) {
        templateParams.email = emailInput.value
        emailError.style.opacity = '0'
    } else {
        emailError.style.opacity = '1'
    }
})
emailInput.addEventListener('keypress', () => {
    if(validateEmail(emailInput.value)) {
        templateParams.email = emailInput.value
        emailError.style.opacity = '0'
    } else {
        emailError.style.opacity = '1'
    }
})
emailInput.addEventListener('keyup', () => {
    if(validateEmail(emailInput.value)) {
        templateParams.email = emailInput.value
        emailError.style.opacity = '0'
    } else {
        emailError.style.opacity = '1'
    }
})

messageInput.addEventListener('keydown', () => {
    if(validateMessage(messageInput.value)) {
        templateParams.message = messageInput.value
        messageError.style.opacity = '0'
    } else {
        messageError.style.opacity = '1'
    }
    
})
messageInput.addEventListener('keypress', () => {
   if(validateMessage(messageInput.value)) {
        templateParams.message = messageInput.value
        messageError.style.opacity = '0'
    } else {
        messageError.style.opacity = '1'
    }
})
messageInput.addEventListener('keyup', () => {
   if(validateMessage(messageInput.value)) {
        templateParams.message = messageInput.value
        messageError.style.opacity = '0'
    } else {
        messageError.style.opacity = '1'
    }
})

const validateEmail = (email) => {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}

const validateName = (name) => {
    if(name.length > 0) {
        return true
    } else {
        return false
    }
}
    
const validateMessage = (message) => {
    if(message.length > 0) {
        return true
    } else {
        return false
    }
}
    

const submitBtn = document.getElementById('submitBtn')
const contactForm = document.getElementById('contact_form')

submitBtn.addEventListener('click', () => {
    if(
        validateEmail(templateParams.email) && 
        validateName(templateParams.name) && 
        validateMessage(templateParams.message)) {

            emailjs.send('service_mqlhlam', 'template_yjwrfj8', templateParams)
            .then(function(response) {
                // console.log('SUCCESS!', response.status, response.text);
             }, function(err) {
                // console.log('FAILED...', err);
             });

    } else {
        console.log('not ready')
    }
})