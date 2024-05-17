import fs from 'fs';

// BEGIN
const compareFileSizes = (filePath1, filePath2, callback) => {
    fs.stat(filePath1, (err1, stats1) => {
      if (err1) {
        callback(err1);
        return;
      }
  
      fs.stat(filePath2, (err2, stats2) => {
        if (err2) {
          callback(err2);
          return;
        }
  
        const fileSize1 = stats1.size;
        const fileSize2 = stats2.size;
  
        if (fileSize1 > fileSize2) {
          callback(null, 1);
        } else if (fileSize1 === fileSize2) {
          callback(null, 0);
        } else {
          callback(null, -1);
        }
      });
    });
  };
  
  export { compareFileSizes };
// END