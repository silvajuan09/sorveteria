<template>
  <HeaderSection />

  <main>
    <router-view />
  </main>
  
  <FooterSection />
</template>

<script>
import FooterSection from './components/FooterSection.vue';
import HeaderSection from './components/HeaderSection.vue';


export default {
  name: 'App',
  components: {
    HeaderSection, 
    FooterSection
  }
}
</script>

