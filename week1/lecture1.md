#Web Fundamentals - Week 1
####Key Assignment
- FreeBSD

####Administrative Bits
- Anyone still not invited to the Coding Dojo Online Slack team?
- Anyone still not able to access the Learning Platform? [http://learn.codingdojo.com]
- Anyone still not in the Slack web-fundamentals channel?

####HTTP Request/Response Cycle
- Apple store
- Straightforward walkthrough

####Where Does The Web Start?
- It's all just a bunch of connected computers
- All we are doing is sending out requests to different addresses (where computers live)
  - Those computers are executing logic based on our requests to deliver pages/data back to us

####Languages Browsers Speak
- HTML
- CSS
- Javascript

####HTML
- HyperText Markup Language
  - Just a type of language contained in a document that a browser can read
  - Determines the structure of the page
- Tags get interpreted as content
  - `<!DOCTYPE html>` declares that this is an html5 document. Use this always.
  - `<html>` starts a document and the corresponding `</html>` ends it
  - `<head>` contains information about the page
  - `<body>` contains the content displayed
- Most-used tags are on the learning platform.  
  - We teach the <b>20%</b> that builds the <b>80%</b> of sites
  - What's nytimes.com made up of? Nothing crazy!

####Indentation - Which Would You Rather Read?  Which One Works?
```
    <html>
  <head>
                                          <title>Indented HTML</title>
</head>
                            <body>
        <div>
      <h1>Hello World</h1>
          </div>
        </body>
      </html>
```
#####VS.
```
<html>
  <head>
    <title>Indented HTML</title>
  </head>
  <body>
    <div>
      <h1>Hello World</h1>
    </div>
  </body>
</html>
```

####Parent-Child Quiz
```
<html>
  <head></head>
  <body>
    <div>
      <h1>Quiz!</h1>
      <p>I am a paragraph</p>
    </div>
  </body>
</html>
```
1. What is the parent of `<h1>`?
2. What is the parent of `<p>`?
3. What is the immediate child of the `<body>`?
4. What is the sibling of `<h1>`?

####HTML5
- New tags plus more tags that do more than just spit out text.
  - `<audio>`
  - `<header>`
  - `<footer>`

####For Tomorrow
1. Create a GitHub Account
2. Download Git (skip ahead to Git section of platform)
3. Create a Repo
4. Push an Assignment
5. Send a Slack message to the web-fundamentals channel with a link to your new repo

####Lemo - Create A Git Repo and Push Algorithm Solutions
