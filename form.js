const openForm = document.querySelector('.btn-dotaznik');
const modal = document.querySelector('.modal');
const modalBody = document.querySelector('.modal-body');

openForm.addEventListener('click', () => {
  modal.classList.toggle('hide');
});

modal.addEventListener('click', () => {
  modal.classList.toggle('hide');
});

modalBody.addEventListener('click', function (e) {
  e.stopPropagation();
});

document.querySelector('.cross').addEventListener('click', () => {
  modal.classList.toggle('hide');
});
