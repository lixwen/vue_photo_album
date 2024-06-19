<template>
    <div>
        <h1>Upload Photo</h1>
        <form @submit.prevent="uploadPhoto">
            <input type="file" @change="onFileChange" required>
            <button type="submit">Upload</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            photo: null
        }
    },
    methods: {
        onFileChange(event) {
            this.photo = event.target.files[0]
        },
        async uploadPhoto() {
            if (!this.photo) {
                return
            }
            const formData = new FormData()
            formData.append('image', this.photo)
            console.log("photo: " + this.photo)
            try {
                const accessToken = localStorage.getItem('access_token')

                const config = {
                    headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'multipart/form-data' },
                };

                const response = await axios.post('http://localhost:8000/api/photos/create/', formData, config)
                // Handle upload success
                console.log(response.data)
            } catch (error) {
                console.error(error)
            }
        }
    }
}
</script>