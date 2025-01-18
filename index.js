async function fetchMenu() {
    try {
        const response = await fetch('https://tokokosmara.kosmara-ae8.workers.dev');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayMenu(data.menu);
    } catch (error) {
        console.error('Error fetching menu:', error);
    }
}

function displayMenu(menu) {
    const menuContainer = document.getElementById('menu');
    menu.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.innerHTML = `<strong>${item.nama}</strong>: Rp${item.harga}`;
        menuContainer.appendChild(menuItem);
    });
}

document.addEventListener('DOMContentLoaded', fetchMenu);
