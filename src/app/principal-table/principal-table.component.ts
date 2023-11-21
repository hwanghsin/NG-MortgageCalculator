import { Component, Input } from '@angular/core';
import { PrincipalProps } from '../utils';

@Component({
  selector: 'app-principal-table',
  templateUrl: './principal-table.component.html',
  styleUrls: ['./principal-table.component.scss'],
})
export class PrincipalTableComponent {
  @Input() principalList!: PrincipalProps[];
}
