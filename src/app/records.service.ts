import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
info1: string[] = [" Tewabe ", "E12", "tt@abc.net"]
info2: string[] = [" Noah ", "E13", "nt@abc.net"]
info3: string[] = [" Haymi ", "E15", "ht@abc.net"]

getInfo1(): string[]{
  return this.info1;
}
getInfo2(): string[]{
  return this.info2;
}
getInfo3(): string[]{
  return this.info3;
}
  constructor() { }
}
