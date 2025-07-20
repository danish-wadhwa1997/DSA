function twoSum(nums: number[], target: number): number[] | undefined {
    // solution for n*n
    //   for(let i=0;i<nums.length-1;i++)
    //   {
    //     for( let j=i+1;j<nums.length;j++)
    //     {
    //         if(target-nums[i]===nums[j])
    //         {
    //             return[i,j]
    //         }
    //     }
    //   }
    
    let indexMap= new Map<number,number>();
    indexMap.set(nums[0],0);
    
    for (let i=1;i<nums.length;i++)
    {
        if(indexMap.has(target-nums[i]))
        {
            return [indexMap.get(target-nums[i])!, i];
        }
        else{
            indexMap.set(nums[i],i);
        }
    }
    return undefined; // Return undefined if no solution is found
}