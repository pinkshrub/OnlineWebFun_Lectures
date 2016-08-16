
##We all know about javascript variables by this point:

		var person = "Michael"

But what if we want to store many properties of the same object?

We have a couple options.


	var person  = ["Michael", "brown", "Olalla"]


So here we can access everything just fine so long as we know the index, or we can loop through every single element to find something.

But how are other developers to know that hometown is at index [2] of this array?

	console.log(person[2]);
	-> "Olalla"

####enter the Object

```
var person = {
	"name": "Michael",
	"hair_color": "brown",
	"hometown": "Olalla"
}
```

Arrays are great for certain types of data - things with a fixed order, for example. But properties of a person or a customer or a car don't have fixed orders.

But with orderly key / value pairs, any value can be looked up simply by knowing the name of the key.

	console.log(person['hometown']);
	-> "Olalla"

This is just a warm-up. The real wizardry comes next!

##AJAX

- super great!

- Asynchronous Javascript And XML

- Allows you to:
	- update web pages without reloading
 	- send requests to a server after the page has loaded
	- receive responses from a server after the page has loaded
	- send data to a server in the background


- Works with your own servers as well as external APIs

- examples: autocomplete, google maps, news feeds

##API

- Application Programming Interface

- A resource meant to be used by other developers

- allows you to use data others have collected

- There are TONS of APIs out there -- if you can think of it, there's an API for it


	Advantages
	- development speed
	- cross language / cross platform
	- increase market size

##Some APIs	worth checking out

Open Weather Map: http://openweathermap.org/api

GitHub API: https://developer.github.com/v3/

Google Maps Directions API: https://developers.google.com/maps/documentation/directions/

Twitter API: https://dev.twitter.com/rest/public

Flickr API: https://www.flickr.com/services/api/

NASA APIs: https://api.nasa.gov/

Pokemon API: http://pokeapi.co/media/img/1.png

Star Wars API: http://swapi.co/

## AJAX returns JSON and HTML as well as XML
 - wait, what's JSON?
 	- JavaScript Object Notation
	- An example of JSON:
```
var data = {
            results: [
              {
                name: 'Nic',
                hobby: 'Coding'
              },
              {
                name: 'Dhurata',
                hobby: 'Coding'
              },
              {
                name: 'Todd',
                hobby: 'Teaching Others To Code'
              },
				  {
					 name: 'Michael',
					 hobby: 'Teaching Others To Code'
				  }
            ],
            date: '08-01-2016',
            version: 0.9
          }
```


http://pokeapi.co/api/v1/pokemon/1/
