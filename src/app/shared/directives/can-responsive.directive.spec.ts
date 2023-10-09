/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { fakeAsync, TestBed, inject, flush, tick, ComponentFixture } from '@angular/core/testing';
import { Component, Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { skip, take } from 'rxjs/operators';
import { BreakpointObserver, BreakpointState, Breakpoints, LayoutModule, MediaMatcher } from '@angular/cdk/layout';
import { CanResponsiveDirective } from './can-responsive.directive';

// Create Dummy Component for testing
@Component({
  template: '<div canResponsive></div>'
})
class TestCanResponsiveComponent { }


describe('CanResponsiveDirective', () => {
  let fixture: ComponentFixture<TestCanResponsiveComponent>;
  let canResponsive: CanResponsiveDirective;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestCanResponsiveComponent
      ],
      imports: [
        CanResponsiveDirective,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TestCanResponsiveComponent);
    fixture.detectChanges();

    canResponsive = fixture.debugElement.children[0].injector.get(CanResponsiveDirective);
  }));

  it('should create an instance', () => {
    fixture.detectChanges();
    expect(fixture.componentRef).toBeTruthy();
  });

  it('should not have class is-tablet', () => {
    fixture.detectChanges();

    const div = fixture.nativeElement.querySelector('div');

    expect(div.classList.contains('is-tablet')).toBeFalsy();
  });

  it('should have class is-tablet after media query match', fakeAsync(() => {
    canResponsive.isTablet = true;
    tick();

    fixture.detectChanges();
    const div = fixture.nativeElement.querySelector('div');
    expect(div.classList.contains('is-tablet')).toBeTruthy();
  }));
});