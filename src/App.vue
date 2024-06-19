<template>
  <div id="app">
    <div class="navbar">
      <Sidebar />
      <div class="auth-buttons">
        <el-button type="primary" @click="showLoginDialog">Login</el-button>
        <el-button type="success" @click="showRegisterDialog">Register</el-button>
      </div>
    </div>

    <div class="main-content">
      <router-view></router-view>
    </div>

    <!-- Login Dialog Component -->
    <LoginDialog v-model="isLoginDialogVisible" />

    <!-- Register Dialog Component -->
    <RegisterDialog v-model="isRegisterDialogVisible" />

  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import LoginDialog from './views/LoginDialog.vue';
import RegisterDialog from './views/RegisterDialog.vue';
import { ref } from 'vue';



export default {
  name: 'App',
  components: {
    Sidebar,
    LoginDialog,
    RegisterDialog
  },
  setup() {
    const isLoginDialogVisible = ref(false);

    const showLoginDialog = () => {
      isLoginDialogVisible.value = true;
    };

    const isRegisterDialogVisible = ref(false);

    const showRegisterDialog = () => {
      isRegisterDialogVisible.value = true;
    };


    return {
      isLoginDialogVisible,
      showLoginDialog,
      isRegisterDialogVisible,
      showRegisterDialog
    };
  },

}
</script>
<style>
#app {
  display: flex;
  flex-direction: column;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 0 20px;
}

.auth-buttons {
  display: flex;
  gap: 10px;
}

.main-content {
  flex-grow: 1;
  padding: 20px;
}
</style>