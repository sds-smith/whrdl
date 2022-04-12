

const Datamuse =  {

    async getTargetWord(setTargetWord) {
        const randomIndex = Math.floor(Math.random() * 1000)
        try {
          const response = await fetch('https://api.datamuse.com/words?sp=?????&max=1000')
          if (response.ok) {
            const jsonResponse = await response.json()
            const wordArr = await jsonResponse
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
          return await respArr.length > 0
        }
      } catch(error) {
        console.log(error)
      }
    }
}

export default Datamuse