let sidebar = document.querySelector(".menu-sidebar");
let space1 = document.querySelector(".space1");
let space2 = document.querySelector(".space2");
let sidebarBtn = document.getElementById("sidebar-btn-ce");

let ac_config = document.querySelector(".ac-config");
let ss_config = document.querySelector(".ss-config");

let ac_accounts = document.querySelector(".ac-accounts");
let ss_accounts = document.querySelector(".ss-accounts");

let modal_teme = document.querySelector(".modal-temes");
let modal_teme_show = document.querySelector(".modal-teme-show");
let modal_teme_close_btn = document.querySelector(".modal-teme-close-btn");
      let teme_blue_btn = document.querySelector(".teme-btn-blue");
      let teme_white_btn = document.querySelector(".teme-btn-white");
      let teme_black_btn = document.querySelector(".teme-btn-black");

let body_temes = document.querySelector(".body-menu");

          // BOTON SIDEBAR EXPAND/CONTRACT

sidebarBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("expand");
  space1.classList.toggle("expand");
  space2.classList.toggle("expand");
});

          // BOTON SUBMENU CONFIGURACIONES

ac_config.addEventListener("click", ()=>{
  ss_config.classList.toggle("down-config");
});

            // ESTADOS DE MODAL TEMAS

    modal_teme_show.addEventListener("click", ()=>{
      modal_teme.classList.toggle("display-flex");
    });

    modal_teme.addEventListener("click", function(e){
      (e.target)
      if(e.target == modal_teme){
      modal_teme.classList.toggle("display-flex");
      }
    });

    modal_teme_close_btn.addEventListener("click", ()=>{
      modal_teme.classList.toggle("display-flex");
    });

            // COLORES DE LOS TEMAS
    
          teme_blue_btn.addEventListener("click", ()=>{
            body_temes.classList.add("blue");
            body_temes.classList.remove("black");
            body_temes.classList.remove("white");
          });

          teme_black_btn.addEventListener("click", ()=>{
            body_temes.classList.add("black");
            body_temes.classList.remove("blue");
            body_temes.classList.remove("white");
          });

          teme_white_btn.addEventListener("click", ()=>{
            body_temes.classList.add("white");
            body_temes.classList.remove("blue");
            body_temes.classList.remove("black");
          });

          // BOTON SUB MENU DE CUENTAS

ac_accounts.addEventListener("click", ()=>{
  ss_accounts.classList.toggle("down-config");
});


