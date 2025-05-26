import { TestBed } from '@angular/core/testing';
import { InjectSessionInterceptor } from './inject-session.interceptor';

describe('InjectSessionInterceptor', () => {
  it('should create an instance', () => {
    const interceptor = new InjectSessionInterceptor();
    expect(interceptor).toBeTruthy();
  });
});