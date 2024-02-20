<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated style="background-color: black;">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          class="lt-md"
        />

        <q-toolbar-title>
          <img alt="img"
      src="../assets/logo.png"
      style=" height:25px;width:100px" class="logo q-mt-md"><br/>
      <span  class=" text-weight-bold text-light " style="font-size: 12px;position:relative;top:-15px">
        <span class="letter">T</span><span style="color:white">raining | </span><span class="letter">p</span><span style="color:white">lacement</span> </span>
      
        </q-toolbar-title>
        <q-tabs align ="right" class=" q-pa-sm text-h5  text-light" v-if="$q.screen.gt.sm" style="font-family: 'Anton', sans-serif;letter-spacing: 1px;" >
        <q-route-tab to="/page1" label="Curriculum"  class=" tab-link hoverEff text-capitalize " />
        <q-route-tab to="/page2" label="Placement"  class=" tab-link hoverEff text-capitalize" />
        <q-route-tab to="/page4" label="Testimonial"  class=" tab-link  hoverEff text-capitalize" />
        
     <q-route-tab to="/page6" label="FAQ"   class=" tab-link  hoverEfftext-capitalize" />
      <button style="color:black;font-size: 16px;background-color:#ffc107;outline:none;border:none;border-radius: 5px;" class="text-dark "><q-icon name ="phone" color="black" size="sm"></q-icon>9087675432</button>
      </q-tabs>
      
        
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Edtex tech
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
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
    link: '#Curriculum'
  },
  {
    title: 'Placement',
   
    icon: 'code',
    link: '#Placement'
  },

  {
    title: 'Testimonial',
 
    icon: 'person',
    link: '#Testimonial'
  },
  {
    title: 'FAQ',
   
    icon: 'record_voice_over',
    link: '#FAQ'
  },
  {
    title: 'Contact us',
   
    icon: 'phone',
    link: '#Contactus'
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
</style>
