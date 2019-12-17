/**
 * @params{string} s
 * @return{boolean}
 */
function isValid(s) {
  let stack = [];
  const obj = {
    "{": "}",
    "[": "]",
    "(": ")"
  };

  const preArr = ["[", "{", "("];

  const arr = s.split("");
  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    const cur = arr[i];
    if (preArr.indexOf(cur) > -1) {
      // 当有前置符号 =》 入栈
      stack.push(cur);
    } else {
      const out = stack.pop();
      // 当前的值不匹配于前一个塞进栈的值就返回false
      if (cur !== obj[out]) {
        return false;
      }
    }
  }

  console.log(stack);

  if (stack.length === 0) {
    return true;
  }
  return false;
}

console.log(isValid("{[]"));
