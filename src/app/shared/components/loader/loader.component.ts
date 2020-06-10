import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  @Input() loading: boolean = true
  @Input() diameter: number = 50

  spinnerClass = 'spinner-svg'
  margin = -Math.round(this.diameter / 2)
}
