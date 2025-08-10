/**
 Do not return anything, modify nums in-place instead.
 */
 function sortColors(nums: number[]): void {
    let zeroIdx=0;
    let twoIdx=nums.length-1;
    let oneIdx=zeroIdx;

    while(oneIdx<=twoIdx)
    {
        if(nums[oneIdx]===0)
        {
            [nums[zeroIdx],nums[oneIdx]]=[nums[oneIdx],nums[zeroIdx]];
            zeroIdx++;
            oneIdx++;
        }
        else if(nums[oneIdx]===2)
        {
            [nums[oneIdx],nums[twoIdx]]=[nums[twoIdx],nums[oneIdx]];
            twoIdx--;
        }
        else {
            oneIdx++;
        }
    }
};