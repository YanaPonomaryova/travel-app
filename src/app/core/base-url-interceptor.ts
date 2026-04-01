import { HttpInterceptorFn } from '@angular/common/http';

const API_URL = 'http://localhost:3000';

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  const apiReq = req.clone({
    url: API_URL + req.url
  });

  return next(apiReq);
};
