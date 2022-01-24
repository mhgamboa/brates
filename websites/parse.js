module.exports = str => {
  const regex = /[0-9]*[0-9]\.[0-9]*/;
  let match = str.match(regex)[0];

  if (!parseFloat(match)) {
    console.error(`could not parse ${match}`);
    return "Error";
  }
  return parseFloat(match);
};
