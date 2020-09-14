import { resolveConfig } from "prettier";

export const getPoetry = () => {
  return new Promise((reslove, reject) => {
    fetch("https://v1.jinrishici.com/all.json")
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((data) => {
        const { author, content, origin } = data;
        reslove([origin, author, content]);
      })
      .catch((error) => {
        error.message;
      });
  });
};
