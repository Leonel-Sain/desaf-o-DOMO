// Cursor personalizable 
const customCursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
    customCursor.style.left = e.pageX + 'px';
    customCursor.style.top = e.pageY + 'px';
});

const links = document.querySelectorAll('a');

links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        customCursor.style.transform = 'scale(2)';
        customCursor.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
    });

    link.addEventListener('mouseleave', () => {
        customCursor.style.transform = 'scale(1)';
        customCursor.style.backgroundColor = 'rgba(0, 0, 0, 1)';
    });
});

//Animacion de cohete y rayo.

window.addEventListener('load', () => {
    const rocket = document.querySelector('.rocket');
    rocket.style.transition = 'transform 1s ease-in-out, opacity 0.8s ease-in-out';
    rocket.style.opacity = '0'; 

    setTimeout(() => {
        rocket.style.opacity = '1'; 
        rocket.style.transform = 'translateY(50px)'; 
    }, 500);

    setTimeout(() => {
        rocket.style.transform = 'translateY(0)'; 
    }, 1000);

    const ray = document.querySelector('.ray');
    ray.style.transition = 'transform 1s ease-out';
    ray.style.transform = 'translateY(-800px)'; 
    setTimeout(() => {
        ray.style.transform = 'translateY(0)'; 
    }, 1000); 
});
