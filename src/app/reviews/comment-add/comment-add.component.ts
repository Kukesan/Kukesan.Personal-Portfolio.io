import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import 'firebase/storage';

@Component({
  selector: 'app-comment-add',
  templateUrl: './comment-add.component.html',
  styleUrls: ['./comment-add.component.css']
})
export class CommentAddComponent implements OnInit {

  @Input() name: any;
  comment: string = '';

  commentForm = new FormGroup({
    name: new FormControl('', Validators.required),
    position: new FormControl('', Validators.required),
    comment: new FormControl('', Validators.required)
  });

  constructor(private http: HttpClient,
    public activeModal: NgbActiveModal,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  addCommentDetails() {
    console.log(this.commentForm.value)
    this.http.post('https://portfolio-924c8-default-rtdb.firebaseio.com/comments.json', this.commentForm.value).subscribe(
      (response: any) => {
        console.log(response)
        this.commentForm.reset();
        const modalRef = this.modalService.open(CommentAddComponent);
        if (modalRef) {
          modalRef.close();
        }
      }
    )
  }
}
