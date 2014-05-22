all: filled-rectangle-js image

filled-rectangle-js: filled-rectangle-jison
	yuicompressor --type js -o ../js/filled-rectangle-example.min.js ../js/filled-rectangle-example.js

filled-rectangle-jison:
	jison -m js -o ../js/filled-rectangle-example.js ../src/filled-rectangle-example.jison

filled-rectangle-fcd image: filled-rectangle-example.fcd
	fidocadj -n -c r3 png ../images/filled-rectangle-example.png ../src/filled-rectangle-example.fcd

filled-rectangle-example.fcd:
	@(cd ../src && python make-fidocadj-code.py)

clean:
	rm -f ../js/filled-rectangle-example*
