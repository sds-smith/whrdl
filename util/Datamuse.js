

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
    },

    async getHint(word) {
      try {
        const response = await fetch(`https://api.datamuse.com/words?rel_trg=${word}&max=10`)
        if (response.ok) {
          const jsonResponse = await response.json()
          const respArr = jsonResponse.map(e => e.word.toUpperCase())
          let message = ''
          for (let i = 0; i < respArr.length; i ++) {
            message += (respArr[i])
            message += ('\n')
          }
          window.alert(message.length ? message : 'Sorry. There is no hint for this word')
        }
      } catch(error) {
        console.log(error)
      }
    }
}

export default Datamuse