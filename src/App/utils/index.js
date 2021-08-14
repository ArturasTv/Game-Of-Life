export const vhToPixels = (vh) => {
  return Math.round(window.innerHeight / (100 / vh));
};
export const vwToPixels = (vw) => {
  return Math.round(window.innerWidth / (100 / vw));
};

export const [cols, rows] = [
  Math.round(vhToPixels(100) / 30),
  Math.round(vwToPixels(100) / 30),
];

export const layers = Math.round(Math.max(cols, rows) / 2);

export const makeBoard = () => {
  const result = [];

  for (let i = 0; i < cols; i++) {
    let temp = [];
    for (let j = 0; j < rows; j++) {
      temp.push(false);
    }
    result.push(temp);
  }

  return result;
};

export const countNeighbours = (ii, jj, array) => {
  let counter = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (array[ii + i][jj + j]) {
        counter++;
      }
    }
  }
  if (array[ii][jj]) counter--;

  return counter;
};
