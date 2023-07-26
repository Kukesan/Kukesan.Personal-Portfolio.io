import { Component, OnInit } from '@angular/core';
import { EntertainmentImage } from '../photography/photography.component';

@Component({
  selector: 'app-photoshop',
  templateUrl: './photoshop.component.html',
  styleUrls: ['./photoshop.component.css']
})
export class PhotoshopComponent implements OnInit {

  photographyImagesCol1:EntertainmentImage[]=[
    new EntertainmentImage('','https://i.pinimg.com/236x/f3/6b/be/f36bbe51dce81ff9366ce37fffe5073c.jpg',''),
    new EntertainmentImage('','https://i.pinimg.com/236x/b3/1c/ea/b31cea9fcdc50cabdb82fad9294b916f.jpg',''),
    new EntertainmentImage('','https://i.pinimg.com/236x/25/6b/b5/256bb5e8afeedaceab023304bffcca51.jpg',''),
    new EntertainmentImage('','https://i.pinimg.com/236x/84/cf/af/84cfaf0b0f0e20f72585139c1956d58b.jpg','')
  ]

  photographyImagesCol2:EntertainmentImage[]=[
    new EntertainmentImage('','https://i.pinimg.com/236x/d3/1e/8f/d31e8ffddd77dc98274ab30068862b30.jpg',''),
    new EntertainmentImage('','https://i.pinimg.com/236x/f4/aa/d1/f4aad17ea565a93497c975921e4215d3.jpg',''),
    new EntertainmentImage('','https://i.pinimg.com/236x/05/e6/bb/05e6bbd12ed82f9f015087ab19c39ba7.jpg',''),
    new EntertainmentImage('','https://i.pinimg.com/236x/d4/04/71/d40471f3534585257fdc8ac9f73bd7bb.jpg','')
  ]

  photographyImagesCol3:EntertainmentImage[]=[
    new EntertainmentImage('','https://i.pinimg.com/236x/0c/3b/f1/0c3bf1ce9d96117bee34e5feb79326ba.jpg',''),
    new EntertainmentImage('','https://i.pinimg.com/236x/f2/51/d6/f251d6cbc985537345cb424c7d9ad2f5.jpg',''),
    new EntertainmentImage('','https://i.pinimg.com/236x/ee/78/57/ee7857c30621db0bf76d987483ff946f.jpg','')
  ]

  photographyImagesCol4:EntertainmentImage[]=[
    new EntertainmentImage('','https://i.pinimg.com/236x/b8/52/ac/b852acf2ea9a54fb75364e5f83971d80.jpg',''),
    new EntertainmentImage('','https://i.pinimg.com/236x/a6/41/11/a64111dcbbbac245911cfb2a57dda848.jpg',''),
    new EntertainmentImage('','https://i.pinimg.com/236x/c9/74/ba/c974bac436b3f83f9ef24ee5d3be1243.jpg',''),
    new EntertainmentImage('','https://i.pinimg.com/236x/e5/62/5c/e5625cdb9de43187a0fd7b51c31e17a1.jpg','')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
