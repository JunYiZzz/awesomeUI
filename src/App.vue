<template>
  <div class="container">
        <nav>
            <ul>
                <li><router-link to="/input">input</router-link></li>
                <li><router-link to="/icon">icon</router-link></li>
                <li><router-link to="/button">button</router-link></li>
            </ul>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
    @import "../src/styles/index.less";
</style>

<style lang="less" scoped>
nav {
    margin-bottom: 40px;

    ul { display: flex; flex-wrap: wrap; }
    li { display: inline-block; }
    li + li { border-left: solid 1px #bbb; padding-left: 10px; margin-left: 10px; }
}
.container{ padding: 10px 40px 0; }
.v-link-active { color: #bbb; }
</style>
