class FynTea {
    constructor() {
      this.teaData = {};
    }
  
    setTeaData(key, value) {
      this.teaData[key] = value;
      console.log(`Set FynTea data for key '${key}':`, value);
    }
  
    getTeaData(key) {
      const value = this.teaData[key];
      console.log(`Retrieved FynTea data for key '${key}':`, value);
      return value;
    }
  
    brewTea() {
      console.log('Brewing a delightful cup of FynTea. ☕');
    }
  
    customizeFlavor(flavor) {
      console.log(`Customizing FynTea flavor with ${flavor}.`);
    }
  
    addSweetener(sweetener) {
      console.log(`Adding a touch of ${sweetener} for the perfect sweetness.`);
    }
  
    enjoyTea() {
      console.log('Sipping on the wonderful flavor of FynTea. 🌺');
    }
  }
  
  // Example usage:
  const fynTea = new FynTea();
  
  fynTea.setTeaData('flavor', 'Summer Breeze');
  fynTea.setTeaData('aroma', 'Refreshing Citrus');
  fynTea.brewTea();
  fynTea.customizeFlavor('Mango');
  fynTea.addSweetener('Honey');
  fynTea.enjoyTea();
  