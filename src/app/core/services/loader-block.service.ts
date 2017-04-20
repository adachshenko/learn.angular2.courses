import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoaderBlockService {

    public active: Subject<boolean> = new Subject();

    public show(): void {
        return this.active.next(true);
    }

    public hide(): void {
        return this.active.next(false);
    }
}
