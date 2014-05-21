all: empty-rectangle-js

empty-rectangle-js: empty-rectangle-jison
	yuicompressor --type js -o ../js/empty-rectangle-example.min.js ../js/empty-rectangle-example.js

empty-rectangle-jison:
	jison -m js -o ../js/empty-rectangle-example.js ../src/empty-rectangle-example.jison

empty-rectangle-fcd image: empty-rectangle-example.fcd
	fidocadj -n -c r3 png ../images/empty-rectangle-example.png ../src/empty-rectangle-example.fcd

empty-rectangle-example.fcd:
	@(cd ../src && python make-fidocadj-code.py)

clean:
	rm -f ../js/empty-rectangle-example*
