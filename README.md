# face-detector
A simple NPM module to detect faces. The module will return the number of recognizable faces from a given image URL or path.

Opencv is required.

# Usage

**Install the Module**

```
npm install face-detector
```

**Example Using an URL**

```javascript
const face = require('face-detector')

var imageUrl = 'https://avatars2.githubusercontent.com/u/5693297?v=3&s=400'

face.detect(imageUrl,function(result){
  console.log(result)

})
```

**Example Using a Path**

```javascript
const face = require('face-detector')

var imagePath = './image.jpg'

face.detect(imagePath,function(result){
  console.log(result)

})
```
