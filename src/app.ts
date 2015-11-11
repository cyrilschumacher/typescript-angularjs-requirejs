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

/// <reference path="typing/angularjs/angular.d.ts" />
/// <reference path="typing/angularjs/angular-route.d.ts" />

import RegisterConfiguration = require("configuration/register");
import RouteConfiguration = require("configuration/route");

/**
 * @summary Application.
 * @author  Cyril Schumacher
 * @class
 */
class Application {
    /**
     * @summary Instance.
     * @private
     * @type {Application}
     */
    private static _instance: Application;

    /**
     * @summary Angular module.
     * @private
     * @type {IModule}
     */
    private _module: ng.IModule;

    /**
     * @summary Gets the angular module.
     * @public
     * @returns {IModule} Module.
     */
    public get module(): ng.IModule {
        return this._module;
    }

    /**
     * @summary Gets the instance of class.
     * @public
     * @returns {Application} Instance of class.
     */
    public static get instance(): Application {
        if (!Application._instance) {
            Application._instance = new Application();
        }

        return Application._instance;
    }

    /**
     * @summary Constructor.
     * @constructs
     * @private
     */
    constructor() {
        // Initialize module.
        this._initModule();
    }

    /**
     * @summary Initialize class.
     * @public
     */
    public initialize = (): void => {
        // Initialize constants and configurations.
        this._initConstants();
        this._initConfigurations();
    };

    /**
     * @summary Initialize configuration.
     * @private
     */
    private _initConfigurations = (): void => {
        this._module.config(RegisterConfiguration)
                    .config(RouteConfiguration);
    };

    /**
     * @summary Initialize constants.
     * @private
     */
    private _initConstants = (): void => {
        // Creates an application configuration.
        var appConfig: Object = {
            "appName": "app",
            "appVersion": 1.0,
            "route": {
                "controllerPath": "javascript/controller/",
                "cssPath": "css/",
                "viewPath": "view/"
            }
        };

        this._module.constant("appConfig", appConfig);
    };

    /**
     * @summary Initialize module.
     * @private
     */
    private _initModule = (): void => {
        this._module = angular.module("app", ["routeStyles"]);
    };
}

export = Application.instance;
