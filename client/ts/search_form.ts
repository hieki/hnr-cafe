const executeQuery = (query: string): void => {
  Array.from(document.getElementsByClassName("btn")).forEach(
    (value: Element) => {
      const button = value as HTMLElement;
      if (button.textContent && button.textContent.includes(query)) {
        button.style.display = "inline";
      } else {
        button.style.display = "none";
      }
    }
  );
};

export const bindSearchForm = (): void => {
  const searchForm = document.getElementById("search-form");
  if (!searchForm) {
    return;
  }
  searchForm.addEventListener("keyup", (e: Event) => {
    if (e.target instanceof HTMLInputElement) {
      executeQuery(e.target.value);
    }
  });
};
