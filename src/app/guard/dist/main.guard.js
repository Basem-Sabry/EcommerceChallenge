"use strict";
exports.__esModule = true;
exports.mainGuard = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ngx_toastr_1 = require("ngx-toastr");
exports.mainGuard = function (route, state) {
    var allowedRolesForUser = route.data['routeRole'];
    var loggedInUserRole = localStorage.getItem('role');
    var loggedInUserToken = localStorage.getItem('userLoginToken');
    var router = core_1.inject(router_1.Router);
    var toastr = core_1.inject(ngx_toastr_1.ToastrService);
    if (loggedInUserToken) {
        if (allowedRolesForUser && allowedRolesForUser.includes(loggedInUserRole)) {
            return true;
        }
        localStorage.removeItem('role');
        localStorage.removeItem('userLoginToken');
        toastr.error('You Are Not Allowed For This Route');
        router.navigate(['']);
        return false;
    }
    else {
        localStorage.removeItem('role');
        localStorage.removeItem('userLoginToken');
        toastr.error('You Are Not Allowed For This Route');
        router.navigate(['']);
        return false;
    }
};
