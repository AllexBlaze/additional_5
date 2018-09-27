module.exports = function check(str, bracketsConfig) {
  const ourStr = str;
  let ourStack = [];
 
  for (let i = 0, strLen = str.length; i < strLen; i++) {                    
    
    for (let j = 0, brConfLength = bracketsConfig.length; j < brConfLength; j++) {
      if (ourStack[ourStack.length-1] == bracketsConfig[j][1]) {
        ourStack.pop();
        continue;
      };
       
      if (ourStr[i] == bracketsConfig[j][0]) {  
        ourStack.push(ourStr[i]);
        continue;       

      } else if (ourStr[i] == bracketsConfig[j][1]) {
          if( ourStack.length == 0 ||
             (ourStack[ourStack.length-1] != bracketsConfig[j][0]) ) {
              return false;
          } else {
               ourStack.pop();
          };
        };
    };
  };
  return ourStack.length == 0;
};
