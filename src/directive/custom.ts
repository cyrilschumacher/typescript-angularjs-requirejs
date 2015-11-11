/* The MIT License (MIT)
 *
 * Copyright (c) 2015 Cyril Schumacher.fr
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/// <reference path="../typing/angularjs/angular.d.ts" />

import Application = require("app");

/**
 * @summary Custom directive.
 * @author  Cyril Schumacher
 * @class
 */
class CustomDirective implements ng.IDirective {
    /**
     * @summary Dependencies injection.
     * @type {Array<string>}
     */
    public static $inject: Array<String> = [];

    /**
     * @summary Restrict.
     * @type {string}
     */
    public restrict: string = "A";

    /**
     * @summary Scope.
     * @type {string}
     */
    public scope: Object = {};

    /**
     * @summary Manipulates the DOM of the current page.
     * @param {IScope}              $scope   Angular scope object.
     * @param {IAugmentedJQuery}    $element jqLite-wrapped element that this directive matches.
     * @param {IAttributes}         $attrs   hash object with key-value pairs of normalized attribute names and their corresponding attribute values.
     */
    public link = ($scope: ng.IScope, $element: ng.IAugmentedJQuery, $attrs: ng.IAttributes): ng.IDirectiveLinkFn => {
        console.log("CustomDirective#link");
        return;
    };
}

export = CustomDirective;
Application.module.directive("ngCustom", () => new CustomDirective());
