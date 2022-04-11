

const Datamuse =  {

    async getTargetWord(setTargetWord) {
        const randomIndex = Math.floor(Math.random() * 1000)
        console.log(randomIndex)
        try {
          const response = await fetch('https://api.datamuse.com/words?sp=?????&max=1000')
          if (response.ok) {
            const jsonResponse = await response.json()
            const wordArr = await jsonResponse
            console.log(`Yo the word is ${wordArr[randomIndex].word}`)
            setTargetWord(wordArr[randomIndex].word.toUpperCase())
          }
        } catch(error) {
          console.log(`Shawn - async error ${error}`)
        }
    },

    async validWord(guess) {
      try {
        console.log(guess)
        const response = await fetch(`https://api.datamuse.com/words?sp=?????,+${guess}&max=1`)
        if (response.ok) {
          const jsonResponse = await response.json()
          const respArr = await jsonResponse
          console.log(respArr)
          console.log(respArr.length > 0)
          return await respArr.length > 0
        }
      } catch(error) {
        console.log(`Shawn - async error ${error}`)
      }
    }
}

export default Datamuse