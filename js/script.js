$(() => {
  $('#toggle-button').on('click', function () {
    $(this).toggleClass('content__button--clicked');
  });
});
