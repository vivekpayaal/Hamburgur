// const btn = document.querySelector('.btns')
// const header = document.querySelector('.header')
// const toggle = () => {
//   header.classList.toggle('active')
// }

// btn.addEventListener('click', () => {
//   toggle()
// })
const btn = document.querySelector('.btns')
const navlist = document.querySelector('.navlist')
const toggle = () => {
  navlist.parentElement.classList.toggle('active')
}

btn.addEventListener('click', () => {
  toggle()
})

