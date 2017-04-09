import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { CourseListItemComponent } from './course-list/course-list-item';
import { ToolboxComponent } from './course-list/toolbox';
import { CourseListComponent } from './course-list';
import { CourseService } from './shared';
import { CoursesComponent } from './courses.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CourseListItemComponent,
    ToolboxComponent,
    CourseListComponent,
    CoursesComponent
  ],
  exports: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    SharedModule
  ],
  providers: [CourseService]
})
export class CoursesModule {
}
