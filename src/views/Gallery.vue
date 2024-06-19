<template>
    <div>
        <h1>Gallery</h1>
        <div v-if="photos.length">
            <div v-for="photo in photos" :key="photo.id">
                <img :style="{ width: '300px', height: '200px', objectFit: 'cover' }" :src="photo.url" :alt="'Photo ' + photo.id">
            </div>
        </div>
        <div v-else>
            <p>No photos uploaded yet.</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            photos: []
        }
    },
    async created() {
        try {
            const accessToken = localStorage.getItem('access_token')

            const config = {
                headers: { Authorization: `Bearer ${accessToken}` },
            };

            console.log("access token: " + accessToken);
            const response = await axios.get('http://localhost:8000/api/photos/', config)
            this.photos = response.data
        } catch (error) {
            console.error(error)
        }
    }
}
</script>