/* The MIT License (MIT)
 *
 * Copyright (c) 2017 Cyril Schumacher.fr
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

import * as angular from "angular";

import Application = require("../app");
import CustomService = require("../service/custom");

import "../directive/custom";
import "../service/custom";

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
    public static $inject = ["$scope", "customService"];

    /**
     * @summary Constructor.
     * @constructs
     * @param $scope            {IScope}        Scope.
     * @param $customService    {CustomService} Custom service.
     */
    public constructor($scope: angular.IScope, customService: CustomService) {
        $scope["double"] = this._double;
        $scope["spice"] = "habanero";
        $scope["spices"] = [
            { "name": "pasilla", "spiciness": "mild" },
            { "name": "jalapeno", "spiciness": "hot hot hot!" },
            { "name": "habanero", "spiciness": "LAVA HOT!!" }
        ];
    }

    private _double = (value: number) => {
        return value * 2;
    };
}

export = CustomController;
Application.module.controller("customController", CustomController);
