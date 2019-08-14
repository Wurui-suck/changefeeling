let $button = document.querySelector('#wrapper>button')
let happy = document.querySelector('#happy')
let block1 = document.querySelector('#block1')
let sad = document.querySelector('#sad')
let block2 = document.querySelector('#block2')
let change = true
let feeling = document.querySelector('#feeling')
$button.addEventListener('click', (e) => {
    if (change === true) {
        block2.style.display = 'block'
        sad.style.display = 'block'
        block1.style.display = 'none'
        happy.style.display = 'none'
        change = false
        feeling.textContent = 'sad'
    } else {
        block2.style.display = 'none'
        sad.style.display = 'none'
        block1.style.display = 'block'
        happy.style.display = 'block'
        feeling.textContent = 'happy'
        change = true
    }
})