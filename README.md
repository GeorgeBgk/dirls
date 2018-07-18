## dirls - Get directory contents and metadata
[![Build Status](https://travis-ci.com/gbougakov/dirls.svg?branch=master)](https://travis-ci.com/gbougakov/jebase)
### Install
```bash
npm i @georgenet/dirls
```

### Usage
```js
const dirls = require('dirls')
console.log(dirls('path'))
```
Out:
```js
[
	{
		name: "file.txt" // File name
		type: "file" // Can be 'device', 'directory', 'FIFOpipe', 'file', 'socket', 'symlink' or 'unknown'
		stats: {} // fs.Stats object
	}
]
```
