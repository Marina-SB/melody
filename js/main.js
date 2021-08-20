$(document).ready(function () {
    var currentFloor = 2; // переменная, где храниться каждый этаж
    var floorPath =  $('.home-img path'); // каждый отдельный этаж в SVG
    var counterUp = $('.counter-up'); // кнопка увеличения этажа
    var counterDown = $('.counter-down'); // кнопка уменьшения этажа
    var modal = $('.modal');
    var modalCloseButton = $('.modal-close-button');
    var viewFlatsButton = $('.view-flats');

    // функция при наведении мышью на этаж
    floorPath.on('mouseover', function () {
        floorPath.removeClass('current-floor'); // удаляем активный класс этажа
        currentFloor = $(this).attr('data-floor'); // получаем значение текущего этажа
        $('.counter').text(currentFloor); // записываем значение этажа в счетчик 
    });

    // открываем модальное окно при клике на этаж
    // floorPath.on('click', function () { 
    //     modal.toggleClass('is-open');
    //  });

    // закрываем модальное окно при клике на крестик
    // modalCloseButton.on('click', function () { 
    //     modal.toggleClass('is-open');
    //  });

    floorPath.on('click', toggleModal); // открываем модальное окно при клике на этаж
    modalCloseButton.on('click', toggleModal); // закрываем модальное окно при клике на крестик
    viewFlatsButton.on('click', toggleModal); // открываем модальное окно при клике на кнопку
    
    // отслеживаем клик по кнопке вверх
    counterUp.on('click', function () { 
        if (currentFloor < 18) { // проверяем значение этажа, оно не д.б. больше 18
            currentFloor++; // прибавляем один этаж
        usCurrentFloor = currentFloor.toLocaleString('en-Us', {minimumIntegerDigits: 2, useGrouping: false }); //формируем переменную с этажом, чтобы было 01, а не 1
        $('.counter').text(usCurrentFloor); // записываем значение этажа в счетчик
        floorPath.removeClass('current-floor'); // удаляем активный класс у этажей
        $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor'); // подсвечиваем текущий этаж
        }
    });

    // отслеживаем клик по кнопке вниз
    counterDown.on('click', function () {
        if (currentFloor > 2) { // проверяем значение этажа, оно не д.б. меньше 2
            currentFloor--; // отнимаем один этаж
        usCurrentFloor = currentFloor.toLocaleString('en-Us', {minimumIntegerDigits: 2, useGrouping: false }); //формируем переменную с этажом, чтобы было 01, а не 1
        $('.counter').text(usCurrentFloor); // записываем значение этажа в счетчик
        floorPath.removeClass('current-floor'); // удаляем активный класс у этажей
        $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor'); // подсвечиваем текущий этаж
        }
    });

    function toggleModal() {
        modal.toggleClass('is-open'); // функция открыть-закрыть модальное окно
    }
});