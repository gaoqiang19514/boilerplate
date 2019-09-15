export default {
  get: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('tom')
      }, 1000)
    })
  }
}