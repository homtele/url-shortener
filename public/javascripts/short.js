document.querySelector('#copy-button').addEventListener('click', () => {
  navigator.clipboard.writeText(document.querySelector('#short').textContent).then(() => {
    window.alert('copied')
  }).catch(err => {
    console.error(err)
  })
})
