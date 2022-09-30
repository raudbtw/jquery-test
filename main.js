const $window = $(window);

const btn = document.querySelector(".call-modal");

let isModal = false;

let previousWidth = $window.width();

$window.on("resize", function () {
  if (!isModal && $window.width() <= 768) {
    isModal = true;
    $("#modal").trigger("click");
  }
});
