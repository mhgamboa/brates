export default str => {
  const regex = /[0-9]*[0-9].[0-9]*/;
  let match = str.match(regex)[0];

  if (!parseFloat(match)) return "Error";
  return parseFloat(match);
};