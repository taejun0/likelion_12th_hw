/* main page - JS */

const checkboxes = document.querySelectorAll("input[type='checkbox'][name='category_check_group']");
const reset_btn = document.getElementById("reset_btn");
const skincare = document.getElementById("skincare");
const luxury = document.getElementById("luxury");
const snack = document.getElementById("snack");
const total_item = document.getElementById("total_item");
const filter = document.getElementById("filter");
const skincare_btn = document.getElementById("skincare_btn");
const luxury_btn = document.getElementById("luxury_btn");
const snack_btn = document.getElementById("snack_btn");


// 카테고리 표시
const category_display = () => {
  let total = 0;
  if (skincare.checked == false && luxury.checked == false && snack.checked == false){
    filter.style.display = "none";
    reset_btn.style.color = "#dddddd";
    total_item.textContent = "총 508건";
  }
  else{
    document.getElementById("filter").style.display = "";
    document.getElementById("reset_btn").style.color = "#999999"

    if (skincare.checked == false) {
      document.getElementById("filter_skincare").style.display = "none";
    }
    if (luxury.checked == false) {
      document.getElementById("filter_luxury").style.display = "none";
    }
    if (snack.checked == false) {
      document.getElementById("filter_snack").style.display = "none";
    }
    if (skincare.checked == true) {
      document.getElementById("filter_skincare").style.display = "";
      total += 68;
    }
    if (luxury.checked == true) {
      document.getElementById("filter_luxury").style.display = "";
      total += 24;
    }
    if (snack.checked == true) {
      document.getElementById("filter_snack").style.display = "";
      total += 28;
    }
    total_item.textContent = "총 "+total+"건";
  }
}

// 카테고리 초기화 버튼
const reset = () => {
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  })
  filter.style.display = "none";
  reset_btn.style.color = "#dddddd";
  total_item.textContent = "총 508건";
}

// filter 삭제 버튼
const category_delete_skincare = () => {
  skincare.checked = false;
  category_display();
}

const category_delete_luxury = () => {
  luxury.checked = false;
  category_display();
}

const category_delete_snack = () => {
  snack.checked = false;
  category_display();
}


// addEventListener 파트
skincare.addEventListener('change', category_display);
luxury.addEventListener('change', category_display);
snack.addEventListener('change', category_display);
reset_btn.addEventListener('click', reset);
skincare_btn.addEventListener('click', category_delete_skincare);
luxury_btn.addEventListener('click', category_delete_luxury);
snack_btn.addEventListener('click', category_delete_snack);


/*
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", (event) => {
    for(var i = 0; i<checkboxes.length; i++){
    }
  });
});
*/