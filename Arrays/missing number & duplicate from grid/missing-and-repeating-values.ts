function findMissingAndRepeatedValues(grid: number[][]): number[] {
    const n=grid.length*grid.length;
    let numbers: number[] = [];
    let duplicateNumber:number = -1;
    let sum=(n*(n+1))/2;
    for(let i=0;i<grid.length;i++)
    {
        for(let j=0;j<grid[i].length;j++)
        {
            if(numbers[grid[i][j]])
            {
                duplicateNumber=grid[i][j];
            }
            else{
                numbers[grid[i][j]]=grid[i][j];
            }
            sum-=grid[i][j];
        }
    }
    return[duplicateNumber,(duplicateNumber+sum)]
};