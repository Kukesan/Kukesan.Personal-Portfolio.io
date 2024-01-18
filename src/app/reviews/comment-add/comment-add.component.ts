import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import 'firebase/storage';
import { ModalService } from 'src/service/modal.service';

@Component({
  selector: 'app-comment-add',
  templateUrl: './comment-add.component.html',
  styleUrls: ['./comment-add.component.css']
})
export class CommentAddComponent implements OnInit {

  @Input() name: any;
  comment: string = '';
  IsFormSubmitted: boolean = false;

  commentForm = new FormGroup({
    name: new FormControl('', Validators.required),
    position: new FormControl('', Validators.required),
    comment: new FormControl('', Validators.required)
  });

  modalRef: any;

  constructor(private http: HttpClient,
    public activeModal: NgbActiveModal,
    private modalService: ModalService
  ) { 
  }

  ngOnInit(): void {
  }

  addCommentDetails() {
    console.log(this.commentForm.value)
    this.http.post('https://portfolio-924c8-default-rtdb.firebaseio.com/comments.json', this.commentForm.value).subscribe(
      (response: any) => {
        this.IsFormSubmitted = true;
      },
      (error: any) => {
        console.error('Error adding comment:', error);
      }
    )
  }

  okButtonClicked() {
    this.modalService.closeModal();
  }
}
