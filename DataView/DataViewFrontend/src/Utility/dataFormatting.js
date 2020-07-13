export function productDataFormatter(data) {
  let obj = {
    grindData: [],
    polishData: [],
    coatData: [],
    etchData: [],
    diceData: [],
  };

  data.forEach((a) =>
    obj.grindData.push([
      a.id,
      a.startTime,
      a.finishTime,
      a.grindTotal,
      a.startBubbles,
      a.startScratches,
      a.startParticles,
      a.startChips,
      a.startUnknown,
    ])
  );
  data.forEach((a) =>
    obj.polishData.push([
      a.id,
      a.startTime,
      a.finishTime,
      a.polishTotal,
      a.polishBubbles,
      a.polishScratches,
      a.polishParticles,
      a.polishChips,
      a.startUnknown,
    ])
  );
  data.forEach((a) =>
    obj.coatData.push([
      a.id,
      a.startTime,
      a.finishTime,
      a.coatTotal,
      a.coatBubbles,
      a.coatScratches,
      a.coatParticles,
      a.coatChips,
      a.coatUnknown,
    ])
  );
  data.forEach((a) =>
    obj.etchData.push([
      a.id,
      a.startTime,
      a.finishTime,
      a.etchTotal,
      a.etchBubbles,
      a.etchScratches,
      a.etchParticles,
      a.etchChips,
      a.etchUnknown,
    ])
  );
  data.forEach((a) =>
    obj.diceData.push([
      a.id,
      a.startTime,
      a.finishTime,
      a.diceTotal,
      a.diceBubbles,
      a.diceScratches,
      a.diceParticles,
      a.diceChips,
      a.diceUnknown,
    ])
  );

  return obj;
}

export function upcomingProductFormatter(data) {
  let arr = [];
  data.forEach((a) => {
    arr.push(a.expectedProducts);
  });
  return arr;
}

export function yieldDataFormatter(data) {
  let arr = [];
  data.forEach((a) => {
    arr.push([
      a.averageYield,
      100 - a.scraps,
      a.grinderUptime,
      a.polisherUptime,
      a.coaterUptime,
      a.etcherUptime,
      a.dicerUptime,
    ]);
  });
  return arr;
}

export function tableDataFormatter(data) {
  let arr = [];
  data.forEach((a) => {
    arr.push({
      productId: a.id,
      startTime: a.startTime,
      finishTime: a.finishTime,
      totalDefects: a.diceTotal,
    });
  });
  return arr;
}

export function linePieGraphFormatter(data, id) {
  let a = data.find((obj) => obj.id === id); //Selected Product Object
  if (a) {
    let returnObj = {
      chipData: [
        a.startChips,
        a.grindChips,
        a.polishChips,
        a.coatChips,
        a.etchChips,
        a.diceChips,
      ],
      bubbleData: [
        a.startBubbles,
        a.grindBubbles,
        a.polishBubbles,
        a.coatBubbles,
        a.etchBubbles,
        a.diceBubbles,
      ],
      scratchData: [
        a.startScratches,
        a.grindScratches,
        a.polishScratches,
        a.coatScratches,
        a.etchScratches,
        a.diceScratches,
      ],
      particleData: [
        a.startParticles,
        a.grindParticles,
        a.polishParticles,
        a.coatParticles,
        a.etchParticles,
        a.diceParticles,
      ],
      unknownData: [
        a.startUnknown,
        a.grindUnknown,
        a.polishUnknown,
        a.coatUnknown,
        a.etchUnknown,
        a.diceUnknown,
      ],
      totalData: [
        a.startTotal,
        a.grindTotal,
        a.polishTotal,
        a.coatTotal,
        a.etchTotal,
        a.diceTotal,
      ],
    };
    return returnObj;
  } else return;
}
