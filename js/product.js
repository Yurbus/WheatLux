     // Находим все товары
     const products = document.querySelectorAll('.product');

     // Находим модальную форму и кнопку для закрытия модального окна
     const modal = document.getElementById('myModal');
     const closeBtn = modal.querySelector('.close');

     // Обработчик клика на кнопке "Подробнее" для каждого товара
     products.forEach(product => {
         const viewDetailsBtn = product.querySelector('.view-details');
         viewDetailsBtn.addEventListener('click', () => {
             // Получаем данные о товаре
            //  const productId = product.getAttribute('data-product-id');
             const productTitle = product.querySelector('h3').innerText;
             const productPrice = product.querySelector('p').innerText;
             const productImg = product.querySelector('img').getAttribute('src');

             // Передаем данные в модальную форму
             const modalProductDetails = modal.querySelector('#modal-product-details');
             modalProductDetails.innerHTML = `
            <form action="" id="form" method="POST" class="modal-form__body" >
                <div class="form__wrapper-img">
                    <img src="${productImg}" style="max-width: 168px;">
                    <ul class="form__item form__item-check">
                        <li>
                            <input type="checkbox" id="productTitle" name="Name" checked style="display: none;" />
                            <label for="scales">${productTitle}</label>
                        </li>
                        <li>    
                            <input type="checkbox" id="productPrice" name="Price" checked style="display: none;" />
                            <label class="productPrice" for="scales" >${productPrice}</label>
                        </li>
                    </ul>
                </div>
                <div class="form__wrapper">
                    <div class="form__item">
                        <input type="text" name="name" class="form__input input-form" placeholder="Ім'я*:" required>
                    </div>
                    <div class="form__item">
                        <input type="tel" name="phone" class="form__input input-form" placeholder="Телефон*:" required>
                    </div>
                </div>
                <button type="submit" class="modal_submit">Замовити</button>
            </form>
            `;

             // Показываем модальное окно
             modal.style.display = 'block';
         });
     });

     // Закрываем модальное окно при клике на кнопку закрытия
     closeBtn.addEventListener('click', () => {
         modal.style.display = 'none';
     });

     // Закрываем модальное окно при клике за его пределами
     window.addEventListener('click', event => {
         if (event.target === modal) {
             modal.style.display = 'none';
         }
     });





    