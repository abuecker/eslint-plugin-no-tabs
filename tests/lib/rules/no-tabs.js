/**
 * @fileoverview No indent Tabsharacters allowes
 * @author Andy Buecker
 * @copyright 2014 Andy Buecker. All rights reserved.
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var eslint = require("../../../lib/eslint"),
    ESLintTester = require("eslint-tester");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var eslintTester = new ESLintTester(eslint);
eslintTester.addRuleTest("lib/rules/no-tabs", {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "\tvar blah='blah';",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
