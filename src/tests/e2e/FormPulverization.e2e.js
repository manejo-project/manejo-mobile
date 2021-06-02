describe('FormPulverization component', () => {
  var originalTimeout;

  beforeEach(function () {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
  });

  afterEach(function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });

  it('should be able to do a pulverization sample with one product', async () => {

    const openPulverization = await driver.$("~pulverization-form-button");

    await openPulverization.click();

    const calendarContainer = await driver.$("~calendar-container");

    await calendarContainer.click();

    await driver.touchAction([
      { action: 'wait', ms: 200 },
      { action: 'tap', x: 822, y: 742 },
      { action: 'wait', ms: 200 },
      { action: 'tap', x: 540, y: 1183 },
      { action: 'wait', ms: 200 },
      { action: 'tap', x: 808, y: 1643 },
      { action: 'wait', ms: 200 }
    ])

    const growthPhasePicker = await driver.$("~operationData-growthPhasePicker");

    await growthPhasePicker.click();

    await driver.touchAction([
      { action: 'tap', x: 141, y: 775 },
      { action: 'wait', ms: 200 }
    ]);

    const caldaVolumeInput = await driver.$("~operationData-caldaVolumeInput");

    await driver.setValueImmediate(caldaVolumeInput.elementId, "2");

    await driver.touchAction({ action: 'tap', x: 934, y: 1986 });

    const yesButton = await driver.$("~operationData-yesButton");

    await yesButton.click();

    const calendarContainer2 = await driver.$$("~calendar-container");

    await calendarContainer2[1].click();

    await driver.touchAction([
      { action: 'wait', ms: 200 },
      { action: 'tap', x: 239, y: 742 },
      { action: 'wait', ms: 200 },
      { action: 'tap', x: 540, y: 1183 },
      { action: 'wait', ms: 200 },
      { action: 'tap', x: 808, y: 1643 },
      { action: 'wait', ms: 200 }
    ])

    await driver.touchAction([
      { action: 'press', x: 1000, y: 1639 },
      { action: 'moveTo', x: 963, y: 911 },
      'release',
    ]);

    const nextButton = await driver.$("~operationData-nextButton-create");

    await nextButton.click();

    const selectClassItem = await driver.$("~selectClass-itemList-Fungicida");

    await selectClassItem.click();

    const selectTargetItem = await driver.$("~selectTarget-itemList-FerrugemAsiática");

    await selectTargetItem.click();

    const selectProductItem = await driver.$("~selectProduct-itemList-PREVINIL(G)");

    await selectProductItem.click();

    const doseInput = await driver.$("~insertData-doseInput");

    await driver.setValueImmediate(doseInput.elementId, "2");

    const productPriceInput = await driver.$("~insertData-productPriceInput");

    await driver.setValueImmediate(productPriceInput.elementId, "2");

    await driver.touchAction({ action: 'tap', x: 934, y: 1986 });

    const insertDataNextButton = await driver.$("~insertData-nextButton");

    await insertDataNextButton.click();

    const insertDataNoButton = await driver.$("~insertData-noButton");

    await insertDataNoButton.click();

    const growthPhase = await driver.$("~revision-growthPhase");

    const textGrowthPhase = await growthPhase.getText();

    const volume = await driver.$("~revision-volume");

    const textVolume = await volume.getText();

    await driver.touchAction([
      { action: 'press', x: 1000, y: 1639 },
      { action: 'moveTo', x: 963, y: 911 },
      'release',
    ]);

    const cards = await driver.$$("~card");

    const cardTitle = await cards[2].$("~card-title");

    const productName = await cardTitle.getText();

    expect(productName).toBe("PREVINIL (G)");
    expect(textGrowthPhase).toBe('V1');
    expect(textVolume).toBe('2');

    const saveButton = await driver.$("~revision-saveButton");

    await saveButton.click();
  });

  it('should be able to do a pulverization sample with two products', async () => {

    const openPulverization = await driver.$("~pulverization-form-button");

    await openPulverization.click();

    const calendarContainer = await driver.$("~calendar-container");

    await calendarContainer.click();

    await driver.touchAction([
      { action: 'wait', ms: 200 },
      { action: 'tap', x: 822, y: 742 },
      { action: 'wait', ms: 200 },
      { action: 'tap', x: 540, y: 1183 },
      { action: 'wait', ms: 200 },
      { action: 'tap', x: 808, y: 1643 },
      { action: 'wait', ms: 200 }
    ])

    const growthPhasePicker = await driver.$("~operationData-growthPhasePicker");

    await growthPhasePicker.click();

    await driver.touchAction([
      { action: 'tap', x: 141, y: 775 },
      { action: 'wait', ms: 200 }
    ]);

    const caldaVolumeInput = await driver.$("~operationData-caldaVolumeInput");

    await driver.setValueImmediate(caldaVolumeInput.elementId, "2");

    await driver.touchAction({ action: 'tap', x: 934, y: 1986 });

    const yesButton = await driver.$("~operationData-yesButton");

    await yesButton.click();

    const calendarContainer2 = await driver.$$("~calendar-container");

    await calendarContainer2[1].click();

    await driver.touchAction([
      { action: 'wait', ms: 200 },
      { action: 'tap', x: 239, y: 742 },
      { action: 'wait', ms: 200 },
      { action: 'tap', x: 540, y: 1183 },
      { action: 'wait', ms: 200 },
      { action: 'tap', x: 808, y: 1643 },
      { action: 'wait', ms: 200 }
    ])

    driver.touchAction([
      { action: 'press', x: 1000, y: 1639 },
      { action: 'moveTo', x: 963, y: 911 },
      'release',
    ]);

    const nextButton = await driver.$("~operationData-nextButton-create");

    await nextButton.click();

    const selectClassItem1 = await driver.$("~selectClass-itemList-Fungicida");

    await selectClassItem1.click();

    const selectTargetItem1 = await driver.$("~selectTarget-itemList-FerrugemAsiática");

    await selectTargetItem1.click();

    const selectProductItem1 = await driver.$("~selectProduct-itemList-PREVINIL(G)");

    await selectProductItem1.click();

    const doseInput = await driver.$("~insertData-doseInput");

    await driver.setValueImmediate(doseInput.elementId, "2");

    const productPriceInput = await driver.$("~insertData-productPriceInput");

    await driver.setValueImmediate(productPriceInput.elementId, "2");

    await driver.touchAction({ action: 'tap', x: 934, y: 1986 });

    const insertDataNextButton = await driver.$("~insertData-nextButton");

    await insertDataNextButton.click();

    const insertDataYesButton = await driver.$("~insertData-yesButton");

    await insertDataYesButton.click();

    const selectClassItem2 = await driver.$("~selectClass-itemList-Fungicida");

    await selectClassItem2.click();

    const selectTargetItem2 = await driver.$("~selectTarget-itemList-ManchaParda");

    await selectTargetItem2.click();

    const selectProductItem2 = await driver.$("~selectProduct-itemList-FOX(L)");

    await selectProductItem2.click();

    await driver.setValueImmediate(doseInput.elementId, "2");

    await driver.setValueImmediate(productPriceInput.elementId, "2");

    await driver.touchAction({ action: 'tap', x: 934, y: 1986 });

    await insertDataNextButton.click();

    const insertDataNoButton = await driver.$("~insertData-noButton");

    await insertDataNoButton.click();

    const growthPhase = await driver.$("~revision-growthPhase");

    const textGrowthPhase = await growthPhase.getText();

    const volume = await driver.$("~revision-volume");

    const textVolume = await volume.getText();

    await driver.touchAction([
      { action: 'press', x: 1000, y: 1639 },
      { action: 'moveTo', x: 963, y: 911 },
      'release',
    ]);

    const cards = await driver.$$("~card");

    const card1Title = await cards[2].$("~card-title");

    const product1Name = await card1Title.getText();

    const card2Title = await cards[3].$("~card-title");

    const product2Name = await card2Title.getText();

    expect(product1Name).toBe("PREVINIL (G)");
    expect(product2Name).toBe("FOX (L)");
    expect(textGrowthPhase).toBe('V1');
    expect(textVolume).toBe('2');

    const saveButton = await driver.$("~revision-saveButton");

    await saveButton.click();
  });

  it('should be able to make a product addition by button +NewProduct', async () => {

    const openPulverization = await driver.$("~pulverization-form-button");

    await openPulverization.click();

    const calendarContainer = await driver.$("~calendar-container");

    await calendarContainer.click();

    await driver.touchAction([
      { action: 'wait', ms: 200 },
      { action: 'tap', x: 822, y: 742 },
      { action: 'wait', ms: 200 },
      { action: 'tap', x: 540, y: 1183 },
      { action: 'wait', ms: 200 },
      { action: 'tap', x: 808, y: 1643 },
      { action: 'wait', ms: 200 }
    ])

    const growthPhasePicker = await driver.$("~operationData-growthPhasePicker");

    await growthPhasePicker.click();

    await driver.touchAction([
      { action: 'tap', x: 141, y: 775 },
      { action: 'wait', ms: 200 }
    ]);

    const caldaVolumeInput = await driver.$("~operationData-caldaVolumeInput");

    await driver.setValueImmediate(caldaVolumeInput.elementId, "2");

    await driver.touchAction({ action: 'tap', x: 934, y: 1986 });

    const yesButton = await driver.$("~operationData-yesButton");

    await yesButton.click();

    const calendarContainer2 = await driver.$$("~calendar-container");

    await calendarContainer2[1].click();

    await driver.touchAction([
      { action: 'wait', ms: 200 },
      { action: 'tap', x: 239, y: 742 },
      { action: 'wait', ms: 200 },
      { action: 'tap', x: 540, y: 1183 },
      { action: 'wait', ms: 200 },
      { action: 'tap', x: 808, y: 1643 },
      { action: 'wait', ms: 200 }
    ])

    driver.touchAction([
      { action: 'press', x: 1000, y: 1639 },
      { action: 'moveTo', x: 963, y: 911 },
      'release',
    ]);

    const nextButton = await driver.$("~operationData-nextButton-create");

    await nextButton.click();

    const selectClassItem1 = await driver.$("~selectClass-itemList-Fungicida");

    await selectClassItem1.click();

    const selectTargetItem1 = await driver.$("~selectTarget-itemList-FerrugemAsiática");

    await selectTargetItem1.click();

    const selectProductItem1 = await driver.$("~selectProduct-itemList-PREVINIL(G)");

    await selectProductItem1.click();

    const doseInput = await driver.$("~insertData-doseInput");

    await driver.setValueImmediate(doseInput.elementId, "2");

    const productPriceInput = await driver.$("~insertData-productPriceInput");

    await driver.setValueImmediate(productPriceInput.elementId, "2");

    await driver.touchAction({ action: 'tap', x: 934, y: 1986 });

    const insertDataNextButton = await driver.$("~insertData-nextButton");

    await insertDataNextButton.click();

    const insertDataNoButton = await driver.$("~insertData-noButton");

    await insertDataNoButton.click();

    const newProductButton = await driver.$("~revision-newProductButton");

    await newProductButton.click();

    const selectClassItem2 = await driver.$("~selectClass-itemList-Fungicida");

    await selectClassItem2.click();

    const selectTargetItem2 = await driver.$("~selectTarget-itemList-ManchaParda");

    await selectTargetItem2.click();

    const selectProductItem2 = await driver.$("~selectProduct-itemList-FOX(L)");

    await selectProductItem2.click();

    await driver.setValueImmediate(doseInput.elementId, "2");

    await driver.setValueImmediate(productPriceInput.elementId, "2");

    await driver.touchAction({ action: 'tap', x: 934, y: 1986 });

    await insertDataNextButton.click();

    await insertDataNoButton.click();

    const growthPhase = await driver.$("~revision-growthPhase");

    const textGrowthPhase = await growthPhase.getText();

    const volume = await driver.$("~revision-volume");

    const textVolume = await volume.getText();

    await driver.touchAction([
      { action: 'press', x: 1000, y: 1639 },
      { action: 'moveTo', x: 963, y: 911 },
      'release',
    ]);


    const cards = await driver.$$("~card");

    const card1Title = await cards[2].$("~card-title");

    const product1Name = await card1Title.getText();

    const card2Title = await cards[3].$("~card-title");

    const product2Name = await card2Title.getText();

    expect(product1Name).toBe("PREVINIL (G)");
    expect(product2Name).toBe("FOX (L)");
    expect(textGrowthPhase).toBe('V1');
    expect(textVolume).toBe('2');

    const saveButton = await driver.$("~revision-saveButton");

    await saveButton.click();
  });

  it('should be able to change the operation data', async () => {

    const openPulverization = await driver.$("~pulverization-form-button");

    await openPulverization.click();

    const calendarContainer = await driver.$("~calendar-container");

    await calendarContainer.click();

    await driver.touchAction([
      { action: 'wait', ms: 200 },
      { action: 'tap', x: 822, y: 742 },
      { action: 'wait', ms: 200 },
      { action: 'tap', x: 540, y: 1183 },
      { action: 'wait', ms: 200 },
      { action: 'tap', x: 808, y: 1643 },
      { action: 'wait', ms: 200 }
    ])

    const growthPhasePicker = await driver.$("~operationData-growthPhasePicker");

    await growthPhasePicker.click();

    await driver.touchAction([
      { action: 'tap', x: 141, y: 775 },
      { action: 'wait', ms: 200 }
    ]);

    const caldaVolumeInput = await driver.$("~operationData-caldaVolumeInput");

    await driver.setValueImmediate(caldaVolumeInput.elementId, "2");

    await driver.touchAction({ action: 'tap', x: 934, y: 1986 });

    const yesButton = await driver.$("~operationData-yesButton");

    await yesButton.click();

    const calendarContainer2 = await driver.$$("~calendar-container");

    await calendarContainer2[1].click();

    await driver.touchAction([
      { action: 'wait', ms: 200 },
      { action: 'tap', x: 239, y: 742 },
      { action: 'wait', ms: 200 },
      { action: 'tap', x: 540, y: 1183 },
      { action: 'wait', ms: 200 },
      { action: 'tap', x: 808, y: 1643 },
      { action: 'wait', ms: 200 }
    ])

    driver.touchAction([
      { action: 'press', x: 1000, y: 1639 },
      { action: 'moveTo', x: 963, y: 911 },
      'release',
    ]);

    const nextButton = await driver.$("~operationData-nextButton-create");

    await nextButton.click();

    const selectClassItem = await driver.$("~selectClass-itemList-Fungicida");

    await selectClassItem.click();

    const selectTargetItem = await driver.$("~selectTarget-itemList-FerrugemAsiática");

    await selectTargetItem.click();

    const selectProductItem = await driver.$("~selectProduct-itemList-PREVINIL(G)");

    await selectProductItem.click();

    const doseInput = await driver.$("~insertData-doseInput");

    await driver.setValueImmediate(doseInput.elementId, "2");

    const productPriceInput = await driver.$("~insertData-productPriceInput");

    await driver.setValueImmediate(productPriceInput.elementId, "2");

    await driver.touchAction({ action: 'tap', x: 934, y: 1986 });

    const insertDataNextButton = await driver.$("~insertData-nextButton");

    await insertDataNextButton.click();

    const insertDataNoButton = await driver.$("~insertData-noButton");

    await insertDataNoButton.click();

    const cardEditButton = await driver.$("~card-edit");

    await cardEditButton.click();

    await driver.replaceValue(caldaVolumeInput.elementId, "4");

    await driver.touchAction({ action: 'tap', x: 934, y: 1986 });

    const noButton = await driver.$("~operationData-noButton");

    await noButton.click();

    await driver.touchAction([
      { action: 'press', x: 1000, y: 1639 },
      { action: 'moveTo', x: 963, y: 911 },
      'release',
    ]);

    await nextButton.click();

    const growthPhase = await driver.$("~revision-growthPhase");

    const textGrowthPhase = await growthPhase.getText();

    const volume = await driver.$("~revision-volume");

    const textVolume = await volume.getText();

    await driver.touchAction([
      { action: 'press', x: 1000, y: 1639 },
      { action: 'moveTo', x: 963, y: 911 },
      'release',
    ]);

    const cards = await driver.$$("~card");

    const cardTitle = await cards[2].$("~card-title");

    const productName = await cardTitle.getText();

    expect(productName).toBe("PREVINIL (G)");
    expect(textGrowthPhase).toBe('V1');
    expect(textVolume).toBe('4');

    const saveButton = await driver.$("~revision-saveButton");

    await saveButton.click();
  });

  it('should be able to navigate back between screens and edit choices', async () => {

    const openPulverization = await driver.$("~pulverization-form-button");

    await openPulverization.click();

    const calendarContainer = await driver.$("~calendar-container");

    await calendarContainer.click();

    await driver.touchAction([
      { action: 'wait', ms: 200 },
      { action: 'tap', x: 822, y: 742 },
      { action: 'wait', ms: 200 },
      { action: 'tap', x: 540, y: 1183 },
      { action: 'wait', ms: 200 },
      { action: 'tap', x: 808, y: 1643 },
      { action: 'wait', ms: 200 }
    ])

    const growthPhasePicker = await driver.$("~operationData-growthPhasePicker");

    await growthPhasePicker.click();

    await driver.touchAction([
      { action: 'tap', x: 141, y: 775 },
      { action: 'wait', ms: 200 }
    ]);

    const caldaVolumeInput = await driver.$("~operationData-caldaVolumeInput");

    await driver.setValueImmediate(caldaVolumeInput.elementId, "2");

    await driver.touchAction({ action: 'tap', x: 934, y: 1986 });

    const yesButton = await driver.$("~operationData-yesButton");

    await yesButton.click();

    const calendarContainer2 = await driver.$$("~calendar-container");

    await calendarContainer2[1].click();

    await driver.touchAction([
      { action: 'wait', ms: 200 },
      { action: 'tap', x: 239, y: 742 },
      { action: 'wait', ms: 200 },
      { action: 'tap', x: 540, y: 1183 },
      { action: 'wait', ms: 200 },
      { action: 'tap', x: 808, y: 1643 },
      { action: 'wait', ms: 200 }
    ])

    await driver.touchAction([
      { action: 'press', x: 1000, y: 1639 },
      { action: 'moveTo', x: 963, y: 911 },
      'release',
    ]);

    const nextButton = await driver.$("~operationData-nextButton-create");

    await nextButton.click();

    const selectClassItem1 = await driver.$("~selectClass-itemList-Fungicida");

    await selectClassItem1.click();

    const selectTargetItem1 = await driver.$("~selectTarget-itemList-FerrugemAsiática");

    await selectTargetItem1.click();

    const selectProductItem1 = await driver.$("~selectProduct-itemList-PREVINIL(G)");

    await selectProductItem1.click();

    const buttonPrev = await driver.$("~button-prev");

    await buttonPrev.click();

    const selectTargetButtonPrev = await driver.$("~selectProduct-button-prev");

    await selectTargetButtonPrev.click();

    const selectProductButtonPrev = await driver.$("~selectTarget-button-prev");

    await selectProductButtonPrev.click();

    const selectClassSearchInput = await driver.$("~search-input");

    await driver.setValueImmediate(selectClassSearchInput.elementId, "Fungicida");

    const selectClassItem2 = await driver.$("~selectClass-itemList-Fungicida");

    await driver.touchAction({ action: 'tap', x: 934, y: 1986 });

    await selectClassItem2.click();

    const selectTargetSearchInput = await driver.$("~search-input");

    await driver.setValueImmediate(selectTargetSearchInput.elementId, "mancha");

    await driver.touchAction({ action: 'tap', x: 934, y: 1986 });

    const selectTargetItem2 = await driver.$("~selectTarget-itemList-ManchaParda");

    await selectTargetItem2.click();

    const selectProductSearchInput = await driver.$("~search-input");

    await driver.setValueImmediate(selectProductSearchInput.elementId, "fox");

    await driver.touchAction({ action: 'tap', x: 934, y: 1986 });

    const selectProductItem2 = await driver.$("~selectProduct-itemList-FOX(L)");

    await selectProductItem2.click();

    const doseInput = await driver.$("~insertData-doseInput");

    await driver.setValueImmediate(doseInput.elementId, "2");

    const productPriceInput = await driver.$("~insertData-productPriceInput");

    await driver.setValueImmediate(productPriceInput.elementId, "2");

    await driver.touchAction({ action: 'tap', x: 934, y: 1986 });

    const insertDataNextButton = await driver.$("~insertData-nextButton");

    await insertDataNextButton.click();

    const insertDataNoButton = await driver.$("~insertData-noButton");

    await insertDataNoButton.click();

    const growthPhase = await driver.$("~revision-growthPhase");

    const textGrowthPhase = await growthPhase.getText();

    const volume = await driver.$("~revision-volume");

    const textVolume = await volume.getText();

    await driver.touchAction([
      { action: 'press', x: 1000, y: 1639 },
      { action: 'moveTo', x: 963, y: 911 },
      'release',
    ]);

    const cards = await driver.$$("~card");

    const cardTitle = await cards[2].$("~card-title");

    const productName = await cardTitle.getText();

    expect(productName).toBe("FOX (L)");
    expect(textGrowthPhase).toBe('V1');
    expect(textVolume).toBe('2');

    const saveButton = await driver.$("~revision-saveButton");

    await saveButton.click();
  });

});

