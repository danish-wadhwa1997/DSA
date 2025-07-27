function majorityElement(nums: number[]): number {

    const frequency={};
    let number;
    for(let i=0;i<nums.length;i++)
    {
        if(frequency[nums[i]])
        {
            const newFrequency=++frequency[nums[i]];
            frequency[nums[i]]=newFrequency;
            if(newFrequency>nums.length/2)
            {
                number=nums[i];
                break;
            }
        }
        else{
            frequency[nums[i]]=1;
            if(frequency[nums[i]]>nums.length/2)
            {
                number=nums[i];
                break;
            }
        }
    }
    return number;
    
};