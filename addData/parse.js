module.exports = rate => {
  const regex = /[0-9]*[0-9]*\.*[0-9]*[0-9]*/g;
  let matches = rate.match(regex);

  for (let match of matches) {
    if (parseFloat(match)) return parseFloat(match);
  }

  console.error(`could not parse ${match}`);
  return "Error";
};
