function distanceFromHqInBlocks(aValue) {
  if (aValue > 42) {
    return aValue - 42
  } else  {
   return 42 - aValue
 }
}

function distanceFromHqInFeet(aValue) {
  return distanceFromHqInBlocks(aValue) * 264
}

function distanceTravelledInFeet(startBlock, endBlock) {
  if (startBlock < endBlock) {
    return (endBlock - startBlock) * 264
  } else {
    return (startBlock - endBlock) * 264
  }
}

function calculatesFarePrice(startBlock, endBlock) {
  const distance = distanceTravelledInFeet(startBlock, endBlock)

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return .02 * (distance - 400);
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
