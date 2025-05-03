const btn = document.getElementById('btn');
const wrapper = document.getElementById('wrapper');
const close = document.getElementById('close');

btn.addEventListener('click', () => {
    wrapper.style.display = 'block';
});

close.addEventListener('click', () => {
    wrapper.style.display = 'none';
});

wrapper.addEventListener('click', (e) => {
    if (e.target.id = 'wrapper') {
        wrapper.style.display = 'none';
    }
});

