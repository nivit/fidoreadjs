/** FidoReadJS: FidoCad grammar
 *  http://sourceforge.net/projects/fidoreadjs
 *  (c) 2014 Nicola Vitale <fidoreadjs@gmail.com>
 *  BSD 2-Clause license (http://opensource.org/licenses/BSD-2-Clause).
 *
 *  $Revision: 3 $
 *  $Author: nivit $
 *  $URL: svn+ssh://svn.code.sf.net/p/fidoreadjs/svn/trunk/examples/drawing-elements/line/src/line-example.jison $
 *
 */
%lex

%{
%}

HEADER		"[FIDOCAD".*"]"
LINE_CMD	"LI"
EMPTY_RECTANGLE_CMD	"RV"
FILLED_RECTANGLE_CMD	"RP"
%%

\s+			/* skip whitespace */
[\n]+			return 'NL';
[0-9]+			return 'NUMBER';
{HEADER}		return 'HEADER';
{LINE_CMD}		return 'LI';
{EMPTY_RECTANGLE_CMD}	return 'RV';
{FILLED_RECTANGLE_CMD}	return 'RP';
<<EOF>>			return 'EOF';
.			return 'INVALID';

/lex

%start start

%%

start
	: fidocad_listing EOF{ return $1 ; }
	;

fidocad_listing
	: /* no input */
	| statements { $$ = $1 }
	| fidocad_header statements { $$ = $2}
	;

fidocad_header
	: HEADER
	;

statements
	: statements statement { $$ = $1  + $2}
	| statement { $$ = $1 }
	;

statement
	: line { $$ = $1 }
	| line line_fidocadj_extension
	| empty_rectangle
	| empty_rectangle rectangle_fidocadj_extension
	| filled_rectangle
	| filled_rectangle rectangle_fidocadj_extension
	| simple_text
	| advanced_text
	| empty_polyline
	| empty_polyline polyline_fidocadj_extension
	| filled_polyline
	| filled_polyline polyline_fidocadj_extension
	| bezier_curve
	| bezier_curve bezier_curve_fidocadj_extension
	| complex_curve
	| complex_curve complex_curve_fidocadj_extension
	| electrical_junction
	| electrical_junction fidocaj_extension
	| pcb_pad
	| pcb_pad fidocadj_extension
	| pcb_track
	| pcb_track fidocadj_extension
	| macro_call
	| macro_call fidocadj_extension
	| NL
	;

line
	:
	LI coords coords layer { paper.Path.Line({from: $2, to: $3, strokeColor: layers[$4].layerColor, strokeWidth: 2}); }
	;

coords
	:
	NUMBER NUMBER { $$ = [ Number($1)*3, Number($2)*3 ]; }
	;

layer
	: NUMBER { $$ = Number($1) ;/* return 0 <= layer <= 15 */ }
	;

empty_rectangle
	:
	RV coords coords layer {paper.Path.Rectangle({from: $2, to: $3, strokeColor: layers[$4].layerColor, strokeWidth: 2}); }
	;
filled_rectangle
	:
	RP coords coords layer {paper.Path.Rectangle({from: $2, to: $3, fillColor: layers[$4].layerColor, strokeWidth: 2}); }
	;	
%%
var layer = function (c, v, d, a) {
	return {layerColor: c, isVisible: v, largeDescription: d, alpha: a};
}

/* see http://sourceforge.net/p/fidocadj/code/HEAD/tree/trunk/src/layers/StandardLayers.java */
var layers = {
    0: new layer('#000000' , true, 'Other_l', 1.0),
    1: new layer('#000080' , true, 'Bottom_copper', 1.0),
    2: new layer('#ff0000' , true, 'Top_copper', 1.0),
    3: new layer('#008080' , true, 'Silkscreen', 1.0),
    4: new layer('#ffc800' , true, 'Other_1', 1.0),
    5: new layer('#7fff00', true, 'Other_2', 1.0),
    6: new layer('#00ffff', true, 'Other_3', 1.0),
    7: new layer('#008000', true, 'Other_4', 1.0),
    8: new layer('#9acd32', true, 'Other_5', 1.0),
    9: new layer('#ff1493', true, 'Other_6', 1.0),
    10: new layer('#b59b0c', true, 'Other_7', 1.0),
    11: new layer('#0180ff', true, 'Other_8', 1.0),
    12: new layer('#e3e3e3', true, 'Other_9', 1.0),
    13: new layer('#ababab', true, 'Other_10', 1.0),
    14: new layer('#6f6f6f', true, 'Other_11', 1.0),
    15: new layer('#000000', true, 'Other_12', 1.0),
};

window.onload = function () {
  var canvas, input, result;
  paper.setup('fidoreadjs-canvas');
  input = document.getElementById("fidocad-listing").textContent;
  result = filledRectangleExample.parse(input);
  paper.view.draw();
};

