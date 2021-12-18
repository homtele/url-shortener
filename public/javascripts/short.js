const copyButton = document.querySelector('#copy-button')

copyButton.addEventListener('mousedown', () => {
  navigator.clipboard.writeText(document.querySelector('#short').textContent).then(() => new bootstrap.Popover(copyButton)).catch(err => {
    console.error(err)
  })
})
