let runAlready;
let counting;
let counted = false;
function startCounter(a) {
  runAlready = true;
  counting = true;
  $(".counter-value").each(function () {
    let $this = $(this);
    $this.text(a);
    countTo = $this.attr("data-count");
    $({
      countNum: $this.text(),
    }).animate(
      {
        countNum: countTo,
      },
      {
        duration: 2000,
        easing: "swing",
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum);
          counting = false;
        },
      }
    );
  });
}

$(window).scroll(function () {
  if (!!$("#counter-about").offset()) {
    let oTop = $("#counter-about").offset().top;
    let a = 0;
    if (!counted) {
      startCounter(a);
    } else if (!counting && $(window).scrollTop() > oTop) {
      startCounter(a);
      counting = true;
    }
    counted = true;
  }
});
$(window).scroll();
