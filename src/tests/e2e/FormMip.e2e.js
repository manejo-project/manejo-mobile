describe('FormMip component', () => {
  var originalTimeout;

  beforeEach(function () {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
  });

  afterEach(function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });

  it('should to be able create a mip form with one of each', async () => {
    const openMip = await driver.$('~mip-form-button')
    await openMip.click()

    const calendarContainer = await driver.$('~calendar-container')
    await calendarContainer.click()

    driver.touchAction([
      { action: 'wait', ms: 200 },
      { action: 'tap', x: 822, y: 742 },
      { action: 'wait', ms: 200 },
      { action: 'tap', x: 540, y: 1183 },
      { action: 'wait', ms: 200 },
      { action: 'tap', x: 808, y: 1643 },
      { action: 'wait', ms: 200 }
    ])

    const growthPhasePicker = await driver.$("~mipSample-growthPhasePicker");
    await growthPhasePicker.click();

    await driver.touchAction([
      { action: 'wait', ms: 400 },
      { action: 'tap', x: 141, y: 775},
    ]);

    const desfolhaAnotherValue = await driver.$('~mipSample-desfolhaAnotherValue');
    await desfolhaAnotherValue.click()

    const desfolhaAnotherValueInput = await driver.$("~mipSample-desfolhaAnotherValueInput");
    await driver.setValueImmediate(desfolhaAnotherValueInput.elementId, "10");

    const desfolhaAnotherValueButtonConfirm = await driver.$("~mipSample-desfolhaAnotherValueButtonConfirm");
    await driver.touchAction([
      { action: 'tap', x: 934, y: 1986},
      { action: 'wait', ms: 200 }
    ]);
    await desfolhaAnotherValueButtonConfirm.click();

    const nextButtonMipSample = await driver.$("~mipSample-nextButton");
    await nextButtonMipSample.click();

    const searchPest = await driver.$("~pestOccurrence-pestSearchInput")
    await driver.setValueImmediate(searchPest.elementId, "Lagarta da Soja");
    await driver.touchAction([
      { action: 'tap', x: 934, y: 1986},
      { action: 'wait', ms: 200 }
    ]);

    const pestItem = await driver.$("~Lagarta da Soja");
    await pestItem.click();

    const pestItemSizeSmall = await driver.$("~pestOccurrence-pestItemSizeSmall");
    await pestItemSizeSmall.click();


    const pestItemAverageInput = await driver.$("~pestOccurrence-pestItemAverageInput");
    await driver.setValueImmediate(pestItemAverageInput.elementId, "2,5");

    const pestItemAverageButtonConfirm = await driver.$("~pestOccurrence-pestItemAverageButtonConfirm");
    await pestItemAverageButtonConfirm.click();

    const pestItemChevronDown = await driver.$("~Lagarta da Soja ChevronDown")
    await pestItemChevronDown.click();


    const pestItemChevronUp = await driver.$("~Lagarta da Soja ChevronUp")
    await pestItemChevronUp.click();

    const nextButtonPestOccurrence = await driver.$("~pestOccurrence-nextButton");
    await nextButtonPestOccurrence.click();

    const searchPestDiseases = await driver.$("~pestDiseasesOccurrence-pestDiseasesSearchInput")
    await driver.setValueImmediate(searchPestDiseases.elementId, "Lagarta com Nomuraea");
    driver.touchAction([
      { action: 'tap', x: 934, y: 1986},
      { action: 'wait', ms: 200 }
    ]);

    const pestDiseasesItem = await driver.$("~pestDiseasesOccurrence-pestDiseasesItemButtonAdd");
    await pestDiseasesItem.click();

    const pestDiseasesItemAverageInput = await driver.$("~pestDiseasesOccurrence-pestDiseasesItemAverageInput");
    await driver.setValueImmediate(pestDiseasesItemAverageInput.elementId, "2,0");

    const pestDiseasesItemAverageButtonConfirm = await driver.$("~pestDiseasesOccurrence-pestDiseasesItemAverageButtonConfirm");
    await pestDiseasesItemAverageButtonConfirm.click();

    const nextButtonPestDiseasesOccurrence = await driver.$("~pestDiseasesOccurrence-nextButton");
    await nextButtonPestDiseasesOccurrence.click();

    const searchNaturalPredator = await driver.$("~naturalPredatorOccurrence-naturalPredatorSearchInput")
    await driver.setValueImmediate(searchNaturalPredator.elementId, "Lagarta com Baculovirus");
    driver.touchAction([
      { action: 'tap', x: 934, y: 1986},
      { action: 'wait', ms: 200 }
    ]);

    const naturalPredatorItem = await driver.$("~naturalPredatorOccurrence-naturalPredatorItemButtonAdd");
    await naturalPredatorItem.click();

    const naturalPredatorItemAverageInput = await driver.$("~naturalPredatorOccurrence-naturalPredatorItemAverageInput");
    await driver.setValueImmediate(naturalPredatorItemAverageInput.elementId, "3,0");

    const naturalPredatorItemAverageButtonConfirm = await driver.$("~naturalPredatorOccurrence-naturalPredatorItemAverageButtonConfirm");
    await naturalPredatorItemAverageButtonConfirm.click();

    const nextButtonNaturalPredatorOccurrence = await driver.$("~naturalPredatorOccurrence-nextButton");
    await nextButtonNaturalPredatorOccurrence.click();

    const growthPhase = await driver.$('~revision-growthPhase')
    const growthPhaseText = await growthPhase.getText();

    const desfolha = await driver.$('~revision-desfolha')
    const desfolhaText = await desfolha.getText();

    const sizePest = await driver.$('~revision-pestItemSize')
    const sizePestText = await sizePest.getText();

    const averagePest = await driver.$('~revision-pestItemAverage')
    const averagePestText = await averagePest.getText();


    expect(growthPhaseText).toBe('V1');
    expect(desfolhaText).toBe('10%');
    expect(sizePestText).toBe('< 1,5 cm');
    expect(averagePestText).toBe('2,5');

    await driver.touchAction([
      { action: 'wait', ms: 300 },
      { action: 'press', x: 770, y: 1955},
      { action: 'moveTo', x: 770, y: 1432},
      'release'
    ]);

    const flagPestDiseasesButton = await driver.$("~revision-flagPestDiseasesButton");
    await flagPestDiseasesButton.click();

    const averagePestDisease = await driver.$('~revision-pestDiseaseItemAverage');
    const averagePestDiseaseText = await averagePestDisease.getText();

    expect(averagePestDiseaseText).toBe('2,0');

    const flagNaturalPredatorButton = await driver.$("~revision-flagNaturalPredatorButton");
    await flagNaturalPredatorButton.click();

    const averageNaturalPredator = await driver.$('~revision-naturalPredatorItemAverage');
    const averageNaturalPredatorText = await averageNaturalPredator.getText();

    expect(averageNaturalPredatorText).toBe('3,0');

    const revisionSaveButton = await driver.$("~revision-saveButtonFormMip");
    await revisionSaveButton.click();

  });

  it('should to be able create a mip form with one of each && two sizes pestOccurrence', async () => {
    const openMip = await driver.$('~mip-form-button')
    await openMip.click()

    const calendarContainer = await driver.$('~calendar-container')
    await calendarContainer.click()

    driver.touchAction([
      { action: 'wait', ms: 200 },
      { action: 'tap', x: 822, y: 742 },
      { action: 'wait', ms: 200 },
      { action: 'tap', x: 540, y: 1183 },
      { action: 'wait', ms: 200 },
      { action: 'tap', x: 808, y: 1643 },
      { action: 'wait', ms: 200 }
    ])

    const growthPhasePicker = await driver.$("~mipSample-growthPhasePicker");
    await growthPhasePicker.click();

    await driver.touchAction([
      { action: 'wait', ms: 400 },
      { action: 'tap', x: 498, y: 1100},
    ]);

    const desfolhaFiveValue = await driver.$('~mipSample-desfolhaFiveValue');
    await desfolhaFiveValue.click()

    const nextButtonMipSample = await driver.$("~mipSample-nextButton");
    await nextButtonMipSample.click();

    const searchPest = await driver.$("~pestOccurrence-pestSearchInput")
    await driver.setValueImmediate(searchPest.elementId, "Lagarta da Soja");
    driver.touchAction([
      { action: 'tap', x: 934, y: 1986},
      { action: 'wait', ms: 200 }
    ]);

    const pestItem = await driver.$("~Lagarta da Soja");
    await pestItem.click();

    const pestItemSizeSmall = await driver.$("~pestOccurrence-pestItemSizeSmall");
    await pestItemSizeSmall.click();

    const pestItemAverageInput = await driver.$("~pestOccurrence-pestItemAverageInput");
    await driver.setValueImmediate(pestItemAverageInput.elementId, "2,5");

    const pestItemAverageButtonConfirm = await driver.$("~pestOccurrence-pestItemAverageButtonConfirm");
    await pestItemAverageButtonConfirm.click();

    const pestItemChevronDown = await driver.$("~Lagarta da Soja ChevronDown")
    await pestItemChevronDown.click();

    await driver.pause(2000);

    const pestItemOtherSize = await driver.$("~Lagarta da Soja add other size")
    await pestItemOtherSize.click();

    const pestItemSizeBigger = await driver.$("~pestOccurrence-pestItemSizeBigger");
    await pestItemSizeBigger.click();

    await driver.setValueImmediate(pestItemAverageInput.elementId, "1,5");

    await pestItemAverageButtonConfirm.click();

    await driver.pause(2000);

    const pestItemChevronUp = await driver.$("~Lagarta da Soja ChevronUp")
    await pestItemChevronUp.click();

    const nextButtonPestOccurrence = await driver.$("~pestOccurrence-nextButton");
    await nextButtonPestOccurrence.click();

    const searchPestDiseases = await driver.$("~pestDiseasesOccurrence-pestDiseasesSearchInput")
    await driver.setValueImmediate(searchPestDiseases.elementId, "Lagarta com Nomuraea");
    driver.touchAction([
      { action: 'tap', x: 934, y: 1986},
      { action: 'wait', ms: 200 }
    ]);

    const pestDiseasesItem = await driver.$("~pestDiseasesOccurrence-pestDiseasesItemButtonAdd");
    await pestDiseasesItem.click();

    const pestDiseasesItemAverageInput = await driver.$("~pestDiseasesOccurrence-pestDiseasesItemAverageInput");
    await driver.setValueImmediate(pestDiseasesItemAverageInput.elementId, "2,5");

    const pestDiseasesItemAverageButtonConfirm = await driver.$("~pestDiseasesOccurrence-pestDiseasesItemAverageButtonConfirm");
    await pestDiseasesItemAverageButtonConfirm.click();

    const nextButtonPestDiseasesOccurrence = await driver.$("~pestDiseasesOccurrence-nextButton");
    await nextButtonPestDiseasesOccurrence.click();

    const searchNaturalPredator = await driver.$("~naturalPredatorOccurrence-naturalPredatorSearchInput")
    await driver.setValueImmediate(searchNaturalPredator.elementId, "Lagarta com Baculovirus");
    driver.touchAction([
      { action: 'tap', x: 934, y: 1986},
      { action: 'wait', ms: 200 }
    ]);

    const naturalPredatorItem = await driver.$("~naturalPredatorOccurrence-naturalPredatorItemButtonAdd");
    await naturalPredatorItem.click();

    const naturalPredatorItemAverageInput = await driver.$("~naturalPredatorOccurrence-naturalPredatorItemAverageInput");
    await driver.setValueImmediate(naturalPredatorItemAverageInput.elementId, "3,0");

    const naturalPredatorItemAverageButtonConfirm = await driver.$("~naturalPredatorOccurrence-naturalPredatorItemAverageButtonConfirm");
    await naturalPredatorItemAverageButtonConfirm.click();

    const nextButtonNaturalPredatorOccurrence = await driver.$("~naturalPredatorOccurrence-nextButton");
    await nextButtonNaturalPredatorOccurrence.click();

    const growthPhase = await driver.$('~revision-growthPhase')
    const growthPhaseText = await growthPhase.getText();

    const desfolha = await driver.$('~revision-desfolha')
    const desfolhaText = await desfolha.getText();

    const pestItemRevision = await driver.$$("~revision-pestOccurrenceItem");

    const size1Pest = await pestItemRevision[0].$("~revision-pestItemSize");

    const size1PestText = await size1Pest.getText();

    const size2Pest = await pestItemRevision[1].$("~revision-pestItemSize");

    const size2PestText = await size2Pest.getText();

    const average1Pest = await pestItemRevision[0].$("~revision-pestItemAverage");

    const average1PestText = await average1Pest.getText();

    const average2Pest = await pestItemRevision[1].$("~revision-pestItemAverage");

    const average2PestText = await average2Pest.getText();

    expect(growthPhaseText).toBe('V3');
    expect(desfolhaText).toBe('5%');
    expect(size1PestText).toBe('< 1,5 cm');
    expect(size2PestText).toBe('> 1,5 cm');
    expect(average1PestText).toBe('2,5');
    expect(average2PestText).toBe('1,5');

    await driver.touchAction([
      { action: 'wait', ms: 300 },
      { action: 'press', x: 770, y: 1955},
      { action: 'moveTo', x: 770, y: 1432},
      'release'
    ]);

    const flagPestDiseasesButton = await driver.$("~revision-flagPestDiseasesButton");
    await flagPestDiseasesButton.click();

    const averagePestDisease = await driver.$('~revision-pestDiseaseItemAverage');
    const averagePestDiseaseText = await averagePestDisease.getText();

    expect(averagePestDiseaseText).toBe('2,5');

    const flagNaturalPredatorButton = await driver.$("~revision-flagNaturalPredatorButton");
    await flagNaturalPredatorButton.click();

    const averageNaturalPredator = await driver.$('~revision-naturalPredatorItemAverage');
    const averageNaturalPredatorText = await averageNaturalPredator.getText();

    expect(averageNaturalPredatorText).toBe('3,0');

    const revisionSaveButton = await driver.$("~revision-saveButtonFormMip");
    await revisionSaveButton.click();
  })

  it('should to be able create a mip form with two of each', async () => {
    const openMip = await driver.$('~mip-form-button')
    await openMip.click()

    const calendarContainer = await driver.$('~calendar-container')
    await calendarContainer.click()

    driver.touchAction([
      { action: 'wait', ms: 200 },
      { action: 'tap', x: 822, y: 742 },
      { action: 'wait', ms: 200 },
      { action: 'tap', x: 540, y: 1183 },
      { action: 'wait', ms: 200 },
      { action: 'tap', x: 808, y: 1643 },
      { action: 'wait', ms: 200 }
    ])

    const growthPhasePicker = await driver.$("~mipSample-growthPhasePicker");
    await growthPhasePicker.click();

    await driver.touchAction([
      { action: 'wait', ms: 400 },
      { action: 'tap', x: 141, y: 775},
    ]);

    const desfolhaAnotherValue = await driver.$('~mipSample-desfolhaAnotherValue');
    await desfolhaAnotherValue.click()

    const desfolhaAnotherValueInput = await driver.$("~mipSample-desfolhaAnotherValueInput");
    await driver.setValueImmediate(desfolhaAnotherValueInput.elementId, "25");

    const desfolhaAnotherValueButtonConfirm = await driver.$("~mipSample-desfolhaAnotherValueButtonConfirm");
    await driver.touchAction([
      { action: 'tap', x: 934, y: 1986},
      { action: 'wait', ms: 200 }
    ]);
    await desfolhaAnotherValueButtonConfirm.click();

    const nextButtonMipSample = await driver.$("~mipSample-nextButton");
    await nextButtonMipSample.click();

    const searchPest = await driver.$("~pestOccurrence-pestSearchInput")
    await driver.setValueImmediate(searchPest.elementId, "Lagarta da Soja");
    await driver.touchAction([
      { action: 'tap', x: 934, y: 1986},
      { action: 'wait', ms: 200 }
    ]);

    const pest1Item = await driver.$("~Lagarta da Soja");
    await pest1Item.click();

    const pestItem1SizeSmall = await driver.$("~pestOccurrence-pestItemSizeSmall");
    await pestItem1SizeSmall.click();

    const pestItemAverageInput = await driver.$("~pestOccurrence-pestItemAverageInput");
    await driver.setValueImmediate(pestItemAverageInput.elementId, "1,8");

    const pestItemAverageButtonConfirm = await driver.$("~pestOccurrence-pestItemAverageButtonConfirm");
    await pestItemAverageButtonConfirm.click();

    const pestItem1ChevronDown = await driver.$("~Lagarta da Soja ChevronDown")
    await pestItem1ChevronDown.click();

    const pestItem1ChevronUp = await driver.$("~Lagarta da Soja ChevronUp")
    await pestItem1ChevronUp.click();

    await driver.setValueImmediate(searchPest.elementId, "Percevejo");
    await driver.touchAction([
      { action: 'tap', x: 934, y: 1986},
      { action: 'wait', ms: 200 }
    ]);

    const pest2Item= await driver.$("~Percevejo");
    await pest2Item.click();

    const pestItem2SizeSmall = await driver.$("~pestOccurrence-pestItemPercevejoSizeBigger");
    await pestItem2SizeSmall.click();

    await driver.setValueImmediate(pestItemAverageInput.elementId, "5,2");
    await pestItemAverageButtonConfirm.click();

    await driver.setValueImmediate(searchPest.elementId, "Percevejo");
    driver.touchAction([
      { action: 'tap', x: 934, y: 1986},
      { action: 'wait', ms: 200 }
    ]);
    const pestItem2ChevronDown = await driver.$("~Percevejo ChevronDown")
    await pestItem2ChevronDown.click();

    const pestItemPercevejoChevronUp = await driver.$("~Percevejo ChevronUp")
    await pestItemPercevejoChevronUp.click();

    const nextButtonPestOccurrence = await driver.$("~pestOccurrence-nextButton");
    await nextButtonPestOccurrence.click();

    const searchPestDiseases = await driver.$("~pestDiseasesOccurrence-pestDiseasesSearchInput")
    await driver.setValueImmediate(searchPestDiseases.elementId, "Lagarta com Nomuraea");
    driver.touchAction([
      { action: 'tap', x: 934, y: 1986},
      { action: 'wait', ms: 200 }
    ]);

    const pestDiseasesItem = await driver.$("~pestDiseasesOccurrence-pestDiseasesItemButtonAdd");
    await pestDiseasesItem.click();

    const pestDiseasesItemAverageInput = await driver.$("~pestDiseasesOccurrence-pestDiseasesItemAverageInput");
    await driver.setValueImmediate(pestDiseasesItemAverageInput.elementId, "1,5");

    const pestDiseasesItemAverageButtonConfirm = await driver.$("~pestDiseasesOccurrence-pestDiseasesItemAverageButtonConfirm");
    await pestDiseasesItemAverageButtonConfirm.click();

    await pestDiseasesItem.click();
    await driver.setValueImmediate(pestDiseasesItemAverageInput.elementId, "4,2");
    await pestDiseasesItemAverageButtonConfirm.click();

    const nextButtonPestDiseasesOccurrence = await driver.$("~pestDiseasesOccurrence-nextButton");
    await nextButtonPestDiseasesOccurrence.click();

    const searchNaturalPredator = await driver.$("~naturalPredatorOccurrence-naturalPredatorSearchInput")
    await driver.setValueImmediate(searchNaturalPredator.elementId, "Lagarta com Baculovirus");
    driver.touchAction([
      { action: 'tap', x: 934, y: 1986},
      { action: 'wait', ms: 200 }
    ]);

    const naturalPredatorItem = await driver.$("~naturalPredatorOccurrence-naturalPredatorItemButtonAdd");
    await naturalPredatorItem.click();

    const naturalPredatorItemAverageInput = await driver.$("~naturalPredatorOccurrence-naturalPredatorItemAverageInput");
    await driver.setValueImmediate(naturalPredatorItemAverageInput.elementId, "3,0");

    const naturalPredatorItemAverageButtonConfirm = await driver.$("~naturalPredatorOccurrence-naturalPredatorItemAverageButtonConfirm");
    await naturalPredatorItemAverageButtonConfirm.click();


    await naturalPredatorItem.click();
    await driver.setValueImmediate(naturalPredatorItemAverageInput.elementId, "0,8");
    await naturalPredatorItemAverageButtonConfirm.click();

    const nextButtonNaturalPredatorOccurrence = await driver.$("~naturalPredatorOccurrence-nextButton");
    await nextButtonNaturalPredatorOccurrence.click();

    const growthPhase = await driver.$('~revision-growthPhase')
    const growthPhaseText = await growthPhase.getText();

    const desfolha = await driver.$('~revision-desfolha')
    const desfolhaText = await desfolha.getText();

    expect(growthPhaseText).toBe('V1');
    expect(desfolhaText).toBe('20%');

    await driver.touchAction([
      { action: 'wait', ms: 300 },
      { action: 'press', x: 770, y: 1955},
      { action: 'moveTo', x: 770, y: 1432},
      'release'
    ]);

    const pestRevision = await driver.$$("~revision-pestOccurrence");

    const size1Pest = await pestRevision[0].$("~revision-pestItemSize");
    const size1PestText = await size1Pest.getText();

    const average1Pest = await pestRevision[0].$("~revision-pestItemAverage");
    const average1PestText = await average1Pest.getText();

    const size2Pest = await pestRevision[1].$("~revision-pestItemSize");
    const size2PestText = await size2Pest.getText();

    const average2Pest = await pestRevision[1].$("~revision-pestItemAverage");
    const average2PestText = await average2Pest.getText();

    expect(size1PestText).toBe('< 1,5 cm');
    expect(average1PestText).toBe('1,8');
    expect(size2PestText).toBe('Adultos');
    expect(average2PestText).toBe('5,2');

    const flagPestDiseasesButton = await driver.$("~revision-flagPestDiseasesButton");
    await flagPestDiseasesButton.click();

    const pestDiseaseRevision = await driver.$$("~revision-pestDiseasesOccurrence");

    const average1PestDisease = await pestDiseaseRevision[0].$("~revision-pestDiseaseItemAverage");
    const average1PestDiseaseText = await average1PestDisease.getText();

    const average2PestDisease = await pestDiseaseRevision[1].$("~revision-pestDiseaseItemAverage");
    const average2PestDiseaseText = await average2PestDisease.getText();

    expect(average1PestDiseaseText).toBe('4,2');
    expect(average2PestDiseaseText).toBe('1,5');

    const flagNaturalPredatorButton = await driver.$("~revision-flagNaturalPredatorButton");
    await flagNaturalPredatorButton.click();

    const naturalPredatorRevision = await driver.$$("~revision-naturalPredatorOccurrence");

    const average1NaturalPredator = await naturalPredatorRevision[0].$("~revision-naturalPredatorItemAverage");
    const average1NaturalPredatorText = await average1NaturalPredator.getText();

    const average2NaturalPredator = await naturalPredatorRevision[1].$("~revision-naturalPredatorItemAverage");
    const average2NaturalPredatorText = await average2NaturalPredator.getText();

    expect(average1NaturalPredatorText).toBe('3,0');
    expect(average2NaturalPredatorText).toBe('0,8');

    const revisionSaveButton = await driver.$("~revision-saveButtonFormMip");
    await revisionSaveButton.click();

  });
});

