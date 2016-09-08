#Web Fundamentals - Week 1
####Key Assignment
- FreeBSD

####Reminder: The 3 Languages Browsers Speak
- HTML
- CSS
- Javascript

####Intro to CSS
- Cascading Style Sheets
- If HTML is the content, CSS is the style and flair
- CSS rules...
```
h1{
  color: red;
  background-color: gray;
  border: 2px solid black;
}
```
- This example targets ALL `<h1>` tags in our document and applies those rules
- Where could stylesheets and/or styling live?
  1. In the head of the document within a `<link...>` tag.  This points us to find a file somewhere else!
```
<html>
  <head>
    <title>Styling</title>
    <link rel="stylesheet" href="myproject/assets/css/style.css">
  </head>
  <body>
    <h1>Hello</h1>
  </body>
</html>
```
  2. In the head again, but rules are defined within `<style>` tags
```
<html>
  <head>
    <title>Styling</title>
    <style>
      h1{
        color: blue;
      }
    </style>
  </head>
  <body>
    <h1>Hello</h1>
  </body>
</html>
```
  3. You can also style 'inline', e.g.
```
<html>
  <head>
    <title>Styling</title>
  </head>
  <body>
    <h1 style="color:blue;">Hello</h1>
  </body>
</html>
```
- Best Practice? Linking a stylesheet in from somewhere else.  Avoid putting your styles inline in your HTML!

####HTML Attributes [class & id] and CSS Selections
- Earlier we targeted ALL `<h1>` tags.
  - This doesn't always make things easy.
  - What if we don't want to style ALL `<h1>` tags but only a handful?  How do we distinguish them?
- We can add attributes to our HTML tags like class or id to help us target tags
```
<h1 class="cool">Hello Dojo Students</h1>
<h1>Hi There</h1>
<p class="cool">Welcome</p>
```
- Now we can target <b>any</b> tags with the class of `cool`
```
.cool{
  color: blue;
}
```
####Rules for Class vs. ID
- Class can be used anywhere multiple times
- ID should be reserved and used sparingly as we can only use it once!

####Weights
- Tag, Class, and ID all have different weights
  - Tag is weight of 1
  - Class is weight of 10
  - ID is weight of 100!
- If elements are torn between two equally-weighted rules, then the last-mentioned wins

####QUIZ
- What's the weight of these rules?
```
h1 {...}
#bigTime {...}
div h1 {...}
.cool {...}
```

####Cascading???
```
<div class="wrapper">
  <h1>You Are Awesome</h1>
  <p>Green Means Go</h1>
</div>
```
- With the snippet above, any rules the `<div>` has, will be applied to any of its children, `<h1>` and `<p>`
```
div {
  color: blue;
}
```
- To circumvent this, we can either apply rules independently to the `<h1>` and `<p>` tags or give them classes, etc.

####Display Properties
- Inline, Block, Inline-Block
- Some tags are inherently Block or Inline
- Blocks take up the ENTIRE WIDTH OF THE BROWSER
  - `<div>, <h1>, <p>, <ul>, <li>, <form>, etc.`
- Inlines take up just what they need!
  - `<span>, <img>, <a>`
- We can manipulate the display properties of these elements to act more like blocks or inlines

####Divs
- `<div>` is mostly used to organize other HTML elements
  - It is naturally a block element so if we want to organize chunks of HTML to be next to each other, we have to `display: inline-block` them

####Chrome Developer Tools and The Box Model
- When re-sizing any elements, such as a `<div>`, we need to know four things
- Margin, Padding, Border, Content
- Margin says 'put blank space between me and my neighbors'
- Padding says 'there needs to be more space between my contents and my borders!'
- Border says 'i'm going to wrap around the outside of the padding'
- Content size can be manipulated by the `width: ...px;` and `height: ...px;` rules
  - Check out Inspect Element in Google Chrome and see the box model in action!

####LEMO - Let's Make a `<ul>` Horizontal / LEMO Plotting Your Blocks!
