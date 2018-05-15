const nextScene = (x, i, n) => {
  // if you are currently at the last scene,
  // go to the next chapter
  if (x === n - 1) {
    return {
      chapter: i + 1,
      scene: 0
    };
  } else {
    // otherwise, go to next scene
    return {
      scene: x + 1
    };
  }
};

export default nextScene;
