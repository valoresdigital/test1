const calculateDateOneWeekAgo = () => {
  const weekAgo = new Date();
  return weekAgo.setDate(weekAgo.getDate() - 7);
};

const date = calculateDateOneWeekAgo();

console.log("1111111", date instanceof Date);

console.log("222222", Object.prototype.toString.call(date) === "[object Date]");

console.log("type of", typeof date);
console.log(date);
