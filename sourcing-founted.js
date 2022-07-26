const mainBox = document.querySelector('.motors-container');

const motors = []
motors.push({
    name: 'Rober-Rubson',
    price: 55500,
    image: 'https://images.pexels.com/photos/2611686/pexels-photo-2611686.jpeg?auto=compress&cs=tinysrgb&w=300',
});
motors.push({
    name: 'Marilyn-Hub',
    price: 66600,
    image: 'https://images.pexels.com/photos/1715184/pexels-photo-1715184.jpeg?auto=compress&cs=tinysrgb&w=300',
});

function loadScreen(array) {

    for ( motor of motors) {
        const motorBoard = document.createElement('div');
        const motorImage = document.createElement('img');

        motorBoard.classList.add('bulb-card');
        motorImage.setAttribute('src', motor.image);
        motorBoard.appendChild(motorImage);
        mainBox.appendChild(motorBoard);
    }
}

loadScreen(motors)