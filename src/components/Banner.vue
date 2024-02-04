<template>
    <header class="banner">
        <div class="presentation">
            <img 
                src="../assets/images/logo.svg" 
                alt="Logo do Cookin' Up" 
                class="logo"
            >

            <p class="header-lg phrase-header">
                <span class="text-green">Um banquete de ideias para</span>
                despertar o chef que há em você!
            </p>

            <p class="subtitle-lg">
                Explore novas receitas todos os dias com os ingredientes que 
                estão ao seu alcance!
            </p>
        </div>
        <img 
            class="photo-banner"
            src="../assets/images/women-cooking.png" 
            alt="Foto de uma mulher cozinhando" 
        >
    </header>
</template>

<style scoped>
.banner {
  padding: 4rem 7.5rem;
  color: var(--creme);

  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 3.25rem;
  background-image: url('../assets/images/banner.png');
}

.background {
    position: absolute;
}

.logo {
  height: 4.5rem;
  margin-bottom: 3rem;
}

.phrase-header {
  margin-bottom: 2rem;
}

.text-green {
  color: var(--verde-medio, #3D6D4A);
}

.photo-banner {
  width: 35rem;
}

@media only screen and (max-width: 1300px) {
  .banner {
    padding: 4rem 3.75rem;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .logo {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}

@media only screen and (max-width: 767px) {
  .banner {
    padding: 4rem 1.5rem;
  }

  .photo-banner {
    width: min(100%, 21.25rem);
  }
}
</style>