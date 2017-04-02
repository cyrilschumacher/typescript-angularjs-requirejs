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

/**
 * @summary Application routing configuration block.
 * @author  Cyril Schumacher
 * @class
 */
class RouteConfiguration {
    /**
     * @summary Constructor.
     * @constructs
     * @param {IRouteProvider} $routeProvier Route provider.
     * @param {Object}         appConfig     The application configuration.
     */
    public constructor(private $routeProvider: angular.route.IRouteProvider, private appConfigRoute: {}) {
        $routeProvider.when("/", this._addRoute("custom"));
    }

    public static create = ($routeProvider: angular.route.IRouteProvider, appConfigRoute: {}) => {
        return new RouteConfiguration($routeProvider, appConfigRoute);
    }

    private _addRoute = (viewName: string, controllerName?: string, stylesheetName?: string | string[]) => {
        controllerName = controllerName ? controllerName : viewName;

        const controllerNameWithPrefix = controllerName.concat("Controller");
        const controllerFile = this.appConfigRoute["controllerPath"].concat(controllerName);
        const templateFile = this.appConfigRoute["viewPath"].concat(viewName, ".html");

        return {
            controller: controllerNameWithPrefix,
            resolve: this._resolve(controllerFile),
            templateUrl: "/view/test.html"
        };
    };

    private _resolve = (controllerFile: string | string[]) => {
        const dependencies = (typeof controllerFile === "string") ? [controllerFile] : controllerFile;
        return {
            load: ["$q", "$rootScope", ($q: angular.IQService, $rootScope: angular.IRootScopeService) => this._resolveDependencies($q, $rootScope, dependencies)]
        };
    };

    private _resolveDependencies = ($q: angular.IQService, $rootScope: angular.IRootScopeService, dependencies: string[]) => {
        const defer = $q.defer();

        require(dependencies, () => {
            defer.resolve();
            $rootScope.$apply();
        });

        return defer.promise;
    }
}

export = RouteConfiguration;