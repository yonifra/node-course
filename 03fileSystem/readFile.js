const fs = require('fs').promises
const path = require('path')

// Define the path to the file
const filePath = path.join(__dirname, 'readme.txt')

// Function to read file content
async function readFileContent(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8')
    console.log('File content:')
    console.log(data)
    return data
  } catch (error) {
    console.error('Error reading the file:', error.message)
  }
}

// Function to modify the content of the file
async function modifyFileContent(filePath, newContent) {
  try {
    await fs.writeFile(filePath, newContent, 'utf8')
    console.log('File content has been modified successfully.')
  } catch (error) {
    console.error('Error writing to the file:', error.message)
  }
}

// Function to list directory contents
async function listDirectoryContents(dirPath) {
  try {
    const files = await fs.readdir(dirPath)
    console.log('Folder content:')
    console.log(files)
  } catch (error) {
    console.error('Error reading directory:', error.message)
  }
}

// Main function to orchestrate operations
async function main() {
  await readFileContent(filePath)
  await listDirectoryContents(__dirname)
  await modifyFileContent(
    filePath,
    'This is the new content of the readme.txt file.'
  )
  await readFileContent(filePath) // Read again to confirm changes
}

main().catch((error) => console.error('An error occurred:', error.message))
