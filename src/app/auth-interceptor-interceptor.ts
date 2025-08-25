import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = 'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5hbnRfaWQiOiI1MyIsInRlbmFudF9lbWFpbCI6ImthdXNoaWsua290aWFuQGdvZGlnaXRhbHRjLmNvbSIsImNyZWF0ZWRfb24iOiI4LzIwLzIwMjUgMjo0OTo0OCBQTSIsImV4cCI6MTc1NjQ0NzI1Nn0.0KR7fm8Bk-l5R-eLj9LouYuIYZM8t5vYrcrcS1z03eI';
  const request = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });

  return next(request);
};
