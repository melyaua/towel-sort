
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  if(!matrix) {
    return result
  }
  matrix.map((item, index) => {
      if(index % 2 !== 0) {
          item.reverse();
      }
      console.log(item)
      for (let i = 0; i < item.length; i++) {
        let arr = [];
        arr += result.push(item[i])   
      }
      return result;
  })
  return result;
}
