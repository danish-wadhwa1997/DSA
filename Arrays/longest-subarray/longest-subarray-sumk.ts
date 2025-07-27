// the brute force
function longestSubarraySumK(nums, k) {
  let maxLength = 0;

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum === k) {
        maxLength = Math.max(maxLength, j - i + 1);
      }
    }
  }
  return maxLength;
}

//  optimal solution using prefix sum approach and hashmap

function solution2(nums, k) {
  let prefixSum = 0;
  let maxLength = 0;
  const prefixSumMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];
    // case 1: PS===k
    if (prefixSum === k) {
      maxLength = Math.max(maxLength, i + 1);
    }
    // case 2: PS - k exists in the map
    const sumToFind = prefixSum - k;
    if (prefixSumMap.has(sumToFind)) {
      maxLength = Math.max(maxLength, i - prefixSumMap.get(sumToFind));
    }
    // case 3: PS not in the map, add it just the first index which will be always the smallest value and need not to override it
    if (!prefixSumMap.has(prefixSum)) {
      prefixSumMap.set(prefixSum, i);
    }
  }
  return maxLength;
}
