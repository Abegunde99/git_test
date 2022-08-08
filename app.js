const futureDate = new Date(2022, 9 , 25, 17,30,27)
console.log(futureDate);

let stringgss = "i hate to. do this,"

// stringgss.forEach(item => {
//     console.log(item);
// });
let newWord = stringgss.split(" ");

// let words = newWord.map((item)=>{
//     return `<p class="hot">${item}</p><br>`
// })
// console.log(words);
const article = document.createElement("div")
const attr = document.createAttribute("data-id");
attr.value = "about"
article.setAttributeNode(attr)
console.log(article)

const element = document.createElement("section")
element.setAttribute("data-id","about")
element.innerHTML = `<p>i love doing this ${stringgss}</p>`
console.log(element);