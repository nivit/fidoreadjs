all: line-layer-js

line-layer-js: line-layer-jison
	yuicompressor --type js -o ../js/line-layer-example.min.js ../js/line-layer-example.js

line-layer-jison:
	jison -m js -o ../js/line-layer-example.js ../src/line-layer-example.jison

line-layer-fcd:
	fidocadj -n -c r3 png ../images/line-layer-example.png ../src/line-layer-example.fcd
clean:
	rm -f ../js/line-layer-example*
