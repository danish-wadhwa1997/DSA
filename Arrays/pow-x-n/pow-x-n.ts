function myPow(x: number, n: number): number {
    const ans=pow(x,Math.abs(n));
    if(n<0)
    {
        return 1/ans;
    }
    return ans;
    
};

function pow(x:number,n:number):number{
     if(n===0 || x===1)
    {
        return 1;
    }
    else if(n===1)
    {
        return x;
    }
    else{
        if(n%2==0)
        {
            const ans=myPow(x,n/2);
            return ans*ans;
        }
        else{
            const ans=myPow(x,(n-1)/2);
            return x*ans*ans;
        }
    }
}