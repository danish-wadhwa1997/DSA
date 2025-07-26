function moveZeroes(nums: number[]): void {
    if (nums.length <= 1) return;

    let zeroIndex = 0;
    let numberIndex = 0;

    while (zeroIndex < nums.length && numberIndex < nums.length) {
        // Move zeroIndex to the next 0
        while (zeroIndex < nums.length && nums[zeroIndex] !== 0) {
            zeroIndex++;
        }

        // Move numberIndex to the next non-zero after zeroIndex
        numberIndex = Math.max(numberIndex, zeroIndex + 1);
        while (numberIndex < nums.length && nums[numberIndex] === 0) {
            numberIndex++;
        }

        // Swap if valid
        if (zeroIndex < nums.length && numberIndex < nums.length) {
            [nums[zeroIndex], nums[numberIndex]] = [nums[numberIndex], nums[zeroIndex]];
            zeroIndex++;
        }
    }
}