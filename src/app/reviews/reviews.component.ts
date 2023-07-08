import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommentAddComponent } from './comment-add/comment-add.component';
import { HttpClient } from '@angular/common/http';

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

  constructor(private modalService: NgbModal, private http: HttpClient) { }

  open() {
    // setTimeout(() => {
    const modalRef = this.modalService.open(CommentAddComponent);
    modalRef.componentInstance.name = 'World';
    // }, 500);
  }

  ngOnInit(): void {
    this.loadComments();
  }

  loadComments() {
    this.http.get('https://portfolio-924c8-default-rtdb.firebaseio.com/comments.json').subscribe(
      (response: any) => {
        const keys = Object.keys(response);
        keys.forEach((key) => {
          const value = response[key];
          console.log(value);
          this.comments.push(value);
        });
      }
    );
  }

}
