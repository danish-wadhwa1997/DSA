function containsDuplicate(nums: number[]): boolean {

    const freqMap= new Map();

    for(let i=0;i<nums.length;i++)
    {
        if(freqMap.has(nums[i]))
        {
            return true;
        }
        else{
            freqMap.set(nums[i],1);
        }
    }

    // console.log("eleme found", elementFound)
    return false;
};