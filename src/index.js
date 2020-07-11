import X from "./x.js";
import png from "./assets/1.png";
console.log(png);
const div = document.getElementById("app");
console.log(div);
div.innerHTML = `
<img src="${png}"></img>
`;
const button = document.createElement("button");

button.innerHTML = "懒加载";
button.onclick = () => {
  const promise = import("./lazy");
  promise.then(
    (module) => {
      const fn = module.default;
      fn();
    },
    () => {
      console.log("加载失败");
    }
  );
};
div.appendChild(button);
