import fs from 'fs';

// BEGIN
const watch = (filepath, interval, callback) => {
    let previousMtime = null;

    const timerId = setInterval(() => {
        fs.stat(filepath, (err, stats) => {
            if (err) {
                clearInterval(timerId);
                callback(err);
            } else {
                if (previousMtime && stats.mtimeMs !== previousMtime) {
                    callback(null);
                }
                previousMtime = stats.mtimeMs;
            }
        });
    }, interval);

    return timerId;
};

export default watch;
// END
