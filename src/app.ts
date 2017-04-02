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

import * as angular from 'angular';

import RegisterConfiguration = require("./configuration/register");
import RouteConfiguration = require("./configuration/route");
import ConfigurationProvider = require("./provider/configuration");

/**
 * @summary Application.
 * @author  Cyril Schumacher
 * @class
 */
class Application {
    private static _instance: Application;
    private _module: angular.IModule;

    /**
     * @summary Gets the angular module.
     * @returns {IModule} The module.
     */
    public get module() {
        return this._module;
    }

    /**
     * @summary Constructor.
     * @constructs
     * @private
     */
    constructor() {
        this._initializeModule();
    }

    public setConfiguration = (configuration: {}) => {
        const configurationModule = (appConfigProvider: ConfigurationProvider) => appConfigProvider.set(configuration);
        this._module.config(['appConfigProvider', configurationModule]);
    }

    private _initializeConfigurations = () => {
        this._module
            .config(["$controllerProvider", "$compileProvider", "$filterProvider", "$provide", RegisterConfiguration.create])
            .config(["$routeProvider", "appConfigRoute", RouteConfiguration.create]);
    }

    private _initializeProvider = () => {
        this._module.provider("appConfig", ConfigurationProvider);
    }

    private _initializeConstants = () => {
        const appConfigRoute = {
            "controllerPath": "controller/",
            "viewPath": "view/"
        };

        this._module.constant("appConfigRoute", appConfigRoute);
    }

    private _initializeModule = () => {
        const requires = ["ngRoute", "routeStyles"];
        this._module = angular.module("app", requires);
    }

    public initialize = () => {
        this._initializeProvider();
        this._initializeConstants();
        this._initializeConfigurations();
    }
}

const instance = new Application();
export = instance;