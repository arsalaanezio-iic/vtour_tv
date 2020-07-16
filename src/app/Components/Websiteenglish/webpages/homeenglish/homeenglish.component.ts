import { Component, OnInit,ViewChild,ElementRef,} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ApiService } from 'src/app/services/api.service';
import { Meta, Title } from '@angular/platform-browser';

declare var $:any;

@Component({
  selector: 'app-homeenglish',
  templateUrl: './homeenglish.component.html',
  styleUrls: ['./homeenglish.component.css']
})

export class HomeenglishComponent implements OnInit {
  @ViewChild('howitworks', { read: ElementRef }) howitworks: ElementRef;
  eventSlider: any;
  virtualLobby:any;
  contactForm:any;
  submitted = false;
  show = false;
  messageMail:any;



  constructor(private fb: FormBuilder, private apiservice : ApiService,private title: Title, private meta: Meta) {
    this.contactForm = this.fb.group({
      name : ["", [Validators.required]],
      email : ["", [Validators.required]],
      mobile_number : ["", [Validators.required ,Validators.maxLength(10)]],
      message : ["", [Validators.required]]
    });

        // this.title.setTitle(this.apiservice.saudititle);
        // this.meta.updateTag({ name: 'description', content: this.apiservice.saudidescription});
        // this.meta.updateTag({ name: 'keywords', content: this.apiservice.saudikeywords});
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


  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
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
    this.submitted = true;
    if (this.contactForm.invalid) {
      return;
    } else {
      this.show = true;
      this.messageMail = "Please Wait!!";
      $("body").css("overflow-y","hidden");
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
          $("body").css("overflow-y","auto");
        }, 2000);
        
      }else{
        this.messageMail = "Something Went Wrong";
        setTimeout(() => {
          this.show = false;
        }, 2000);
      }
    })
    }
  }



  play_howitworks(){
    this.howitworks.nativeElement.muted = false;
    var playPromise  = this.howitworks.nativeElement.play();

    $(".playbutton").toggle(500);
    $(".pausebutton").toggle(500);
  
    if (playPromise !== undefined) {
      playPromise.then(play => {
        this.howitworks.nativeElement.play();
      })
      .catch(error => {
        this.howitworks.nativeElement.pause();
      });
    }
  }
  
  pause_howitworks(){
    this.howitworks.nativeElement.pause(); 
    $(".playbutton").toggle(500);
    $(".pausebutton").toggle(500);
  }


  onIntersectionHowitworks(event :any){
    if(event.visible){
  
      this.play_howitworks();
    
    }else{
      
      this.pause_howitworks();
    
    }
  }

}
