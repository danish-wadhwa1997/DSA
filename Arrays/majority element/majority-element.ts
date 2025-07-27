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


function solution2(nums:number[]):number{

let freq=1;
let majorityElem=nums[0];

    for(let i=1;i<nums.length;i++)
    {
        if(nums[i]===majorityElem)
            {
                freq++;
            }   
            if(majorityElem!==nums[i])
            {
                freq--;
            }
            if(freq===0)
            {
                majorityElem=nums[i];
                freq=1;
            }
    }

    return majorityElem;
}