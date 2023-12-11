import { InjectionToken } from '@angular/core';
import { Widget } from './widget.interface';

export const WIDGET = new InjectionToken<Widget>('Widget');
