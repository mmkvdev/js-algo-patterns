function multiplyBy (nums1) {
  return function (nums2) {
    return nums1 * nums2;
  }
}

const multiplyByTwo = multiplyBy(2);
multiplyByTwo(2);
multiplyByTwo(20);