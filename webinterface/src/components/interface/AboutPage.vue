<template>
    <div>
      <div v-for="(e,k) in bannerTextList" :key="k" >
        <div v-if="bannnerText >= k+1" class="animate__animated animate__backInLeft">
          <div class="text-left d-flex" >
            <h2 class="pl-4 pr-4 pt-4" style="background-color: black;"> <i>{{ e }}</i> </h2>
          </div>
        </div>
      </div>
    </div>
    </template>
    
    <script>
    export default {
        name: 'AboutPage',
        data: () => ({
          bannerTextList: [
            'ABOUT',
            'Groupeffect is a digital agency based in Cologne, Germany.',
            'We offer a wide range of services, from web hosting to business solutions and consulting.',
            'Our team of experts is ready to help you with your digital needs.',
            'Contact us today to learn more.',
          ],
          currentText: 0
        }),
        computed: {
           bannnerText(){
             return this.currentText || null
           }
        },
        methods: {
          animateText(index){
            setTimeout(() => {
              this.currentText += 1
            }, index * 200)        
          }
        },
        created() {
          this.bannerTextList.map((e,k) => {
            this.animateText(k)
          })
        }
    }
    </script>
    
    <style>
    
    </style>