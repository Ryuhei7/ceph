import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorService } from '../../../shared/api/monitor.service';
import { configureTestBed } from '../../../shared/unit-test-helper';
import { MonitorComponent } from './monitor.component';

describe('MonitorComponent', () => {
  let component: MonitorComponent;
  let fixture: ComponentFixture<MonitorComponent>;

  const fakeService = {};

  configureTestBed({
    declarations: [MonitorComponent],
    schemas: [NO_ERRORS_SCHEMA],
    providers: [{ provide: MonitorService, useValue: fakeService }]
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
