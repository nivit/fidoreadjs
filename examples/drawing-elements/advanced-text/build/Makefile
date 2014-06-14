FCDJ_VERSION:=`fidocadj -h | grep -i version | cut -f 5 -d ' '`

all: advanced-text-js update-fidocadj-version

advanced-text-js: advanced-text-jison
	@yuicompressor --type js -o ../js/advanced-text-example.min.js ../js/advanced-text-example.js

advanced-text-jison:
	jison -m js -o ../js/advanced-text-example.js ../src/advanced-text-example.jison


update-fidocadj-version:
	@sed -e "s,@version,v. ${FCDJ_VERSION},1" \
		../advanced-text.tpl > ../advanced-text.html

fcd-image:
	@fidocadj -n -c r3 png ../images/advanced-text-example.png ../src/advanced-text-example.fcd
clean:
	rm -f ../js/advanced-text-example*
	rm -f ../advanced-text.html
