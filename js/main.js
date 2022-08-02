
if (annyang) {
    var commands = {

      "play video": function () {
        document.getElementById('myVideo').click(function(){this.paused?this.play():this.pause();});
    },

      "pause video": function () {
        document.getElementById('myVideo').pause();
      },

      "dark mode": function(){
        document.getElementById('videodiv').style.backgroundColor= '#000';

      },

      "light mode": function(){
        document.getElementById('videodiv').style.backgroundColor= '#fff';
        console.log("day mode");

      },


      'write name *tag':function(variable){
        if($('#loginbox').is(':visible'))
        {
          document.getElementById("name").value=variable;
        }

        else
        {
          let uname = document.getElementById("uname");
          uname.value=variable;
        }

      },

      'write email *tag':function(variable){
        if($('#loginbox').is(':visible'))
        {
          document.getElementById("email").value=variable;
        }

        else
        {
          let emailadd = document.getElementById("emailadd");
          emailadd.value=variable.split(" ").join("");
        }

      },

      'write phone number *tag':function(variable){
          let mobnum = document.getElementById("telnum");
          mobnum.value=variable;
      },

      'write query *tag':function(variable){
          let mymessage = document.getElementById("mymessage");
          mymessage.value=variable;
      },

      "submit *tag": function(tag){
        if(tag=="details")
        {
          var name=document.getElementById('name').value;
          document.getElementById('modaluser').innerHTML="Hi "+name+"!!";
          $('#loginbox').modal("hide");
          $('#greetoverlay').modal("show");

          setTimeout(function() {
          $('#greetoverlay').modal("hide");
          }, 5000);
        }
        else if (tag=="query")
        {
          let myform = document.getElementById("myform");
          let formareainner = document.querySelector('.form-area-inner');
          let formheading = document.querySelector('.form-area-inner h2');
          myform.remove();
          formheading.innerHTML = 'Your Form is successfully submitted'
          let html = '';
          html += `<p>Thanks for submitting your query. We  will shortly contact you.</p>`;
          formareainner.innerHTML += html;
        }

      },

      'Go to *tag': function(tag){
        var url = 'https://www.'+tag;
        $.getJSON(url);
        window.open(url +'.com','website');
        console.log(url);
    },

    'Search for *search': function(tag) {
        var url = 'https://www.google.com/search?q=' + tag;
        window.open(url,'website');
        console.log(url);
        $.ajax({
            type: 'GET',
            url: url,
            async: false,
            contentType: "application/json",
            dataType: 'jsonp'
        });
        console.log(tag);
    },
      'Open tab *tag': function (tag)
       {
         if(tag== "home"){
          document.getElementById("hometab").click();
         }
         else if(tag== "about"){
          document.getElementById("abouttab").click();
         }
         else if(tag== "how it works"){
          document.getElementById("hiwtab").click();
         }
         else if(tag== "what clients say"){
          document.getElementById("wcstab").click();
         }
         else if(tag== "contact us"){
          document.getElementById("contacttab").click();
         }

      },
        'login':function()
        {
          var sound1=new Howl({
            src:['../sound/login.mp3'],
            html5: true
        });
        let a=new AudioContext();
        a.resume();
        sound1.play();
          $('#exampleModal').modal("show");
          $('#exampleModal2').modal("hide");
        },
        'register':function()
        {
          var reg=new Howl({
             src:['../sound/register.mp3'],
             html5: true
          });
          let a=new AudioContext();
        a.resume();
          reg.play();
          $('#exampleModal2').modal("show");
          $('#exampleModal').modal("hide");
        },

        'scroll up': function () {
          var scrollup=new Howl({
            src:['../sound/scrolluplittle.mp3'],
            html5: true
         });
         let a=new AudioContext();
        a.resume();
         scrollup.play();
          window.scrollBy(0, -300);
        },

        'scroll down': function () {
          var scrolldown=new Howl({
            src:['../sound/scrolldown.mp3'],
            html5: true
         });
         let a=new AudioContext();
        a.resume();
         scrolldown.play();
          window.scrollBy(0, 300);
        },

        'take me to the top': function () {
          var top=new Howl({
            src:['../sound/top.mp3'],
            html5: true
         });
         let a=new AudioContext();
        a.resume();
         top.play();
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        },

        'take me to the bottom': function () {
          var bottom=new Howl({
            src:['../sound/bottom.mp3'],
            html5: true
         });
         let a=new AudioContext();
        a.resume();
         bottom.play();
          $('html,body').animate({scrollTop: document.body.scrollHeight},"fast");
        },

        'take me to the homepage': function()
        {
          var homepage=new Howl({
            src:['../sound/homepage.mp3'],
            html5: true
         });
         let a=new AudioContext();
         a.resume();
          homepage.play();
          document.getElementById('hometab').click();
        },

        'close login': function()
        {
          $('#exampleModal').modal("hide");
          $('#exampleModal2').modal("hide");
          var close=new Howl({
            src:['../sound/outofloginpage.mp3'],
            html5: true
          });
          let a=new AudioContext();
        a.resume();
          close.play();
        },

        'close register': function()
        {
          $('#exampleModal').modal("hide");
          $('#exampleModal2').modal("hide");
          var close2=new Howl({
            src:['../sound/outofregisterpage.mp3'],
            html5: true
          });
          let a=new AudioContext();
        a.resume();
          close2.play();
        },
        'take me to about us section': function()
        {
          var aboutus=new Howl({
            src:['../sound/aboutus.mp3'],
            html5: true
         });
         let a=new AudioContext();
        a.resume();
         aboutus.play();
          document.getElementById('abouttab').click();
        },
        'take me to contact us section': function()
        {
          var contactus=new Howl({
            src:['../sound/contactus.mp3'],
            html5: true
         });
         let a=new AudioContext();
        a.resume();
         contactus.play();
          document.getElementById('contacttab').click();
        },
        'thank you': function(){
          var welcome=new Howl({
            src:['../sound/welcome.mp3'],
            html5: true
          });
          let a=new AudioContext();
        a.resume();
          welcome.play();
        },

        'electronics': function()
        {
          var category=new Howl({
            src:['../sound/electronic.mp3'],
            html5: true
          });
          let a=new AudioContext();
        a.resume();
          category.play();
          document.getElementById('electronic gadgets').click();
        },

        'open command list': function()
        {
          document.getElementById('pdf').click();
        },

        'appliances': function()
        {
          document.getElementById('appliances').click();
        }
    };
    annyang.addCommands(commands);
    annyang.start();
  }
