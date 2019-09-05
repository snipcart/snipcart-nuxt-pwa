<template>
  <div class="bio">
    <img v-if="this.$nuxt.$route.name !== 'index'"
      src="~/static/images/chuck.svg"
    />
    <div>
      <p>
        Survival blog edited by
        <strong>Charles Ouellet</strong> from
        <a href="https://snipcart.com">Snipcart</a> who lived for two years in a remote and scary part of central Canada.
      </p>
      <p>It's the guy to trust in case of a zombie apocalypse.</p>
    </div>
  </div>
</template>