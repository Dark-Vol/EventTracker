import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BtnSumbit } from '../btn-sumbit/btn-sumbit';

@Component({
  selector: 'app-from-input',
  standalone: true,
  imports: [FormsModule, BtnSumbit],
  templateUrl: './from-input.html',
  styleUrl: './from-input.scss',
})
export class FromInput {
  @Input() eventName: string = '';
  @Input() eventType: 'click' | 'lead' | 'sale' = 'click';
  @Output() eventNameChange = new EventEmitter<string>();
  @Output() eventTypeChange = new EventEmitter<'click' | 'lead' | 'sale'>();
  @Output() submit = new EventEmitter<void>();

  onEventNameChange(value: string): void {
    this.eventNameChange.emit(value);
  }

  onEventTypeChange(value: 'click' | 'lead' | 'sale'): void {
    this.eventTypeChange.emit(value);
  }

  onSubmit(): void {
    this.submit.emit();
  }
}
