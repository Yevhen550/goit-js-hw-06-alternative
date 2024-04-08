const listCategories = document.querySelectorAll("#categories>li");

console.log(`Number of categories: ${listCategories.length}`);

listCategories.forEach((element) => {
  console.log(
    `Category: ${element.firstElementChild.textContent}
     Elements: ${element.lastElementChild.children.length}`
  );
});
