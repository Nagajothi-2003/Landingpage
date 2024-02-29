<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="" style="background-color: #4b0dba;">
      <q-toolbar>
        <q-btn
         
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          class="lt-md"
        />

        <q-toolbar-title>
          <div class="image-container"><q-img src="../assets/logo2.png"  class="rounded-image"></q-img><span class="text-h5 text-bold gt-sm q-ma-sm"> Edex Tech</span></div>
        </q-toolbar-title>

        <q-tabs align ="right" class=" q-pa-sm text-h5  text-light" v-if="$q.screen.gt.sm" style="font-family: 'Anton', sans-serif;letter-spacing: 1px;" >
            <q-route-tab to="" label="Curriculum"  class=" tab-link hoverEff text-capitalize " @click="scrollToSection('curriculum')" />
            <q-route-tab to="" label="Placement"  class=" tab-link hoverEff text-capitalize" @click="scrollToSection('placement')" />
            <q-route-tab to="" label="Testimonial"  class=" tab-link  hoverEff text-capitalize"  @click="scrollToSection('testimonial')"/>
            <q-route-tab to="" label="FAQ"   class=" tab-link  hoverEfftext-capitalize" @click="scrollToSection('faq')" />
            <button style="color:black;font-size: 16px;background-color:#ffc107;outline:none;border:none;border-radius: 5px;" class="text-dark "><q-icon name ="phone" color="black" size="sm"></q-icon>8055224403</button>
        </q-tabs>
      
        
      </q-toolbar>
    </q-header>

    <q-drawer  v-model="leftDrawerOpen" bordered >
      <q-list>
        <q-item-label header>
         <div class="text-bold text-h5">Edex Tech</div>
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link" />
      </q-list>
    </q-drawer>
   

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Curriculum',
    icon: 'school',
    link: ' '
  },
  {
    title: 'Placement',
    icon: 'code',
    link: ''
  },

  {
    title: 'Testimonial',
    icon: 'person',
    link: ''
  },
  {
    title: 'FAQ',
    icon: 'record_voice_over',
    link: ''
  },
  {
    title: 'Contact us',
    icon: 'phone',
    link: ''
  }
  
  
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },
  methods:{
    scrollToSection(sectionid){
        const section = document.getElementById(sectionid);
        if(section){
          window.scrollTo({
            top:section.offsetTop,
            behavior:'smooth'
          });
        }
    }
  }
})
</script>
<style scoped>
.logo
  {
    border:4px solid #ffc107;
    background-color: rgb(239, 239, 23);
    border-radius: 5px;
  }
  .letter{
  color:  #ffc107;
  font-size: 20px;
  }
  .tab-link {
    position: relative;
    padding-bottom: 10px; 
  }
  
  .tab-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    background-color: transparent; /* Initially transparent */
    width: 0;
    transition: width 0.3s ease;
  }
  
  .tab-link:hover::after {
    width: 100%;
    background-color: #ffc107; 
    /* Adjust the color as needed */
   
  }
  .hoverEff:hover{
    color:#ffc107;
    /* font-weight: 900; */
    /* font-size: 15px; */
  }

.Hover-Effect:focus{
  background-color: white;
}
.text-dark{
  color:black;
}
.image-container {
  display: flex;
  margin: 10px;
  align-items: center;
  /* height: 100%; 
  width:50%;
  Ensure the container takes the full height */
}
.rounded-image {
border-radius: 50%;
  height:50px;
  width:50px;
}
</style>
