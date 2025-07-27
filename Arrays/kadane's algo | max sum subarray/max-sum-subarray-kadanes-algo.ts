function maxSubArray(nums: number[]): number {
    let currentSum = 0;
    let MAX_SUM = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < nums.length; i++) {
        currentSum += nums[i];
        MAX_SUM = Math.max(currentSum, MAX_SUM);

        if (currentSum < 0) {
            currentSum = 0;
        }
    }

    return MAX_SUM;
};