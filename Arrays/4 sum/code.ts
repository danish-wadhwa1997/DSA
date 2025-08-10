function fourSum(nums: number[], target: number): number[][] {

    // brute force
    // let ans=[];
    // let unique=new Set();

    // for(let i=0;i<nums.length;i++)
    // {
    //     for(let j=i+1;j<nums.length;j++)
    //     {
    //         for(let k=j+1;k<nums.length;k++)
    //         {
    //             for(let m=k+1;m<nums.length;m++)
    //             {
    //                 if(nums[i]+nums[j]+nums[k]+nums[m]===target)
    //                 {
    //                     const current=[nums[i],nums[j],nums[k],nums[m]].sort((a,b)=>a-b);
    //                     if(!unique.has(JSON.stringify(current)))
    //                     {
    //                         ans.push(current);
    //                         unique.add(JSON.stringify(current))
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }

    // return ans;
    
    // a+b+c+d=k
    // b+c+d=k-a
    // c+d=k-a-b;
    let ans=[];
    nums.sort((a,b)=>a-b);
    for(let i=0;i<nums.length;i++)
    {
        while(i>0 && nums[i]===nums[i-1])
        {
            i++;
        }
        let a=nums[i];
        for(let j=i+1;j<nums.length;j++)
        {
            while(j>i+1 && nums[j]===nums[j-1])
            {
                j++;
            }
            let b=nums[j];
            let left=j+1;
            let right=nums.length-1;

            while(left<right)
            {
                let sum=a+b+nums[left]+nums[right];
                if(sum<target)
                {
                    left++;
                }
                else if(sum>target)
                {
                    right--;
                }
                else{
                    ans.push([a,b,nums[left], nums[right]]);
                    left++;
                    right--;
                while(left<right && nums[left]===nums[left-1])
                {
                    left++;
                }                 
                }
            }
        }
    }

    return ans;

};