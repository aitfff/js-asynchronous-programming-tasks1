import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import async from 'async';

// BEGIN
const getDirectorySize = (directoryPath, callback) => {
    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        callback(err, null);
        return;
      }
  
      async.map(files, (file, next) => {
        const filePath = path.join(directoryPath, file);
  
        fs.stat(filePath, (err, stats) => {
          if (err) {
            next(err, 0);
            return;
          }
  
          if (stats.isFile()) {
            next(null, stats.size);
          } else {
            next(null, 0);
          }
        });
      }, (err, sizes) => {
        if (err) {
          callback(err, null);
          return;
        }
  
        const totalSize = _.sum(sizes);
        callback(null, totalSize);
      });
    });
  };
  
  export { getDirectorySize };
// END
