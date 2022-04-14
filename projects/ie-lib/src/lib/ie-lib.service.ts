import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IeLibService {

  promiseTest(): Promise<Date> {
    return Promise.resolve(new Date());
  }
}
