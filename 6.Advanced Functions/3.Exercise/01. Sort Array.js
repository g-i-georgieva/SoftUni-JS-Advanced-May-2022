function solve(arr, order) {
  const sortingMap = {
    asc: (arr) => arr.sort((a, b) => a - b),
    desc: (arr) => arr.sort((a, b) => b - a),
  };
  return sortingMap[order](arr);
}
