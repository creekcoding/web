
const handleSubmit = event => {
    event.preventDefault()
    const { target: { email: { value: email }, message: { value: message } } } = event

    const data = JSON.stringify({ email, message })
    console.log(data)
}

const app = document.querySelector('#app')

const template = `
<form name='contactMe'>
    <input name='email' placeholder='Enter email' type='email' />
    <textarea placeholder='Message...' name='message'></textarea>
    <input name='submit' type='submit' />
</form>
`
app.innerHTML = template
document.forms.contactMe.addEventListener('submit', handleSubmit)