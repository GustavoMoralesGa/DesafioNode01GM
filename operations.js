const fs = require('fs')

const register = (name, age, animal, color, sickness) => {
    const newRegister = 
      {
        name, age, animal, color, sickness
      }
       
    const dates = JSON.parse(fs.readFileSync('dates.json', 'utf-8'))
    dates.push(newRegister)
    fs.writeFileSync('dates.json', JSON.stringify(dates))    
}

const readDates = () => {
  const date = fs.readFileSync('dates.json', 'utf-8')
  console.log(date)
}


module.exports = { register, readDates }