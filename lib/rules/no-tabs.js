/**
 * @fileoverview No indent Tabsharacters allowes
 * @author Andy Buecker
 * @copyright 2014 Andy Buecker. All rights reserved.
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    // variables should be defined here

    //--------------------------------------------------------------------------
    // Helpers
    //--------------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //--------------------------------------------------------------------------
    // Public
    //--------------------------------------------------------------------------

    return {

        "Program": function (node) {
            var lines = context.getSourceLines();
            lines.forEach(function(line, i) {
                if (/\t/.test(line)) {
                    context.report(
                        node,
                        { line: i + 1, col: line.indexOf('\t') },
                        'Tab found.  Use soft tabs instead.'
                    );
                }
            });
        }

    };

};
