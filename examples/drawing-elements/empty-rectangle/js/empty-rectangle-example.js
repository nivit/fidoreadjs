/* parser generated by jison 0.4.13 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var emptyRectangleExample = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"start":3,"fidocad_listing":4,"EOF":5,"statements":6,"fidocad_header":7,"HEADER":8,"statement":9,"line":10,"line_fidocadj_extension":11,"empty_rectangle":12,"rectangle_fidocadj_extension":13,"filled_rectangle":14,"simple_text":15,"advanced_text":16,"empty_polyline":17,"polyline_fidocadj_extension":18,"filled_polyline":19,"bezier_curve":20,"bezier_curve_fidocadj_extension":21,"complex_curve":22,"complex_curve_fidocadj_extension":23,"electrical_junction":24,"fidocaj_extension":25,"pcb_pad":26,"fidocadj_extension":27,"pcb_track":28,"macro_call":29,"NL":30,"LI":31,"coords":32,"layer":33,"NUMBER":34,"RV":35,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",8:"HEADER",11:"line_fidocadj_extension",13:"rectangle_fidocadj_extension",14:"filled_rectangle",15:"simple_text",16:"advanced_text",17:"empty_polyline",18:"polyline_fidocadj_extension",19:"filled_polyline",20:"bezier_curve",21:"bezier_curve_fidocadj_extension",22:"complex_curve",23:"complex_curve_fidocadj_extension",24:"electrical_junction",25:"fidocaj_extension",26:"pcb_pad",27:"fidocadj_extension",28:"pcb_track",29:"macro_call",30:"NL",31:"LI",34:"NUMBER",35:"RV"},
productions_: [0,[3,2],[4,0],[4,1],[4,2],[7,1],[6,2],[6,1],[9,1],[9,2],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[9,1],[9,2],[9,1],[9,2],[9,1],[9,2],[9,1],[9,2],[9,1],[9,2],[9,1],[9,2],[9,1],[9,2],[9,1],[10,4],[32,2],[33,1],[12,4]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1: return $$[$0-1] ; 
break;
case 3: this.$ = $$[$0] 
break;
case 4: this.$ = $$[$0]
break;
case 6: this.$ = $$[$0-1]  + $$[$0]
break;
case 7: this.$ = $$[$0] 
break;
case 8: this.$ = $$[$0] 
break;
case 32: paper.Path.Line({from: $$[$0-2], to: $$[$0-1], strokeColor: layers[$$[$0]].layerColor, strokeWidth: 2}); 
break;
case 33: this.$ = [ Number($$[$0-1])*3, Number($$[$0])*3 ]; 
break;
case 34: this.$ = Number($$[$0]) ;/* return 0 <= layer <= 15 */ 
break;
case 35:paper.Path.Rectangle({from: $$[$0-2], to: $$[$0-1], strokeColor: layers[$$[$0]].layerColor, strokeWidth: 2}); 
break;
}
},
table: [{3:1,4:2,5:[2,2],6:3,7:4,8:[1,6],9:5,10:7,12:8,14:[1,9],15:[1,10],16:[1,11],17:[1,12],19:[1,13],20:[1,14],22:[1,15],24:[1,16],26:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21],35:[1,22]},{1:[3]},{5:[1,23]},{5:[2,3],9:24,10:7,12:8,14:[1,9],15:[1,10],16:[1,11],17:[1,12],19:[1,13],20:[1,14],22:[1,15],24:[1,16],26:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21],35:[1,22]},{6:25,9:5,10:7,12:8,14:[1,9],15:[1,10],16:[1,11],17:[1,12],19:[1,13],20:[1,14],22:[1,15],24:[1,16],26:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21],35:[1,22]},{5:[2,7],14:[2,7],15:[2,7],16:[2,7],17:[2,7],19:[2,7],20:[2,7],22:[2,7],24:[2,7],26:[2,7],28:[2,7],29:[2,7],30:[2,7],31:[2,7],35:[2,7]},{14:[2,5],15:[2,5],16:[2,5],17:[2,5],19:[2,5],20:[2,5],22:[2,5],24:[2,5],26:[2,5],28:[2,5],29:[2,5],30:[2,5],31:[2,5],35:[2,5]},{5:[2,8],11:[1,26],14:[2,8],15:[2,8],16:[2,8],17:[2,8],19:[2,8],20:[2,8],22:[2,8],24:[2,8],26:[2,8],28:[2,8],29:[2,8],30:[2,8],31:[2,8],35:[2,8]},{5:[2,10],13:[1,27],14:[2,10],15:[2,10],16:[2,10],17:[2,10],19:[2,10],20:[2,10],22:[2,10],24:[2,10],26:[2,10],28:[2,10],29:[2,10],30:[2,10],31:[2,10],35:[2,10]},{13:[1,28]},{5:[2,13],14:[2,13],15:[2,13],16:[2,13],17:[2,13],19:[2,13],20:[2,13],22:[2,13],24:[2,13],26:[2,13],28:[2,13],29:[2,13],30:[2,13],31:[2,13],35:[2,13]},{5:[2,14],14:[2,14],15:[2,14],16:[2,14],17:[2,14],19:[2,14],20:[2,14],22:[2,14],24:[2,14],26:[2,14],28:[2,14],29:[2,14],30:[2,14],31:[2,14],35:[2,14]},{5:[2,15],14:[2,15],15:[2,15],16:[2,15],17:[2,15],18:[1,29],19:[2,15],20:[2,15],22:[2,15],24:[2,15],26:[2,15],28:[2,15],29:[2,15],30:[2,15],31:[2,15],35:[2,15]},{5:[2,17],14:[2,17],15:[2,17],16:[2,17],17:[2,17],18:[1,30],19:[2,17],20:[2,17],22:[2,17],24:[2,17],26:[2,17],28:[2,17],29:[2,17],30:[2,17],31:[2,17],35:[2,17]},{5:[2,19],14:[2,19],15:[2,19],16:[2,19],17:[2,19],19:[2,19],20:[2,19],21:[1,31],22:[2,19],24:[2,19],26:[2,19],28:[2,19],29:[2,19],30:[2,19],31:[2,19],35:[2,19]},{5:[2,21],14:[2,21],15:[2,21],16:[2,21],17:[2,21],19:[2,21],20:[2,21],22:[2,21],23:[1,32],24:[2,21],26:[2,21],28:[2,21],29:[2,21],30:[2,21],31:[2,21],35:[2,21]},{5:[2,23],14:[2,23],15:[2,23],16:[2,23],17:[2,23],19:[2,23],20:[2,23],22:[2,23],24:[2,23],25:[1,33],26:[2,23],28:[2,23],29:[2,23],30:[2,23],31:[2,23],35:[2,23]},{5:[2,25],14:[2,25],15:[2,25],16:[2,25],17:[2,25],19:[2,25],20:[2,25],22:[2,25],24:[2,25],26:[2,25],27:[1,34],28:[2,25],29:[2,25],30:[2,25],31:[2,25],35:[2,25]},{5:[2,27],14:[2,27],15:[2,27],16:[2,27],17:[2,27],19:[2,27],20:[2,27],22:[2,27],24:[2,27],26:[2,27],27:[1,35],28:[2,27],29:[2,27],30:[2,27],31:[2,27],35:[2,27]},{5:[2,29],14:[2,29],15:[2,29],16:[2,29],17:[2,29],19:[2,29],20:[2,29],22:[2,29],24:[2,29],26:[2,29],27:[1,36],28:[2,29],29:[2,29],30:[2,29],31:[2,29],35:[2,29]},{5:[2,31],14:[2,31],15:[2,31],16:[2,31],17:[2,31],19:[2,31],20:[2,31],22:[2,31],24:[2,31],26:[2,31],28:[2,31],29:[2,31],30:[2,31],31:[2,31],35:[2,31]},{32:37,34:[1,38]},{32:39,34:[1,38]},{1:[2,1]},{5:[2,6],14:[2,6],15:[2,6],16:[2,6],17:[2,6],19:[2,6],20:[2,6],22:[2,6],24:[2,6],26:[2,6],28:[2,6],29:[2,6],30:[2,6],31:[2,6],35:[2,6]},{5:[2,4],9:24,10:7,12:8,14:[1,9],15:[1,10],16:[1,11],17:[1,12],19:[1,13],20:[1,14],22:[1,15],24:[1,16],26:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21],35:[1,22]},{5:[2,9],14:[2,9],15:[2,9],16:[2,9],17:[2,9],19:[2,9],20:[2,9],22:[2,9],24:[2,9],26:[2,9],28:[2,9],29:[2,9],30:[2,9],31:[2,9],35:[2,9]},{5:[2,11],14:[2,11],15:[2,11],16:[2,11],17:[2,11],19:[2,11],20:[2,11],22:[2,11],24:[2,11],26:[2,11],28:[2,11],29:[2,11],30:[2,11],31:[2,11],35:[2,11]},{5:[2,12],14:[2,12],15:[2,12],16:[2,12],17:[2,12],19:[2,12],20:[2,12],22:[2,12],24:[2,12],26:[2,12],28:[2,12],29:[2,12],30:[2,12],31:[2,12],35:[2,12]},{5:[2,16],14:[2,16],15:[2,16],16:[2,16],17:[2,16],19:[2,16],20:[2,16],22:[2,16],24:[2,16],26:[2,16],28:[2,16],29:[2,16],30:[2,16],31:[2,16],35:[2,16]},{5:[2,18],14:[2,18],15:[2,18],16:[2,18],17:[2,18],19:[2,18],20:[2,18],22:[2,18],24:[2,18],26:[2,18],28:[2,18],29:[2,18],30:[2,18],31:[2,18],35:[2,18]},{5:[2,20],14:[2,20],15:[2,20],16:[2,20],17:[2,20],19:[2,20],20:[2,20],22:[2,20],24:[2,20],26:[2,20],28:[2,20],29:[2,20],30:[2,20],31:[2,20],35:[2,20]},{5:[2,22],14:[2,22],15:[2,22],16:[2,22],17:[2,22],19:[2,22],20:[2,22],22:[2,22],24:[2,22],26:[2,22],28:[2,22],29:[2,22],30:[2,22],31:[2,22],35:[2,22]},{5:[2,24],14:[2,24],15:[2,24],16:[2,24],17:[2,24],19:[2,24],20:[2,24],22:[2,24],24:[2,24],26:[2,24],28:[2,24],29:[2,24],30:[2,24],31:[2,24],35:[2,24]},{5:[2,26],14:[2,26],15:[2,26],16:[2,26],17:[2,26],19:[2,26],20:[2,26],22:[2,26],24:[2,26],26:[2,26],28:[2,26],29:[2,26],30:[2,26],31:[2,26],35:[2,26]},{5:[2,28],14:[2,28],15:[2,28],16:[2,28],17:[2,28],19:[2,28],20:[2,28],22:[2,28],24:[2,28],26:[2,28],28:[2,28],29:[2,28],30:[2,28],31:[2,28],35:[2,28]},{5:[2,30],14:[2,30],15:[2,30],16:[2,30],17:[2,30],19:[2,30],20:[2,30],22:[2,30],24:[2,30],26:[2,30],28:[2,30],29:[2,30],30:[2,30],31:[2,30],35:[2,30]},{32:40,34:[1,38]},{34:[1,41]},{32:42,34:[1,38]},{33:43,34:[1,44]},{34:[2,33]},{33:45,34:[1,44]},{5:[2,32],11:[2,32],14:[2,32],15:[2,32],16:[2,32],17:[2,32],19:[2,32],20:[2,32],22:[2,32],24:[2,32],26:[2,32],28:[2,32],29:[2,32],30:[2,32],31:[2,32],35:[2,32]},{5:[2,34],11:[2,34],13:[2,34],14:[2,34],15:[2,34],16:[2,34],17:[2,34],19:[2,34],20:[2,34],22:[2,34],24:[2,34],26:[2,34],28:[2,34],29:[2,34],30:[2,34],31:[2,34],35:[2,34]},{5:[2,35],13:[2,35],14:[2,35],15:[2,35],16:[2,35],17:[2,35],19:[2,35],20:[2,35],22:[2,35],24:[2,35],26:[2,35],28:[2,35],29:[2,35],30:[2,35],31:[2,35],35:[2,35]}],
defaultActions: {23:[2,1],41:[2,33]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == 'undefined') {
        this.lexer.yylloc = {};
    }
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === 'function') {
        this.parseError = this.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || EOF;
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + this.lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: this.lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: this.lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                this.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

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
  result = emptyRectangleExample.parse(input);
  paper.view.draw();
};

/* generated by jison-lex 0.2.1 */
var lexer = (function(){
var lexer = {

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input) {
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {


var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:return 30;
break;
case 2:return 34;
break;
case 3:return 8;
break;
case 4:return 31;
break;
case 5:return 35;
break;
case 6:return 5;
break;
case 7:return 'INVALID';
break;
}
},
rules: [/^(?:\s+)/,/^(?:[\n]+)/,/^(?:[0-9]+)/,/^(?:(\[FIDOCAD.*\]))/,/^(?:(LI\b))/,/^(?:(RV\b))/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7],"inclusive":true}}
};
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();