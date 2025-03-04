function recursiveFunction(num) {
  if (num <= 0) {
    return;
  }
  console.log(num);
  recursiveFunction(num - 1);
}
recursiveFunction(5);
