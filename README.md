## dirls - Get directory contents and metadata
[![Build Status](https://travis-ci.com/gbougakov/dirls.svg?branch=master)](https://travis-ci.com/gbougakov/jebase)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fgbougakov%2Fdirls.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fgbougakov%2Fdirls?ref=badge_shield)
### Install
```bash
npm i @georgenet/dirls
```

### Usage
```js
const dirls = require('@georgenet/dirls')
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


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fgbougakov%2Fdirls.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fgbougakov%2Fdirls?ref=badge_large)