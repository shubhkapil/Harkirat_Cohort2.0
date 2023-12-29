/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/


let sortString = (string) => {
  return string.split("").sort().join("");
}

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  str1 = sortString(str1)
  str2 = sortString(str2)


  //Compairing Character by Character:

  // if(str1.length!=str2.length)
  // {
  //   return false;
  // }
  // else
  // {

  //   for(let i = 0;i<str1.length;i++)
  //   {
  //     console.log(str1[i] + " " + str2[i])
  //     if(str1[i]!=str2[i])
  //     {
  //       console.log(str1[i] + str2[i]);
  //       return false;
  //     }
        
  //   }
  // return true;
  // }

  //Using inbuild Function:
  if(str1.localeCompare(str2) == 0){
    return true;
  }
  return false;
}


module.exports = isAnagram;
