import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CommentAddComponent } from './comment-add/comment-add.component';
import { HttpClient } from '@angular/common/http';
import { ModalService } from 'src/service/modal.service';
import { environment } from 'src/environments/environment';

export class Comment {
  name: string;
  position: string;
  comment: string;
  constructor(name: string, position: string, comment: string) {
    this.name = name;
    this.position = position;
    this.comment = comment;
  }
}

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  comments: Comment[] = [];
  private modalRef: NgbModalRef | null = null;

  constructor(private modalService: ModalService, private http: HttpClient) { }

  open() {
    this.modalService.openModal(CommentAddComponent);
  }

  closeModal() {
    if (this.modalRef) {
      this.modalRef.close();
      this.modalRef = null;
    }
  }

  ngOnInit(): void {
    this.loadComments();
  }

  loadComments() {
    this.http.get(environment.firebaseConfig.databaseURL+'/comments.json').subscribe(
      (response: any) => {
        const keys = Object.keys(response);
        keys.forEach((key) => {
          const value = response[key];
          this.comments.push(value);
        });
      }
    );
  }

}
