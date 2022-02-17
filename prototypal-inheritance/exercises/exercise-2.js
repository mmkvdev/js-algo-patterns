Function.prototype.bind = function (whoIsCallingMe) {
  return this.apply(whoIsCallingMe, arguments);
}