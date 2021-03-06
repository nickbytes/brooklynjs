const ns = (scene, clip) => state => {
  const oldSceneState = state[scene];
  const allFalse = [];

  Object.keys(oldSceneState).map(key => {
    allFalse[key] = false;
    return allFalse;
  });

  return {
    [scene]: {
      ...allFalse,
      [clip]: true
    }
  };
};

export default ns;
