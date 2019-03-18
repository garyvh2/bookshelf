import { COMMA, ENTER } from "@angular/cdk/keycodes";
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  forwardRef,
  Input
} from "@angular/core";
import { Tag } from "../../../models/Tag";
import { TagService } from "../../../services/tag.service";
import { FormControl, NG_VALUE_ACCESSOR } from "@angular/forms";
import {
  MatAutocompleteSelectedEvent,
  MatChipInputEvent,
  MatAutocomplete
} from "@angular/material";
import { Observable } from "rxjs";
import { map, startWith } from 'rxjs/operators';

const customValueProvider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TagsChipListComponent),
  multi: true
};

const noop = () => {};

@Component({
  selector: 'app-tags-chip-list',
  templateUrl: './tags-chip-list.component.html',
  styleUrls: ['./tags-chip-list.component.scss'],
  providers: [customValueProvider]
})
export class TagsChipListComponent implements OnInit {
  constructor(private tagService: TagService) {
    this.filteredTags = this.tagCtrl.valueChanges.pipe(
      startWith(null),
      map((tag: string) => this.getAvailableTags(tag))
    );
  }
  // Attributes
  @Input()
  disabled: Boolean;
  @Input()
  placeholder: String;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;

  // Values
  tags: Tag[] = [];
  selectedTags: Tag[] = [];
  value: Tag[] = [];

  // Controls
  separatorKeysCodes: number[] = [ENTER, COMMA];
  tagCtrl = new FormControl();
  filteredTags: Observable<Tag[]>;
  @ViewChild('tagInput') tagInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  getAvailableTags(tag: string): Tag[] {
    if (tag) {
      return this._filter(tag);
    }
    return this.tags.filter(item => !this.selectedTags.includes(item)).slice();
  }

  ngOnInit() {
    this.loadTags();
  }

  loadTags() {
    this.tagService.getTags().subscribe(tags => {
      this.tags = tags;
    });
  }

  add(event: MatChipInputEvent): void {
    // Add fruit only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen && !this.valueAlreadyExists(event.value)) {
      const input = event.input;
      const value = event.value;

      // Add our fruit
      if ((value || '').trim()) {
        this.selectedTags.push({
          name: value
        });
        this.onChange(this.selectedTags);
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.tagCtrl.setValue(null);
    }
  }

  remove(tag: Tag): void {
    const index = this.selectedTags.indexOf(tag);

    if (index >= 0) {
      this.selectedTags.splice(index, 1);
      this.onChange(this.selectedTags);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    const { value } = event.option;
    if (!this.valueAlreadySelected(value)) {
      this.selectedTags.push(value);
      this.tagInput.nativeElement.value = '';
      this.tagCtrl.setValue(null);
      this.onChange(this.selectedTags);
    }
  }

  valueAlreadySelected(tag: Tag): boolean {
    return this.selectedTags.some(item => tag === item);
  }

  valueAlreadyExists(name: string): boolean {
    return [...this.tags, ...this.selectedTags].some(
      tag => tag.name.toLowerCase() === name.toLowerCase()
    );
  }

  /**
   * NG Model Configuration
   */
  writeValue(value: any) {
    if (value) {
      this.value = value;
    }
  }
  // From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  // From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
  onChange(value) {
    this.propagateChange(value);
  }

  /**
   * Filter out tags that are already inserted
   * @param tag
   */
  private _filter(tag: string): Tag[] {
    return this.tags
      .filter(item => !this.selectedTags.includes(item))
      .filter(item => item.name.toLowerCase().includes(tag));
  }
}
