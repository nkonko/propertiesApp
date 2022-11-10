import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appDropZone]'
})
export class DropZoneDirective {
  @Output() droped = new EventEmitter<FileList>();
  @Output() hovered = new EventEmitter<boolean>();

  constructor() { }
  @HostListener('drop', ['$event']) onDrop($event: any): void {
    $event.preventDefault();

    this.droped.emit($event.dataTransfer.files);
    this.hovered.emit(false);
  }

  @HostListener('dragover', ['$event']) onDragOver($event: any): void {
    $event.preventDefault();
    this.hovered.emit(true);
  }

  @HostListener('dragleave', ['$event']) onDragLeave($event: any): void {
    $event.preventDefault();
    this.hovered.emit(false);
  }
}
