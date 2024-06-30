import { ca, th } from 'vuetify/locale';
import Environment from '/src/models/interface/Environment';
import Notification from '/src/models/interface/Notification';
export default {
    name: "MainMixin",
    computed: {
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
        },
        $user() {
            return {
                isAuthenticated: this.$env().find('userIsAuthenticated').value,
                email: this.$userEmail,
                username: this.$userName
            }
        }
    },
    methods: {
        $env() {
            return Environment
        },
        $getUserMe(){
            const userEmail = Environment.find('userEmail')
            const userName = Environment.find('userName')
            const userAuthUrl = Environment.find('userAuthUrl')
            const userIsAuthenticated = Environment.find('userIsAuthenticated')
            this.axios.get(userAuthUrl.value).then(
                r => {
                    console.log('user auth', r)
                    Environment.save({ ...userEmail, value: r.data.email })
                    Environment.save({ ...userName, value: r.data.username })
                    Environment.save({ ...userIsAuthenticated, value: true })
                    Notification.save([
                        { id: this.$userName, category: 'success', message: 'Continue with '+this.$userName, active: true },
                    ])
                }
            ).catch(e => {
                console.log('user auth error', e) 
                Notification.save([
                    { id: 'accessDenied', category: 'error', message: 'Access denied', active: true },
                    { id: 'demoUser', category: 'success', message: 'Continue with demo user', active: true },
                ])
            
            })
        },
        $login(user) {
            const userJwt = Environment.find('userJwt')

            const userEmail = Environment.find('userEmail')
            const userName = Environment.find('userName')
            Notification.save([
                { id: 'loginRequest', category: 'warning', message: 'Sending login request', active: true }
            ])
            const jwtTokenUrl = Environment.find('jwtTokenUrl').value
            // axios backend request
            this.axios.post(jwtTokenUrl, user).then(r => {
                Environment.save({ ...userJwt, value: r.data.access })
                console.log('login response', r)
                this.$getUserMe()
                this.$router.push({ name: 'ContactPage' })
            }).catch(e => {
                console.log('login error', e)
                Environment.save({ ...userJwt, value: null })
                Environment.save({ ...userEmail, value: "demo@groupeffect.de" })
                Environment.save({ ...userName, value: "Demo User" })
                Notification.save([
                    { id: 'accessDenied', category: 'error', message: 'Access denied', active: true },
                    { id: 'demoUser', category: 'success', message: 'Continue with demo user', active: true },
                ])
            })

        },
        $logout() {
            const userJwt = Environment.find('userJwt')
            const userIsAuthenticated = Environment.find('userIsAuthenticated')
            // Environment.delete({id: 'userJwt'})
            setTimeout(() => {
                Environment.save({ ...userJwt, value: null })
                Environment.save({ ...userIsAuthenticated, value: false })
            }, 1000);
            this.$router.push({ name: 'LandingPage' })
        },
        $urlFilter(url, filterTag){
            return `${url}?${filterTag.split(',').map(tag => `tags__name=${tag}`).join('&')}`
        },
        $getPictures(filterTag = null) {
            const url = this.$env().find('interfacePicturesUrl').value
            const _url = filterTag && this.$urlFilter(url, filterTag)
            return this.axios.get(_url)
        },

        $getText(filterTag = null) {
            const url = this.$env().find('interfaceTextUrl').value
            const _url = filterTag && this.$urlFilter(url, filterTag)
            return this.axios.get(_url)
        },
        $getCards(filterTag = null) {
            const url = this.$env().find('interfaceCardUrl').value
            const _url = filterTag && this.$urlFilter(url, filterTag)
            console.log('url', url,_url)
            return this.axios.get(_url)
        }
    }
}