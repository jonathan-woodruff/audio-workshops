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

const displaySelected = event => {
    const selectedWorkshop = event.currentTarget;
    if (!selectedWorkshop.classList.contains('border-pink-300')) { //if the workshop selected is not the one that is already selected
        //set the currently selected workshop to display as unselected
        for (let i = 0; i < workshops.length; i++) {
            if (workshops[i].classList.contains('border-pink-300')) {
                workshops[i].classList.replace('border-pink-300','border-pink-50');
                for (const child of workshops[i].children) {
                    if (child.className.includes('workshopaudio')) {
                        child.classList.replace('flex','hidden');
                    } else if (child.className.includes('cheatsheet')) {
                        child.classList.replace('block','hidden');
                    }
                }
            }
        }
        //set the selected workshop to display as selected
        selectedWorkshop.classList.replace('border-pink-50','border-pink-300');
        for (const child of selectedWorkshop.children) {
            if (child.className.includes('workshopaudio')) {
                child.classList.replace('hidden','flex');
            } else if (child.className.includes('cheatsheet')) {
                child.classList.replace('hidden', 'block');
            }
        }
    }
};

for (let i = 0; i < workshops.length; i++) {
    workshops[i].addEventListener('click', displaySelected);
    workshops[i].addEventListener('focus-within', displaySelected);
};