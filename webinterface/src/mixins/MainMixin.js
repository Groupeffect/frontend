import Environment from '/src/models/interface/Environment';
import Notification from '/src/models/interface/Notification';
export default {
    name: "MainMixin",
    computed:{
        $environment() {
            return Environment.all() || null
        },
        $interfaceName() {
            return Environment.find('interfaceName').value || 'Our Page'
        },
        $activeUser() {
            return this.$env().find('userJwt').value
        },
        $userEmail() {
            return this.$env().find('userEmail').value
        },
        $userName() {
            return this.$env().find('userName').value || 'please set your username'
        },
        $notifications() {
            return Notification.all() || []
        }
    },
    methods: {
        $env(){
            return Environment
        },

        $login(user){
            const userJwt = Environment.find('userJwt')
            const userEmail = Environment.find('userEmail')
            Notification.save([
                {id: 'loginRequest', category: 'warning', message: 'Sending login request', active: true}
            ])
            // axios backend request
            setTimeout(() => {
                // todo
                Environment.save({...userJwt, value: user.password})
                Environment.save({...userEmail, value: user.email})
                Notification.save([
                    {id: 'accessDenied', category: 'error', message: 'Access denied', active: true},
                    {id: 'demoUser', category: 'success', message: 'Continue with demo user', active: true},
                ])
            }, 1000);
            // catch axios response
            setTimeout(() => {
                Notification.flush()
            }, 5000);
        },
        $logout(){
            const userJwt = Environment.find('userJwt')
            // Environment.delete({id: 'userJwt'})
            setTimeout(() => {
                Environment.save({...userJwt, value: null})
            }, 1000);
            this.$router.push({name: 'LandingPage'})
        }
    }
}