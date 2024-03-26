let mode = 'light';

document.querySelector('#toggle').addEventListener('click', () => {
    if (mode == 'light') {
        for (let e of document.querySelectorAll('.dark')) {
            e.classList.add('on')
        }
        mode = 'dark';
    } else {
        for (let e of document.querySelectorAll('.dark')) {
            e.classList.remove('on')
        }
        mode = 'light'
    }
})