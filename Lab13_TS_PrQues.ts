// JSMJ
//typescript practice question

// 1. WAP in TS to count no. of words in a phrase

 //using npm package 
// declare var require: any
// const countWords = require("count-words");
// console.log(countWords("this is Wf lecture", true));
// console.log(countWords("this is Wf lecture,Lecture is about Type script", true));

// var wordlist=[]
// var wordcount=[]
// function Test(names:(string | number)[],wordlist:(string | number)[],wordcount:(number)[]):void{
    
//         for(var i=0;i<names.length;i++)
//         {
//             for(var j=0;j<=wordlist.length;j++)
//             {
                
//                 if(names[i]==wordlist[j])
//                     {wordcount[j]++;
//                     continue;}
//                 else
//                 {   wordlist.push(names[i])
//                     wordcount.push(1);

//                 }
//                 }
           
//         }

//         for(var j=0;j<=wordlist.length;j++)
//             {
//                 console.log(wordlist[j]);
//                 console.log(wordcount[j]);
                
//             }
       
//     }
//     var Str="this is Wf lecture,Lecture is about Type script";
//     var tuple1=Str.split(" ");
//     // console.log(tuple1)
//     Test(tuple1,wordlist,wordcount);


// https://www.typescriptlang.org/play?#code/DYUwLgBAxg9grgO0gXgGaKmAljBEAUYIAHmAFwQDOYATlggOYCUFAsgIYAOAPAMq30GAGgRwAtgCMQNAHwQA3gCgIK1WtCQAJlkw4E7GgE8IyCAhAB3CB074mAbmVrnANwMQipAIzJPYAHSUnMBYYPgARBDhDk7Oqn5e-qgwNACi7FAAFvj4FimaZNR0jEwmckpxcXk0miYQ1Zr+YDAAMjAW0gDC7JQgdo6VzlioBNq6uAaG-pk9uflMpRWDzmPYE0aB4HM1QhCrepP+DFsNTACEEADUEF4xy6oAvhAgwL0Ksfd7Omv6G71hDV2twGnweHziDzuyxo4DgNDw+3WhhBEPB0FwlBgoH8wBgDHwsEQYXC7B6YBmEFJYEoFNJ1Bm0QcQA
//  run this code on the above Compiler

 let count =function(text: string): Map<string, number> {
          let dictionary = new Map();
          var text1=text.split(" ");
          text1.forEach((word: string) => {
            word = word.toLowerCase();
            if (dictionary.has(word)) {
              dictionary.set(word, dictionary.get(word)! + 1);
            } else {
              dictionary.set(word, 1);
            }
          });
          return dictionary;
        }
      console.log(count("aastha aatsha aastha"));
           


// 2. Create an HTML Doc and link the suitable TS file with it.