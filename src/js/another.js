export function mov(firstRegister, secondRegister) {
  if (firstRegister.innerHTML != 0) {
    secondRegister.innerHTML = firstRegister.innerHTML;
    firstRegister.innerHTML = 0;
  } else if (firstRegister.innerHTML == 0) {
    secondRegister.innerHTML = 0;
  }
}
export function xchg(firstRegister, secondRegister) {
  const temp = firstRegister.innerHTML;
  firstRegister.innerHTML = secondRegister.innerHTML;
  secondRegister.innerHTML = temp;
}
