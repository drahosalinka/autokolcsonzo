import { Component, OnInit, inject } from '@angular/core';
import { BorrowService } from '../services/borrow.service';
import { BorrowVehicleDTO } from '../../../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-return',
  standalone: true,
  imports: [],
  templateUrl: './return.component.html',
  styleUrl: './return.component.css'
})
export class ReturnComponent implements OnInit {
  borrowService = inject(BorrowService);

  router = inject(Router);

  borrows: BorrowVehicleDTO[] = [];

  ngOnInit(): void {
    this.borrowService.getAll().subscribe({
      next: borrows => this.borrows = borrows,
      error: err => console.error(err)
    });
  }

  goToBorrowForm(id: number) {
    this.router.navigate([ '/borrow', id ]);
  }

  deleteBorrow(borrow: BorrowVehicleDTO) {
    this.borrowService.delete(borrow.id).subscribe({
      next: () => {
        const index = this.borrows.indexOf(borrow);
        if (index > -1) {
          this.borrows.splice(index, 1);
        }
      },
      error: (err) => {
        // TODO: notification
        console.error(err);
      }
    });
  }
}
