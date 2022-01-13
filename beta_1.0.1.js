let u_b_c = document.getElementById("u-b-c")
let u_buttons_sm = document.getElementById("u-buttons__sm");
let u_buttons_hm = document.getElementById("u-buttons__hm");
let u_buttons_in = document.getElementById("u-buttons__in");

            // SIDEBAR SIDEBAR SIDEBAR

let sidebar = document.getElementById("menu-sidebar-selector");

let sidebarBtn = document.getElementById("sidebar-btn-ce");

let ac_accounts = document.getElementById("ac-accounts");
let ss_accounts = document.getElementById("ss-accounts");

let ac_store = document.getElementById("ac-store");
let ss_store = document.getElementById("ss-store");

let ac_contact = document.getElementById("ac-contact");
let ss_contact = document.getElementById("ss-contact");

let ac_config = document.getElementById("ac-config");
let ss_config = document.getElementById("ss-config");

let sub_menu_tooltip = document.getElementById("sub-menu-tooltip");

          // TEME COLORS TEME COLORS TEME COLORS

let modal_teme = document.querySelector(".modal-temes");
let modal_teme_show = document.getElementById("modal-temes__show");
let modal_teme_close_btn = document.querySelector(".modal-temes__close-btn");
      let teme_blue_btn = document.getElementById("teme__btn__blue");
      let teme_white_btn = document.getElementById("teme__btn__white");
      let teme_black_btn = document.getElementById("teme__btn__black");
      let teme_red_btn = document.getElementById("teme__btn__red");

      let body_temes = document.querySelector(".body-menu");
  
            // U-BUTTONS

u_buttons_sm.addEventListener("mouseover", ()=>{
  u_b_c.classList.add("u-buttons-container__sm");
  u_buttons_sm.classList.add("ubb__container--expand");
  u_buttons_hm.classList.add("ubb__container--disabled");
  u_buttons_in.classList.add("ubb__container--disabled");
});
u_buttons_sm.addEventListener("mouseleave", ()=>{
  u_b_c.classList.remove("u-buttons-container__sm");
  u_buttons_sm.classList.remove("ubb__container--expand");
  u_buttons_hm.classList.remove("ubb__container--disabled");
  u_buttons_in.classList.remove("ubb__container--disabled");
});

// u_buttons_hm.addEventListener("mouseover", ()=>{
//   u_b_c.classList.add("u-buttons-container__hm");
//   u_buttons_hm.classList.add("ubb__container--expand");
//   u_buttons_sm.classList.add("ubb__container--disabled");
//   u_buttons_in.classList.add("ubb__container--disabled");
//   setTimeout
// });
// u_buttons_hm.addEventListener("mouseleave", ()=>{
//   u_b_c.classList.remove("u-buttons-container__hm");
//   u_buttons_hm.classList.remove("ubb__container--expand");
//   u_buttons_sm.classList.remove("ubb__container--disabled");
//   u_buttons_in.classList.remove("ubb__container--disabled");
// });

// u_buttons_sm.addEventListener("mouseover", ()=>{
//   u_buttons_sm.classList.add("u-button__expand");
//   u_buttons_hm.classList.add("u-button__button-d");
//   u_buttons_in.classList.add("u-button__button-d");
// });
// u_buttons_sm.addEventListener("mouseleave", ()=>{
//   u_buttons_sm.classList.remove("u-button__expand");
//   u_buttons_hm.classList.remove("u-button__button-d");
//   u_buttons_in.classList.remove("u-button__button-d");
// });


          // BOTON SIDEBAR EXPAND/CONTRACT
    

sidebarBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("menu-sidebar--expand");
  if (ss_store.classList.contains("sub-menu__active") == true){
    ss_store.classList.add("down__config");
  }
  if (ss_config.classList.contains("sub-menu__active") == true){
    ss_config.classList.add("down__config");
  }
  if (ss_accounts.classList.contains("sub-menu__active") == true){
    ss_accounts.classList.add("down__config");
  }
  if (ss_contact.classList.contains("sub-menu__active") == true){
    ss_contact.classList.add("down__config");
  }
});
  
      

              // BOTON SUBMENU DE CUENTAS
      
    ac_accounts.addEventListener("click", ()=>{
                if (sidebar.classList.contains("menu-sidebar--expand") == true){
                  ss_accounts.classList.toggle("down__config");
                }
    });



           //  BOTON SUBMENU MARKET

    ac_store.addEventListener("click", ()=>{
      if (sidebar.classList.contains("menu-sidebar--expand") == true){
        ss_store.classList.toggle("down__config");
        }
    });


      //  BOTON SUBMENU CONTACT

      ac_contact.addEventListener("click", ()=>{
        if (sidebar.classList.contains("menu-sidebar--expand") == true){
          ss_contact.classList.toggle("down__config");
          }
      });
            // BOTON SUBMENU CONFIGURACIONES


ac_config.addEventListener("click", ()=>{
  if (sidebar.classList.contains("menu-sidebar--expand") == true){
    ss_config.classList.toggle("down__config");
  }
});


            // MODAL DE TEMAS


    modal_teme_show.addEventListener("click", ()=>{
      modal_teme.classList.toggle("display--flex");
    });

    modal_teme.addEventListener("click", function(e){
      (e.target)
      if(e.target == modal_teme){
        modal_teme.classList.toggle("display--flex");
      }
    });

    modal_teme_close_btn.addEventListener("click", ()=>{
      modal_teme.classList.toggle("display--flex");
    });

          // SELECCION DE COLORES DE LOS TEMAS

        teme_blue_btn.addEventListener("click", ()=>{
          body_temes.classList.add("teme--blue");
          body_temes.classList.remove("teme--black");
          body_temes.classList.remove("teme--white");
          body_temes.classList.remove("teme--red");
        });

        teme_black_btn.addEventListener("click", ()=>{
          body_temes.classList.add("teme--black");
          body_temes.classList.remove("teme--blue");
          body_temes.classList.remove("teme--white");
          body_temes.classList.remove("teme--red");
        });
        
        teme_white_btn.addEventListener("click", ()=>{
          body_temes.classList.add("teme--white");
          body_temes.classList.remove("teme--blue");
          body_temes.classList.remove("teme--black");
          body_temes.classList.remove("teme--red");
        });

        teme_red_btn.addEventListener("click", ()=>{
          body_temes.classList.add("teme--red");
          body_temes.classList.remove("teme--blue");
          body_temes.classList.remove("teme--black");
          body_temes.classList.remove("teme--white");
        });
            


            

// ac_store.addEventListener("mouseover", ()=>{
  //   sub_menu_tooltip.classList.remove("sub-menu__tooltip--disable");
  // });
  // ac_store.addEventListener("mouseleave", ()=>{
    //   sub_menu_tooltip.classList.add("sub-menu__tooltip--disable");
    // });
