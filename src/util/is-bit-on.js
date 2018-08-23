export default (byte, num) => {
  return (byte & Math.pow(2, num)) > 0;
};
