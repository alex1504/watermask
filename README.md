A library for watermasking web pages by canvas.

## Screenshot
![font-repeat](https://raw.githubusercontent.com/alex1504/watermask/master/screenshot/font-repeat.png)
![font-single](https://raw.githubusercontent.com/alex1504/watermask/master/screenshot/font-single.png)
![image-repeat](https://raw.githubusercontent.com/alex1504/watermask/master/screenshot/image-repeat.png)
![image-single](https://raw.githubusercontent.com/alex1504/watermask/master/screenshot/image-single.png)

## Install

### CDN
```js
<script src="https://unpkg.com/watermask-lib@1.0.0/dist/watermask.min.js"></script>
```

### npm

```
npm install watermask --save
```

## Usage

font

```js
new WaterMask({
    font: 'Baidu百度'
})
```
image

```js
new WaterMask({
    image: 'xxx.png'
})
```

Full options

```js
new WaterMask({
    font: "",
    fontType: 'Microsoft YaHei',
    size: 24,
    container: container,
    color: "#333",
    alpha: 0.2,
    rotate: 340,
    scale: 1,
    startX: 20,
    startY: 20,
    rows: 10,
    cols: 10,
    xGap: 200,
    yGap: 100,
    image: '',
    repeat: true
})
```

## Options

| Key       | Type    | Default                              | Description                                          |
|-----------|---------|--------------------------------------|------------------------------------------------------|
| container | object  | document.querySelector("#watermask") |                                                      |
| font      | string  |                                      | Render font, required if image property is undefined |
| fontType  | string  | Microsoft YaHei                      |                                                      |
| size      | number  | 24                                   | Fontsize                                             |
| image     | string  |                                      | Render image, required if font property is undefined. Priorit to font property |
| color     | string  | #333                                 |                                                      |
| alpha     | number  | 0.2                                  | Global canvas transparency                           |
| rotate    | number  | 340                                  | deg                                                  |
| scale     | number  | 1                                    |                                                      |
| repeat    | boolean | true                                 | Font or image will be repeat in x and y axis         |
| startX    | number  | 20                                   | px, will be used only when repeat property is true   |
| startY    | number  | 20                                   | px, will be used only when repeat property is true   |
| rows      | number  | 10                                   |                                                      |
| cols      | number  | 10                                   |                                                      |
| xGap      | number  | 200                                  | px, will be used only when repeat property is true   |
| yGap      | number  | 100                                  | px, will be used only when repeat property is true   |
