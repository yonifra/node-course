// Function to modify the content of the file
export async function modifyFileContent(filePath, newContent) {
  try {
    await fs.writeFile(filePath, newContent, 'utf8')
    console.log('File content has been modified successfully.')
  } catch (error) {
    console.error('Error writing to the file:', error.message)
  }
}
