import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ApiService } from 'src/app/services/api.service';
declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  eventSlider: any;
  virtualLobby:any;
  contactForm:any;
  submitted = false;
  show = false;
  messageMail:any;
  constructor(private fb: FormBuilder, private apiservice : ApiService) {
    this.contactForm = this.fb.group({
      name : ["", [Validators.required]],
      email : ["", [Validators.required]],
      mobile_number : ["", [Validators.required]],
      message : ["", [Validators.required]]
    });
  }

  ngOnInit(): void {

    this.filter("all");

    this.eventSlider = [
      { "image": "assets/homepage/event1.png" },
      { "image": "assets/homepage/event2.png" },
      { "image": "assets/homepage/event3.png" },
      { "image": "assets/homepage/event4.png" },
      { "image": "assets/homepage/event1.png" },
      { "image": "assets/homepage/event2.png" },
      { "image": "assets/homepage/event3.png" },
      { "image": "assets/homepage/event4.png" },
      { "image": "assets/homepage/event1.png" }
    ]

    this.virtualLobby = [
      {"image" : "assets/homepage/virtualLobby1.png"},
      {"image" : "assets/homepage/virtualLobby2.png"},
      {"image" : "assets/homepage/virtualLobby3.png"}
    ]
  }


  slideConfigEvent = {
    // "centermode" : true,
    "slidesToShow": 4,
    "slidesToScroll": 1,
    "arrows": true,
    "prevArrow": '<div class="leftnavigation"><img src="assets/homepage/prev.png" width="30px" /></div>',
    "nextArrow": '<div class="rightnavigation"><img src="assets/homepage/next.png" width="30px" /></div>',
    "autoplay": true,
    "infinite": true,
    "cssEase": 'linear',
    responsive: [{

      breakpoint: 1024,
      settings: {
          slidesToShow: 3,
          infinite: true
      }

  }, {

      breakpoint: 600,
      settings: {
          slidesToShow: 2,
          infinite: true
      }

  }]
  };

  slideConfigImmersiveVirtualLobby= {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "autoplay": true,
    "infinite": true,
    "cssEase": 'linear',
    "dots" : true
  }



  filter(option){
    $(".filterOptions").removeClass('activeFilter');
    $("#"+option).addClass('activeFilter');
    $(".template-image").css("display","none");
    $("."+option).fadeIn(1000);
  }


    //validation functions
    get validation() {
      return this.contactForm.controls;
    }
  onSubmitcontactForm({ valid, value }){
    this.show = true;
    this.messageMail = "Please Wait!!";

    this.submitted = true;
    if (this.contactForm.invalid) {
      return;
    } else {
      var body = {
        name: value.name,
        email: value.email,
        mobile_number : value.mobile_number,
        message: value.message
    }

    this.apiservice.contact(body).subscribe(apiresponse => {
      if(apiresponse.status){
        this.messageMail = "Mail Sent Successfully";
        setTimeout(() => {
          this.show = false;
          this.contactForm.reset();
        }, 2000);
        
      }else{
        this.messageMail = "Something Went Wrong";
        // setTimeout(() => {
        //   this.show = false;
        // }, 2000);
      }
    })
    }
  }


}
