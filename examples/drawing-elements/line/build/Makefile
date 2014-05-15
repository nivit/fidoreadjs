all: line-js

line-js: line-jison
	yuicompressor --type js -o ../js/line-example.min.js ../js/line-example.js

line-jison:
	jison -m js -o ../js/line-example.js ../src/line-example.jison

clean:
	rm -f ../js/line-example*
