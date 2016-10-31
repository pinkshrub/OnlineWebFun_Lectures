# jQuery day 1 #

## javascript in your browser ##

What is the DOM? The DOM stands for document object model. what Does that mean? Everything is an object. At the highest level is an object, called document. All the tags inside are converted into objects, and placed hierarchically into the document object.

The document object also comes with utility functions. One of which is grabbing an element by it's id.

```html
<div id="blue-box">
	<p>Text inside</p>
</div>
```

```js
var element = document.getElementById("blue-box");

console.log(element);
```

This is using the browser's built in javascript methods attached to the document object.

What will the resulting element hold? Well, we know that each of these elements in an html page are objects. So it's not surprising that it gives us back an element as an object!

```js
console.log(element);

element.innerHtml = "<h1>Different text inside</h1>"
```

If we look at the element, there are a bunch of more properties to work with. One property we see here is innerHtml. Look how it shows the content inside the div?

I'm going to change that. Let's have it say different text, with an h1 tag.

I successfully changed the DOM using plain javascript. The div node was updated, so the view updated.

# What is jQuery? #

jQuery is a javascript library. jQuery uses your built in methods offered from the browser. Like the one I showed you above. And it wraps it in a syntax that gives it an intuitive way to use it.

These browser methods helps you interact with the elements, or the objects, of your web page.

Here's an example of how it's used.

```html
<div id='blue-box'>Text Inside</div>
```

```js
var result = $('#blue-box').html();

console.log(result);
```

That all seems kind of like magic doesn't it. html() function takes an element, and grabs everything in it.

We're going to see this pattern quite often in jQuery. I think to be able to use it, it really helps to understand how it's constructed which we will go over tomorrow.
