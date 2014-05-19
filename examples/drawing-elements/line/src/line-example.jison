/** FidoReadJS: FidoCad grammar
 *  http://sourceforge.net/projects/fidoreadjs
 *  (c) 2014 Nicola Vitale <fidoreadjs@gmail.com>
 *  BSD 2-Clause license (http://opensource.org/licenses/BSD-2-Clause).
 *
 *  $Revision$
 *  $Author$
 *  $URL$
 *
 */
%lex

%{
%}

%%

\s+		/* skip whitespace */
[\n]+		return 'NL';
//\s+		/* skip whitespace */
[0-9]+		return 'NUMBER';
\[FIDOCAD.*\]	return 'HEADER';
"LI"		return 'LI';
<<EOF>>		return 'EOF';
.		return 'INVALID';

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
	LI coords coords layer { paper.Path.Line({from: $2, to: $3, strokeColor: 'black', strokeWidth: 2}); }
	;

coords
	:
	NUMBER NUMBER { $$ = [ Number($1)*3, Number($2)*3 ]; }
	;

layer
	: NUMBER { $$ = $1 ;/* return 0 <= layer <= 15 */ }
	;
%%

window.onload = function () {
  var canvas, input, result;
  paper.setup('fidoreadjs-canvas');
  input = document.getElementById("fidocad-listing").textContent;
  result = lineExample.parse(input);
  paper.view.draw();
};

