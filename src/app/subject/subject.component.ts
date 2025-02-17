import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
    standalone: true,
    selector: 'app-subject',
    imports: [ButtonComponent],
    templateUrl: './subject.component.html',
    styleUrl: './subject.component.scss',
})

export class SubjectComponent {

}
