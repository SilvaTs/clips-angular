import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  visible = false;

  constructor() { }

  isModalOPen() {
    return this.visible
  }

  toggleModal() {
    this.visible = !this.visible
  }
}
