<template>
  <div>
      <!-- general -->
     <v-row v-if="response.person" justify="center" align="end">
        <v-col lg="3" md="6" justify="center" align="center">
            <v-card id="avatar" flat max-width="400" style="border-radius: 50% 50% 0% 50%;">
                <v-img  :src="response.person.picture"></v-img>
            </v-card>
        </v-col>
        <v-col >
            <v-card flat class="text-left pb-6">
                <v-card-title class="text-h4">{{ response.person.name }}</v-card-title>
                <v-card-text> 
                    {{ response.person.description }}
                    <br>
                    {{ response.person.email }}
                    <br>
                    {{ response.person.location }}
                    
                </v-card-text>
                <v-card-actions>
                        <v-btn v-if="!$route.query.hideBar"  prepend-icon="mdi-printer" @click="printPdf">
                        Print PDF
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
    <v-row>
        <v-col lg="3" md="6" justify="center" align="center">
            <!-- education -->
            <person-card title="Education" :response="response.education"></person-card>
        </v-col>
        <v-col>
            
            <!-- work experience -->
            <person-card title="Work Experience" :response="response.work"></person-card>
            <!-- skills -->
            <person-card title="Skills" :response="response.skills"></person-card>
            <!-- projects -->
        </v-col>
    </v-row>
    
  </div>
</template>

<script>
import PersonCard from '../card/PersonCard.vue'
export default {
  components: { PersonCard },
    name: 'PersonTemplate',
    props: {
        responseData: {
            required: true
        }
    },
    data: () => ({
        response: null
    }),
    methods: {
        printPdf() {
            // set url query parameter to hideBar=1
            this.$router.push({ name:"ContactPage", query: { hideBar: 1 } })
            setTimeout(() => {
                window.print()
            }, 1000)
            setTimeout(() => {
                this.$router.push({ name:"ContactPage" })
                
            }, 3000)
        }
    },
    created() {
        this.response = this.responseData
    }

}
</script>

<style>
/* print pdf as portrait and set page size to A4 */
/* set image size to 300px only when printing*/
@media print {
    
    
    @page {
        /* css print options hide headers and footers in print */
        @top-left {
            content: none;
        }
        
        @top-right {
            content: none;
        }
        
        @bottom-left {
            content: none;
        }
        
        @bottom-right {
            content: none;
        }

        size: A4 portrait;
    }
    #avatar {
        margin: 0px;
        padding: 0px;
        width: 250px;
    }
}
.print-pdf {

}

</style>