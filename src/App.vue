<template>

    <div id="app">

        <div class="header">

            <div class="header-menu">

                <img class="header-menu-logo" src="/images/wapa-logo.png" />

                <ul class="header-menu-list">
                    <li><router-link to="/">About me</router-link></li>
                    <li><router-link to="/works">My Works</router-link></li>            
                    <li><router-link to="/news">News</router-link></li>
                    <li><router-link to="/tools">Tools</router-link></li>
                </ul>

            <div class="copyright">Created by Wapakalypse on Vue-CLI.</div>

            </div>

            <span class="toggle">&#9660;</span>    

        </div>

        <div class="main-content">

            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>

        </div>

        <div class="footer">


        </div>

    </div>

</template>

<script>
    export default {
      name: 'App'
    }
</script>

<style>

@font-face {
    font-family:'Roboto';
    src: local('Roboto'),
    url(/fonts/Roboto.ttf);
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family:'RobotoLight';
    src: local('RobotoLight'),
    url(/fonts/Robotolight.ttf);
    font-weight: normal;
    font-style: normal;
}

* {
    font-family:'RobotoLight';
    margin: 0;
    border: 0;
    padding: 0;
}

body {
    background: radial-gradient(#92e9ff, #006ebb);
    background-size: 100%;
    background-attachment: fixed;
}

h1 {
    font-family:'Roboto';
    font-size: 40pt;
    font-weight: 300;
    margin: 3rem 0;
    color: #e4e4e4;
    text-align: center;
    text-shadow: 1px 1px 10px #014398;
}

h2 {
    font-family:'Roboto';
    font-size: 24pt;
    font-weight: 300;
    margin: 1rem 0;
}

strong {
    font-family:'Roboto';
}

a {
  text-decoration: none;
}

a .fa {
    font-size: 40pt;
    color: #3568aa;
    padding: 20px;
    transition: 0.5s;
}

a .fa:hover {
    color: #6997d2;
    transition: 0.5s;
}

hr {
    background-color: #a4b8d0;
    height: 1px;
    margin: 1em 0 1.5em 0;
}
#app {

}

.header {
    position: fixed;
    display: flex;
    justify-content: center;
    background: rgba(255, 255, 255, 0.7);
    width: 100%;
    height: 40px;
    border-radius: 0 0 50% 50%;
    transition: 1s .3s;
    z-index: 999;
}

.header:hover {
    height: 140px;
    background: rgba(255, 255, 255, 0.9);
    transition: 1s;
}

.header-menu {
    width: 100%;
    opacity: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 2rem;
    transition: .5s .3s;
}

.header-menu-logo {
    width: 50px;
    padding: 1rem;
}

.header-menu-list {
    display: flex;
    list-style-type: none;
    width: auto;
    justify-content: flex-end;
    align-items: center;
}

.header-menu-list a {
    margin: 2rem;
    color: #3568aa;
    transition: .5s;
    font-size: 18pt;
}

.header-menu-list a:hover {
    color: #a4b8d0;
    transition: .5s;
}

.header:hover .header-menu {
    opacity: 1;
    transition: .5s .5s;
}

.toggle {
    position: absolute;
    padding: .5% 2%;
    opacity: 1;
    color: #3568aa;
    font-size: 15pt;
    transition: .5s .5s;
}

.header:hover .toggle {
    opacity: 0;
    transition: .5s;
}

.main-content {
    width: 800px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
}

.content {
    width: 100%;
}

.footer {
}

.copyright {
    position: absolute;
    right: 5px;
    padding: 1%;
    color: #999;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .7s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
