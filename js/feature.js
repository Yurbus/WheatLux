(() => {
  const Items = [
    {
      id: '1',
      img: 'img/dub.jpg',
      title: 'Дуб',
      descr: '(Рубаний)',
      price: '2600 грн/складометр',
      text: 'Щільно упакований',
    },
    {
      id: '2',
      img: 'img/akaciya.jpg',
      title: 'Акація',
      descr: '(Рубана)',
      price: '2600 грн/складометр',
      text: 'Щільно упакований',
    },
    {
      id: '3',
      img: 'img/sosna.jpg',
      title: 'Сосна',
      descr: '(Рубана)',
      price: '2600 грн/складометр',
      text: 'Щільно упакований',
    },
    {
      id: '4',
      img: 'img/sosna.jpg',
      title: 'Сосна',
      descr: '(У цурках)',
      price: '7000 грн/5 м³',
      text: '-',
    },
    {
      id: '5',
      img: 'img/bereza.jpg',
      title: 'Береза',
      descr: '(Рубана)',
      price: '2200 грн/складометр',
      text: 'Щільно упакований',
    },
    {
      id: '6',
      img: 'img/vilha.jpg',
      title: 'Вільха',
      descr: '(Рубана)',
      price: '2200 грн/складометр',
      text: 'Щільно упакований',
    },
  ];


  const featureList = document.querySelector('.price__cards');

  const featureListItem = () => {
    return Items
      .map(({id, img, title, descr, price, text }) => {
        return `<div data-aos="fade-up" data-aos-delay="300"class="cards__card">
                  <div class="card__img">
                    <img src="${img}" alt="Дуб">
                  </div>
                  <div class="card__content">
                    <div class="card__title">${title} <span>${descr}</span></div>
                    <div class=".textContent">${price}</div>
                    <div class="card__text">${text}</div>
                    <div class="card__btn" data-id="${id}">
                      <a href="#popup_2" class="btn" data-id="${id}">Замовити</a>
                    </div>
                  </div>
                </div>`;
      })
      .join('');
  };

  featureList.insertAdjacentHTML('beforeend', featureListItem());


  featureList.addEventListener('click', onfeatureContainerclick);

  function onfeatureContainerclick(evt) {
    evt.preventDefault();

    const cardBtn = evt.target.classList.contains('card__btn');
    const btn = evt.target.classList.contains('btn');

    if (!btn && !cardBtn) {
      return;
    }

    const options = Items.find(item => item.id === evt.target.dataset.id);

    displaysModal(options);
  }


  function displaysModal({img, title, descr, price, text}) {
    const instance = basicLightbox.create(
      `
        <div class="modal-basic-lightbox">
        <button type="button" class="modal-basic-lightbox__button close">Close</button>
          <div class="card__img">
            <img src="${img}" alt=${title}>
          </div>
          <p class="modal-basic-lightbox__title">${title} <span>${descr}</span></p>
          <p class="modal-basic-lightbox__title">${price}</p>
          <p class="modal-basic-lightbox__title">${text}</p>
          <div class="top-form__wrapper">
    
              <input type="hidden" name="name" class="top-form__input input-form" placeholder="${title}">

            <div class="top-form__item">
              <input type="text" name="name" class="top-form__input input-form" placeholder="Ім'я*:" required>
            </div>
            <div class="top-form__item">
              <input type="tel" name="phone" class="top-form__input input-form" placeholder="Телефон*:" required>
            </div>
          </div>
          <button type="button" class="modal-basic-lightbox__button">Заказать</button>
        </div>
    `,
      {
        onShow: instance => {
          instance.element().querySelector('.close').onclick = instance.close;
        },
      },
    );

    instance.show();
  }
})();
