let sidebar = document.querySelector(".menu-sidebar");
let space1 = document.querySelector(".space1");
let space2 = document.querySelector(".space2");
let sidebarBtn = document.getElementById("sidebar-btn-ce");
let ac_config = document.querySelector(".ac-config");
let ss_config = document.querySelector(".ss-config");
let ac_accounts = document.querySelector(".ac-accounts");
let ss_accounts = document.querySelector(".ss-accounts")

sidebarBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("expand");
  space1.classList.toggle("expand");
  space2.classList.toggle("expand");
});


ac_config.addEventListener("click", ()=>{
  ss_config.classList.toggle("down-config");
});

ac_accounts.addEventListener("click", ()=>{
  ss_accounts.classList.toggle("down-config");
});