import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination-component',
  standalone: true,
  templateUrl: './pagination-component.html',
  styleUrl: './pagination-component.css',
})
export class PaginationComponent {
  @Input() currentPage = 1;
  @Input() totalItems = 0;
  @Input() pageSize = 5;

  @Output() pageChange = new EventEmitter<number>();

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.pageSize);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  goToPage(page: number) {
    if (page < 1 || page > this.totalPages) return;
    this.pageChange.emit(page);
  }

  next() {
    this.goToPage(this.currentPage + 1);
  }

  prev() {
    this.goToPage(this.currentPage - 1);
  }

  protected readonly Math = Math;
}
