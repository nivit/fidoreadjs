<!--
$Revision$
$Author$
$URL$
-->
<html lang="en">
  <head>
    <meta charset="utf-8">
    <!--
    See http://goo.gl/IXdFGh for a better way to send this through the HTTP headers
    -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>FidoReadJS - Draw Empty Rectangles with Different Layer - Example</title>
    <link href="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" rel="stylesheet">
    <style>
      #fidocad-listing {
        display: none;
      }
      .row-marketing {
        margin-top: 50px;
      }
    </style>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script src="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/paper.js/0.9.18/paper-full.min.js"></script>
    <script src="js/advanced-text-example.min.js"></script>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <ul class="nav nav-pills pull-right">
          <li class="active"><a href="http://fidoreadjs.sf.net/">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <h3 class="text-muted">FidoReadJS</h3>
      </div>

      <div class="row-marketing">
        <h4>Test Simple Text</h4>
        <p>Draw some advanced text using TY primitive</p>
      </div>
      <div class="row-marketing">
        <h4>FidoCad Listing:</h4>
        <p id="fidocad-listing">
        [FIDOCAD]
        TY 25 10 4 3 0 0 0 * Text0
        TY 25 10 4 3 0 4 0 * Text1
        TY 25 20 4 8 0 0 3 * Text2
        TY 25 20 4 8 0 4 5 * Text3
        TY 25 25 8 3 0 0 6 * Text4
        TY 25 25 8 3 0 4 0 * Text5
        TY 25 35 8 3 0 0 0 * Text6
        TY 30 40 8 3 20 0 0 * Text7
        TY 35 45 8 3 40 0 0 * Text8
        TY 40 50 8 3 60 0 0 * Text9
        TY 45 55 8 3 80 0 0 * Text10
        TY 50 60 8 3 90 0 0 * Text11
        TY 20 40 8 3 20 4 0 * Text12
        TY 15 45 8 3 40 4 0 * Text13
        TY 10 50 8 3 60 4 0 * Text14
        TY 5 55 8 3 80 4 0 * Text15
        TY 25 35 8 3 0 4 0 * Text16
        TY 0 60 8 3 90 4 0 * Text17
        </p>
        </p>
        <pre>
[FIDOCAD]
TY 25 10 4 3 0 0 0 * Text0
TY 25 10 4 3 0 4 0 * Text1
TY 25 20 4 8 0 0 3 * Text2
TY 25 20 4 8 0 4 5 * Text3
TY 25 25 8 3 0 0 6 * Text4
TY 25 25 8 3 0 4 0 * Text5
TY 25 35 8 3 0 0 0 * Text6
TY 30 40 8 3 20 0 0 * Text7
TY 35 45 8 3 40 0 0 * Text8
TY 40 50 8 3 60 0 0 * Text9
TY 45 55 8 3 80 0 0 * Text10
TY 50 60 8 3 90 0 0 * Text11
TY 20 40 8 3 20 4 0 * Text12
TY 15 45 8 3 40 4 0 * Text13
TY 10 50 8 3 60 4 0 * Text14
TY 5 55 8 3 80 4 0 * Text15
TY 25 35 8 3 0 4 0 * Text16
TY 0 60 8 3 90 4 0 * Text17
</pre>
        </div>
        <div class="row-marketing">
          <h4>Output of FidoReadJS</h4>
          <p>Graphic generated with a series of commands</p>
          <p>
          <code>paper.PointText({point: [x1, y1], fillColor: '#nnnnnn', fontSize: 15, content: 'TEXT', fontFamily: 'Courier New'});</code>
          of <a target="_blank" href="http://paperjs.org/">Paper .js</a> (v. 0.9.18)
          </p>
          <figure>
            <canvas id="fidoreadjs-canvas" width="200" height="200"></canvas>
            <figcaption>
              Output of FidoReadJS
            </figcaption>
          </figure>
        </div>
        <div class="row-marketing">
          <h4>Output of <a target="_blank" href="http://fidocadj.sourceforge.net/">FidoCadJ</a></h4>
          <p>This figure was generated with the command</p>
          <p>
          <code>fidocadj -n -c r3 png advanced-text-example.png advanced-text-example.fcd</code></p>
          <figure>
            <img src="images/advanced-text-example.png" />
            <figcaption>
              Output of FidoCadJ (@version)
            </figcaption>
          </figure>
        </div>
      </div>
    </body>
  </html>

