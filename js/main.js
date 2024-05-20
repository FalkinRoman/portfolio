AOS.init();

(function () {
  // Создаём таймер
  setTimeout(function () {
    document.getElementById("videoNone").style.display = "none";
    document.getElementById("rigthShow").style.display = "block";
    document.getElementById("leftShow").style.display = "flex";
  }, 4000); // 10000 мсек = 10 сек
})();

// Скрипт для header

let lastScroll = 0;
const defaultOffset = 100;
const header = document.querySelector(".header");

const scrollPosition = () =>
  window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains("hide");

window.addEventListener("scroll", () => {
  if (
    scrollPosition() > lastScroll &&
    !containHide() &&
    scrollPosition() > defaultOffset
  ) {
    //scroll down
    header.classList.add("hide");
  } else if (scrollPosition() < lastScroll && containHide()) {
    //scroll up
    header.classList.remove("hide");
  }

  lastScroll = scrollPosition();
});

document.addEventListener("scroll", () => {
  if (scrollPosition() > defaultOffset) {
    header.classList.add("small-hide");
  } else if (scrollPosition() < defaultOffset) {
    header.classList.remove("small-hide");
    lastScroll = scrollPosition();
  }
});

// Скрипт для анимации

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

// функция для пререзагрузки с начала страницы

history.scrollRestoration = "manual";

$(window).on("beforeunload", function () {
  $(window).scrollTop(0);
});

// блок мой expirience
function Babynokl() {
  document.getElementById("exp-4").classList.add("color-hover-experience");
  document.getElementById("exp-4").classList.remove("color-hover-experience2");
  document.getElementById("text-onclick1").innerHTML =
    "Frontend разработчик на React";
  document.getElementById("text-onclick1-1").innerHTML = " @ Babynokl";
  document.getElementById("text-onclick2").innerHTML =
    "Январь 2024 - Апрель 2024";
  document.getElementById("text-onclick3-1").innerHTML =
    "Создавал и оптимизировал интерактивные интерфейсы с использованием React";
  document.getElementById("text-onclick3-2").innerHTML =
    "Интегрировал серверные API, управлял состоянием приложения с помощью Redux и Context API";
  document.getElementById("text-onclick3-3").innerHTML =
    "Уменьшал время загрузки страниц и улучшал рендеринг для повышения производительности приложения.";

  document.getElementById("exp-1").classList.add("color-hover-experience2");
  document.getElementById("exp-1").classList.remove("color-hover-experience");

  document.getElementById("exp-2").classList.add("color-hover-experience2");
  document.getElementById("exp-2").classList.remove("color-hover-experience");

  document.getElementById("exp-3").classList.add("color-hover-experience2");
  document.getElementById("exp-3").classList.remove("color-hover-experience");

  document.getElementById("exp-5").classList.add("color-hover-experience2");
  document.getElementById("exp-5").classList.remove("color-hover-experience");

  document.getElementById("exp-6").classList.add("color-hover-experience2");
  document.getElementById("exp-6").classList.remove("color-hover-experience");
}

function Upstatement() {
  document.getElementById("exp-1").classList.add("color-hover-experience");
  document.getElementById("exp-1").classList.remove("color-hover-experience2");
  document.getElementById("text-onclick1").innerHTML =
    "FullStake разработчик на Vue, Laravel";
  document.getElementById("text-onclick1-1").innerHTML = " @ Id Store";
  document.getElementById("text-onclick2").innerHTML = "Октябрь - Декабрь 2023";
  document.getElementById("text-onclick3-1").innerHTML =
    "Создание и поддержка серверной инфраструктуры, обеспечие взаимодействие с базами данных, разработка бизнес-логики сайта";
  document.getElementById("text-onclick3-2").innerHTML =
    "Интеграция с внешними сервисами, оптимизация производительности, разработка API ,а также безопасность приложения";
  document.getElementById("text-onclick3-3").innerHTML =
    "Создал и настроил административную панель для интернет-магазина, обеспечивая удобное управление содержимым и данными магазина.";

  document.getElementById("exp-2").classList.add("color-hover-experience2");
  document.getElementById("exp-2").classList.remove("color-hover-experience");

  document.getElementById("exp-3").classList.add("color-hover-experience2");
  document.getElementById("exp-3").classList.remove("color-hover-experience");

  document.getElementById("exp-4").classList.add("color-hover-experience2");
  document.getElementById("exp-4").classList.remove("color-hover-experience");

  document.getElementById("exp-5").classList.add("color-hover-experience2");
  document.getElementById("exp-5").classList.remove("color-hover-experience");

  document.getElementById("exp-6").classList.add("color-hover-experience2");
  document.getElementById("exp-6").classList.remove("color-hover-experience");
}

function scout() {
  document.getElementById("exp-2").classList.add("color-hover-experience");
  document.getElementById("exp-2").classList.remove("color-hover-experience2");
  document.getElementById("text-onclick1").innerHTML = "FullStack разработчик";
  document.getElementById("text-onclick1-1").innerHTML = " @ Support.ru";
  document.getElementById("text-onclick2").innerHTML = "Январь - Сентябрь 2023";
  document.getElementById("text-onclick3-1").innerHTML =
    "Разработка программного обеспечения как на стороне клиента (фронтенд), так и на стороне сервера (бэкенд)";
  document.getElementById("text-onclick3-2").innerHTML =
    "Создание пользовательского интерфейса (UI) с использованием языков разметки (HTML), стилей (CSS), скриптов (JavaScript), фреймворков React, Vue";
  document.getElementById("text-onclick3-3").innerHTML =
    "Использование бэкенд-фреймворка Laravel для взаимодействия серверной и клиентской части.";

  document.getElementById("exp-1").classList.add("color-hover-experience2");
  document.getElementById("exp-1").classList.remove("color-hover-experience");

  document.getElementById("exp-3").classList.add("color-hover-experience2");
  document.getElementById("exp-3").classList.remove("color-hover-experience");

  document.getElementById("exp-4").classList.add("color-hover-experience2");
  document.getElementById("exp-4").classList.remove("color-hover-experience");

  document.getElementById("exp-5").classList.add("color-hover-experience2");
  document.getElementById("exp-5").classList.remove("color-hover-experience");

  document.getElementById("exp-6").classList.add("color-hover-experience2");
  document.getElementById("exp-6").classList.remove("color-hover-experience");
}

function apple() {
  document.getElementById("exp-3").classList.add("color-hover-experience");
  document.getElementById("exp-3").classList.remove("color-hover-experience2");
  document.getElementById("text-onclick1").innerHTML = "Верстальщик";
  document.getElementById("text-onclick1-1").innerHTML = " @ Art-Web";
  document.getElementById("text-onclick2").innerHTML = "Февраль - Декабрь 2022";
  document.getElementById("text-onclick3-1").innerHTML =
    "Верстка по макетам с использованием HTML и CSS, разработка интерактивных элементов с применением JavaScript";
  document.getElementById("text-onclick3-2").innerHTML =
    "Интеграция дизайна в функциональные пользовательские интерфейсы, обеспечие кроссбраузерности и адаптивности";
  document.getElementById("text-onclick3-3").innerHTML =
    "Отладка кода для обеспечения высокого уровня функциональности и качественного пользовательского опыта.";

  document.getElementById("exp-1").classList.add("color-hover-experience2");
  document.getElementById("exp-1").classList.remove("color-hover-experience");

  document.getElementById("exp-2").classList.add("color-hover-experience2");
  document.getElementById("exp-2").classList.remove("color-hover-experience");

  document.getElementById("exp-4").classList.add("color-hover-experience2");
  document.getElementById("exp-4").classList.remove("color-hover-experience");

  document.getElementById("exp-5").classList.add("color-hover-experience2");
  document.getElementById("exp-5").classList.remove("color-hover-experience");

  document.getElementById("exp-6").classList.add("color-hover-experience2");
  document.getElementById("exp-6").classList.remove("color-hover-experience");
}

//блок others projects

function showLess() {
  //добавить элементы
  let othersPrj = document.getElementById("tmpl-others-progects").innerHTML;
  document.getElementById("box-oth-prj").innerHTML += othersPrj;
  document.getElementById("btn-oth-prj-sh-more").remove();
}

function showMore() {
  //убрать элементы

  document.getElementById("box-remove1").remove();
  document.getElementById("box-remove2").remove();
  document.getElementById("box-remove3").remove();
  document.getElementById("box-remove4").remove();
  document.getElementById("box-remove5").remove();
  document.getElementById("box-remove6").remove();
  document.getElementById("btn-oth-prj-sh-less").remove();

  let othersProj = document.getElementById("tmpl-others-progects2").innerHTML;
  document.getElementById("box-oth-prj").innerHTML += othersProj;
}

$(function () {
  // моб.меню
  var menuButton = $("#js-menu-button");
  menuButton.click(function () {
    if (menuButton.hasClass("is-open")) {
      menuButton.removeClass("is-open");
      $(".menu").removeClass("is-show");
      $("body").removeClass("body-hidden");
    } else {
      menuButton.addClass("is-open");
      $(".menu").addClass("is-show");
      $("body").addClass("body-hidden");
    }
    return false;
  });
  $(document).on("click", ".menu.is-show .menu-link", function () {
    menuButton.removeClass("is-open");
    $(".menu").removeClass("is-show");
    $("body").removeClass("body-hidden");
  });

  // высота окна
  function checkWin() {
    $(".headline").css("height", $(window).height() - 102 + "px");
  }
  $(window).on("load resize", checkWin);

  // выбор языка
  $(document).on("click", ".lang-curr-js", function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(".lang-all-js").removeClass("active");
    } else {
      $(this).addClass("active");
      $(".lang-all-js").addClass("active");
    }
  });
});
