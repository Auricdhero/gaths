<template>
  <div>
    <!-- Header -->
    <header id="header" class="alt">
      <div class="logo">
        <Nuxtlink href="/"
          ><img src="~assets/images/logo1.png" height="60px" width="80px" alt="GATHS"
        /></Nuxtlink>
      </div>
      <a href="#menu">Menu</a>
    </header>

    <!-- Nav -->
    <nav id="menu">
      <ul class="links">
        <li><Nuxtlink to="/">Home</Nuxtlink></li>
        <li><Nuxtlink to="/about">About</Nuxtlink></li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {

};
</script>