/* The MIT License (MIT)
 *
 * Copyright (c) 2017 Cyril Schumacher
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

/**
 * @summary Configuration for register.
 * @author  Cyril Schumacher
 * @class
 */
class RegisterConfiguration {
    /**
     * @summary Constructor.
     * @constructor
     * @param {Object}           appConfig           The application configuration.
     * @param {IServiceProvider} $controllerProvider The controller provider.
     * @param {IServiceProvider} $compileProvider    The compile provider.
     * @param {IServiceProvider} $filterProvider     The filter provider.
     * @param {IServiceProvider} $provide            The provide.
     */
    public constructor(private $controllerProvider: angular.IServiceProvider, private $compileProvider: angular.IServiceProvider, private $filterProvider: angular.IServiceProvider, private $provide: angular.IServiceProvider) {
        this._initializeRegister();
    }

    public static create = ($controllerProvider: angular.IServiceProvider, $compileProvider: angular.IServiceProvider, $filterProvider: angular.IServiceProvider, $provide: angular.IServiceProvider) => {
        return new RegisterConfiguration($controllerProvider, $compileProvider, $filterProvider, $provide);
    }

    private _initializeRegister = () => {
        const app = angular.module("app");

        app.controller = this.$controllerProvider["register"];
        app.directive = this.$compileProvider["directive"];
        app.filter = this.$filterProvider["register"];
        app.factory = this.$provide["factory"];
        app.service = this.$provide["service"];
    };
}

export = RegisterConfiguration;
