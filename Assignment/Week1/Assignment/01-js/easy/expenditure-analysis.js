/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {

  let ans = [];
  const mp = new Map();
  for(let i = 0;i<transactions.length;i++)
  {
    if(mp.has(transactions[i]["category"]))
    {
      mp.set(transactions[i]["category"],mp.get(transactions[i]["category"])+transactions[i]["price"])
    }
    else
    {
      mp.set(transactions[i]["category"],transactions[i]["price"])
    }
  }

  for(const x of mp.keys())
    ans.push({"category" : x , "totalSpent" : mp.get(x)})
  return ans
}


module.exports = calculateTotalSpentByCategory;
