import { Injectable } from '@angular/core';
import { SomeDependency } from '../models/some-dependency';

@Injectable({
  providedIn: 'root'
})
export class SomeService {

  constructor(private dependency: SomeDependency) { }
}
