<template>
    <div class="containers">
        <swiper :modules="modules" :loop="true" :slides-per-view="1" :space-between="0" :speed="1000"
            :autoplay="{ delay: 3000, disableOnInteraction: false }" :navigation="navigation" :slidesPerView="'auto'"
            loopFillGroupWithBlank="true" :pagination="pagination" :centeredSlides="true" class="swiper-container"
            @slideChange="onSlideChange">
            <swiper-slide v-for="(item, i) in state.banner" :key="i">
                <a :href="item.url">
                    <div class="banner_img" :style="{ backgroundImage: `url(${item.url})` }"> </div>
                </a>
            </swiper-slide>
            <img ref="prevRef" class="leftArrow w-12px h-24px" :src="state.LeftArrow" />
            <img ref="nextRef" class="rightArrow w-28px h-52px" :src="state.RightArrow" />
        </swiper>
    </div>
</template>

<script>
import { ref, reactive, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules'
import 'swiper/css'
import axios from 'axios'
import LeftArrow from '../assets/image/long-left-arrow.svg'
import RightArrow from '../assets/image/right-arrow.svg'
import Swal from 'sweetalert2';

export default {
    name: 'Home',
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const state = reactive({
            LeftArrow: LeftArrow,
            RightArrow: RightArrow,
            banner: [],
        })

        const navigation = ref({
            prevEl: '.leftArrow',
            nextEl: '.rightArrow',
        })

        const pagination = ref({
            el: '.swiper-pagination',
            clickable: true, // 允许分页点击跳转
        })

        const modules = [Autoplay, Pagination, Navigation, Scrollbar]

        const onSlideChange = () => {
            console.log('slide changed')
        }

        onMounted(async () => {
            try {
                const accessToken = localStorage.getItem('access_token')

                const config = {
                    headers: { Authorization: `Bearer ${accessToken}` },
                };

                console.log("access token: " + accessToken);
                const response = await axios.get('http://localhost:8000/api/photos/', config)
                state.banner = response.data
            } catch (error) {
                console.error('Failed to fetch banners:', error)
                // 处理错误
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!' + error.message,
                })
            }
        })

        return {
            state,
            navigation,
            pagination,
            modules,
            onSlideChange,
        }
    },
}
</script>

<style scoped>
.containers {
    width: 100%;
    overflow: hidden !important;
    display: flex;
    justify-content: center;
    position: relative;
}

.swiper-container {
    overflow: visible !important;
    width: 1200px;
    height: 550px;
    position: relative;
}

.banner_img {
    width: 1200px;
    background-size: 100%, 100%;
    height: 5500px;
}

.leftArrow {
    position: absolute;
    top: 45%;
    left: 0px;
    z-index: 1000;
    cursor: pointer;
}

.rightArrow {
    position: absolute;
    top: 45%;
    right: 0px;
    z-index: 1000;
    cursor: pointer;
}

:deep(.swiper-pagination) {
    bottom: 20px;
}

:deep(.swiper-pagination-bullet) {
    border: solid 1px #999;
    margin: 0 6px;
}

:deep(.swiper-pagination-bullet-active) {
    background: #4d4d4d;
}

:deep(.swiper-pagination-bullet:hover) {
    background: #4d4d4d;
    opacity: 0.6;
}
</style>