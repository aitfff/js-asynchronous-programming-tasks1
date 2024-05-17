import fsp from 'fs/promises';

// BEGIN
const touch = async (filePath) => {
    try {
      await fsp.access(filePath);
    } catch (error) {
      await fsp.writeFile(filePath, '');
    }
  };
  
  export { touch };
// END