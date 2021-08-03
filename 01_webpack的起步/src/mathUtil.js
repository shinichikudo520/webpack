// commonJS模块化的导入导出写法
function add(num1, num2) {
  return num1 + num2;
}

function mul(num1, num2) {
  return num1 * num2;
}

module.exports = {
  add,
  mul,
};
