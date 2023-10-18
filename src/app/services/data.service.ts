import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  private tableDataSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  tableData$: Observable<any> = this.tableDataSubject.asObservable();

  setTableData(data: any) {
    this.tableDataSubject.next(data);
  }
}
