<template>
  <div class="login">
    <div class="body">
      <!-- 登录 -->
      <transition name="slide-left">
        <div
          v-if="mode==='login'"
          class="content left"
        >
          <h2>用户登录</h2>
          <input type="text" placeholder="邮箱">
          <input type="password" placeholder="密码">
          <p class="find-psw" @click="mode='findPsw'">忘记密码?</p>
          <div class="btn sign-in">登录</div>
        </div>
      </transition>
      <!-- 注册 -->
      <transition name="slide-right">
        <div
          v-if="mode==='register'"
          class="content right"
        >
          <h2>用户注册</h2>
          <input type="text" placeholder="邮箱">
          <input type="password" placeholder="密码">
          <input type="password" placeholder="再次输入密码">
          <div class="rand">
            <input type="text" placeholder="验证码">
            <div
              class="get-rand"
              :class="time===0 ? 'ready' : 'wait'"
              @click="getRand"
            >
              {{randBtn}}
            </div>
          </div>
          <div class="btn sign-up">注册</div>
        </div>
      </transition>
      <!-- 找回密码 -->
      <transition name="slide-right">
        <div
          v-if="mode==='findPsw'"
          class="content right"
        >
          <h2>找回密码</h2>
          <input type="text" placeholder="邮箱">
          <input type="password" placeholder="密码">
          <input type="password" placeholder="再次输入密码">
          <div class="rand">
            <input type="text" placeholder="验证码">
            <div
              class="get-rand"
              :class="time===0 ? 'ready' : 'wait'"
              @click="getRand"
            >
              {{randBtn}}
            </div>
          </div>
          <div class="btn sign-up">修改密码</div>
        </div>
      </transition>

      <!-- 覆盖层 -->
      <div
        class="overarea"
        :class="mode!='login' ? 'left' : 'right'"
      >
        <div v-if="mode!='login'">
          <p>已有账号</p>
          <div
            class="change"
            @click="mode='login'"
          >
            点击登录
          </div>
        </div>
        <div v-if="mode==='login'">
          <p>还没有账号</p>
          <div
            class="change"
            @click="mode='register'"
          >
            点击注册
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  var Randinterval
  export default{
    data(){
      return{
        mode : 'login',

        time : 0,
      }
    },
    methods:{
      getRand(){
        if(this.time === 0){
          //发送验证码
          this.time = 10
          Randinterval = setInterval(() => {
            this.time--
          },1000)
        }
      }
    },
    computed:{
      randBtn(){
        if(this.time === 0){
          clearInterval(Randinterval)
          return '获取验证码'
        }
        else{
          if(this.time < 10)
            return `0${this.time}s重新获取`
          else
            return `${this.time}s重新获取`
        }
      }
    },
  }
</script>

<style>
  .login{
    background-color: #f4f4f4;
    height: 100vh;
    width: 100%;
  }

  .login .body{
    position: absolute;
    top: 25%;
    margin: 0 auto;
    height: 350px;
    width: 95%;
    max-width: 900px;
    background-color: #FFFFFF;
    border-radius: 10px;
    box-shadow: 10px 10px 14px rgba(0, 0, 0, 0.15), 0 0 6px rgba(0, 0, 0, 0.1);
    position: relative;
  }

  .login .body .content{
    position: absolute;
    width: 50%;
    height: 100%;
    color: #606266;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .login .body .content h2{
    font-size: 20px;
    color: #303133;
    text-align: center;
  }
  .login .body .content input{
    color: #606266;
    width: 90%;
    margin: 10px 5%;
  }
  .login .body .content .find-psw{
    cursor: pointer;
  }
  .login .body .content .find-psw:hover{
    color: #6830D5;
  }
  .login .body .content .btn{
    margin-top: 10px;
    width: 30%;
    text-align: center;
  }

  /* 验证码 */
  .login .body .content .rand{
    width: 100%;
    display: flex;
    align-items: center;
  }
  .login .body .content .rand input{
    flex: 1;
    margin-right: 0;
  }
  .login .body .content .rand .get-rand{
    margin-right: 5%;
    margin-left: 15px;
    width: 120px;
    height: 35px;
    padding: 7px 0;
    border: 1px solid #DCDFE6;
    border-radius: 5px;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .login .body .content .rand .ready:hover{
    border: none;
    color: #F4F4F4;
    background-color: #6830d5;
    box-shadow: 0 0 5px rgba(64,48,213,0.6),0 0 5px rgba(64,48,213,0.5);
  }
  .login .body .content .rand .wait{
    color: #505050;
    background-color: rgba(197,197,197,0.5);
    cursor: not-allowed;
  }

  .login .body .overarea{
    z-index: 2;
    position: absolute;
    width: 50%;
    height: 100%;
    color: #F4F4F4;
    background-color: #6830D5;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 1s ease-in-out;
  }
  .login .body .overarea .change{
    padding: 5px 10px;
    border: 1px solid #dcdfe6;
    border-radius: 20px;
    margin-top: 10px;
    cursor: pointer;
  }

  /* 切换定位 */
  .login .body .left{
    left: 0;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  .login .body .right{
    left: 50%;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  /* 右滑动 */
  .login .body .slide-right-enter{
    left: 0;
    z-index: 1;
  }
  .login .body .slide-right-enter-to{
    left: 50%;
    z-index: 2;
  }
  .login .body .slide-right-enter-active{
    transition: 1s ease-in-out;
  }
  .login .body .slide-right-leave{
    left: 50%;
    z-index: 2;
  }
  .login .body .slide-right-leave-to{
    left: 0;
    z-index: 1;
  }
  .login .body .slide-right-leave-active{
    transition: 1s ease-in-out;
  }
  /* 左滑动*/
  .login .body .slide-left-enter{
    left: 50%;
    z-index: 1;
  }
  .login .body .slide-left-enter-to{
    left: 0;
    z-index: 2;
  }
  .login .body .slide-left-enter-active{
    transition: 1s ease-in-out;
  }
  .login .body .slide-left-leave{
    left: 0;
    z-index: 2;
  }
  .login .body .slide-left-leave-to{
    left: 50%;
    z-index: 1;
  }
  .login .body .slide-left-leave-active{
    transition: 1s ease-in-out;
  }
</style>
