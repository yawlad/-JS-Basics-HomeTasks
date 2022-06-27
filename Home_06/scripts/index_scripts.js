const cLink = document.querySelector('.c_link');
const mLink = document.querySelector('.m_link');


cLink.addEventListener('click', () => localStorage.setItem('category', 'computer'));
mLink.addEventListener('click', () => localStorage.setItem('category', 'smartphone'));
