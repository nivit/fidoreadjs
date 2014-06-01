all: simple-text-js

simple-text-js: simple-text-jison
	yuicompressor --type js -o ../js/simple-text-example.min.js ../js/simple-text-example.js

simple-text-jison:
	jison -m js -o ../js/simple-text-example.js ../src/simple-text-example.jison

fcd-image:
	fidocadj -n -c r3 png ../images/simple-text-example.png ../src/simple-text-example.fcd
clean:
	rm -f ../js/simple-text-example*
