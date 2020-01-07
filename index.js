const gerador = () => {
  let palavra = document.getElementById('palavra').value
  let sentencas  = document.getElementById('sentencas').value
  let paragrafos = document.getElementById('paragrafos').value
   
  //palavra= blade(words)
  //sentencas= blade(sentences)
  
  import { LoremIpsum } from "lorem-ipsum";
  // const LoremIpsum = require("lorem-ipsum").LoremIpsum;
  
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    }
  });
  
  lorem.generateWords(palavra);
  lorem.generateSentences(sentencas);
  lorem.generateParagraphs(paragrafos);

  // const lorem = new LoremIpsum({
  //   sentencesPerParagraph: {
  //     max: sentences[0],
  //     min: sentences[1]
  //   },
  //   wordsPerSentence: {
  //     max: words[0],
  //     min: words[1]
  //   }
  // });

  // lorem.generateParagraphs(paragraphs);
}

//const blade = meat => {
//  separator = meat.replace(/[0-9]/g, '')
 // return meat.split(separator)
//}