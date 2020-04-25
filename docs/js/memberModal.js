$('.member-box img').on('click', e => {
  let Target = $(e.target);
  let imgPath = Target.attr('src');
  let modal = $('#memberModal');
  modal.find('.modal-controller-download').attr('href', imgPath);
  modal.find('.modal-img').attr('src', imgPath);
})