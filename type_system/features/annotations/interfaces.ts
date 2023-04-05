interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic', 
  year: new Date(),
  broken: true,
  summary(): string {
    return `\n Name: ${this.name} \n Year: ${this.year} \n Broken? ${this.broken}
    `;
  },
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`
  }
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
