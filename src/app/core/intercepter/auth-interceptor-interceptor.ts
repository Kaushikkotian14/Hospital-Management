import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = 'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5hbnRfaWQiOiI1MyIsInRlbmFudF9lbWFpbCI6ImthdXNoaWsua290aWFuQGdvZGlnaXRhbHRjLmNvbSIsImNyZWF0ZWRfb24iOiI4LzIwLzIwMjUgMjo0OTo0OCBQTSIsImV4cCI6MTc2MzkwMzQyMH0.tH6TrOndM07au-7b9K_fhZYlMOyOrSSFO59zDC8iC1w';
  const request = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });

  return next(request);
};
