//2665. Counter II

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let initNya = init;
  const iniTetap = init;
  return {
    increment: function () {
      return (initNya = initNya + 1);
    },
    decrement: function () {
      return (initNya = initNya - 1);
    },
    reset: function () {
      return (initNya = iniTetap);
    },
  };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
