function cityTaxes(name, population, treasury) {
  let city = {
    name: name,
    population: population,
    treasury: treasury,
    taxRate: 10,
    collectTaxes() {
      this.treasury += this.population * this.taxRate;
    },
    applyGrowth(percentage) {
      percentage /= 100; //0.05
      this.population *= percentage + 1; //1.05
    },
    applyRecession: function (percentage) {
      percentage /= 100; //0.05
      this.treasury *= 1 - percentage;
    },
  };
  return city;
}
