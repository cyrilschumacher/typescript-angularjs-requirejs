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
/// <amd-dependency path="directive/customDirective"/>
/// <amd-dependency path="service/customService"/>

import Application = require("app");
import CustomService = require("service/customService");

/**
 * @summary Custom controller.
 * @author  Cyril Schumacher
 * @class
 */
class CustomController {
    /**
     * @summary Dependencies injection.
     * @type {Array<string>}
     */
    public static $inject: Array<String> = ["$scope", "customService"];

    /**
     * @summary Constructor.
     * @constructs
     * @param $scope            {IScope}        Scope.
     * @param $customService    {CustomService} Custom service.
     */
    public constructor(private $scope: ng.IScope, private customService: CustomService) {
        console.log("CustomController#constructor");
    }
}

export = CustomController;
Application.module["register"].controller("customController", CustomController);
