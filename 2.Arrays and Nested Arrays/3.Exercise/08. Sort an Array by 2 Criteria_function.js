function sortByTwoCriteria(array) {
  array.sort(twoCriteriaSort);
  return array.join("\n");
  function twoCriteriaSort(current, next) {
    if (current.length == next.length) {
      //implement second criteria
      return current.localeCompare(next);
    }

    return current.length - next.length;
  }
}
console.log(sortByTwoCriteria(["alpha", "beta", "gamma"]));
sortByTwoCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
sortByTwoCriteria(["test", "Deny", "omen", "Default"]);
