If you want to build the examples from scratch you need the following programs:

  * git: http://git-scm.com/ -- required to clone this repository
  * make -- installed by default on major operating systems
  * nodejs: http://node.js -- required by npm
  * npm: http://www.npmjs.org -- required by jison
  * jison http://zaach.github.io/jison/ -- required to build the parser

    Install with the command
    
      `npm install jison`

      (the executable will be put under `~/node_modules/.bin`, so add that
       directory to your PATH)

  * yuicompressor: http://developer.yahoo.com/yui/compressor/ -- required to
    minimize the parser

  * fidocadj: http://fidocadj.sf.net -- required to build PNG images

When you have all those tools, clone this repository with

  `$ git clone https://github.com/nivit/fidoreadjs.git`

and then build an example with the command:

  `$ (cd ./examples/EXAMPLE/DIR/build && make)`

See the result by opening the page ./examples/EXAMPLE/DIR/FILE.html in your
web browser.
