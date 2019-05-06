import { bindButtons, bindFlashBackButton } from "./bind_button";
import { bindSearchForm } from "./search_form";

document.addEventListener("DOMContentLoaded", () => {
  bindSearchForm();
  bindButtons();
  bindFlashBackButton();
});
