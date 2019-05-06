const sleep = (num: number): Promise<Function> => {
  return new Promise(resolve => setTimeout(resolve, num));
};

const sendEvent = (eventName: string): void => {
  /* eslint-disable @typescript-eslint/camelcase */
  gtag("event", "btn-click", {
    event_category: document.title,
    event_label: eventName,
    value: 1
  });
  /* eslint-enable */
};

const allButtons = (): Element[] => {
  return Array.from(document.getElementsByClassName("btn"));
};

export const bindButtons = (): void => {
  allButtons().forEach(button => {
    button.addEventListener("click", (e: Event) => {
      if (e.target instanceof HTMLElement) {
        const audio = document.getElementById(`audio-${e.target.id}`);
        if (audio instanceof HTMLAudioElement) {
          audio.currentTime = 0;
          audio.play();
        }
        if (e.target.textContent) {
          sendEvent(e.target.textContent);
        }
      }
    });
  });
};

export const bindFlashBackButton = (): void => {
  const button = document.getElementById("flashback-btn");
  if (!button) {
    return;
  }
  button.addEventListener("click", async () => {
    const buttons = allButtons().sort(() => Math.random() - Math.random());
    for (const button of buttons) {
      await sleep(1000);
      if (button instanceof HTMLElement) {
        button.click();
      }
    }
  });
};
