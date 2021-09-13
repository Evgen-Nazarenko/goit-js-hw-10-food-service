import "./sass/main.scss";
import menu from "./menu.json";
import itemTemplate from "./templates/itemsTemplate.hbs";
console.log(itemTemplate);


const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

const switchBtnRef = document.querySelector(".theme-switch__toggle");

const storageTheme = () => {
  if (localStorage.getItem("theme")) {
    document
      .querySelector("body")
      .classList.add(`${localStorage.getItem("theme")}`);
    if (document.querySelector("body").classList.contains("dark-theme")) {
      return (switchBtnRef.checked = true);
    }
  }
};

storageTheme();

const changeThemeFn = () => {
  if (!switchBtnRef.checked) {
    localStorage.setItem("theme", Theme.LIGHT);
    document.querySelector("body").classList.remove(`${Theme.DARK}`);
    document.querySelector("body").classList.add(`${Theme.LIGHT}`);
    switchBtnRef.checked = false;
  }
  if (switchBtnRef.checked) {
    localStorage.setItem("theme", Theme.DARK);
    document.querySelector("body").classList.remove(`${Theme.LIGHT}`);
    document.querySelector("body").classList.add(`${Theme.DARK}`);
    switchBtnRef.checked = true;
  }
};

switchBtnRef.addEventListener("change", changeThemeFn);

// const menu_of_dishes = document.querySelector(".js-menu");

const menu_of_dishes = document.querySelector(".js-menu");

const markup = itemTemplate(menu);
menu_of_dishes.insertAdjacentHTML("beforeend", markup);
