const items = document.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
    const itemTitle = item.querySelector('h2').textContent;
    console.log(`Category: ${itemTitle}`);

    const elementNumber = item.querySelectorAll('ul li').length;
    console.log(`Elements: ${elementNumber}`);
});