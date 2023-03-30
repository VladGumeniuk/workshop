document.querySelectorAll(".dropdown").forEach(function (selectWrapper) {
  const dropBtn = selectWrapper.querySelector(".dropdown__button");
  const dropList = selectWrapper.querySelector(".dropdown__list");
  const dropItem = dropList.querySelectorAll(".dropdown__list-item");
  const dropInput = selectWrapper.querySelector(".dropdown__input");

  // Открыть
  dropBtn.addEventListener("click", function () {
    dropList.classList.toggle("drop");
  });

  // Выбрать из списка
  dropItem.forEach(function (listItem) {
    listItem.addEventListener("click", function (e) {
      e.stopPropagation();
      dropBtn.innerHTML = this.innerText;
      dropList.classList.remove("drop");
      dropInput.value = this.dataset.value;
    });

    //==== Закрыть по body
    document.addEventListener("click", function (e) {
      if (e.target !== dropBtn) {
        dropList.classList.remove("drop");
      }
    });

    //=====  Закрыть по ESC
    document.addEventListener("keydown", function (e) {
      if (e.key === "Tab" || e.key === "Escape") {
        dropList.classList.remove("drop");
      }
    });
  });
});
