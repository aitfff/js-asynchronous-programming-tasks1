import fs from 'fs';

// BEGIN
const move = (sourcePath, destinationPath, callback) => {
    // Читаем исходный файл
    fs.readFile(sourcePath, (readErr, data) => {
      if (readErr) {
        callback(readErr);
        return;
      }
  
      // Создаём новый файл и записываем в него данные исходного файла
      fs.writeFile(destinationPath, data, (writeErr) => {
        if (writeErr) {
          callback(writeErr);
          return;
        }
  
        // Удаляем исходный файл
        fs.unlink(sourcePath, (unlinkErr) => {
          if (unlinkErr) {
            callback(unlinkErr);
            return;
          }
  
          callback(null);
        });
      });
    });
  };
  
  export { move };
// END
