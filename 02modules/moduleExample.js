const fs = require('fs').promises
const path = require('path')

const filePath = path.join(__dirname, 'readme.txt')

async function readFileContent(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8')
    console.log('File content:')
    console.log(data)
  } catch (error) {
    console.error('Error reading the file:', error.message)
  }
}

readFileContent(filePath)
