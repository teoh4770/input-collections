import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  template: `
    <div class="control-group">
      <label for="input" data-size="md">Label</label>
      <div class="controls">
        <input name="input" type="text" placeholder="Placeholder">
      </div>
    </div>
  `,
  styleUrls: ['style.css']
})

export class InputComponent {

}
