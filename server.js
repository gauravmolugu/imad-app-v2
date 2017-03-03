var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles= {
    'articleone': {    title:'gaurav',
    date:'23 feb',
    heading:'this is article one',
    link:`
            <div>
                <a href="/ammu">go to ammu</a>
            </div>
            
            <div>
                <a href="/articletwo">go to aricle-two</a>
            </div>
            
            <div>
                <a href="/articlethree">go to article-three</a>
            </div>
`,
    content:`
        <ol>
           <li>
               This is my first article.
           </li>
           <li>
               i hope this displays the result i am hoping for else this course is a serious waste of time.
           </li>
        </ol>
       <p>
           THIS IS A PARAGRAPH IN WHICH ALL THE LETTERS AE IN CAPS AND LETS SEE HOW THIS WORKS.
       </p>
    `,
 }, 
    'articletwo':{
    title:'gaurav',
    date:'24 feb',
    heading:'this is article two',
 },
    'articlethree':{
    title:'gaurav',
    date:'25 feb',
    heading:'this is article three',
 },

};

function articleone(data){
var title=data.title;
var heading=data.heading;
var date=data.date;
var links=data.link;
var content=data.content;
var temp=`
<html>
    <head>
    ${title}
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="stuff">
        ${links}
        </div>
        <hr/>
    <div class="center">
         <div>
            <img src="/ui/asd.jpg" class="img-large"/>
        </div>
        ${heading}
        </div>
        <div>
        ${date}
        </div>
        ${content}
    </div>
    </body>
</html>

`;
return temp;
}



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/a.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'a.jpg'));
});

app.get('/ui/av.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'av.jpg'));
});

app.get('/ui/asd.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'asd.jpg'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/:bla', function (req, res)
{
   var bla=req.params.bla;
   res.send(articleone(articles[bla]));
});




var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
