// fing Longest Word

const findLogestaWord= (str)=>{
    if (str.trim().length === 0){
        return false
    }
   const words = str.split(" ")
  
console.log(words);
let longestWord ="";
for(const word of words){
    if(word.length>longestWord.length){
      longestWord = word
    }

}
return longestWord;
}
console.log(findLogestaWord("hi i am shaikh akbar learning JavaScript"))

//generate hastag with concatenated string

const hashTagGenerate= (str)=>{
    if(str.length > 280 || str.trim === 0){
        return false;
    }
    str = str.split(" ")
    str = str.map((ele)=>ele.replace(ele[0], ele[0].toUpperCase()))
    console.log(str);
    str = `#${str.join("")}` 
    
    return str
    }
    console.log(hashTagGenerate("hi i am shaikh akbar"))