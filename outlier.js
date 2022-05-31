const findTheOutlier = (arr) => {
  evenOrOdd = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenOrOdd++;
    } else if (arr[i] % 2 !== 0) {
      evenOrOdd--;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (evenOrOdd < 0) {
      if (arr[i] % 2 === 0) {
        return arr[i];
      }
    } else if (evenOrOdd > 0) {
      if (arr[i] % 2 !== 0) {
        return arr[i];
      }
    }
  }
};

console.log(
  findTheOutlier([2, 4, 0, 100, 4, 11, 2602, 36]),
  `should return: 11`
);
console.log(
  findTheOutlier([160, 3, 1719, 19, 11, 13, -21]),
  `should return: 160`
);
