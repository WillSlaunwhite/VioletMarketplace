import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { Observable } from "rxjs";

export class HttpError {
  static BadRequest = 400;
  static Unauthorized = 401;
  static Forbidden = 403;
  static NotFound = 404;
  static TimeOut = 408;
  static Conflict = 409;
  static InternalServerError = 500;
}

// @Injectable()
// export class ErrorInterceptor implements HttpInterceptor {
//   constructor(private _injector: Injector) { }

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     //   const logFormat = 'background: maroon; color: white';

//     //   return next.handle(req)
//     //     .do(event => {
//     //     }, exception => {
//     //       if (exception instanceof HttpErrorResponse) {
//     //         switch (exception.status) {
//     //           case HttpError.InternalServerError:
//     //             console.error('%c big bad 500', logFormat);
//     //             break;
//     //           // ... handle other error types ...
//     //         }
//     //       }
//     //     });
//   }
// }
