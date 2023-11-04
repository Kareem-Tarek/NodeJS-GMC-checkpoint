const fs = require('fs');
const file_dir = 'checkpoint-tasks'; // The file's directory
const file_wr = 'welcome.txt'; // The file that will be written and read
const path = require('path'); // we will be using "path" module to get the name of the file only
const currentFileNameWithoutExtension = path.basename(__filename); // "__filename" only is the path & name of the current file

// Create a file named "welcome.txt" containing one line "Hello Node"
fs.writeFile(file_dir+'/'+file_wr, 
'Hello Node :D\n  - I\'ve been made by "'+currentFileNameWithoutExtension+'" file\n  - I\'ve been created in "'+file_dir+'" directory!', 
(err) => {
  if (err) {
    console.log(err);
    return;
  }

  // Read and console.log data from the written file (welcome.txt)
  fs.readFile(file_dir+'/'+file_wr, 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(data);
  });
});

