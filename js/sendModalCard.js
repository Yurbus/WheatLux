document.addEventListener('DOMContentLoaded', function() {
    const modal = document.querySelector('.modal');
    const showModalButtons = document.querySelectorAll('.show-modal-btn');
    const closeButton = document.querySelector('.close');
    const productDetailsContainer = document.querySelector('.product-details');

    // Функция для отображения модального окна и подстановки данных о товаре
    function showModal(event) {
        const productId = event.currentTarget.parentNode.dataset.id; // Получаем ID товара из атрибута data-id
        const productInfo = getProductInfoById(productId); // Здесь можете получить информацию о товаре из вашей базы данных или объекта товаров

        // Генерируем HTML с информацией о товаре
        const productHTML = `
            <h3>${productInfo.name}</h3>
            <p>${productInfo.description}</p>
            <div class="card__title">${productInfo.name}</div>
			<div class="card__price" data-price="500">${productInfo.price}</div>
            <div class="prices__block">
            <ul class="card__prices">
                <li data-counts="6" data-prices="480"><span>${productInfo.optPrice}</span></li>
                <li data-counts="10" data-prices="460">${productInfo.countProduct}</li>
            </ul>
            <ul class="card__prices">
                <li data-counts="6" data-prices="480"><span>${productInfo.optPrice1}</span></li>
                <li data-counts="10" data-prices="460">${productInfo.countProduct1}</li>
            </ul>
            <ul class="card__prices">
                <li data-counts="6" data-prices="480"><span>${productInfo.optPrice2}</span></li>
                <li data-counts="10" data-prices="460">${productInfo.countProduct2}</li>
            </ul>
        </div>
        `;

        // Вставляем данные о товаре в модальное окно
        productDetailsContainer.innerHTML = productHTML;

        modal.style.display = 'block';
    }

    function hideModal() {
        modal.style.display = 'none';
    }

    function getProductInfoById(id) {
        // Здесь можно реализовать логику получения информации о товаре по его ID из вашей базы данных или объекта товаров
        // Ниже представлен пример объекта с информацией о товарах (замените его на свою логику)
        const products = {
            1: {
                name: 'Віскі Chivas Regal, 2л.',
                price: '285 ₴',
                // Другие данные о товаре 1
            },
            2: {
                name: 'Товар 2',
                description: 'Описание товара 2',
                // Другие данные о товаре 2
            },
            3:  {
                name: 'Товар 3',
                description: 'Описание товара 3',
                // Другие данные о товаре 3
            },
            
            // Данные о других товарах
        };

        return products[id];
    }

    showModalButtons.forEach(function(button) {
        button.addEventListener('click', showModal);
    });

    closeButton.addEventListener('click', hideModal);

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            hideModal();
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            hideModal();
        }
    });
});