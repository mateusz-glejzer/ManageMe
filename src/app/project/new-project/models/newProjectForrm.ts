import { FormControl, FormGroup } from "@angular/forms"

export type NewProjectForm = FormGroup
{
    name: FormControl<string>;
    description: FormControl<string>;
}