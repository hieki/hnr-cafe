import * as ejs from "ejs";
import * as fs from "fs";

const ACTRESSES: ("hnr" | "nykk" | "kyuk")[] = ["hnr", "nykk", "kyuk"];

const genHTML = (): void => {
  ACTRESSES.forEach(actress => {
    const sounds = fs.readdirSync(`${__dirname}/public/sounds/${actress}/`);
    ejs.renderFile(
      `${__dirname}/views/btn-page.ejs`,
      {
        sounds,
        actress
      },
      (err, html) => {
        if (err === null) {
          fs.writeFileSync(
            `${__dirname}/public/${actress}.html`,
            html,
            "utf-8"
          );
        } else {
          throw new Error("ERROR: Fail to render");
        }
      }
    );
  });
};

const genIndexHTML = (): void => {
  const actresses = ACTRESSES;

  ejs.renderFile(
    `${__dirname}/views/index.ejs`,
    {
      actresses
    },
    (err, html) => {
      if (err === null) {
        fs.writeFileSync(`${__dirname}/public/index.html`, html, "utf-8");
      } else {
        throw Error("ERROR: Fail to render index.ejs");
      }
    }
  );
};

const genPrivacyPolicyHTML = (): void => {
  ejs.renderFile(`${__dirname}/views/privacy-policy.ejs`, (err, html) => {
    if (err === null) {
      fs.writeFileSync(
        `${__dirname}/public/privacy-policy.html`,
        html,
        "utf-8"
      );
    } else {
      throw new Error("ERROR: Fail to render privacy-policy.ejs");
    }
  });
};

const gen = (): void => {
  genHTML();
  genIndexHTML();
  genPrivacyPolicyHTML();
  console.log("DONE.");
};

gen();
