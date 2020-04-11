import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { AlertController, ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.page.html',
  styleUrls: ['./add-review.page.scss'],
})
export class AddReviewPage implements OnInit {
  @Input() movie;

  reviewer: string = '';
  review: string = '';
  constructor(
    private route: ActivatedRoute, private router: Router,
    public alertController: AlertController,
    public modalController: ModalController,
    public toastController: ToastController
  ) {
  }

  ngOnInit() {
  }

  //add review
  async save() {
    const alert = await this.alertController.create({
      header: 'Add Review',
      message: 'Submit your review?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.presentToast().then(()=>{
              this.close();
            })
            this.router.navigateByUrl('/');
          }
        }
      ]
    });

    await alert.present();
  }

  //close modal
  close(){
    this.modalController.dismiss({
      'dismissed': true
    });
  }


// toast 
async presentToast() {
  const toast = await this.toastController.create({
    message: 'Review Added.',
    duration: 2000
  });
  toast.present();
}

}
