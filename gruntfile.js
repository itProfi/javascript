// To use this file in WebStorm, right click on the file name in the Project Panel (normally left) and select "Open Grunt Console"

/** @namespace __dirname */

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        // Javascript code styler
        jscs: {
            all: {
                src: [ "styletest.js "],
                options: {
                    force: true,
                    "requireCurlyBraces": ["if","else","for","while","do","try","catch","case","default"],
                    "requireSpaceAfterKeywords": ["if","else","for","while","do","switch","return","try","catch"],
//                    "requireSpaceBeforeBlockStatements": true,
                    "requireParenthesesAroundIIFE": true,
                    "requireSpacesInFunctionExpression": {"beforeOpeningCurlyBrace": true },
                    "requireSpacesInAnonymousFunctionExpression": {"beforeOpeningRoundBrace": true, "beforeOpeningCurlyBrace": true},
                    "requireSpacesInNamedFunctionExpression": {"beforeOpeningCurlyBrace": true},
                    "requireSpacesInFunctionDeclaration": {"beforeOpeningCurlyBrace": true},
                    "disallowMultipleVarDecl": true,
                    "requireBlocksOnNewline": true,
                    "disallowEmptyBlocks": true,
                    "disallowSpacesInsideObjectBrackets": true,
                    "disallowSpacesInsideArrayBrackets": true,
                    "disallowSpaceAfterObjectKeys": true,
                    "requireCommaBeforeLineBreak": true,
                    //"requireAlignedObjectValues": "all",
                    "requireOperatorBeforeLineBreak": ["?", "+", "-", "/","*", "=", "==", "===", "!=", "!==", ">", ">=", "<","<="],
                    "disallowLeftStickedOperators": ["?", "+", "-", "/", "*", "=", "==", "===", "!=", "!==", ">", ">=", "<", "<="],
                    "requireRightStickedOperators": ["!"],
                    "disallowRightStickedOperators": ["?", "+", "/", "*", ":", "=", "==", "===", "!=", "!==", ">", ">=", "<", "<="],
                    "requireLeftStickedOperators": [","],
                    "disallowSpaceAfterPrefixUnaryOperators": ["++", "--", "+", "-", "~", "!"],
                    "disallowSpaceBeforePostfixUnaryOperators": ["++", "--"],
                    "requireSpaceBeforeBinaryOperators": ["+","-","/","*","=","==","===","!=","!=="],
                    "requireSpaceAfterBinaryOperators": ["+", "-", "/", "*", "=", "==", "===", "!=", "!=="],
                    //"validateIndentation": 4,
                    //"validateQuoteMarks": { "mark": "\"", "escape": true },
                    "disallowMixedSpacesAndTabs": true,
                    "disallowKeywordsOnNewLine": ["else", "catch"]

                }
            }
        }

    });

    var gruntTasks = [
        'grunt-jscs-checker'
    ];

    var i;

    for (i in gruntTasks) {
        grunt.loadNpmTasks(gruntTasks[i]);
    }

    grunt.registerTask('default', [
        'jscs'
    ]);
};