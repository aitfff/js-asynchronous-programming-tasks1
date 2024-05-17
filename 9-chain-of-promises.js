import fsp from 'fs/promises';

// BEGIN
const getTypes = (paths) => {
    const promises = paths.map(async (path) => {
      try {
        const stats = await fsp.stat(path);
        if (stats.isDirectory()) {
          return 'directory';
        } else if (stats.isFile()) {
          return 'file';
        }
      } catch (error) {
        return null;
      }
    });
  
    return Promise.all(promises);
  };
  
  export { getTypes };
// END