/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isAlpha(c)
{
  return ((c>='a' && c<='z') || (c>='A' && c<='Z')) ? true : false;
}

function isPalindrome(str) {

  str = str.toLowerCase();
  let n = str.length;
  let i =0,j=n-1

  while(i<j)
  {
    if(!isAlpha(str[i]))
    {
      i++;
      continue;
    }
    else if(!isAlpha(str[j]))
    {
      j--;
      continue;
    }
    else if(str[i]!=str[j])
    {
      console.log(str[i] + " " + str[j])
      return false;
    }
    i++;
    j--;
  }

  return true;
}

module.exports = isPalindrome;

