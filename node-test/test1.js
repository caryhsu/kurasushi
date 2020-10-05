const cvstfjs = require('@microsoft/customvision-tfjs-node');

async function executeAsync(image_filepath) {
  const model = new cvstfjs.ClassificationModel();
  await model.loadModelAsync('file://D:/藏壽司/git/az_model/model.json');
  fs.readFile(image_filepath, function (err, data) {
    if (err) {
      throw err;
    }

    const result = model.executeAsync(data);
    console.log(result);
  })
}

// image_filepath = "D:\\藏壽司\\video\\projects\\c20t90\\az\\大生鮮蝦(一貫)\\大生鮮蝦(一貫)-!-0.jpg";
// await executeAsync(image_filepath);
