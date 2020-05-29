const degreesToRad = (deg: number) => ((deg / 180) * Math.PI);

const getBarSizes = (windowHeight: number, index: number) => {
  const r = windowHeight * 0.2;
  const anchor = 90;
  const isFullSize = index === 2;
  const isHalfSize = [0, 4].includes(index);
  const scale = isFullSize ? 1 : (
    isHalfSize ? 0.5 : 0.75
  );
  const angleIndex = isFullSize ? 90 : (
    isHalfSize ? 36 : 42
  );
  const angle = (index - 2) * angleIndex;
  const distanceY = r * Math.sin(degreesToRad(anchor + angle));
  const distanceX = r * Math.cos(degreesToRad(anchor + angle));

  return {
    distanceY,
    distanceX,
    scale,
  };
};

export {
  degreesToRad,
  getBarSizes,
};
