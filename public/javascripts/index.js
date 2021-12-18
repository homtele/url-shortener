const fullForm = document.querySelector('#full-form')

fullForm.addEventListener('submit', event => {
  if (!fullForm.checkValidity()) {
    event.preventDefault()
    event.stopPropagation()
  }
  fullForm.classList.add('was-validated')
})
