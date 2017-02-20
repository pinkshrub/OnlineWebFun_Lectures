#Web Fundamentals - Week 2
####Key Assignment
- Wordstream (CSS) & Ninja to Cat (jQuery)
- 

####Git and GitHub
- Git saves all your changes so you can revert to any save point!
- GitHub saves that to the cloud
- Let's do an algorithm and put it on Git! (not optional)

####The CSS Display Property Again
- Inline vs Inline-Block vs Block
  - Inline will only take up the space it needs for its contents!
  - Block will take up the entire width of the browser even IF you specify width and height!
  - Inline-Block accommodates taking a block element and making it more inline while also preserving and heights or widths you determine in the case where you don't have any content (Plotting Your Blocks assignment)

####The CSS Position Property Again
- Positioning
  - <b>Static:</b> by default, every element is positioned statically, or naturally
  - <b>Absolute:</b> Best way to think about any element that has a position of absolute is...
    1. It first gets decoupled from the page, so any neighboring elements don't even see it.
    2. If we specify a parent element to have a position other than static, that's our origin.  If no parents have a position specified, the default becomes the window.
    3. <b>QUIZ</b>  Will the `<h1>` below be moved 20px down and 20px to the right from the window or the `<div>` ?

```html
  <style>
    h1{
      position: absolute;
      top: 20px;
      left: 20px;
    }
  </style>
</head>
<body>
  <div id="wrapper">
    <h1>Hello World</h1>
    <p>Are You Ready To Rock?</p>
  </div>
</body>
```

    4. <b>QUIZ</b>  How do you think the snippet below might look?  Take a moment to visualize it.

```html
<style>
  #wrapper{
    position: relative;
    top: 100px;
    left: 200px;
    display: inline-block;
    height: 200px;
    width: 300px;
    background-color: red;
  }
  h1{
    position: absolute;
    top: 20px;
    left: 20px;
    background-color: blue;
    color: white;
  }
</style>
</head>
<body>
  <div id="wrapper">
    <h1>Hello World</h1>
    <p>Are You Ready To Rock?</p>
  </div>
</body>
```
  - <b>Relative:</b> A relative position property is similar to the absolute, but it moves relative to where it should NORMALLY have been seated.  The caveat here is that neighboring elements ignore the shift, but don't ignore where the element SHOULD have been
    - <b>QUIZ</b> Does the `<h1>` have the potential to overlap the `<p>` element?
```html
  <style>
    h1{
      position: relative;
      top: 30px;
      left: 20px;
      background-color: blue;
      color: white;
    }
  </style>
  </head>
  <body>
  <div id="wrapper">
    <h1>Hello World</h1>
    <p>Are You Ready To Rock?</p>
  </div>
</body>
```
  - <b>Fixed:</b> Similar to Absolute and Relative, but the Window is always the origin.  Imagine any fixed elements to be <b>GLUED</b> to the screen like a bug on the windshield.

####The CSS Percentage Value
- Responsive Design
  - Percentages for width and height let you specify without 'hardcoding' pixels, how much of the screen you want elements to take up in relative terms.
```html
  <style>
    #wrapper{
      display: inline-block;
      width: 50%;
      height: 50%;
      background-color: green;
    }
  </style>
</head>
<body>
  <div id="wrapper">
    <h1>Hello World</h1>
    <p>Are You Ready To Rock?</p>
  </div>
</body>
```
