function getRandom (size, pool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789') {
  let random = ''
  while (size > 0) {
    random += pool[Math.floor(Math.random() * pool.length)]
    size--
  }
  return random
}

module.exports = getRandom
