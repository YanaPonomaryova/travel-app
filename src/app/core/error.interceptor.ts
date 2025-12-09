import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const toastr = inject(ToastrService) as ToastrService;

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {

      if (error.status === 0) {
        toastr.error('No connection. Check your internet.', 'Network Error');
      }
      else if (error.status >= 400 && error.status < 500) {
        toastr.error('Client error. Please check your request.', `Error ${error.status}`);
      }
      else if (error.status >= 500) {
        toastr.error('Server error. Please try again later.', `Error ${error.status}`);
      }
      else {
        toastr.error('Unexpected error occurred.', 'Error');
      }

      return throwError(() => error);
    })
  );
};
