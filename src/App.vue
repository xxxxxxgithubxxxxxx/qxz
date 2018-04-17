<template>
  <div id="app">
    <navvar>
    <i class="iconfont icon-category" slot="iconfont" @click="isshow=!isshow"></i>
    </navvar>
    <transition name="fade">
      <sidbar v-show="isshow" @event="isshow=false"></sidbar>
    </transition>
    <footer>
    <router-view></router-view> 
    </footer>
  </div>
</template>

<script>
import navvar from './components/common/navvar';
import sidbar from './components/common/sidbar';
export default {
  data(){
    return{
      name:"aiguo",
      isshow:false
    }
  },
  components:{
    navvar,
    sidbar
  }
}
</script>

<style lang="scss" scoped type="text/css">
/*	html{
		font-size: 31.25vw;
	}*/
  *{
    margin: 0px;	
    padding:0px;
  }
  footer{
    margin-top:0.25rem;
  }
  .fade-enter-active, .fade-leave-active {
    transition: all .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translatex(-0.5rem);
  }
</style>
