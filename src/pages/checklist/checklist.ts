import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-checklist',
  templateUrl: 'checklist.html',
})
export class ChecklistPage {

  checklist: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController) {

    //info is getting sent to checklist page. SO this object is now equal to the one that was clicked on homepage
    this.checklist = this.navParams.get('checklist');
  }

  addItem(item){
    let prompt = this.alertCtrl.create({
        title: "Add Item",
        message: 'Enter the name of a task or item below',
        inputs: [
            {
              name: 'name'
            }
        ],
        buttons: [
            {
              text:'Cancel'
            },
            {
              text:'Save',
                handler: data => {
                this.checklist.addItem(data.name);
                }
            }
        ]
    });
    prompt.present();
  }

  toggleItem(item){
    this.checklist.toggleItem(item);
  }

  removeItem(item){
    this.checklist.removeItem(item);
  }

  renameItem(item){
      let prompt = this.alertCtrl.create({
          title: "Rename Item Item",
          message: 'Enter the name of a task or item below',
          inputs: [
              {
                  name: 'name'
              }
          ],
          buttons: [
              {
                  text:'Cancel'
              },
              {
                  text:'Save',
                  handler: data => {
                    //passing the new item and renaming it
                      this.checklist.renameItem(item, data.name);
                  }
              }
          ]
      });
      prompt.present();
  }


  uncheckItems():void {
    this.checklist.items.forEach((item => {
      if(item.checked){
        this.checklist.toggleItem(item)
      }
    }))
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ChecklistPage');
  }

}
