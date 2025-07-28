/**
 Do not return anything, modify nums1 in-place instead.
 */
 function merge(nums1: number[], m: number, nums2: number[], n: number): void {

    let resArray:number[]= [];
    let i=0, j=0;
    while(i<m && j<n)
    {
       if(nums1[i]<=nums2[j])
       {
        resArray.push(nums1[i]);
        i++;
       }
       else{
        resArray.push(nums2[j]);
        j++;
       }
    }
    while(i<m)
    {
        resArray.push(nums1[i]);
        i++;
    }
    while (j<n)
    {
        resArray.push(nums2[j]);
        j++;
    }
    for(let k=0;k<resArray.length;k++)
    {
        nums1[k]=resArray[k];
    }
};