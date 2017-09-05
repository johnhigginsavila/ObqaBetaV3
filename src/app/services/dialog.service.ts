import { Injectable }    from '@angular/core';
import {Component} from '@angular/core';
import {NgbModal, ModalDismissReasons,NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dialog',
  template: `
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">{{title}}</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close" (click)="activeModal.close()">
              <span aria-hidden="true">&times;</span>
            </button>
    </div>
    <div class="modal-body">
      {{message}}
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-primary" data-dismiss="modal" (click)="activeModal.close()">Ok</button>
    </div>
  `
})


export class DialogComponent   {
    constructor(private modalService: NgbModal,public activeModal: NgbActiveModal) {}
    public title: string;
    public message: string;
}

@Injectable()
export class DialogService {  
  constructor(private modalService: NgbModal) {}

  public show(title: string, message:string) {
    const modalRef = this.modalService.open(DialogComponent);
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;
    return modalRef.result;
  }
}