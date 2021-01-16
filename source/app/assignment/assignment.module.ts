import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Assignment1Component } from './assignment1/assignment1.component';
import { HighlighterDirective } from './assignment2/highlighter.directive';

@NgModule({
  declarations: [Assignment1Component, HighlighterDirective],
  imports: [
    CommonModule
  ],
  exports: [Assignment1Component]

})
export class AssignmentModule { }
