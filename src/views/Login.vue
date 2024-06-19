<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="login">
            <input v-model="username" type="text" placeholder="Username" required>
            <input v-model="password" type="password" placeholder="Password" required>
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2';

export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {

        async login() {
            try {
                const response = await axios.post('http://localhost:8000/api/login/', {
                    username: this.username,
                    password: this.password
                })
                // Handle login success (e.g., store token, redirect)
                console.log(response.data)
                localStorage.setItem('access_token', response.data.token)
                this.$router.push('/gallery')
            } catch (error) {
                console.error(error)
                // 弹窗
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.message,
                })
            }
        }
    } ,
    

}
</script>