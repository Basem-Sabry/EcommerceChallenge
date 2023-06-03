import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export const mainGuard: CanActivateFn = (route, state) => {
  const allowedRolesForUser = route.data['routeRole'];
  const loggedInUserRole = localStorage.getItem('role');
  const loggedInUserToken = localStorage.getItem('userLoginToken');
  const router = inject(Router)
  const toastr = inject(ToastrService)
  if (loggedInUserToken) {
    if (allowedRolesForUser && allowedRolesForUser.includes(loggedInUserRole)) {
      return true;
    }
    localStorage.removeItem('role')
    localStorage.removeItem('userLoginToken')

    toastr.error('You Are Not Allowed For This Route')
    router.navigate([''])
    return false
  }
  else {
    localStorage.removeItem('role')
    localStorage.removeItem('userLoginToken')

    toastr.error('You Are Not Allowed For This Route')
    router.navigate([''])
    return false
  }



};
