import fsp from 'fs/promises';

// BEGIN
const exchange = async (file1, file2) => {
    try {
      const data1 = await fsp.readFile(file1, 'utf-8');
      const data2 = await fsp.readFile(file2, 'utf-8');
  
      await fsp.writeFile(file1, data2);
      await fsp.writeFile(file2, data1);
  
      console.log('Exchange successful');
    } catch (error) {
      console.error('Exchange failed:', error);
    }
  };
  
  export { exchange };
// END