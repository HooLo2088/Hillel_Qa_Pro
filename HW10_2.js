const hwText = "Wonderful Joyful Happiness Time Task Apple";
const regular = /\b[^aAsT]{6,}\b/g;

const matches = hwText.match(regular);

console.log(matches);