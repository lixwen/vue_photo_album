<template>
    <el-dialog title="用户注册" :visible="isRegisterDialogVisible" width="30%" @close="handleClose">
        <el-form :model="form">
            <el-form-item label="用户名" :label-width="formLabelWidth">
                <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" :label-width="formLabelWidth">
                <el-input type="password" v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" :label-width="formLabelWidth">
                <el-input type="email" v-model="form.email"></el-input>
            </el-form-item>
        </el-form>
        <template #footer>
            <el-button @click="handleClose">取消</el-button>
            <el-button type="primary" @click="register">注册</el-button>
        </template>
    </el-dialog>
</template>

<script>
import axios from 'axios'

export default {
    name: 'RegisterDialog',
    props: {
        isRegisterDialogVisible: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            form: {
                username: '',
                password: '',
                email: '',
            },
            formLabelWidth: '80px',
        };
    },
    methods: {
        handleClose() {
            this.$emit('update:modelValue', false);
        },
        async register() {
            console.log('注册信息:', this.form);
            try {
                const response = await axios.post('http://localhost:8000/api/register/', {
                    username: this.form.username,
                    email: this.form.email,
                    password: this.form.password
                })
                // Handle registration success (e.g., redirect to login)
                console.log(response.data)
            } catch (error) {
                console.error(error)
            }

            this.handleClose();
        }
    }
};
</script>

<style scoped>
.dialog-footer {
    text-align: right;
}
</style>