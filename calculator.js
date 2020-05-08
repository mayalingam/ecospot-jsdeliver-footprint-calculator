// The footprint object for user information

let footprint = {
  summary: {
    total: {},
  },
  home: {
    type: '',
    bedrooms: '',
    livingSpacem2: '',
    myHomePercent: '',
    waterL: '',
    baseline: {
      electricitykWh: '',
      gaskWh: '',
    },
    people: '',
    heating: 0,
    renewable: false,
    appliancesOff: '',
    improvements: {
      lightbulbs: false,
      smartMeter: false,
      smartHeater: false,
      insulation: false,
      doubleGlazedWindows: false,
    },
    final: {
      electricitykWh: '',
      gaskWh: '',
    },
    total: {
      constructionTonnesC02: '',
      electricityTonnesC02: '',
      gasTonnesC02: '',
      waterTonnesC02: '',
    },
    personal: {
      constructionTonnesC02: '',
      electricityTonnesC02: '',
      gasTonnesC02: '',
      waterTonnesC02: '',
    },
  },
  food: {
    diet: '',
    spend: '',
    waste: '',
    seasonal: false,
    recycle: false,
    total: {
      dietTonnesC02: '',
      spendTonnesC02: '',
      wasteTonnesC02: '',
    },
  },
  shopping: {
    spend: {
      clothing: 0,
      healthBeauty: 0,
      pets: 0,
      contracts: 0,
      householdItems: 0,
    },
    householdItems: {
      tvComputer: false,
      phoneTablet: false,
      washingMachineDryer: false,
      fridgeFreezer: false,
      furniture: false,
    },
    total: {
      clothingTonnesC02: '',
      healthBeautyTonnesC02: '',
      petsTonnesC02: '',
      contractsTonnesC02: '',
      householdItemsTonnesC02: '',
      baselineTonnesC02: 1.22,
    },
  },
  transport: {
    car: {
      type: null,
      mpl: 0,
      hoursWeekly: 0,
      milesYearly: 0,
      litresYearly: 0,
      kWhYearly: 0,
    },
    publicTransport: {
      hoursWeekly: 0,
      milesYearly: 0,
    },
    flights: {
      under2Hours: 0,
      from2To4Hours: 0,
      from4To8Hours: 0,
      from8To12Hours: 0,
      from12To16Hours: 0,
      from16Hours: 0,
      milesYearly: 0,
      offset: 0,
    },
    total: {
      car: {
        totalTonnesC02: 0,
        fuelTonnesC02: 0,
        depreciationTonnesC02: 0,
      },
      publicTransportTonnesC02: 0,
      flightTonnesC02: 0,
    },
  },
  complete: {
    home: false,
    food: false,
    shopping: false,
    transport: false,
  },
};

// The constant values for the carbon footprint calculator
const carbon = {
  home: {
    detached: {
      bed1: 49,
      bed2: 73,
      bed3: 112,
      bed4: 172,
    },
    semi: {
      bed1: 49,
      bed2: 73,
      bed3: 86,
      bed4: 134,
    },
    terrace: {
      bed1: 49,
      bed2: 66,
      bed3: 84,
      bed4: 123,
    },
    flat: {
      bed1: 43,
      bed2: 62,
      bed3: 83,
      bed4: 114,
    },
    avg: {
      livingSpacem2: 90,
      electricitykWh: 7090,
      gaskWh: 12937,
      waterL: 127385,
    },
    kgC02: {
      electricitykWh: 0.643,
      gaskWh: 0.213,
      livingSpacem2: 10.01,
      waterL: 0.01582,
    },
    electricitySaving: {
      lightbulbskWh: 876,
      smartMeterPercent: 2.8,
      appliancesPercent: 23,
      renewablePercent: 100,
    },
    gasSaving: {
      smartMeterPercent: 2,
      smartHeaterPercent: 20,
      insulationPercent: 20,
      doubleGlazedWindowsPercent: 20,
    },
  },
  food: {
    diet: {
      meatEveryMeal: 3165,
      meatMostMeals: 2869,
      meatRarely: 2602,
      vegetarian: 2418,
      vegan: 2284,
    },
    spend: {
      from0To9: 153,
      from10To29: 663,
      from30To49: 1343,
      from50: 2364,
    },
    dietSaving: {
      inseasonPercent: 2,
      recyclePercent: 2.3,
    },
  },
  shopping: {
    otherSpendAnnual: 3861,
    avgCostHouseholdItems: {
      tvComputer: 744,
      phoneTablet: 391,
      washingMachineDryer: 400,
      fridgeFreezer: 550,
      furniture: 412,
    },
    gC02Pound: {
      clothing: 675,
      healthBeauty: 793,
      pets: 645,
      contracts: 331,
      householdItems: 662,
    },
  },
  transport: {
    kgC02: {
      petrolL: 2.955,
      milePetrolCar: 0.069,
      electricitykWh: 0.643,
      mileElectricCar: 0.013,
      milePublicTransport: 0.225,
      mileFlight: 0.446,
    },
    mph: {
      car: 23,
      publicTransport: 15,
    },
    mpl: {
      smallCar: 7.9,
      mediumCar: 6.6,
      bigCar: 5.5,
      electricCar: 300,
    },
    flightMiles: {
      under2Hours: 444,
      from2To4Hours: 1365,
      from4To8Hours: 2609,
      from8To12Hours: 4892,
      from12To16Hours: 7292,
      from16Hours: 10568,
    },
  },
};

// The constant values for the carbon footprint visualisation

const visualisation = {
  averageUKFootprint: 10,
  averageEcospot: 12,
  treeKgC02: 22,
  lightbulbKgC02: 0.0835,
};

// The constant values for the DOM layer

const DOM = {
  start: document.querySelector('.start-and-end-footprint'),
  home: document.querySelector('.home'),
  food: document.querySelector('.food'),
  shopping: document.querySelector('.shopping'),
  transport: document.querySelector('.transport'),
  complete: document.querySelector('.complete'),
};

const show = {};

const hide = {};

for (const grid in DOM) {
  show[grid] = function () {
    DOM[grid].style.display = 'grid';
  };
  hide[grid] = function () {
    DOM[grid].style.display = 'none';
  };
}

// The formula to add questions to the DOM object and show question functions to the show object
for (i = 1; i < 25; i++) {
  let key = 'q' + i;
  let id = '#Q' + i;
  let qProgress = i * 7.5 + 'px';
  DOM[key] = document.querySelector(id);
  DOM[key].style.display = 'none';
  show[key] = function () {
    DOM[key].style.display = 'flex';
    updateProgress(qProgress);
  };
}

function updateProgress(width) {
  const progressBar = document.querySelectorAll('.completed');
  progressBar.forEach((bar) => {
    bar.style.transition = 'width 0.5s ease';
    bar.style.width = width;
  });
}

// The event listener to start the calculator
const letsGo = document.querySelector('#lets-go');
letsGo.addEventListener('click', showHomeGrid);

function showHomeGrid() {
  show.home();
  show.q1();
}

// The event listener to show the visualisation
const submitBtn = document.querySelector('.success-footprint');
submitBtn.addEventListener('click', completeFootprint);

function completeFootprint() {
  hideQuestions();
  showVisualisation();
  scrollTop();
}

function hideQuestions() {
  hide.start();
  hide.home();
  hide.food();
  hide.shopping();
  hide.transport();
  hide.complete();
}

function showVisualisation() {
  const visualisation = document.querySelector('.visualisation-section');
  visualisation.style.display = 'block';
  buildVisualisation();
}

function scrollTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// The event listener for standard questions and image questions
const buttons = document.querySelectorAll('.clickable:not(.multi-answer)');
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    // Declaring function variables
    let question = button.parentNode.parentNode.parentNode.parentNode.id;
    let dataValue = e.target.parentNode.dataset.value;

    // Firing the right functions for each question
    switch (question) {
      case 'Q1':
        chooseHome(dataValue);
        show.q2();
        break;
      case 'Q2':
        chooseBedrooms(dataValue);
        show.q3();
        break;
      case 'Q3':
        choosePeople(dataValue);
        show.q4();

        break;
      case 'Q4':
        chooseHeating(dataValue);
        show.q5();
        break;
      case 'Q5':
        chooseRenewable(dataValue);
        show.q6();
        break;
      case 'Q6':
        chooseAppliances(dataValue);
        show.q7();
        break;
      // Q7 is a multi-answer question
      case 'Q8':
        chooseDiet(dataValue);
        show.q9();
        break;
      case 'Q9':
        chooseFoodSpend(dataValue);
        show.q10();
        break;
      case 'Q10':
        chooseFoodWaste(dataValue);
        show.q11();
        break;
      case 'Q11':
        chooseFoodInSeason(dataValue);
        show.q12();
        break;
      case 'Q12':
        chooseFoodRecycle(dataValue);
        show.q13();
        break;
      case 'Q13':
        chooseClothesFootwear(dataValue);
        show.q14();
        break;
      case 'Q14':
        chooseHealthBeauty(dataValue);
        show.q15();
        break;
      case 'Q15':
        chooseContracts(dataValue);
        show.q16();
        break;
      case 'Q16':
        choosePets(dataValue);
        show.q17();
        break;
      // Q17 is a multi-answer question
      // Q18 is a conditional logic question
      case 'Q18':
        show.q19();
        show.q20();
        setBaselineCar();
        break;
      case 'Q19':
        chooseCarType(dataValue);
        show.q20();
        break;
      case 'Q20':
        chooseCarHours(dataValue);
        show.q21();
        break;
      case 'Q21':
        choosePublicTransportHours(dataValue);
        show.q22();
        break;
      case 'Q22':
        show.q23();
        show.q24();
        show.complete();
      // Q22 is a conditional logic question
      // Q23 is an add your flights question
      case 'Q24':
        chooseOffset(dataValue);
        break;
      default:
        break;
    }
  });
});

// The event listener for multi-answer questions
const multiButtons = document.querySelectorAll('.clickable.multi-answer');
multiButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Declaring function variables
    let question = button.parentNode.parentNode.parentNode.parentNode.id;
    let dataName = button.parentNode.dataset.name;

    // Firing the right functions for each question
    switch (question) {
      case 'Q7':
        chooseImprovements(dataName);
        show.q8();
        break;
      case 'Q17':
        chooseHouseholdItem(dataName);
        show.q18();
        break;
      default:
        break;
    }
  });
});

// Home event listener

const homeComplete = document.querySelectorAll('.home-complete');

homeComplete.forEach((button) => {
  button.addEventListener('click', (e) => {
    calculateHome();
  });
});

// Home question functions

let home = footprint.home;

function chooseHome(homeType) {
  home.type = homeType;

  if (footprint.complete.home === true) {
    chooseBedrooms(home.bedrooms);
    calculateHome();
  }
}

function chooseBedrooms(bedrooms) {
  let homeType = home.type;

  home.bedrooms = bedrooms;
  home.livingSpacem2 = carbon.home[homeType][`bed${bedrooms}`];
  home.myHomePercent = home.livingSpacem2 / carbon.home.avg.livingSpacem2;

  let avgUK = carbon.home.avg;
  let myHomePercent = home.myHomePercent;

  home.baseline.electricitykWh = avgUK.electricitykWh * myHomePercent;
  home.baseline.gaskWh = avgUK.gaskWh * myHomePercent;
  home.waterL = avgUK.waterL * myHomePercent;

  if (footprint.complete.home === true) {
    calculateHome();
  }
}

function choosePeople(people) {
  home.people = people;
  if (footprint.complete.home === true) {
    calculateHome();
  }
}

function chooseHeating(heatingLevel) {
  home.heating = heatingLevel;

  if (footprint.complete.home === true) {
    calculateHome();
  }
}

function chooseRenewable(boolean) {
  boolean = boolean == 'true';
  home.renewable = boolean;

  if (footprint.complete.home === true) {
    calculateHome();
  }
}

function chooseAppliances(boolean) {
  boolean = boolean == 'true';
  home.appliancesOff = boolean;

  if (footprint.complete.home === true) {
    calculateHome();
  }
}

function chooseImprovements(improvement) {
  if (improvement == 'none') {
    home.improvements.energySavingLightbulbs = false;
    home.improvements.insulation = false;
    home.improvements.solarPanels = false;
    home.improvements.doubleGlazedWindows = false;
  } else {
    if (home.improvements[improvement] == false) {
      home.improvements[improvement] = true;
    } else {
      home.improvements[improvement] = false;
    }
  }

  if (footprint.complete.home === true) {
    calculateHome();
  }
}

// Home footprint functions
function calculateHome() {
  show.food();
  calculateConstruction();
  calculateElectricity();
  calculateGas();
  calculateWater();
  calculateHomePersonal();
  calculateHomeSummary();
  completeHome();
  calculateFootprint();
}

function calculateConstruction() {
  home.total.constructionTonnesC02 =
    (carbon.home.kgC02.livingSpacem2 * home.livingSpacem2) / 1000;
}

function calculateElectricity() {
  let homeElectricity = home.baseline.electricitykWh;
  let saving = carbon.home.electricitySaving;

  if (home.improvements.lightbulbs === true) {
    homeElectricity = homeElectricity - saving.lightbulbskWh;
  }
  if (home.improvements.smartMeter === true) {
    homeElectricity =
      (homeElectricity * (100 - saving.smartMeterPercent)) / 100;
  }
  if (home.appliancesOff === true) {
    homeElectricity =
      (homeElectricity * (100 - saving.appliancesPercent)) / 100;
  }
  if (home.renewable === true) {
    homeElectricity = 0;
  }

  home.final.electricitykWh = homeElectricity;
  home.total.electricityTonnesC02 =
    (homeElectricity * carbon.home.kgC02.electricitykWh) / 1000;
}

function calculateGas() {
  let homeGas = home.baseline.gaskWh;
  let saving = carbon.home.gasSaving;

  homeGas = (homeGas * home.heating) / 100;

  if (home.improvements.smartMeter === true) {
    homeGas = (homeGas * (100 - saving.smartMeterPercent)) / 100;
  }
  if (home.improvements.smartHeater === true) {
    homeGas = (homeGas * (100 - saving.smartHeaterPercent)) / 100;
  }
  if (home.improvements.insulation === true) {
    homeGas = (homeGas * (100 - saving.insulationPercent)) / 100;
  }
  if (home.improvements.doubleGlazedWindows === true) {
    homeGas = (homeGas * (100 - saving.doubleGlazedWindowsPercent)) / 100;
  }

  home.final.gaskWh = homeGas;
  home.total.gasTonnesC02 = (homeGas * carbon.home.kgC02.gaskWh) / 1000;
}

function calculateWater() {
  home.total.waterTonnesC02 = (carbon.home.kgC02.waterL * home.waterL) / 1000;
}

function calculateHomePersonal() {
  home.personal.constructionTonnesC02 =
    home.total.constructionTonnesC02 / home.people;
  home.personal.electricityTonnesC02 =
    home.total.electricityTonnesC02 / home.people;
  home.personal.gasTonnesC02 = home.total.gasTonnesC02 / home.people;
  home.personal.waterTonnesC02 = home.total.waterTonnesC02 / home.people;
}

function calculateHomeSummary() {
  footprint.summary.construction =
    Math.round((home.personal.constructionTonnesC02 + Number.EPSILON) * 100) /
    100;
  footprint.summary.electricity =
    Math.round((home.personal.electricityTonnesC02 + Number.EPSILON) * 100) /
    100;
  footprint.summary.gas =
    Math.round((home.personal.gasTonnesC02 + Number.EPSILON) * 100) / 100;
  footprint.summary.water =
    Math.round((home.personal.waterTonnesC02 + Number.EPSILON) * 100) / 100;
  footprint.summary.total.home =
    Math.round(
      (footprint.summary.construction +
        footprint.summary.electricity +
        footprint.summary.gas +
        home.personal.waterTonnesC02 +
        Number.EPSILON) *
        100
    ) / 100;
}

function completeHome() {
  footprint.complete.home = true;
}

// Food event listener

const foodComplete = document.querySelectorAll('.food-complete');

foodComplete.forEach((button) => {
  button.addEventListener('click', (e) => {
    calculateFood();
  });
});

// Food question functions

function chooseDiet(dietType) {
  footprint.food.diet = carbon.food.diet[dietType];

  if (footprint.complete.food === true) {
    calculateFood();
  }
}

function chooseFoodSpend(spend) {
  footprint.food.spend = carbon.food.spend[spend];

  if (footprint.complete.food === true) {
    calculateFood();
  }
}

function chooseFoodWaste(waste) {
  let wastePercentage = waste;
  footprint.food.waste = (footprint.food.diet * wastePercentage) / 100;

  if (footprint.complete.food === true) {
    calculateFood();
  }
}

function chooseFoodInSeason(answer) {
  if (answer === 'true') {
    footprint.food.seasonal = true;
  } else {
    footprint.food.seasonal = false;
  }

  if (footprint.complete.food === true) {
    calculateFood();
  }
}

function chooseFoodRecycle(answer) {
  if (answer === 'true') {
    footprint.food.recycle = true;
  } else {
    footprint.food.recycle = false;
  }

  if (footprint.complete.food === true) {
    calculateFood();
  }
}

// Food footprint functions

function calculateFood() {
  show.shopping();
  calculateDiet();
  footprint.food.total.wasteTonnesC02 = footprint.food.waste / 1000;
  footprint.food.total.spendTonnesC02 = footprint.food.spend / 1000;
  calculateFoodSummary();
  completeFood();
  calculateFootprint();
}

function calculateDiet() {
  let diet = footprint.food.diet;
  let seasonalSaving = carbon.food.dietSaving.inseasonPercent;
  let recycleSaving = carbon.food.dietSaving.recyclePercent;

  if (footprint.food.seasonal) {
    diet = (diet * (100 - seasonalSaving)) / 100;
  }

  if (footprint.food.recycle) {
    diet = (diet * (100 - recycleSaving)) / 100;
  }

  footprint.food.total.dietTonnesC02 = diet / 1000;
}

function calculateFoodSummary() {
  footprint.summary.diet =
    Math.round((footprint.food.total.dietTonnesC02 + Number.EPSILON) * 100) /
    100;
  footprint.summary.waste =
    Math.round((footprint.food.total.wasteTonnesC02 + Number.EPSILON) * 100) /
    100;
  footprint.summary.spend =
    Math.round((footprint.food.total.spendTonnesC02 + Number.EPSILON) * 100) /
    100;
  footprint.summary.total.food =
    Math.round(
      (footprint.summary.diet +
        footprint.summary.waste +
        footprint.summary.spend +
        Number.EPSILON) *
        100
    ) / 100;
}

function completeFood() {
  footprint.complete.food = true;
}

// Shopping event listener

const shoppingComplete = document.querySelectorAll('.shopping-complete');

shoppingComplete.forEach((button) => {
  button.addEventListener('click', (e) => {
    calculateShopping();
  });
});

// Shopping question functions

function chooseClothesFootwear(value) {
  let months = 12;
  let gtoTonnes = 1000000;

  footprint.shopping.spend.clothing = value;
  footprint.shopping.total.clothingTonnesC02 =
    ((value * carbon.shopping.gC02Pound.clothing) / gtoTonnes) * months;

  if (footprint.complete.shopping === true) {
    calculateShopping();
  }
}

function chooseHealthBeauty(value) {
  let months = 12;
  let gtoTonnes = 1000000;

  footprint.shopping.spend.healthBeauty = value;
  footprint.shopping.total.healthBeautyTonnesC02 =
    ((value * carbon.shopping.gC02Pound.healthBeauty) / gtoTonnes) * months;

  if (footprint.complete.shopping === true) {
    calculateShopping();
  }
}

function chooseContracts(value) {
  let months = 12;
  let gtoTonnes = 1000000;

  footprint.shopping.spend.contracts = value;
  footprint.shopping.total.contractsTonnesC02 =
    ((value * carbon.shopping.gC02Pound.contracts) / gtoTonnes) * months;

  if (footprint.complete.shopping === true) {
    calculateShopping();
  }
}

function choosePets(value) {
  let months = 12;
  let gtoTonnes = 1000000;

  footprint.shopping.spend.pets = value;
  footprint.shopping.total.petsTonnesC02 =
    ((value * carbon.shopping.gC02Pound.pets) / gtoTonnes) * months;

  if (footprint.complete.shopping === true) {
    calculateShopping();
  }
}

function chooseHouseholdItem(item) {
  let householdItems = footprint.shopping.householdItems;
  let cost = carbon.shopping.avgCostHouseholdItems;

  if (householdItems[item] == false) {
    householdItems[item] = true;
    footprint.shopping.spend.householdItems += cost[item];
  } else {
    householdItems[item] = false;
    footprint.shopping.spend.householdItems -= cost[item];
  }

  let gtoTonnes = 1000000;
  footprint.shopping.total.householdItemsTonnesC02 =
    (footprint.shopping.spend.householdItems *
      carbon.shopping.gC02Pound.householdItems) /
    gtoTonnes;

  if (footprint.complete.shopping === true) {
    calculateShopping();
  }
}

// Shopping footprint functions

function calculateShopping() {
  show.transport();
  calculateShoppingSummary();
  completeShopping();
  calculateFootprint();
}

function calculateShoppingSummary() {
  footprint.summary.clothing =
    Math.round(
      (footprint.shopping.total.clothingTonnesC02 + Number.EPSILON) * 100
    ) / 100;
  footprint.summary.healthBeauty =
    Math.round(
      (footprint.shopping.total.healthBeautyTonnesC02 + Number.EPSILON) * 100
    ) / 100;
  footprint.summary.pets =
    Math.round(
      (footprint.shopping.total.petsTonnesC02 + Number.EPSILON) * 100
    ) / 100;
  footprint.summary.contracts =
    Math.round(
      (footprint.shopping.total.contractsTonnesC02 + Number.EPSILON) * 100
    ) / 100;
  footprint.summary.householdItems =
    Math.round(
      (footprint.shopping.total.householdItemsTonnesC02 + Number.EPSILON) * 100
    ) / 100;
  footprint.summary.baselineSpend =
    Math.round(
      (footprint.shopping.total.baselineTonnesC02 + Number.EPSILON) * 100
    ) / 100;
  footprint.summary.total.shopping =
    Math.round(
      (footprint.shopping.total.clothingTonnesC02 +
        footprint.shopping.total.healthBeautyTonnesC02 +
        footprint.shopping.total.petsTonnesC02 +
        footprint.shopping.total.contractsTonnesC02 +
        footprint.shopping.total.householdItemsTonnesC02 +
        footprint.shopping.total.baselineTonnesC02 +
        Number.EPSILON) *
        100
    ) / 100;
}

function completeShopping() {
  footprint.complete.shopping = true;
}

// Transport event listener

const transportComplete = document.querySelectorAll('.transport-complete');

transportComplete.forEach((button) => {
  button.addEventListener('click', (e) => {
    calculateTransport();
    calculateFootprint();
  });
});

// Transport question functions

function setBaselineCar() {
  footprint.transport.car.type = 'smallCar';
  footprint.transport.car.mpl = 7.9;
}

function chooseCarType(carType) {
  footprint.transport.car.type = carType;
  footprint.transport.car.mpl = carbon.transport.mpl[carType];

  calculateCar();

  if (footprint.complete.transport === true) {
    calculateTransport();
  }
}

function chooseCarHours(hours) {
  footprint.transport.car.hoursWeekly = hours;
  footprint.transport.car.milesYearly = hours * carbon.transport.mph.car * 52;

  calculateCar();
  if (footprint.complete.transport === true) {
    calculateTransport();
  }
}

function calculateCar() {
  if (footprint.transport.car.type == 'electricCar') {
    let whtokWh = 1000;
    footprint.transport.car.kWhYearly =
      (footprint.transport.car.milesYearly * footprint.transport.car.mpl) /
      whtokWh;

    footprint.transport.total.car.fuelTonnesC02 =
      (footprint.transport.car.litresYearly *
        carbon.transport.kgC02.electricitykWh) /
      1000;
    footprint.transport.total.car.depreciationTonnesC02 =
      (footprint.transport.car.milesYearly *
        carbon.transport.kgC02.mileElectricCar) /
      1000;
    footprint.transport.total.car.totalTonnesC02 =
      footprint.transport.total.car.fuelTonnesC02 +
      footprint.transport.total.car.depreciationTonnesC02;
  } else {
    footprint.transport.car.litresYearly =
      footprint.transport.car.milesYearly / footprint.transport.car.mpl;

    footprint.transport.total.car.fuelTonnesC02 =
      (footprint.transport.car.litresYearly * carbon.transport.kgC02.petrolL) /
      1000;
    footprint.transport.total.car.depreciationTonnesC02 =
      (footprint.transport.car.milesYearly *
        carbon.transport.kgC02.milePetrolCar) /
      1000;
    footprint.transport.total.car.totalTonnesC02 =
      footprint.transport.total.car.fuelTonnesC02 +
      footprint.transport.total.car.depreciationTonnesC02;
  }
}

function choosePublicTransportHours(hours) {
  footprint.transport.publicTransport.hoursWeekly = hours;
  footprint.transport.publicTransport.milesYearly =
    hours * carbon.transport.mph.publicTransport * 52;

  footprint.transport.total.publicTransportTonnesC02 =
    (footprint.transport.publicTransport.milesYearly *
      carbon.transport.kgC02.milePublicTransport) /
    1000;

  if (footprint.complete.transport === true) {
    calculateTransport();
  }
}

function calculateFlights() {
  if (!footprint.transport.flights.offset) {
    footprint.transport.flights.offset = 0;
  }
  footprint.transport.total.flightTonnesC02 =
    (footprint.transport.flights.milesYearly *
      carbon.transport.kgC02.mileFlight *
      ((100 - footprint.transport.flights.offset) / 100)) /
    1000;

  if (footprint.complete.transport === true) {
    calculateTransport();
  }
}

function updateFlights() {
  let under2Hours = document.querySelector(
    '[data-value="under2Hours"] .flight-counter'
  );
  let from2To4Hours = document.querySelector(
    '[data-value="from2To4Hours"] .flight-counter'
  );
  let from4To8Hours = document.querySelector(
    '[data-value="from4To8Hours"] .flight-counter'
  );
  let from8To12Hours = document.querySelector(
    '[data-value="from8To12Hours"] .flight-counter'
  );
  let from12To16Hours = document.querySelector(
    '[data-value="from12To16Hours"] .flight-counter'
  );
  let from16Hours = document.querySelector(
    '[data-value="from16Hours"] .flight-counter'
  );

  under2Hours.textContent = footprint.transport.flights.under2Hours;
  from2To4Hours.textContent = footprint.transport.flights.from2To4Hours;
  from4To8Hours.textContent = footprint.transport.flights.from4To8Hours;
  from8To12Hours.textContent = footprint.transport.flights.from8To12Hours;
  from12To16Hours.textContent = footprint.transport.flights.from12To16Hours;
  from16Hours.textContent = footprint.transport.flights.from16Hours;
}

function chooseOffset(percent) {
  footprint.transport.flights.offset = percent;
  calculateFlights();
}

// Transport footprint functions

function calculateTransport() {
  calculateTransportSummary();
  completeTransport();
  calculateFootprint();
}

function calculateTransportSummary() {
  footprint.summary.car =
    Math.round(
      (footprint.transport.total.car.totalTonnesC02 + Number.EPSILON) * 100
    ) / 100;
  footprint.summary.publicTransport =
    Math.round(
      (footprint.transport.total.publicTransportTonnesC02 + Number.EPSILON) *
        100
    ) / 100;
  footprint.summary.flights =
    Math.round(
      (footprint.transport.total.flightTonnesC02 + Number.EPSILON) * 100
    ) / 100;
  footprint.summary.total.transport =
    Math.round(
      (footprint.transport.total.car.totalTonnesC02 +
        footprint.transport.total.publicTransportTonnesC02 +
        footprint.transport.total.flightTonnesC02 +
        Number.EPSILON) *
        100
    ) / 100;
}

function completeTransport() {
  footprint.complete.transport = true;
}

// Flight event listener

const addFlight = document.querySelectorAll('.flight-button.add');

addFlight.forEach((button) => {
  button.addEventListener('click', (e) => {
    let dataValue = e.target.parentNode.dataset.value;

    footprint.transport.flights[dataValue]++;
    footprint.transport.flights.milesYearly +=
      carbon.transport.flightMiles[dataValue];
    calculateFlights();
    updateFlights();
  });
});

const removeFlight = document.querySelectorAll('.flight-button.remove');

removeFlight.forEach((button) => {
  button.addEventListener('click', (e) => {
    let dataValue = e.target.parentNode.dataset.value;

    if (footprint.transport.flights[dataValue] > 0) {
      footprint.transport.flights[dataValue]--;
      footprint.transport.flights.milesYearly -=
        carbon.transport.flightMiles[dataValue];
      calculateFlights();
      updateFlights();
    }
  });
});

// Final footprint calculation

function calculateFootprint() {
  if (
    footprint.summary.total.home &&
    footprint.summary.total.food &&
    footprint.summary.total.shopping &&
    footprint.summary.total.transport
  ) {
    sumFootprint();
    updateFootprintHiddenFormFields();
  }
}

function sumFootprint() {
  exactFootprint =
    footprint.summary.total.home +
    footprint.summary.total.food +
    footprint.summary.total.shopping +
    footprint.summary.total.transport;
  roundedFootprint = Math.round((exactFootprint + Number.EPSILON) * 100) / 100;
  footprint.summary.total.footprint = roundedFootprint;
}

// The function to add hidden form fields on Webflow
function updateFootprintHiddenFormFields() {
  document.getElementById('hiddenKey01').value =
    footprint.summary.total.footprint;
  document.getElementById('hiddenKey02').value = JSON.stringify(footprint);
}

// Visualisation calculations

function buildVisualisation() {
  let userFootprint = footprint.summary.total.footprint;
  let homeFootprint = footprint.summary.total.home;
  let foodFootprint = footprint.summary.total.food;
  let shoppingFootprint = footprint.summary.total.shopping;
  let transportFootprint = footprint.summary.total.transport;

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  const footprintTotal = document.querySelectorAll('.tonnes-c02');
  footprintTotal.forEach((item) => {
    item.textContent = userFootprint;
  });

  const lessOrMore = document.querySelectorAll('.less-or-more');
  lessOrMore.forEach((item) => {
    item.textContent =
      userFootprint > visualisation.averageUKFootprint ? 'more' : 'less';
  });

  const treeCounter = document.querySelectorAll('.tree-counter');
  treeCounter.forEach((item) => {
    let value = Math.round((userFootprint * 1000) / visualisation.treeKgC02);
    item.textContent = numberWithCommas(value);
  });

  const lightbulbCounter = document.querySelectorAll('.lightbulb-counter');
  lightbulbCounter.forEach((item) => {
    value = Math.round((userFootprint * 1000) / visualisation.lightbulbKgC02);
    item.textContent = numberWithCommas(value);
  });

  // Chart.js
  let ctx = document.getElementById('myChart').getContext('2d');
  let myChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Home', 'Shopping', 'Transport', 'Food'],
      datasets: [
        {
          label: 'tonnes of C02',
          data: [
            homeFootprint,
            shoppingFootprint,
            transportFootprint,
            foodFootprint,
          ],
          backgroundColor: [
            'rgba(85, 161, 229)',
            'rgba(237, 110, 133)',
            'rgba(242, 163, 84)',
            'rgba(248, 206, 107)',
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      legend: {
        display: false,
      },
    },
  });
}
