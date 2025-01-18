document.getElementById('fetchMenu').addEventListener('click', fetchMenu);

async function fetchMenu() {
    const url = 'https://tokokosmara.kosmara-ae8.workers.dev';
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayMenu(data.menu);
    } catch (error) {
        console.error('Error fetching menu:', error);
        document.getElementById('menuDetails').innerText = 'Gagal mengambil data menu.';
    }
}

function displayMenu(menu) {
    const menuDetails = document.getElementById('menuDetails');
    menuDetails.innerHTML = ''; // Clear previous menu details

    menu.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerText = `${item.nama} - Harga: Rp${item.harga}`;
        menuDetails.appendChild(itemDiv);
    });
}
