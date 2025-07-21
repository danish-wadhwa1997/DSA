function maxProfit(prices: number[]): number {

    let profit=0;
    if(prices.length===2)
    {
        if(prices[0]>=prices[1])
        {
            return 0;
        }
        else{
            return prices[1]-prices[0];
        }
    }
    if(prices.length>2)
    {
        let lowestBuy=Number.MAX_VALUE;

        for(let i=0;i<prices.length;i++)
        {
            let buy, sell;

            while(i+1<prices.length && prices[i+1]-prices[i]<0)
            {
                i++;
            }
            buy=prices[i];

            while(i+1<prices.length && prices[i+1]-prices[i]>0)
            {
                i++;
            }
            sell=prices[i];
            lowestBuy=Math.min(buy,lowestBuy);
            profit=Math.max(profit,sell-lowestBuy);
        }
    }
    return profit;
};