<template>
<li>
    <h2>{{freind.name}}</h2>
    <button @click="toggleDetails">Show Details</button>
    <ul v-if="detailsVisible">
        <li>Phone: {{friend.phone}}</li>
        <li>E-mail: {{friend.email}}</li>
    </ul>
</li>
</template>


<script>
export default {
    data(){
        return{
            detailsVisble: false, 
            friend:
                 {
                    id: 'manuel', 
                    name: 'manuel lorenz',
                    phone: '123 456 7892',
                    email: 'maunuel@localhost.come'
                },
        }
    },
    methods:{
        toggleDetails(){
            this.detailsVisble = !this.detailsVisble
        }
    }
    
}
</script>

