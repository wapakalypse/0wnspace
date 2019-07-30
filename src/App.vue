<template>

    <div id="app">

        <div class="header">

            <div class="header-menu">

                <img class="header-menu-logo" src="/images/wapa-logo.png" />

                <ul class="header-menu-list">
                    <li><router-link to="/news">News</router-link></li>
                    <li><router-link to="/tools">Tools</router-link></li>
                    <li><router-link to="/">About me</router-link></li>
                </ul>

            </div>

            <span class="toggle">&#9660;</span>    

        </div>

        <div class="content">

            <router-view/>

        </div>

        <div class="copyright">Created by Wapakalypse by Vue-CLI.</div>

    </div>

</template>

<script>
    export default {
      name: 'App'
    }
</script>

<style>

@font-face {
    font-family:'Abel';
    src: local('Abel'),
    url(/fonts/Abel-Regular.ttf);
    font-weight: normal;
    font-style: normal;
}

* {
    font-family: 'Abel';
    margin: 0;
    border: 0;
    padding: 0;
}

body {
    background-image: url(/images/fon.jpg);
}

h1 {
  font-size: 36pt;
  font-weight: 300;
  margin: 3rem 0;
}

h2 {
  font-size: 28pt;
  font-weight: 300;
  margin: 1rem 0;
}

a {
  text-decoration: none;
}

a .fa {
    font-size: 40pt;
    color: #fcff71;
    padding: 20px;
  transition: 0.5s;
}

a .fa:hover {
    color: #fff;
  transition: 0.5s;
}

hr {
    background-color: #a4b8d0;
    height: 1px;
    margin: 1em 0 1.5em 0;
}

.header {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.9);
    width: 100%;
    height: 15px;
    transition: 1s;
    text-align: left;
}

.header:hover {
    height: 75px;
    transition: 1s;
}

.header-menu {
    width: 100%;
    opacity: 0;
    display: flex;
    padding: 0 2rem;
}

.header-menu-logo {
    width: 50px;
    padding: 1rem;
}

.header-menu-list {
    display: flex;
    list-style-type: none;
    width: 100%;
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
    left: 0;
    transition: all 0s 0.1s;
}

.header:hover .header-menu {
    opacity: 1;
    transition: all 0.5s 0.5s;
}

.toggle {
    position: absolute;
    padding: 0 2%;
    opacity: 1;
    transition: 0.5s;
    color: #3568aa;
}

.header:hover .toggle {
    opacity: 0;
}

.content {
    width: 1200px;
    margin: 0 auto;
    padding: 3rem 0 0 0;
    display: flex;
    align-items: center;
    justify-content: center;

}

.copyright {
    text-align: right;
    font-size: 14pt;
    padding: 1rem;
}
</style>
