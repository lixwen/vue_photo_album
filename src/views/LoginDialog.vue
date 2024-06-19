<template>
    <el-dialog title="登录" :visible="isLoginDialogVisible" width="30%" @close="handleClose">
        <el-form :model="form">
            <el-form-item label="用户名" :label-width="formLabelWidth">
                <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" :label-width="formLabelWidth">
                <el-input type="password" v-model="form.password"></el-input>
            </el-form-item>
        </el-form>
        <template #footer>
            <el-button @click="handleClose">取消</el-button>
            <el-button type="primary" @click="handleLogin">登录</el-button>
        </template>
    </el-dialog>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2';

export default {
    name: 'LoginDialog',
    props: {
        isLoginDialogVisible: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {
            form: {
                username: '',
                password: '',
            },
            formLabelWidth: '80px',
        };
    },
    methods: {
        handleClose() {
            this.$emit('update:modelValue', false);
        },
        handleLogin() {
            // 执行登录操作，例如调用 API
            console.log('登录信息:', this.form);
            this.login();
            this.handleClose();
        },
        async login() {
            try {
                const response = await axios.post('http://localhost:8000/api/login/', {
                    username: this.form.username,
                    password: this.form.password
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
    },
};
</script>

<style scoped>
.dialog-footer {
    text-align: right;
}
</style>