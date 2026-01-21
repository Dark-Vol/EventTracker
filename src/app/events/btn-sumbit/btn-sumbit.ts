import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-sumbit',
  standalone: true,
  imports: [],
  templateUrl: './btn-sumbit.html',
  styleUrl: './btn-sumbit.scss',
})
export class BtnSumbit {
  @Input() disabled: boolean = false;
  @Input() text: string = 'Додати подію';
}
