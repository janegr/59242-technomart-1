  var linkFeedback = document.querySelector(".map-btn");

  var popupFeedback = document.querySelector(".modal-content-feedback");

  if (popupFeedback) {
  var closeFeedback = popupFeedback.querySelector(".modal-close");

  var formFeedback = popupFeedback.querySelector(".modal-form-feedback");

  var user = popupFeedback.querySelector("[name=user]");

  var email = popupFeedback.querySelector("[name=e-mail]");

  var formletter = popupFeedback.querySelector("[name=form-letter]");

  var userStorage = localStorage.getItem("user");

  var emailStorage = localStorage.getItem("email");

  linkFeedback.addEventListener("click", function(event) {
  event.preventDefault();
  popupFeedback.classList.add("modal-content-show");

  if (userStorage) {
  user.value = userStorage;
  if (emailStorage) {
  email.value = emailStorage;
  formletter.focus();
  }

 else {
        email.focus();
      }
    }
    else {
      user.focus();
    }
  });

  closeFeedback.addEventListener("click", function(event) {
    event.preventDefault();
    popupFeedback.classList.remove("modal-content-show");
    popupFeedback.classList.remove("modal-error");
  });

  formFeedback.addEventListener("submit", function(event) {
   if (!user.value || !email.value || !formletter.value) {
      event.preventDefault();
      popupFeedback.classList.remove("modal-error");
      popupFeedback.offsetWidth = popupFeedback.offsetWidth;
      popupFeedback.classList.add("modal-error");
    } else {
      if (user.value) {
        localStorage.setItem("user", user.value
          );            
      }
    if (email.value) {
      localStorage.setItem("email", email.value
          );
      }
    } 
  }); 

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (popupFeedback.classList.contains("modal-content-show")) {
        popupFeedback.classList.remove("modal-content-show");
        popupFeedback.classList.remove("modal-error");
      }
    }
  });
}


  var mapOpen = document.querySelector(".js-open-map");

  var mapPopup = document.querySelector(".modal-content-map");

  if (mapPopup) {
  var mapClose = mapPopup.querySelector(".modal-map-close");

  mapOpen.addEventListener("click", function(event) {
    event.preventDefault();
    mapPopup.classList.add("modal-content-map-show");
  });

  mapClose.addEventListener("click", function(event) {
    event.preventDefault();
    mapPopup.classList.remove("modal-content-map-show");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (mapPopup.classList.contains("modal-content-map-show")) {
        mapPopup.classList.remove("modal-content-map-show");
      }
    }
  });
}



  var buyButton = document.querySelectorAll(".active-buy");

  var popupBasket = document.querySelector(".modal-content-basket");

  if (popupBasket) {
  var closeBasket = popupBasket.querySelector(".modal-close");

  var continueOrders = popupBasket.querySelector("[name=continue]");

  for (i = 0; i < buyButton.length; i ++) {
    buyButton[i].addEventListener("click", function(event) {
      event.preventDefault();
      popupBasket.classList.add("modal-content-show");
    });
  }

  closeBasket.addEventListener("click", function(event) {
    event.preventDefault();
    popupBasket.classList.remove("modal-content-show");
  });

  continueOrders.addEventListener("click", function(event) {
    event.preventDefault();
    popupBasket.classList.remove("modal-content-show");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (popupBasket.classList.contains("modal-content-show")) {
        popupBasket.classList.remove("modal-content-show");
      }
    }
  });    
}

