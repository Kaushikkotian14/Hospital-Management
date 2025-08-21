import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const hardcodedToken = 'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5hbnRfaWQiOiIwIiwidGVuYW50X2VtYWlsIjoia2F1c2hpay5rb3RpYW5AZ29kaWdpdGFsdGMuY29tIiwiY3JlYXRlZF9vbiI6IjgvMjAvMjAyNSAyOjQ5OjQ3IFBNIiwiZXhwIjoxNzU2MDQ2OTg3fQ.R5602_0-lC-vREuvsKH962hEbBMbxfvh7Rp9Ujd-vyU';
  const clonedRequest = req.clone({
    setHeaders: {
      Authorization: `Bearer ${hardcodedToken}`
    }
  });

  return next(clonedRequest);
};
