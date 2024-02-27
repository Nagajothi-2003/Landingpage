<template>
<q-page>
    
  <div class="row q-mt-xs  ">
    <div class="col-12 col-md-8  col-sm-8 col-xs-12 q-pa-sm order-md-1" style="display:flex;flex-direction:column;margin-top: 40px;">
        <div class="bai-jamjuree-semibold roboto-slab text-center  text-h4 text-weight-bolder">Level up with our <span class="text-red"> Full Stack Developer Course! </span></div>
        <q-list v-for="l in list" class="q-ml-md">
            <q-item v-ripple>
                <q-item-section avatar><q-icon color="yellow iconStyle" name="circle" size="15px" /></q-item-section>
                <q-item-section class="size roboto-slab  font-size text-weight-bold">{{ l.title }}</q-item-section>
            </q-item>
        </q-list>

        <div class="q-pa-sm flex divCter column flex-center q-gutter-md q-mt-md">
          <div class="text-weight-bolder text-h6 Heading1"  >Start with a best course and get &nbsp;<span style="color:red"> bright job in future.</span></div>
          <div class="text-bold font-size1" >Get your best career by practicing with Edex Tech</div>
          <q-input v-model="search" color=yellow placeholder="Type your course name "  style="max-width:310px; background-color: white;" class="shadow-10 rounded-borders input ">
            <template v-slot:prepend><q-icon name="search" color="black" class="q-ml-sm"/></template>
            <q-btn style="background: #ffc107; color:black;" class="q-ma-sm btn" label=" Search" />
          </q-input>
       </div>
    </div>
    <div class="col-12 col-md-4 col-sm-4 col-xs-12 text-center order-md-2 q-mt-md">
        <img alt="img" src="../assets/girlremove2.png" class="img-fluid img-size" style="max-width: 310px; height: auto;">
    </div>
</div>
<!-- over -->
<div class="q-mt-xl">
<div class="row q-mt-xl Second_Row d-flex " >
        <div class="col col-xs-12 col-sm-12 col-md-6 text-center order-sm-2 gt-xs">
         <div class="q-pa-sm"> <q-img src="../assets/working.png" class="imgFit" style="border: 2px solid #ffc107; height:380px;width:500px;" ></q-img></div>
        </div>
        <div class="col col-xs-12 col-sm-12 col-md-6 order-sm-1 " >
          <div class="text-h5 text-weight-bolder roboto-slab text-size  edit1" style="overflow: hidden;">Learn Full Stack  Development and Grow Your Skills From <span class="text-bold text-size2 " style="font-size: 30px;" >  Edex Tech</span></div><br>
          <div class="text-Style edit2  q-ma-sm" >
                <p style="line-height:2"> <span class="text-bold">Edex Tech </span>is one of the Best Software Training Institute in Madurai for Full Stack Training Courses. The Full stack courses includes Responsive Frontend Development using Angular, Jquery, CSS, Bootstrap and Node.js with Express Framework in the Backend, among other latest technologies, using JavaScript as the programming language. With more than 300+ Placement tie-ups with IT Companies, our students who have completed the Full stack and other courses are in excellent position capable of delivering immediately after the course completion.<br><br>
                Our institute offers a full-stack development course using JavaScript, React JS, Node JS and MongoDB in Chennai. Classes are available online and offline, and we offer placement assistance to our students. Enrol now to become a full-stack developer and gain the skills you need to succeed in your career. Find out more about our course and how it can benefit you.</p>
          </div>
        </div>
      </div>
</div>
<!-- over -->
<div class="text-center bg-warning q-pa-md q-mt-md"><span class="text-h4 text-center text-bold  underline" >Full Stack Development course overview</span></div>
<div class="row">
        <div class="row q-mt-sm q-ma-lg q-gutter-sm align-center text-start flex justify-center "  >
              <div class="col col-xs-12 col-sm-12 col-md-4  "  >
                <q-card class="my-card text-dark q-ma-sm" >
                  <q-card-section ><div class="text-h6 text-bold text-center bg-warning">About Edex Tech Full Stack Developer Course </div></q-card-section>
      
                  <q-card-section class="q-pt-xs ">
                  <q-icon name="check" size="sm"  color="red"></q-icon>  Learn practical coding skills through real-life projects<br><br>
                  <q-icon name="check" size="sm" color="red"></q-icon>  DSA, CS fundamentals, and software/system design taught by industry veterans via live classes<br><br>
                  <q-icon name="check" size="sm" color="red"></q-icon> Industry-expert faculty and 1:1 mentorship with a peer group of 2,000+ Scaler students and alumni.<br><br>
                  </q-card-section>
                </q-card>
              </div>

              <div class="col col-xs-12 col-sm-12 col-md-4">
                <q-card class="my-card text-dark q-ma-sm">
                  <q-card-section><div class="text-h6 text-bold text-center bg-warning">What is Full Stack Web Development and why is it important to learn?</div></q-card-section>
                  <q-card-section class="q-pt-none "><q-icon name="check" size="sm" color="red"></q-icon>Full Stack Development is a software profession/stream where a developer deals with both the Frontend (client-side) and Backend (server-side) of a tech product. A Full Stack Developer is proficient in several technologies that help in developing a robust tech product, and thus play a major role in making decisions for the company. It is one of the high-demand jobs in the software industry.<br><br></q-card-section>
                </q-card>
              </div>

              <div class="col col-xs-12 col-sm-12 col-md-4">
                <q-card class="my-card text-dark q-ma-sm">
                    <q-card-section><div class="text-h6 text-bold text-center bg-warning">What skills will I master with this full stack course?</div></q-card-section>
                    <q-card-section class="q-pt-none ">
                      Skills that you will master with this full-stack course are:<br>
                      <q-icon name="check" size="sm" color="red" ></q-icon> Programming constructs, algorithms, and data structures.<br>
                      <q-icon name="check" size="sm" color="red" ></q-icon>Advanced data structures, problem-solving, and computer science fundamentals.<br>
                      <q-icon name="check" size="sm" color="red" ></q-icon> Develop software and systems using OOP principles and system design techniques.<br>
                      <q-icon name="check" size="sm" color="red" ></q-icon>Build full-stack apps using technologies like REST APIs, MVC, and databases like MongoDB.<br>
                    </q-card-section>
                </q-card>
              </div>
        </div>
      </div>
      <div class="GI PF WF PG"><div class="fI tatsu-module tatsu-1sWR-52AN1F VJ II tatsu-image-lazyload tatsu-1sWR-52AN1F iB GG"><div class="tatsu-single-image-inner TB YC bF fF tF XG" style="background-color: rgba(0, 0, 0, 0);"><div class="tatsu-single-image-padding-wrap XB"></div><img data-srcset="https://media.swipepages.com/2023/3/5fcde7acf64f9100108c719e/down.png" sizes="(max-width: 767px) 12vw,(max-width: 1024px) 7.5vw,(max-width: 1377px) 1160px, 1160px" alt="" data-src="https://media.swipepages.com/2023/3/5fcde7acf64f9100108c719e/down.png" data-extension=".png" data-webp="1" srcset="https://media.swipepages.com/2023/3/5fcde7acf64f9100108c719e/down.webp" src="https://media.swipepages.com/2023/3/5fcde7acf64f9100108c719e/down.webp" style="opacity: 1;"></div></div></div>
</q-page>
</template>
<script>

import {defineComponent,ref } from 'vue';

        export default defineComponent({
          name:'index',
          setup(){
            return{
            tab: ref('mails'),
            splitterModel: ref(20),
            slide: ref('style'),
            list:[{title:"Upskill in DSA and System Design from scratch."},
                  {title:"Build robust and scalable web applications using React, Node.js, and MongoDB."},
                  {title:"Join a supportive community of learners and professionals."}],
            impact:[
                    {title:"Million +",content:"Students entrolled",icon:"school"},
                    {title:"20 +",content:"Overall Branches",icon:"people"},
                    {title:"1000 +",content:"Students Placed",icon:"man"},
                    {title:"12 +",content:"Year's Experience",icon:"people"}
                  ],
            }
          }
        })


</script>
<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&display=swap');
.roboto-slab {
  font-family: "Roboto Slab", serif;
  font-optical-sizing: auto;
  font-style: normal;
}
.poppins-extralight {
  font-family: "Poppins", sans-serif;
  font-weight: 200;
  font-style: normal;
}
.font-size{
  font-size: 16px;
}
.font-size1{
  font-size: 16px;
}
.text-Style {
  font-size:14.5px;
}
@media screen and (max-width:376px) {
.divCter{
  text-align: center;
}
.font-size1{
  font-size: 15px;
}
}
@media screen and (max-width:321px) {
.divCter{
  text-align: center;
  font-size: 16px;
}
.font-size1{
  font-size: 15px;
}
.roboto-slab {
  font-size:20px;
}
.font-size{
  font-size: 15px;
}
.img-size{
  max-width: 280px;
  max-height:280px;
}
.edit1{
  text-align:center;
}
.edit2{
  width:90%;
  margin-right:auto;
  margin-left: auto;
}
}
@media screen and (max-width:426px) {
  .Heading1{
    text-align: center;
  }
  .edit1{
  text-align:center;
}
}
</style>


