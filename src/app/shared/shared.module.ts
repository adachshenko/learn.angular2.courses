import { NgModule } from '@angular/core';

import { BorderHighlighterDirective } from './directives/border-highlighter.directive';
import { DurationFormatterPipe } from './pipes/duration-formatter.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FilterByPipe } from './pipes/filter-by.pipe';

@NgModule({
    declarations: [
        BorderHighlighterDirective,
        DurationFormatterPipe,
        OrderByPipe,
        FilterByPipe
    ],
    exports: [
        BorderHighlighterDirective,
        DurationFormatterPipe,
        OrderByPipe,
        FilterByPipe
    ]
})
export class SharedModule {
}
