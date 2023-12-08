/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/





//Stack Implemented Using List
class Stack{

  constructor()
  {
    this.items = []
  }

  push(data) {
      this.items.push(data);  
  }
  size()
  {
    return this.items.length;
  }
  isEmpty()
  {
    return (this.items.length == 0);
  }
  pop()
  {
    if(this.isEmpty())
      return -Infinity;
    this.items.pop();
  }
  top()
  {
    return this.items[this.size() - 1];
  }
}


//Function to check precedency of different Operators
function precedency(c)
{
  if(c=='^')  return 4;
  else if(c=='*' || c=='/')  return 3;
  else if(c=='+' || c=='-')  return 2;
  else return -1;
}

//Function to find result(for string expression)
function calulateResult(a,b,s)
{
  c = s[0]
  switch(c)
  {
    case '^': return Math.pow(a,b);
    case '*': return a*b;
    case '/': return a/b;
    case '+': return a+b;
    case '-': return a-b;
    default : return -Infinity;
  }
}

function isOperator(s)
{
  if(s=="^" || s=="*" || s=="/" || s=="+" || s=="-")
    return true;
  return false;
}

function printStack(s)
{
  if(s.isEmpty())
    return
  let a = s.top();
  s.pop();
  printStack(s)
  console.log(a);
  s.push(a);
}

//Coversion Infix->Postfix (for expression evaluation)
function infixToPostfix(str)
{
  var v = [];
  var st = new Stack();

  for(let i = 0;i<str.length;i++)
  {
    var c = str[i];
    if(c==' ')
      continue;

    if(c>='0' && c<='9')
    {
      temp = "";
      decimalSeen = false;
      while((i<str.length && str[i]>='0' && str[i]<='9') || (str[i]=='.' && decimalSeen==false))
      {
        if(str[i]=='.' && decimalSeen==true)
        {
          throw new Error("Error");
        }
        else if(str[i]=='.')
          decimalSeen = true;
        temp+=str[i++]
      }
      v.push(temp);
      --i;
    }

    else if(c=='(')
      st.push(c);
    

    else if(c==')')
    {
      if(st.isEmpty())
        throw new Error("Error");

      while(st.top()!='(')
      {
        v.push(st.top()+"")
        st.pop();

        if(st.isEmpty())
        throw new Error("Error");
      }
        
      st.pop();
    }

    else
    {
      if(precedency(c)==-1)
      {
        throw new Error("Error");
      }

      else
      {
        while(!st.isEmpty() && precedency(c) <= precedency(st.top()))
        {
          v.push(st.top()+"");
          st.pop();
        }
        st.push(c)
      }
    }
  }
  while(!st.isEmpty())
  {
    v.push(st.top());
    st.pop();
  }
  return v;
}

class Calculator {

  #result = 0;
  #st = new Stack();
  
  add(data)
  {
    this.#result+=data;
  }
  subtract(data)
  {
    this.#result-=data;
  }
  multiply(data)
  {
    this.#result*=data;
  }
  divide(data)
  {
    if(data==0)
      throw new Error("Error");
    this.#result/=data;
    
  }
  clear()
  {
    this.#result = 0;
  }

  getResult()
  {
    return this.#result;
  }

  calculate(str)
  {
    let v = infixToPostfix(str)
    
    console.log(v)
    for(let i =0;i<v.length;i++)
    {
      if(v[i]=='(' || v[i]==')')
        throw new Error('Error');

      if(isOperator(v[i]))
      {
        if(this.#st.size()<2)
        {
          throw new Error("Error");
        }
        else
        {
          let a = Number(this.#st.top());
          this.#st.pop();
          let b = Number(this.#st.top());
          this.#st.pop();
          if(v[i]=='/' && a==0)
          {
            throw new Error("Error");
          }

          this.#st.push(calulateResult(b,a,v[i]))
        }
      }
      else 
        this.#st.push(Number(v[i]));
    }
    
    if(this.#st.isEmpty())
      throw new Error("Error");
    this.#result =  this.#st.top();
  }
}



module.exports = Calculator;

