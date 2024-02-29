<template>
  <q-page>
    
      <div class="row bg-deep-purple-1  q-pa-md flex justify-center items-center" style="overflow: hidden;">
          <div class="col-12 col-md-7 text-white  flex justify-center items-center">
              <div class="flex justify-center items-center" id="margin">
                  <div class="text-h4 text-bold text-center text-dark text-head" style="font-size: 2rem;">
                      <span style="color:#4b0dba">Certified </span>Full Stack Developer Programme
                  </div>
                  <div class="text-h6 text-dark text-bold" style="line-height: 1.8rem;">
                      <ul>
                          <li>100% job Opportunities</li>
                          <li>Work on Real-time Projects</li>
                          <li>Syllabus Meets Job Demand</li>
                          <li>Personal MentorShip from Experts</li>
                      </ul>
                  </div>
                  <div class="q-ma-md flex justify-center items-center">
                      <div class="text-weight-bolder text-h6 Heading1 text-center text-dark">Start with a best course and get &nbsp;<span style="color:#4b0dba"> bright job in future.</span></div>
                      <q-input v-model="search" color=yellow placeholder="Type course name "
                          style="max-width:310px; background-color: white;" class="shadow-10 rounded-borders q-ma-md ">
                          <template v-slot:prepend><q-icon name="search" color="black" class="q-ma-sm" /></template>
                          <q-btn style="background: #4b0dba; color:white;" class="q-ma-sm btn" label=" Search" />
                      </q-input>
                  </div>
              </div>
          </div>
          <div class="col-12 col-md-5 q-pa-md flex flex-center"  data-aos="fade-up" >
            <form class=" Form_Style q-mb-lg "  @submit="onSubmit" @reset="onReset" style="width: 400px;" id="form-section" >
                  <div>
                      <div class="text-h5 q-mt-sm text-bold text-head2">I'm Interested in this program</div>
                      <div class="q-pa-md">
                          <div>
                              <q-input outlined v-model="name" type="text" label="Name" :rules="[ val => val && val.length > 0 || 'Please type something']" >
                              <template v-slot:prepend><q-icon name="people" color="accent" /></template></q-input>
                          </div><br>

                          <div>
                              <q-input outlined v-model="email" type="email" label="Email" :rules="[ val => val && val.length > 0 || 'Please type something']">
                              <template v-slot:prepend><q-icon name="mail" color="accent" /></template></q-input>
                          </div><br>

                          <div>
                            <q-input outlined v-model="mobile" type="number" label="Mobile"  :rules="[ val => val && val.length > 0 || 'Please type something']">
                            <template v-slot:prepend><q-icon name="phone" color="accent" /></template></q-input>
                          </div><br>

                          <div>
                            <q-input outlined v-model="place" type="text" label="Place" :rules="[ val => val && val.length > 0 || 'Please type something']">
                            <template v-slot:prepend><q-icon name="place" color="accent" /></template></q-input>
                          </div><br>
                          <!-- <div><label class="text-size">Educational Qualification</label><br><input type="text"  class="input_style" ></div><br> -->
                          <div class="q-ma-md text-center"><q-btn style="background:#4b0dba; color: white " label="sumbit" class="text-bold" />
                          </div>
                      </div>
                  </div>
              </form>
          </div>
      </div>
  
<!-- floating card -->
      <div class="row row_style shadow-10" data-aos="fade-up">
          <div class="col-3 q-pa-md col-xs-12 col-sm-12  text-center col-md-3">
              <div class="text-h6 text-bold">Duration</div>
              <div>3 Months / 5 Months </div>
          </div>
          <div class="col-3 q-pa-md col-xs-12 col-sm-12  text-center col-md-3 ">
              <div class="text-h6 text-bold">Format</div>
              <div>Online 🔴 Live Classes + Free Recorded Sessions</div>
          </div>
          <div class="col-3 q-pa-md col-xs-12 col-sm-12  text-center col-md-3">
              <div class="text-h6 text-bold">Hiring partners</div>
              <div>600+ Companies</div>
          </div>
          <div class="col-3 q-pa-md col-xs-12 col-sm-12  text-center col-md-3">
              <div class="text-h6 text-bold"> EMI Options</div>
              <div>Upto 12 months</div>
          </div>
      </div>

<!--Become a Certified  -->
      <div class=" q-pa-md q-mb-md" style="background-color: rgba(247,245,252,1);">
          <div class="text-h4 text-center q-mt-md text-bold"><span style="color:#4b0dba">Become a Certified</span><br>Full-Stack Professional</div>
          <div class=" text-center para_style" style="font-size: 17px;"> Edex tech Full Stack Developer Class is a highly-advanced & innovative
              programme. Get an exclusive hands-on experience with the latest design tools, & database management
              techniques extensively instructed by the industry experts under the guidance of Founders(Ex-Paypal
              Employees). In-time mentorship & 360-degree career guidance will be provided for you to get placement offers
              from Top Product Companies.
          </div>
      </div>


<!-- Full Stack Developer Overview -->
      <div class=" text-h4 text-center  text-bold q-mt-md" style="color:#4b0dba">Full Stack Developer Overview </div>
      <div class="row q-mt-md row_style2" style="font-size: 15px;"  data-aos="fade-up">
          <div class="col-4 col-md-4 col-sm-12 col-xs-12 ">
              <q-card class="my-card text-dark q-ma-sm">
                  <q-card-section>
                      <div class="text-h6 text-bold text-center ">About Edex Tech Full Stack Developer Course </div>
                  </q-card-section>
                  <q-card-section class="q-pt-xs ">
                      <q-icon name="check" size="sm" style="color:#4b0dba"></q-icon>&nbsp; Learn practical coding skills through
                      real-life projects<br>
                      <q-icon name="check" size="sm" style="color:#4b0dba"></q-icon>&nbsp; DSA, CS fundamentals, and
                      software/system design taught by industry veterans via live classes<br>
                      <q-icon name="check" size="sm" style="color:#4b0dba"></q-icon>&nbsp; Industry-expert faculty and 1:1
                      mentorship with a peer group of 2,000+ Scaler students and alumni.
                  </q-card-section>
              </q-card>
          </div>
          <div class="col-4 col-md-4 col-sm-12 col-xs-12">
              <q-card class="my-card text-dark q-ma-xs">
                  <q-card-section>
                      <div class="text-h6 text-bold text-center ">What is Full Stack Web Development and why is it
                          important to learn?</div>
                  </q-card-section>
                  <q-card-section class="q-pt-xs ">
                      <q-icon name="check" size="sm" style="color:#4b0dba"></q-icon> 
                      &nbsp; Full Stack Development requires expertise in both frontend and backend technologies.<br>
                      <q-icon name="check" size="sm" style="color:#4b0dba"></q-icon> 
                      &nbsp; Full Stack Developers contribute to decision-making with their comprehensive understanding of the tech stack.<br>
                      <q-icon name="check" size="sm" style="color:#4b0dba"></q-icon> &nbsp; The demand for Full Stack Developers remains high as they accelerate development and ensure product robustness.
                  </q-card-section>
              </q-card>
          </div>
          <div class="col-4 col-md-4 col-sm-12 col-xs-12">
              <q-card class="my-card text-dark q-ma-sm">
                  <q-card-section>
                      <div class="text-h6 text-bold text-center ">What skills will I master with this full stack course?
                      </div>
                  </q-card-section>
                  <q-card-section class="q-pt-none ">
                      Skills that you will master with this full-stack course are:<br>
                      <q-icon name="check" size="sm" style="color:#4b0dba"></q-icon>&nbsp; Programming constructs, algorithms,
                      and data structures.<br>
                      <q-icon name="check" size="sm" style="color:#4b0dba"></q-icon>&nbsp;Advanced data structures,
                      problem-solving, and computer science fundamentals.<br>
                      <q-icon name="check" size="sm" style="color:#4b0dba"></q-icon>&nbsp; Develop software and systems using
                      OOP principles and system design techniques.
                      <!-- <q-icon name="check" size="sm" color="red" ></q-icon>Build full-stack apps using technologies like REST APIs, MVC, and databases like MongoDB.<br> -->
                  </q-card-section>
              </q-card>
          </div>
      </div>

<!-- Programme Highlights -->
      <div style="background-color: rgba(247,245,252,1);" >
     <div class="text-h4 q-mt-md  q-pa-md text-bold head1" style="display:flex;justify-content: center;color:#4b0dba">Programme Highlights</div>

      <div class="row q-pa-sm" style="font-size: 17px;"  >
          <div class="col-12 col-md-6 flex column justify-center items-center q-pa-md q-gutter-md" >
              <div class="" ><q-img src="../assets/program1.png" style="height:50px;width:50px"></q-img>&nbsp;Accredited by IIT-M & IIM-A incubated </div>
              <div class="" ><q-img src="../assets/program2.png" style="height:50px;width:50px"></q-img>&nbsp;Live online classes + recorded videos</div>
              <div class="" ><q-img src="../assets/program3.png" style="height:50px;width:50px"></q-img>&nbsp; Doubt clearing sessions with Mentors</div>
              <div class="" ><q-img src="../assets/program4.png" style="height:50px;width:50px"></q-img>&nbsp;Globally recognized skill certifications</div>
          </div>      
          <div class="col-12 col-md-6 flex column justify-center items-center q-pa-md q-gutter-md gt-sm" >
              <div><q-img src="../assets/program7.png" style="height:50px;width:50px"></q-img> &nbsp;Work on real-life Projects</div>
              <div><q-img src="../assets/program8.png" style="height:50px;width:50px"></q-img>&nbsp;Assured Job Opportunities</div>
              <div><q-img src="../assets/program5.png" style="height:50px;width:50px"></q-img>&nbsp;EMI options available here</div>
              <div><q-img src="../assets/program6.png" style="height:50px;width:50px"></q-img>&nbsp;Learn in English, தமிழ்</div>
          </div>
      </div>
      
      </div>  

<!-- start learning button -->

       <div class=" text-center">
        <q-btn style="background:#4b0dba; color: white " label="Start learning Now"  @click="bar2 = true"  class="text-capitalize text-h6 q-ma-xl"  />
         <q-dialog v-model="bar2" persistent transition-show="flip-down" transition-hide="flip-up" >
        <q-card class=" text-white">
        <q-bar>
        <q-space />
        <q-btn  flat icon="close" v-close-popup>
           <q-tooltip class="bg-white text-primary">Close</q-tooltip> 
        </q-btn>
      </q-bar>
      <q-card-section class="q-pt-none">
         <form class=" Form_Style  " style="max-width:400px;" @submit="onSubmit" @reset="onReset" >
                <div>
                      <div class="q-pa-sm">
                        <div class="text-h6  text-bold text-center" style="color:#4b0dba">Entroll Now</div>
                        <div> <q-img src="frame.png" class="img-fluid q-pa-sm"></q-img></div>
                       
                          <div>
                              <q-input outlined v-model="name" type="text" label="Name" :rules="[ val => val && val.length > 0 || 'Please type something']" >
                                  <template v-slot:prepend><q-icon name="people" color="accent" />
                                  </template>
                              </q-input>
                          </div>

                          <div>
                            <q-input outlined v-model="email" type="email" label="Email" :rules="[ val => val && val.length > 0 || 'Please type something']">
                                  <template v-slot:prepend><q-icon name="mail" color="accent" /></template>
                            </q-input>
                          </div>

                          <div>
                            <q-input outlined v-model="mobile" type="number" label="Mobile"  :rules="[ val => val && val.length > 0 || 'Please type something']">
                                  <template v-slot:prepend><q-icon name="phone" color="accent" /></template>
                            </q-input>
                          </div>

                          <div>
                            <q-input outlined v-model="place" type="text" label="Place" :rules="[ val => val && val.length > 0 || 'Please type something']">
                                  <template v-slot:prepend><q-icon name="place" color="accent" /></template>
                            </q-input>
                          </div>
                          <div class=" text-center"><q-btn style="background:#4b0dba; color: white " label="sumbit" class="text-bold" />
                        </div>
                  </div>
            </div>
        </form> 
      </q-card-section>
    </q-card>
        </q-dialog> 
      </div> 
  
<!-- Features -->
      <div class="text-center q-mt-xl"><span class=" text-h4 text-bold" style="color:#4b0dba">Features</span></div>
      <div class="row q-pa-sm q-gutter-md q-mt-md parent" style="width:90%;margin-left:auto;margin-right:auto;"  >
      <q-card class="my-card q-pa-sm shadow-3 col col-12 col-md col-sm-12 " >
            <div class="text-center q-pa-sm"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="accent" class="bi bi-clock-fill " viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/></svg></div>
            <div class="text-h5 text-center text-bold">Real-Time Experts as Trainers</div>
            <q-card-section style="font-size:17px">At Edec Tech, You will Learn from the Experts from industry who are Passionate in sharing their Knowledge with Learners. Get Personally Mentored by the Experts.</q-card-section>
      </q-card>
        <!--  -->
        <q-card class="my-card q-pa-sm shadow-3 col col-12 col-md col-sm-12" >
          <div class="text-center q-pa-sm"> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="green" class="bi bi-tv-fill" viewBox="0 0 16 16"><path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5M2 2h12s2 0 2 2v6s0 2-2 2H2s-2 0-2-2V4s0-2 2-2"/></svg></div>
          <div class="text-h5 text-center text-bold">LIVE Project</div>
          <q-card-section style="font-size:17px">Get an Opportunity to work in Real-time Projects that will give you a Deep Experience. Showcase your Project Experience & Increase your chance of getting Hired!</q-card-section>
        </q-card>
        <!--  -->
        <q-card class="my-card  q-pa-sm  shadow-3 col col-12 col-md col-sm-12" style="background-color:#ffffff;" >
          <div class="text-center q-pa-sm"> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="pink" class="bi bi-patch-check-fill" viewBox="0 0 16 16"><path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"/></svg></div>
          <div class="text-h5 text-center text-bold">Certification</div>
          <q-card-section style="font-size:17px">Get Certified by Edex Tech Also, get Equipped to Clear Global Certifications. 72% FITA Academy Students appear for Global Certifications and 100% of them Clear it.</q-card-section>
        </q-card>
      </div>
  
 
      <div class="row q-pa-sm q-gutter-md  " style="width:90%;margin-left: auto;margin-right: auto;"  data-aos="fade-up">
      <q-card class="my-card q-pa-sm shadow-3 col col-12 col-md col-sm-12 " >
          <div class="text-center q-pa-sm"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="green" class="bi bi-cash-coin" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8m5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0"/><path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195z"/><path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083q.088-.517.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1z"/><path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 6 6 0 0 1 3.13-1.567"/></svg></div>
          <div class="text-h5 text-center text-bold">Affordable Fees</div>
          <q-card-section style="font-size:17px">At Edex Tech, Course Fee is not only Affordable, but you have the option to pay it in Installments. Quality Training at an Affordable Price is our Motto.</q-card-section>
      </q-card>
        <!--  -->
        <q-card class="my-card q-pa-sm shadow-3 col col-12 col-md col-sm-12" >
          <div class="text-center q-pa-sm"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="red" class="bi bi-file-earmark-text-fill" viewBox="0 0 16 16"><path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1z"/></svg></div>
          <div class="text-h5 text-center text-bold">Flexibility</div>
          <q-card-section style="font-size:17px">At Edex Tech , you get Ultimate Flexibility.Classroom or Online Training? Early morning or Late evenings? Weekdays or Weekends? - Pick whatever suits you the Best.</q-card-section>
        </q-card>
        <!--  -->
        <q-card class="my-card  q-pa-sm  shadow-3 col col-12 col-md col-sm-12" style="background-color:#ffffff;" >
          <div class="text-center q-pa-sm"><q-icon name="school" color="primary" size="md"></q-icon></div>
          <div class="text-h5 text-center text-bold">Placement Support</div>
          <q-card-section style="font-size:17px">Tie-up & MOU with more than 1500+ Small & Medium Companies to Support you with Opportunities to Kick-Start & Step-up your Career.</q-card-section>
        </q-card>
      </div>

<!-- our amazing facts and figure -->
      <div class="row shadow-0" >
        <div class="col col-xs-12 col-sm-12 col-md-12" >
          <div class="row text-center">
          <div class="bgimg q-pa-xl">
            <div class="text-h4 text-bold" style="color:#4b0dba">Our Amazing Facts and Figures</div>
            <div style="font-size: 17px;" class="q-mt-md">We are the largest global training provider with a brilliant track record for providing skill development courses. Our extraordinary statistics are something to make us very proud of our work.</div>
          </div>
        </div>
          
          <div class="q-pa-xl">
            <div class="text-h4 text-center text-bold" style="color:#4b0dba">Get Immersive Learing Experience</div>
    
          <div class="row text-center q-mt-md"  data-aos="fade-up">
            <div class="col-12 col-md-4 "><svg xmlns="http://www.w3.org/2000/svg" width="80px" height="80px" viewBox="0 0 480 480.004"><path id="successful" d="M488,224H432V184a24.028,24.028,0,0,0-24-24h-4.5c-14.588-16.953-13.21-42.062-12.141-51.071a40.217,40.217,0,0,0,16.826-13.21c17.744-1.222,32.624-6.475,43.364-15.386,10.761-8.927,16.932-21.249,16.932-33.8C468.48,28.839,456.5,16,440,16a38.581,38.581,0,0,0-24,7.938A8,8,0,0,0,408,16H328a8,8,0,0,0-8,7.938A38.581,38.581,0,0,0,296,16c-16.5,0-28.48,12.839-28.48,30.528,0,12.556,6.171,24.878,16.932,33.805,10.74,8.911,25.62,14.164,43.364,15.386a40.217,40.217,0,0,0,16.826,13.21c1.069,9.009,2.447,34.118-12.141,51.071H328a24.028,24.028,0,0,0-24,24v40H248a8,8,0,0,0-8,8v56H208V200a24.028,24.028,0,0,0-24-24H160V152h47.6a8.912,8.912,0,0,0,6.343-2.627l35.716-35.716a24.971,24.971,0,1,0-35.314-35.314L188.687,104H160a7.961,7.961,0,0,0-2.135-5.428,40,40,0,1,0-59.728,0c-.13.141-.263.278-.384.428l-32,40A8,8,0,0,0,64,144v64a24.028,24.028,0,0,0,24,24h8V416H24a8,8,0,0,0-8,8v64a8,8,0,0,0,8,8H488a8,8,0,0,0,8-8V232A8,8,0,0,0,488,224ZM416,72V49.484C417.646,45.578,424.487,32,440,32c5.757,0,12.48,3.805,12.48,14.528,0,7.78-4.063,15.613-11.148,21.491-6.509,5.4-15.32,9.046-25.924,10.791A40.021,40.021,0,0,0,416,72ZM294.668,68.019c-7.085-5.878-11.148-13.711-11.148-21.491C283.52,35.805,290.243,32,296,32c15.481,0,22.314,13.488,24,17.488V72a40.025,40.025,0,0,0,.592,6.81C309.988,77.065,301.177,73.419,294.668,68.019ZM160,120h31.6a8.912,8.912,0,0,0,6.343-2.627l27.716-27.716a8.97,8.97,0,1,1,12.686,12.686L204.687,136H160ZM336,72V32h64V72a24.027,24.027,0,0,1-24,24H360a24.027,24.027,0,0,1-24-24Zm25.024,40h13.952c-.811,11.331-.36,30.786,9.139,48h-32.23C361.384,142.786,361.835,123.331,361.024,112ZM320,184a8.009,8.009,0,0,1,8-8h80a8.009,8.009,0,0,1,8,8v40H400V200a8,8,0,0,0-8-8H344a8,8,0,0,0-8,8v24H320Zm64,24v16H352V208ZM128,48a24,24,0,1,1-24,24A24,24,0,0,1,128,48ZM88,216a8.009,8.009,0,0,1-8-8V146.806L107.845,112H144v72a8,8,0,0,0,8,8h32a8.009,8.009,0,0,1,8,8v88H176V240a24,24,0,0,0-48,0V352H112V163.313l13.654-13.654a8,8,0,1,0-11.313-11.313l-16,16A8,8,0,0,0,96,160v56Zm72,24V352H144V240a8,8,0,0,1,16,0ZM480,480H32V432h72a8,8,0,0,0,8-8V368h56a8,8,0,0,0,8-8V304h72a8,8,0,0,0,8-8V240H480Z" transform="translate(-16 -15.996)" fill="#f04b69"/></svg><div class="text-bold text-h6">Gain Skills for Career Growth</div></div>
            <div class="col-12 col-md-4 "><svg xmlns="http://www.w3.org/2000/svg" width="80px" height="80px" viewBox="0 0 58.412 54.809"><g id="service" transform="translate(1.078 1)"><path id="Path_28353" data-name="Path 28353" d="M31.232,19.573a25.086,25.086,0,0,0-20.542,10.7,12.278,12.278,0,0,1,2.745,2.538,21.42,21.42,0,0,1,15.22-9.394l2.577,4.361,2.577-4.361A21.453,21.453,0,0,1,52.49,42.1l-4.362,2.577,4.362,2.578a21.429,21.429,0,0,1-9.818,15.5,6.517,6.517,0,0,1,.561,2.367,6.271,6.271,0,0,1-.159,1.684A25.1,25.1,0,0,0,31.232,19.573Zm6.406,41.341c-5.787-4.651-7.4-2.365-10.03.261-1.833,1.834-6.472-2-10.477-6S9.3,46.53,11.129,44.7c2.626-2.625,4.911-4.244.259-10.03s-7.75-1.344-10.294,1.2C-1.842,38.8.94,49.74,11.751,60.553S33.5,74.144,36.437,71.21C38.98,68.666,43.424,65.567,37.638,60.914ZM20.014,48.6c0-5.144,6.022-6.06,6.022-8.067a1.376,1.376,0,0,0-1.5-1.383c-1.325,0-2.065,1.48-2.065,1.48l-2.533-1.7a5.373,5.373,0,0,1,4.91-3c2.28,0,4.754,1.306,4.754,4.267,0,4.345-5.612,5.184-5.71,6.976h5.924V50.1H20.17A8.512,8.512,0,0,1,20.014,48.6Zm11.227-3.936,5.379-8.5h4.17v7.736h1.656v2.825H40.789V50.1H37.418V46.733H31.241V44.668Zm6.177-.76V40.79a12.441,12.441,0,0,1,.117-1.559H37.5a7.4,7.4,0,0,1-.682,1.442l-2.1,3.2v.039Z" transform="translate(0 -19.573)" fill="none" stroke="#a53f69" stroke-width="2"/></g></svg><div class=" text-h6 text-bold">24x7 Learining Support</div></div>
            <div class="col-12 col-md-4 ">
              <svg xmlns="http://www.w3.org/2000/svg" width="80px" height="80px" viewBox="0 0 463.148 511.277">
                <g id="learning" transform="translate(-24.064)">
                  <path id="Path_28363" data-name="Path 28363" d="M470.375,186.654H439.9v-3.422a15.465,15.465,0,0,0-15.448-15.447h-60.1a7.5,7.5,0,0,0,0,15h60.1a.448.448,0,0,1,.448.447v91.447a7.5,7.5,0,0,0,15,0V201.654h30.471a1.841,1.841,0,0,1,1.839,1.839V465.151a31.161,31.161,0,0,1-31.126,31.126H70.19a31.161,31.161,0,0,1-31.126-31.126V203.493a1.841,1.841,0,0,1,1.839-1.839H72.374V458.167a19.2,19.2,0,0,0,19.181,19.181H420.722A19.2,19.2,0,0,0,439.9,458.167v-151.5a7.5,7.5,0,0,0-15,0V414.6H303.559a54.759,54.759,0,0,0-39.92,17.262V334.846a7.5,7.5,0,0,0-15,0v97.016a54.761,54.761,0,0,0-39.92-17.262h-34.08a7.5,7.5,0,0,0,0,15h34.08a39.979,39.979,0,0,1,39.263,32.748H91.555a4.185,4.185,0,0,1-4.181-4.181V429.6h55.275a7.5,7.5,0,0,0,0-15H87.374V183.232a.448.448,0,0,1,.448-.447h60.1a7.5,7.5,0,1,0,0-15h-60.1a15.465,15.465,0,0,0-15.448,15.447v3.422H40.9a16.858,16.858,0,0,0-16.839,16.839V465.151A46.178,46.178,0,0,0,70.19,511.277h370.9a46.178,46.178,0,0,0,46.126-46.126V203.493a16.856,16.856,0,0,0-16.837-16.839ZM303.559,429.6H424.9v28.568a4.185,4.185,0,0,1-4.181,4.181H264.3A39.977,39.977,0,0,1,303.559,429.6Z" fill="#6f0ddc"/>
                  <path id="Path_28364" data-name="Path 28364" d="M156.143,105.231a7.509,7.509,0,0,0,8.171-6.763,92.243,92.243,0,1,1,167.27,61.855c-.062.088-.122.178-.181.268l-47.994,74.718a7.5,7.5,0,0,0-1.19,4.054v9.716a3.58,3.58,0,0,1-3.576,3.576h-.49l4.778-81.075h8.544a22.2,22.2,0,0,0,22.172-22.171v-.91a22.172,22.172,0,0,0-44.3-1.3l-.553,9.385h-26.3l-.553-9.385a22.172,22.172,0,0,0-44.3,1.3v.91A22.2,22.2,0,0,0,219.8,171.58h8.544l4.775,81.023a3.571,3.571,0,0,1-3.062-3.524v-9.716a7.508,7.508,0,0,0-1.189-4.054l-47.995-74.718c-.058-.09-.118-.18-.18-.268a91.383,91.383,0,0,1-14.442-32.336,7.5,7.5,0,0,0-14.619,3.361,106.318,106.318,0,0,0,16.707,37.482l46.72,72.732v7.515a18.593,18.593,0,0,0,11.076,16.981v12.683a24.23,24.23,0,0,0,24.2,24.2h11.6a24.231,24.231,0,0,0,24.2-24.2V266.058a18.594,18.594,0,0,0,11.076-16.981v-7.515l46.719-72.732A107.245,107.245,0,1,0,149.381,97.06a7.5,7.5,0,0,0,6.762,8.171Zm128.173,42.846a7.172,7.172,0,0,1,14.331.421v.91a7.179,7.179,0,0,1-7.172,7.171h-7.66Zm-64.514,8.5a7.179,7.179,0,0,1-7.172-7.171v-.91a7.172,7.172,0,0,1,14.331-.421l.5,8.5Zm48.1,15-4.777,81.075H248.15l-4.777-81.075Zm3.238,107.163a9.213,9.213,0,0,1-9.2,9.2h-11.6a9.214,9.214,0,0,1-9.2-9.2V267.654h30.009v11.088Z" fill="#6f0ddc"/>
                  <path id="Path_28365" data-name="Path 28365" d="M387.513,56.951a7.472,7.472,0,0,0,4.945-1.864l16.364-14.368a7.5,7.5,0,0,0-9.9-11.272L382.562,43.815a7.5,7.5,0,0,0,4.951,13.136Z" fill="#6f0ddc"/>
                  <path id="Path_28366" data-name="Path 28366" d="M382.562,102.184l16.364,14.369a7.5,7.5,0,0,0,9.9-11.272L392.46,90.912a7.5,7.5,0,0,0-9.9,11.272Z" fill="#6f0ddc"/>
                  <path id="Path_28367" data-name="Path 28367" d="M103.455,40.719l16.364,14.368a7.5,7.5,0,1,0,9.9-11.272L113.351,29.447a7.5,7.5,0,1,0-9.9,11.272Z" fill="#6f0ddc"/>
                  <path id="Path_28368" data-name="Path 28368" d="M108.406,118.417a7.476,7.476,0,0,0,4.946-1.864l16.364-14.369a7.5,7.5,0,0,0-9.9-11.272l-16.364,14.369a7.5,7.5,0,0,0,4.951,13.136Z" fill="#6f0ddc"/>
                  <path id="Path_28369" data-name="Path 28369" d="M189.782,260.154a7.5,7.5,0,0,0-7.5-7.5H108.4a7.5,7.5,0,1,0,0,15h73.879A7.5,7.5,0,0,0,189.782,260.154Z" fill="#6f0ddc"/>
                  <path id="Path_28370" data-name="Path 28370" d="M205.13,290.8H121.951a7.5,7.5,0,0,0,0,15H205.13a7.5,7.5,0,0,0,0-15Z" fill="#6f0ddc"/>
                  <path id="Path_28371" data-name="Path 28371" d="M205.13,327.346H121.951a7.5,7.5,0,0,0,0,15H205.13a7.5,7.5,0,1,0,0-15Z" fill="#6f0ddc"/>
                  <path id="Path_28372" data-name="Path 28372" d="M205.13,363.887H121.951a7.5,7.5,0,0,0,0,15H205.13a7.5,7.5,0,0,0,0-15Z" fill="#6f0ddc"/>
                  <path id="Path_28373" data-name="Path 28373" d="M411.375,260.154a7.5,7.5,0,0,0-7.5-7.5H330a7.5,7.5,0,0,0,0,15h73.879A7.5,7.5,0,0,0,411.375,260.154Z" fill="#6f0ddc"/>
                  <path id="Path_28374" data-name="Path 28374" d="M390.326,290.8H307.147a7.5,7.5,0,0,0,0,15h83.179a7.5,7.5,0,0,0,0-15Z" fill="#6f0ddc"/>
                  <path id="Path_28375" data-name="Path 28375" d="M390.326,327.346H307.147a7.5,7.5,0,0,0,0,15h83.179a7.5,7.5,0,0,0,0-15Z" fill="#6f0ddc"/>
                  <path id="Path_28376" data-name="Path 28376" d="M390.326,363.887H307.147a7.5,7.5,0,0,0,0,15h83.179a7.5,7.5,0,1,0,0-15Z" fill="#6f0ddc"/>
                </g>
              </svg>
              <div class="text-bold text-h6">Learn from Lead Practitioners</div>
            </div>
          </div>
        </div>
      </div>
      </div>

<!-- program eligilibity -->
      <div class=" shadow-4" style="width:80%;display: flex;justify-content: center;flex-direction: column;align-items: center;margin-left: auto;margin-right: auto;line-height: 2;font-size: 17px;">
      <div class="text-h4 text-bold q-ma-xs program_style q-pa-md " style = "color:#4b0dba" >Programme Eligibility</div>
      <div class="q-ma-xs flex juxtify-center align-center program_style ">
          <div class="program_style gt-sm" >
            <svg xmlns="http://www.w3.org/2000/svg" width="50px " height="50px"  viewBox="0 0 24 24" class="p"><path d="M 2 4 L 2 18 C 2 19.105 2.895 20 4 20 L 10.277344 20 C 10.623613 20.595634 11.261054 21 12 21 C 12.738946 21 13.376387 20.595634 13.722656 20 L 20 20 C 21.105 20 22 19.105 22 18 L 22 4 L 14 4 C 13.228 4 12.532 4.3002969 12 4.7792969 C 11.468 4.3002969 10.772 4 10 4 L 2 4 z M 4 6 L 10 6 C 10.551 6 11 6.449 11 7 L 11 18 L 4 18 L 4 6 z M 14 6 L 20 6 L 20 18 L 13 18 L 13 7 C 13 6.449 13.449 6 14 6 z M 6 8 L 6 10 L 9 10 L 9 8 L 6 8 z M 15 8 L 15 10 L 18 10 L 18 8 L 15 8 z M 6 11 L 6 13 L 9 13 L 9 11 L 6 11 z M 15 11 L 15 13 L 18 13 L 18 11 L 15 11 z M 6 14 L 6 16 L 9 16 L 9 14 L 6 14 z"></path></svg></div>
      <div>Graduates with an Interest to Excel in the Full-stack Web Development Domain.</div></div>
      <div class="q-ma-xs flex juxtify-center align-center program_style">
          <div class="program_style gt-sm"><svg xmlns="http://www.w3.org/2000/svg"  width="50px " height="50px" viewBox="0 0 24 24" class="p"><path d="M8 8c0-2.2 1.8-4 4-4s4 1.8 4 4M20 20H4v-1.5c0-1.9 4.8-3.5 8-3.5s8 1.6 8 3.5V20z" opacity=".3"></path><path d="M17 8h-2c0-1.7-1.3-3-3-3-1.7 0-3 1.3-3 3H7c0-2.8 2.2-5 5-5C14.8 3 17 5.2 17 8zM12 13c-2.2 0-4-1.8-4-4h2c0 1.1.9 2 2 2 1.1 0 2-.9 2-2h2C16 11.2 14.2 13 12 13zM21 21H3v-2.5c0-3 5.9-4.5 9-4.5 3.1 0 9 1.5 9 4.5V21zM5 19h14v-.5c0-.9-3.7-2.5-7-2.5-3.3 0-7 1.6-7 2.5V19z"></path><path d="M7 16H9V20H7zM15 16H17V20H15zM11 2H13V4H11zM6 7H18V9H6z"></path></svg></div><div>Working Professionals to Master Full-stack Web Development & to Switch their Career to Tech.</div></div>

      </div>
   

      <div class="text-h4 text-bold text-center q-mt-md q-pa-md" style="color:#4b0dba" >Technologies Covered</div>
      <div class="row">
      <div class=" col-md-12 col-sm-12 col-xs-12 gt-sm">
          <q-img src="../assets/boot.png"  ></q-img>
      </div>
      <div class=" col-md-12 col-sm-12 col-xs-12 lt-md ">
          <q-img src="../assets/image2.png"  ></q-img>
      </div>
      </div>

      
      <div class="text-h4 text-bold text-center q-mt-xl q-pa-md" style="color:#4b0dba"  id="curriculum">Curriculum</div>
   
    
      <div class="row  q-pa-md">
      <div class="col-12 col-md-7 q-pa-md">
          <div class="text-h5 text-bold">The roadmap to earning a high-paying job as a software developer</div>
          <div class="q-mt-md" style="line-height:1.5;font-size: 17px;">Our full-stack development course covers a range of topics over a period of 49 weeks, divided into five phases. The course is designed to give you a strong foundation in programming and problem-solving, while also allowing you to explore advanced topics and work with cutting-edge technologies. Each of the</div>
            <div><span style="font-size: 17px;">phases covers a specific tech stack:</span>
              <ul style="line-height:2rem;font-size: 17px;">
                <li>Basics of programming</li>
                <li>Data structures & algorithms (DSA)</li>
                <li>Frontend Development</li>
                <li>Backend Development</li>
                <li>Advanced DSA</li>
              </ul>
            </div>
      </div>

      <div class="col-12 col-md-5 text-center  flex flex-center gt-sm ">
          <q-img src="../assets/pgimg.png" class="img-fluid" style="height:380px;width:380px;"></q-img>
      </div>
      </div>
   

      <div class="q-mt-md">
      <div class="text-h4 text-bold text-center q-mt-md q-pa-md" style="color:#4b0dba" >Programme Syllabus</div>
      <div class="para_style text-dark" style="font-size:17px">Strategically curated to train you for developing high-end features, dynamic database management & designing vibrant yet interactive user interfaces(UI). The syllabus has been devised by Industry experts & mapped to meet the requirements at its best in the Web Development industry.</div>
        <div class="q-mt-md" style="width:70%;margin-left: auto;margin-right:auto"  data-aos="fade-up">
        <q-list bordered class="rounded-borders" style="border-left:5px solid #4b0dba;">
          <q-expansion-item label="Basics of programming · 5 weeks" style="border-left:5px solid #ffc107;font-size:17px">
                <q-card class="text-dark">
                  <q-card-section>
                    <ul>
                      <li>Basics of Programming</li>
                      <li>Variables and Operators</li>
                      <li>Object-Oriented Programming</li>
                      <li>Control Structures</li>
                    </ul>
                  </q-card-section>
                </q-card>
              </q-expansion-item>
        </q-list>
        </div>


        <div class="q-mt-md" style="width:70%;margin-left: auto;margin-right:auto"  data-aos="fade-up">
        <q-list bordered class="rounded-borders" style="border-left:5px solid yellow;">
          <q-expansion-item label="Data Structures and Algorithms · 12 weeks"  style="border-left:5px solid #ffc107;font-size:17px" >
                <q-card class="text-dark">
                  <q-card-section>
                    <ul>
                      <li>Basics Algorithm Analysis</li>
                      <li>Time Complexity and Space Complexity</li>
                      <li>Arrays</li>
                      <li>Basic String Manipulation</li>
                      <li>Recursion</li>
                      <li>Searching</li>
                      <li>Divide and Conquer</li>
                      <li>Sorting</li>
                      <li>Hashing</li>
                      <li>Basic Problem Solving Techniques</li>
                      <li>Object-Oriented Programming</li>
                      <li>Linked Lists</li>
                      <li>Stacks & Queues</li>
                      <li>Debugging and Troubleshooting</li>
                      <li>Basic Bit Manipulation</li>
                      <li>Trees</li>
                      <li>Heaps</li>
                      <li>Backtracking</li>
                      <li>Dynamic Programming</li>
                    </ul>
                  </q-card-section>
                </q-card>
              </q-expansion-item>
        </q-list>
        </div>


        <div class="q-mt-md" style="width:70%;margin-left: auto;margin-right:auto"  data-aos="fade-up">
        <q-list bordered class="rounded-borders" style="border-left:5px solid #4b0dba;">
          <q-expansion-item label="Frontend Development - HTML, CSS • 6 Weeks"  style="border-left:5px solid #ffc107;font-size:17px">
                <q-card class="text-dark">
                  <q-card-section>
                <div class="text-h6">Getting started with HTML</div>
                <ul>
                    <li>The internet Analogy</li>
                    <li>Indroduction to HTML</li>
                    <li>The Internet and the World Wide Web</li>
                    <li>HTML Document Structure</li>
                    <li>HTML Tags and Meta Tags</li>
                    <li>Lists</li>
                  </ul>
                  </q-card-section>
      
                  <q-card-section>
                    <div class="text-h6">Getting started with Css</div>
                    <ul>
                        <li>Indroduction to CSS</li>
                        <li>CSS Selectors and Combinators</li>
                        <li>CSS Background</li>
                        <li>Positioning</li>
                        <li>flex and grid</li>
                        <li>Responsive CSS with Media Queries</li>
                      </ul>
                  </q-card-section>
      
                  <q-card-section>
                    <div class="text-h6">Getting started with Javascript</div>
                    <ul>
                      <li>Indroduction to JavaScript</li>
                      <li>DOM Manipulation</li>
                      <li>Closures</li>
                      <li>Hoisting</li>
                      <li>Objects</li>
                      <li>Object-Oriented Programming in Javascript</li>
                    </ul>
                  </q-card-section>
                </q-card>
              </q-expansion-item>
        </q-list>
        </div>

        <div class="q-mt-md" style="width:70%;margin-left: auto;margin-right:auto"  data-aos="fade-up">
        <q-list bordered class="rounded-borders" style="border-left:5px solid yellow;">
          <q-expansion-item label="Frontend Development - React • 6 Weeks" style="border-left:5px solid #ffc107;font-size:17px">
                <q-card class="text-dark">
                  <q-card-section>
                    <ul>
                        <li>Indroduction to React</li>
                        <li>Props,State</li>
                        <li>Class,Component</li>
                        <li>Controlled vs Uncontrolled Components</li>
                        <li>Rendering List of Elements</li>
                        <li>Conditional Rendering</li> 
                    </ul>
              </q-card-section>         
            </q-card>
              </q-expansion-item>
        </q-list>
        </div>

        <div class="q-mt-md" style="width:70%;margin-left: auto;margin-right:auto"  data-aos="fade-up">
        <q-list bordered class="rounded-borders" style="border-left:5px solid #4b0dba;">
          <q-expansion-item label="Backend Development • 12 Weeks" style="border-left:5px solid #ffc107;font-size:17px" >
                <q-card class="text-dark" >
                  <q-card-section>  
              <ul>
                  <li>Prerequisites of Server-Side Programming</li>
                  <li>Introduction to Node.js</li>
                  <li>Core Modules in Node.js</li>
                  <li>Express.js + MySQL</li>
                  <li>Express.js + MongoDB</li>
                  <li>Introduction to AWS S3</li> 
              </ul>
            </q-card-section>
          </q-card> 
        </q-expansion-item>
        </q-list>
        </div>


        <div class="q-mt-md" style="width:70%;margin-left: auto;margin-right:auto"  data-aos="fade-up">
        <q-list bordered class="rounded-borders" style="border-left:5px solid yellow;">
          <q-expansion-item label="Advanced DSA • 12 Weeks"  style="border-left:5px solid #ffc107;font-size:17px">
                <q-card class="text-dark">
                  <q-card-section>
                    <ul>
                    <li>Range Queries</li>
                    <li>Number Theory</li>
                    <li>Bit Manipulation</li>
                    <li>Game Theory</li>
                    <li>Geometry</li>
                    <li>Trees</li>
                    </ul>
                </q-card-section>
                </q-card>
              </q-expansion-item>
        </q-list>
        </div>

    <div class="q-ma-xl text-center"><a href="/curiculum.pdf" download="curiculum.pdf"><q-btn style="background:#4b0dba; color: white "   label="Download Syllabus" class="text-bold" /></a></div></div>


      <div  class=" parastyle" style="width:90%" id="placement">
        <div class="text-h4 text-bold text-center q-mt-md q-pa-md" style="color:#4b0dba" >Placement Support & Process</div>
        <div class="text-h6 text-bold" style="font-size:17px">Edex Tech ensure 360-degree career guidance & guaranteed placement opportunities.Enrol now to stay assured & land your dream tech job.</div>
      </div>

      <div class="text-h6 text-bold text-center   q-mt-xl">200+ Companies Hired Edex Tech Learners</div>
      <div class="row q-mt-md q-gutter-sm  align-center " style="width:70%;margin-left: auto;margin-right: auto;"  data-aos="fade-up" >
        <q-card class=" my-card q-pa-sm shadow-1 col col-12 col-md col-sm-12 parent  " style="border:1px thin white">
          <q-card-section class="shadow-14 text-center  " style="height:100px;width:100px;"> <q-img src="../assets/p2.png" ></q-img></q-card-section>
        </q-card>

        <q-card class=" my-card q-pa-sm shadow-1 text-center col col-12 col-md col-sm-12 parent" style="border:1px thin white">
          <q-card-section class="shadow-14 text-center " style="height:100px;width:100px;text-align: center;"><q-img src="../assets/infosys1.png" ></q-img></q-card-section>
        </q-card>

        <q-card class=" my-card q-pa-sm shadow-1 col col-12 col-md col-sm-12 parent" style="border:1px thin white">
          <q-card-section class="shadow-14 text-center  " style="height:100px;width:100px;display: flex; justify-content: center; align-items: center;"> <q-img src="../assets/deloitte.png" ></q-img></q-card-section>
        </q-card>

        <q-card class=" my-card q-pa-sm shadow-1 col col-12 col-md col-sm-12 parent" style="border:1px thin white">
          <q-card-section class="shadow-14 text-center" style="height:100px;width:100px;display: flex; justify-content: center; align-items: center;"> <q-img src="../assets/wibro.png" ></q-img></q-card-section>
        </q-card>

        <q-card class=" my-card q-pa-sm shadow-1 col col-12 col-md col-sm-12 parent " style="border:1px thin white">
          <div class="shadow-14 text-center" style="height:100px;width:100px;display: flex; justify-content: center; align-items: center;"> <q-img src="../assets/oracle.png" ></q-img></div>
        </q-card>

        <q-card class=" my-card q-pa-sm shadow-1 col col-12 col-md col-sm-12 parent" style="border:1px thin white">
            <div class="shadow-14 text-center" style="height:100px;width:100px;display: flex; justify-content: center; align-items: center;"> <q-img src="../assets/p7.png" ></q-img></div>
        </q-card>
      </div>

      <div class="row q-mt-md q-gutter-sm  align-center " style="width:70%;margin-left: auto;margin-right: auto;"  data-aos="fade-up" >
      <q-card class=" my-card q-pa-sm shadow-1 col col-12 col-md col-sm-12 parent" style="border:1px thin white">
          <div class="shadow-14 text-center" style="height:100px;width:100px;display: flex; justify-content: center; align-items: center;"> <q-img src="../assets/zoho.png" ></q-img></div>
      </q-card>
    
        <q-card class=" my-card q-pa-sm shadow-1 col col-12 col-md col-sm-12 parent" style="border:1px thin white">
          <div class="shadow-14 text-center" style="height:100px;width:100px;display: flex; justify-content: center; align-items: center;"> <q-img src="../assets/ibm.png" ></q-img></div>
        </q-card>
    
        <q-card class=" my-card q-pa-sm shadow-1 col col-12 col-md col-sm-12 parent" style="border:1px thin white">
          <div class="shadow-14 text-center" style="height:100px;width:100px;display: flex; justify-content: center; align-items: center;"> <q-img src="../assets/accenture.png" ></q-img></div>
        </q-card>
    
        <q-card class=" my-card q-pa-sm shadow-1 col col-12 col-md col-sm-12 parent" style="border:1px thin white">
          <div class="shadow-14 text-center" style="height:100px;width:100px;display: flex; justify-content: center; align-items: center;"> <q-img src="../assets/amazon.png" ></q-img></div>
        </q-card>
    
        <q-card class=" my-card q-pa-sm shadow-1 col col-12 col-md col-sm-12 parent" style="border:1px thin white">
          <div class="shadow-14 text-center" style="height:100px;width:100px;display: flex; justify-content: center; align-items: center;"> <q-img src="../assets/micro.png" ></q-img></div>
        </q-card>
    
        <q-card class=" my-card q-pa-sm shadow-1 col col-12 col-md col-sm-12 parent" style="border:1px thin white">
          <div class="shadow-14 text-center" style="height:100px;width:100px;display: flex; justify-content: center; align-items: center;"> <q-img src="../assets/intel.png" ></q-img></div>
        </q-card>
      </div>

      <div class="text-center q-mt-xl"><span class="text-center text-h4 text-bold underline " style="color:#4b0dba">Your Trainers are Alumini of</span></div>
      <div class="row  q-gutter-xl q-mt-sm q-pa-md text-center flex content-center justify-center  " style="width:100%;margin-left: auto;margin-right: auto;"   >
        
        <div class="shadow-1 text-center q-pa-sm " style="height:200px;width:200px;display: flex; justify-content: center; align-items: center;margin-left: auto;margin-right: auto;"> <q-img src="../assets/amazon.png" ></q-img></div>
        <div class="shadow-1 text-center q-pa-sm" style="height:200px;width:200px;display: flex; justify-content: center; align-items: center;margin-left: auto;margin-right: auto;"> <q-img src="../assets/accenture.png" ></q-img></div>
        <div class="shadow-1 text-center q-pa-sm" style="height:200px;width:200px;display: flex; justify-content: center; align-items: center;margin-left: auto;margin-right: auto;"> <q-img src="../assets/zoho.png" ></q-img></div>
        <div class="shadow-1 text-center q-pa-sm" style="height:200px;width:200px;display: flex; justify-content: center; align-items: center;margin-left: auto;margin-right: auto;"> <q-img src="../assets/wibro.png" ></q-img></div>
      </div>

      <div class="q-pa-xl  text-center bgImg">
        <div class="text-h4 text-bold text-white">Join The Most Promising</div>
        <div class="text-h4 text-bold text-warning">Full Stack Development Programme</div>
        <div class="q-ma-md text-center"><q-btn style="background:#4b0dba; color: white " @click="bar2 = true"  label="Join Free demo class " onclick="scrollToForm()" class="text-bold" /></div>
      </div>

      <div class="text-h4 text-bold text-center q-mt-md q-pa-md" style="color:#4b0dba" id="testimonial">Testimonal</div>
      <div class="q-pa-md">
  <div class="q-gutter-md">
    <q-carousel v-model="slide" transition-prev="scale" transition-next="scale" swipeable animated control-color="black" navigation  padding arrows autoplay height="500px"  class=" text-dark shadow-1 rounded-borders"  style="font-size:17px" >
      <q-carousel-slide name="style" class="column no-wrap flex-center">
          <q-img src="../assets/person4.png" class="gt-sm"  style="height: 200px;width:200px;border-radius:50%"/>
          <div class="text-center text-bold text-h6">Abinaya<br>
            <q-rating name="quality" v-model="quality" max="4" size="2em" color="yellow" icon="star_border" icon-selected="star" no-dimming /></div>
        <div class="q-mt-md text-center">
          <span class="text-bold" style="font-size:28px;"> " &nbsp;</span>The full stack developer course at EdEx exceeded my expectations. Comprehensive curriculum, supportive instructors, and hands-on projects prepared me well for a career in web development. <span class="text-bold" style="font-size:28px;"> " &nbsp;</span>
        </div>
      </q-carousel-slide>

      <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <q-img src="../assets/person2.png" class="gt-sm"  style="height: 200px;width:200px;border-radius:50%"/>
          <div class="text-center text-bold text-h6">vijay <br>
            <q-rating name="quality" v-model="quality" max="4" size="2em" color="yellow" icon="star_border" icon-selected="star" no-dimming /></div>
        <div class="q-mt-md text-center">
         <span class="text-bold" style="font-size:28px;"> " &nbsp;</span>The course takes 6-9 months to complete, including mock interviews after the learning journey with instructors. You will get into the placement process right after 9 months into the course. <span class="text-bold" style="font-size:28px;"> " &nbsp;</span>
        </div>
      </q-carousel-slide>

      <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <q-img src="../assets/person1.png" class="gt-sm" style="height: 200px;width:200px;border-radius:50%"/>
          <div class="text-center text-bold text-h6">Raj Kumar<br>
            <q-rating name="quality" v-model="quality" max="4" size="2em" color="yellow" icon="star_border" icon-selected="star"  no-dimming /></div>
        <div class="q-mt-md text-center">
          <span class="text-bold" style="font-size:28px;"> " &nbsp;</span>  The course is structured in a way so that people who have a good grasp of the fundamentals of programming can better themselves in higher level topics, which are commonly asked in tech interviews <span class="text-bold" style="font-size:28px;"> " &nbsp;</span>
        </div>
      </q-carousel-slide>

      <q-carousel-slide name="map" class="column no-wrap flex-center">
          <q-img src="../assets/person7.png" class="gt-sm" style="height: 200px;width:200px;border-radius:50%"/>
          <div class="text-center text-bold text-h6">Rubini <br><q-rating name="quality" v-model="quality"  max="4" size="2em" color="yellow" icon="star_border" icon-selected="star"  no-dimming /></div>
        <div class="q-mt-md text-center" >
          <span class="text-bold" style="font-size:28px;"> " &nbsp;</span>Edex Tech full stack developer course bridged theory with practice seamlessly. Robust curriculum, supportive instructors, and project-based learning boosted my confidence . Highly recommended for skill enhancement. <span class="text-bold" style="font-size:28px;"> " &nbsp;</span>         </div>
      </q-carousel-slide>

    </q-carousel>
</div>
      </div> 

      <div class="text-center q-mt-xl" id="faq"><span class="text-center text-h4 text-bold underline " style="color:#4b0dba" >FAQ 'S</span></div>
      <div class="q-pa-md  text-white">
        <q-list  padding bordered class="rounded-borders" style="max-width: 90%;margin-right:auto;margin-left: auto;">
          <q-expansion-item header-class="text-dark" icon="drafts" label="What is the duration of the Professional Certificate Course in Full Stack Development by Edex Tech ?" >
            <q-card class="bg-grey-9">
              <q-card-section>The course takes 6-9 months to complete, including mock interviews after the learning journey with instructors. You will get into the placement process right after 9 months into the course.</q-card-section>
            </q-card>
          </q-expansion-item>
    
          <q-expansion-item icon="drafts" label="What is the course fee for the Professional Certificate Course in Full Stack Development by Edex Tech?" header-class="text-dark">
            <q-card class="bg-grey-9">
              <q-card-section>The course fee is dependent on the package you get after placement, and includes access to all live classes, course materials, hands-on coding sessions, capstone projects, and the certification.</q-card-section>
            </q-card>
          </q-expansion-item>
    
          <q-expansion-item icon="drafts" label="Is there any minimum education qualification required for the programme?" header-class="text-dark">
            <q-card class="bg-grey-9">
              <q-card-section>Bachelor's degree or diploma is required to apply for the course. No prior coding knowledge is necessary for this course as it starts from the basics and then moves on to advanced topics.</q-card-section>
            </q-card>
          </q-expansion-item>
    
          <q-expansion-item icon="drafts" label="Who will be teaching the Professional Certificate Course in Full Stack Development by Edex Tech?" header-class="text-dark">
            <q-card class="bg-grey-9">
              <q-card-section> The course will be taught by experienced software engineers with a wealth of industry experience, working at top companies around the globe.          </q-card-section>
           </q-card>
          </q-expansion-item>
    
          <q-expansion-item icon="drafts" label="What will I learn in the Professional Certificate Course in Full Stack Development course at Edex Tech?" header-class="text-dark" >
            <q-card class="bg-grey-9">
              <q-card-section>You will learn the key concepts and techniques of full-stack development, including HTML, CSS, DSA & Advanced DSA, JavaScript, React, Node.js, Express.js, MongoDB, and MySQL. </q-card-section>
            </q-card>
          </q-expansion-item>
    
          <q-expansion-item icon="drafts" label="What will I receive after completing the Professional Certificate Course in Full Stack Development course at Edex Tech?" header-class="text-dark" >
            <q-card class="bg-grey-9">
              <q-card-section>Upon successful completion of the course, you will receive a professional certification from Edex Tech.          </q-card-section></q-card>
          </q-expansion-item>
    
          <q-expansion-item icon="drafts" label="What tools and software would be taught or used during the course?" header-class="text-dark" >
            <q-card class="bg-grey-9">
              <q-card-section> You will learn tools, languages, and software such as HTML, CSS, JS, React, Node.js, Express.js, MongoDB, MySQL, AWS S3, and GitHub.</q-card-section>
            </q-card>
          </q-expansion-item>
          
          <q-expansion-item icon="drafts" label="What career opportunities will be available to me after completing the Professional Certificate Course in Full Stack Development by Edex Tech?" header-class="text-dark">
            <q-card class="bg-grey-9">
              <q-card-section>Students from our course will be prepared for a wide range of career opportunities, including full stack developer, front-end developer, back-end developer, and more.</q-card-section>
            </q-card>
          </q-expansion-item>
    
          <q-expansion-item icon="drafts" label="What will I receive after completing the Professional Certificate Course in Full Stack Development course at  Edex Tech?" header-class="text-dark">
            <q-card class="bg-grey-9">
              <q-card-section>Upon successful completion of the course, you will receive a professional certification from Edex Tech.</q-card-section>
            </q-card>
          </q-expansion-item>
    
          <q-expansion-item icon="drafts" label="Is there any support available if I have any issues during the course?"  header-class="text-dark">
            <q-card class="bg-grey-9">
              <q-card-section>Yes, our team of experts is always available to provide technical support and help with any issues you may have.              </q-card-section>
            </q-card>
          </q-expansion-item>
          
        </q-list>
      </div> 
      <!-- <div class="text-center q-mt-xl"><span class="text-center text-h4 text-bold underline " style="color:#4b0dba">FAQ 'S</span></div>
      <div class="q-pa-md text-white">
        <q-list padding bordered class="rounded-borders" style="max-width: 90%;margin-right:auto;margin-left: auto;"  v-for="l in faqList " :key="l" >
          <q-expansion-item header-class="text-dark"   icon="drafts" :label ="l.question" >
            <q-card class="bg-grey-9">
              <q-card-section>{{ l.answer }}</q-card-section>
            </q-card>
            </q-expansion-item>
        </q-list>
      </div> -->
 
      <div class="bgImg text-center text-white q-pa-xl">
      <div class="text-h3 text-bold">Have Further Queries? Contact Us!</div>
      <div class="text-h6 text-bold">Request a Callback. An expert from the admissions office will call you in the next 24 working hours. You can also reach out to us at<span style="color:yellow"> edextech.io or +91-8055224403</span></div>
      <div class="q-ma-md text-center"><q-btn  style="background:#4b0dba; color: white " label="Request a call back"  @click="ScrolltoSection('form-section')"   class="text-bold" /></div>
      </div>

      <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
      <q-btn fab icon="keyboard_arrow_up" color="accent" />
      </q-page-scroller>

  </q-page>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ref } from 'vue'

export default {
setup () {
  const name = ref(null)
  const email =ref(null)
  const mobile= ref(null)
  const place =ref(null)
  const moreContent = ref(true)
  
  return {
    slide: ref('style'),
    name,
    email,
    mobile,
    place,
    bar2: ref(false),
    faqList: [
      {
        question: "What is the duration of the Professional Certificate Course in Full Stack Development by Edex Tech?",
        answer: "The course takes 6-9 months to complete, including mock interviews after the learning journey with instructors. You will get into the placement process right after 9 months into the course."
      },
      {
        question:"What is the course fee for the Professional Certificate Course in Full Stack Development by Edex Tech?",
        answer:"The course fee is dependent on the package you get after placement, and includes access to all live classes, course materials, hands-on coding sessions, capstone projects, and the certification."
      },
      {
        question:"Is there any minimum education qualification required for the programme?",
        answer:"Bachelor's degree or diploma is required to apply for the course. No prior coding knowledge is necessary for this course as it starts from the basics and then moves on to advanced topics."
      },
      {
        question:"Who will be teaching the Professional Certificate Course in Full Stack Development by Edex Tech?",
        answer:"The course will be taught by experienced software engineers with a wealth of industry experience, working at top companies around the globe.  "
      },
      {
        question:"What will I learn in the Professional Certificate Course in Full Stack Development course at Edex Tech?",
        answer:"You will learn the key concepts and techniques of full-stack development, including HTML, CSS, DSA & Advanced DSA, JavaScript, React, Node.js, Express.js, MongoDB, and MySQL."
      },
      {
        question:"What will I receive after completing the Professional Certificate Course in Full Stack Development course at Edex Tech?",
        answer:"Upon successful completion of the course, you will receive a professional certification from Edex Tech. "
      },
      {
        question:"What tools and software would be taught or used during the course?",
        answer:"You will learn tools, languages, and software such as HTML, CSS, JS, React, Node.js, Express.js, MongoDB, MySQL, AWS S3, and GitHub."
      },
      {
        question:"What career opportunities will be available to me after completing the Professional Certificate Course in Full Stack Development by Edex Tech?",
        answer:"Students from our course will be prepared for a wide range of career opportunities, including full stack developer, front-end developer, back-end developer, and more."
      },
      {
        question:"What will I receive after completing the Professional Certificate Course in Full Stack Development course at  Edex Tech?",
        answer:"Upon successful completion of the course, you will receive a professional certification from Edex Tech."
      },
      {
        question:"Is there any support available if I have any issues during the course?",
        answer:"Yes, our team of experts is always available to provide technical support and help with any issues you may have. "
      }
      

    ],
    onSubmit () {
      if (accept.value !== true) {
        $q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
        })
      }
      else {
        $q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
      }
    },

    onReset () {
      name.value = null
      age.value = null
      accept.value = false
    }
  }
},
methods: {
  ScrolltoSection(sectionid){
    const section = document.getElementById(sectionid);
    if(section){
      window.scrollTo({
          top:section.offsetTop,
          behavior:'smooth'
        });
    }
  }

},
mounted(){
  AOS.init({
    duration:1000,
    offset:200,
   } );
},
}

</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

/* *{
font-family:'Times New Roman', Times, serif;
  font-weight: 100;
 font-style: normal;
}   */

.parent {
      display: flex;
      align-items: center; 
      justify-content: center;
      /* height: 200px;  */
    }
.bgImg{
  background-image: url("../assets/bgframe.png");
}
.image{
        background-image: url("../assets/backg.png");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
      width:100%;}

.img-fluid{
  background-size:containe;
}
.rounded-image {
  border-radius: 50%;
  height: 50px;
  width: 50px;
}
.Form_Style {
  border: 2px solid indigo;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  padding: 10px;
}
.Form_Style1 {
  border: 2px solid indigo;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  /* padding: 10px; */
}
input {
  border: 2px thin black;
}
.input_style {
  border: 1px solid #000;
  border-radius: 5px;
  height: 35px;
  width: 90%;
  text-align: center;
}
.text-size {
  font-size: 20px;
}
.row_style {
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  border: 5px solid white;
  position: relative;
  top: -30px;
  background-color: white;
  color: black;
  border-radius: 5px;

}

.row_style2 {
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
}
.bgimg{
  font-size: 17px;
  line-height: 2;
  margin:5px;
  background-image: url("../assets/fact-bg.png");

}
.para_style {
  width: 90%;
  display: flex;
  justify-content: center;
  font-size: 16px;
  margin-right: auto;
  margin-left: auto;
  line-height: 2;
  margin-top: 10px;
  color: rgba(60, 72, 84, 0.8);

}
.parastyle {
  width: 90%;
  font-size: 16px;
  margin-right: auto;
  margin-left: auto;
  line-height: 2;
  margin-top: 10px;
  color: rgba(60, 72, 84, 0.8);

}

@media screen and (max-width:320px) {
  .text-head {
      font-size: 40px;
  }
  .head1{
      text-align: center;
  }
  .text-head2 {
      text-align: center;
  }

  #margin {
      margin: none;

  } 
  .program_style{
      text-align:center;
  }
}

@media screen and (max-width:430px){
.program_style{
  text-align:center;
}
}

@media screen and (max-width:390px) {
  .text-head {
      font-size: 40px;
  }

  .text-head2 {
      text-align: center;
      padding: 5px;
  }
  .program_style{
      text-align:center;
  }
  .head1{
    text-align:center;
  }
}

@media screen and (max-width:376px){
.head1{
  text-align:center;
}
}

</style>

