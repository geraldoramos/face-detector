# face-detector
A simple NPM module to detect recognizable faces in an image url or file(path). Opencv is a requirement.

**Usage**

Just import this module and use a function to detect faces from an image url or image path. The module will return the number of recognizable faces in a given image.

```npm install face-detector```


**Using a URL**

```
const faceDetect = require('face-detector')

var imageUrl = 'https://avatars2.githubusercontent.com/u/5693297?v=3&s=400'

faceDetect.check(imageUrl,function(result){
  console.log(result)

})
```

**Using a path**

```
const faceDetect = require('face-detector')

var imagePath = './image.jpg'

faceDetect.check(imagePath,function(result){
  console.log(result)

})
```
