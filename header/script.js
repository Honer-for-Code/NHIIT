const togglebtn = document.querySelector('.navigation-dropdown-menu')
const togglebtnicon = document.querySelector('.navigation-dropdown-menu i')
const dropdownManu = document.querySelector('#ul')

togglebtn.onclick = function () {
    dropdownManu.classList.toggle('open')
    const isopen = dropdownManu.classList.contains('open')

    togglebtnicon.classList = isopen
        ? 'bx bx-x'
        : 'bx bx-menu'
}


const toggleon = document.querySelector('.on')
const dropdown = document.querySelector('#ulul')
toggleon.onclick = function () {
    dropdown.classList.toggle('off')

}