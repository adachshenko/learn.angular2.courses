import { NgModule } from '@angular/core';

import { BorderHighlighterDirective } from './directives/border-highlighter.directive';

@NgModule({
    declarations: [
        BorderHighlighterDirective
    ],
    exports: [
        BorderHighlighterDirective
    ]
})
export class SharedModule {
}
