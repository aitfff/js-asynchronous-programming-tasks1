import fsp from 'fs/promises';

// BEGIN
const reverse = async (fileName) => {
    try {
      const data = await fsp.readFile(fileName, 'utf-8');
      const lines = data.split('\n').reverse().join('\n');
      await fsp.writeFile(fileName, lines);
      console.log(lines);
    } catch (error) {
      console.log(error);
    }
  }
  
  export { reverse };
// END