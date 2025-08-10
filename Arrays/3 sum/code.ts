function threeSum(nums: number[]): number[][] {

    // brute force
    // let ans=[];
    // let set= new Set();
    // for(let i=0;i<nums.length;i++)
    // {
    //     for(let j=i+1;j<nums.length;j++)
    //     {
    //         for(let k=j+1;k<nums.length;k++)
    //         {
    //             if(nums[i]+nums[j]+nums[k]===0)
    //             {
    //                 let current=[nums[i], nums[j], nums[k]].sort((a,b)=>a-b);
    //                 if(!set.has(JSON.stringify(current)))
    //                 {
    //                     set.add(JSON.stringify(current));
    //                     ans.push(current);
    //                 }
    //             }
    //         }
    //     }
    // }

    // return ans;

    // optimal solution

    // let ans=[];
    // let unique=new Set();
    // // a + b + c=0
    // for(let i=0;i<nums.length;i++)
    // {
    //     // b+c=-a
    //     let target=-nums[i];
    //     let setOfC=new Set();
    //     for(let j=i+1;j<nums.length;j++)
    //     {
    //         // c=-a-b;
    //         let third=target-nums[j];
    //         if(setOfC.has(third))
    //         {
    //             let current=[nums[i], nums[j], third].sort((a,b)=>a-b);
    //             if(!unique.has(JSON.stringify(current)))
    //             {
    //                 unique.add(JSON.stringify(current));
    //                 ans.push(current);
    //             }
    //         }
    //         else{
    //             setOfC.add(nums[j]);
    //         }
    //     }
    // }

    // return ans;

    // optimised approach
    // two pointer approach in sub array of i
    let ans=[];
    let sortedNums=nums.sort((a,b)=>a-b);
    for(let i=0;i<nums.length;i++)
    {
        if(i>0 && sortedNums[i]===sortedNums[i-1])
        {
            continue;
        }

        let left=i+1;
        let right=nums.length-1;
        while(left<right)
        {
            let sum=sortedNums[i]+sortedNums[left]+sortedNums[right];
            if(sum>0)
            {
                // decrease
                right--;
            }
            else if(sum<0)
            {
                // increase
                left++;
            }
            else
            {
                ans.push([sortedNums[i],sortedNums[left],sortedNums[right]]);
                left++;
                right--;

                while(left<right && sortedNums[left]===sortedNums[left-1])
                {
                    left++;
                }
            }
        }
    }

    return ans;
};