/* handshake animation
const shakeButton = document.getElementById('shake-button');

const showHandshake = () => {
    document.getElementById('handshake').style.display = 'block';
    document.getElementById('shake-button').style.display = 'none';
    let greeting = document.getElementById('greeting');
    greeting.style.display = 'block';
    greeting.style.color = 'rgb(86,84,84)';
};

shakeButton.addEventListener('click',showHandshake);
*/

const workshops = document.getElementsByClassName('workshop');

const startWorkshop = event => {
    const workshop = event.currentTarget;
    workshop.classList.replace('border-pink-50','border-pink-300');
    for (const child of workshop.children) {
        if (child.className.includes('workshopaudio')) {
            child.classList.replace('hidden','flex');
        } else if (child.className.includes('cheatsheet')) {
            child.classList.replace('hidden', 'block');
        }
    }
};

for (let i = 0; i < workshops.length; i++) {
    workshops[i].addEventListener('click', startWorkshop);
};