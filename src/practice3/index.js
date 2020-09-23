// TODO feedback：无用import 可以删去
import { resolveConfig } from "prettier";

export const getPoetry = () => {
  // TODO feedback: fetch api本身返回就是个Promise，可以不用再定义一个new Promise
  return new Promise((reslove, reject) => {
    fetch("https://v1.jinrishici.com/all.json")
      .then((response) => {
        // TODO feedback: 直接返回reponse.json()就可以了
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((data) => {
        const { author, content, origin } = data;
        reslove([origin, author, content]);
      })
      .catch((error) => {
        // TODO feedback: 放了一个表达式在这里，没有处理
        error.message;
      });
  });
};
