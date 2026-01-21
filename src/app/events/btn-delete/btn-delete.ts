import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-btn-delete',
  standalone: true,
  imports: [],
  templateUrl: './btn-delete.html',
  styleUrl: './btn-delete.scss',
})
export class BtnDelete {
  @Input() eventId: string = '';
  @Output() deleteClick = new EventEmitter<string>();

  onDelete(): void {
    this.deleteClick.emit(this.eventId);
  }
}
