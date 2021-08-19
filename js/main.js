$(document).ready(function () {
    var currentFloor = 2; // переменная, где храниться каждый этаж
    var floorPath =  $('.home-img path'); // rf;lsq jnltkmysq 'nf; d ымп
    var counterUp = $('.counter-up'); // кнопка увеличения этажа
    var counterDown = $('.counter-down'); // кнопка уменьшения этажа

    // функция при наведении мышью на этаж
    floorPath.on('mouseover', function () {
        floorPath.removeClass('current-floor'); // удаляем активный класс этажа
        currentFloor = $(this).attr('data-floor'); // получаем значение текущего этажа
        $('.counter').text(currentFloor); // записываем значение этажа в счетчик 
    });
    
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
});