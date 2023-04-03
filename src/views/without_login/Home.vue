<template>
  <div>
    <nav
      class="relative z-50 h-20 select-none sticky top-0 bg-white border-b shadow"
    >
      <div
        class="container relative flex flex-wrap items-center justify-between h-20 mx-auto overflow-hidden font-medium border-gray-200 md:overflow-visible lg:justify-center sm:px-4 md:px-2"
      >
        <div class="flex items-center justify-start w-1/4 h-full pr-4">
          <a href="#home" class="inline-block py-4 md:py-0">
            <span class="p-1 text-xl font-black leading-none text-gray-900"
              ><span>KGU</span><span class="text-indigo-600">.</span></span
            >
          </a>
        </div>
        <div
          class="top-0 left-0 items-start hidden w-full h-full p-4 text-sm bg-gray-900 bg-opacity-50 md:items-center md:w-3/4 md:absolute lg:text-base md:bg-transparent md:p-0 md:relative md:flex"
        >
          <div
            class="flex-col w-full h-auto overflow-hidden bg-white rounded-lg md:bg-transparent md:overflow-visible md:rounded-none md:relative md:flex md:flex-row"
          >
            <router-link
              to="/"
              class="inline-flex items-center block w-auto h-16 px-6 text-xl font-black leading-none text-gray-900 md:hidden"
              >kgu<span class="text-indigo-600">.</span>
            </router-link>
            <div
              class="flex flex-col items-start justify-center w-full text-lg ss text-center md:w-2/3 md:mt-0 md:flex-row md:items-center"
            >
              <a
                @click="toTop"
                class="inline-block cursor-pointer w-full py-2 mx-0 ml-6 font-medium text-left text-indigo-600 md:ml-0 md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center"
                >Ana Sayfa</a
              >
              <a
                href="#whatKGU"
                class="inline-block w-full py-2 mx-0 ml-6 font-medium text-left text-indigo-600 md:ml-0 md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center"
              >
                Özellikler
              </a>

              <a
                href="#contact"
                class="inline-block w-full py-2 mx-0 ml-6 font-medium text-left text-indigo-600 md:ml-0 md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center"
              >
                İletişim
              </a>
            </div>
            <div
              class="flex flex-col items-start justify-end w-full pt-4 md:items-center md:w-1/3 md:flex-row md:py-0"
            >
              <router-link
                to="/giris-yap"
                class="w-full px-6 py-2 mr-0 text-gray-700 md:px-0 lg:pl-2 md:mr-4 lg:mr-5 md:w-auto"
              >
                Giriş Yap
              </router-link>
              <router-link
                to="/kayit-ol"
                class="inline-flex items-center w-full px-6 py-3 text-sm font-medium leading-4 text-white bg-indigo-600 md:px-3 md:w-auto md:rounded-full lg:px-5 hover:bg-indigo-500 focus:outline-none md:focus:ring-2 focus:ring-0 focus:ring-offset-2 focus:ring-indigo-600"
              >
                Kayıt Ol
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- Section 1 -->
    <section class="skewed-bottom-right" id="home">
      <div class="bg-gray-50 pt-12 lg:pt-12 pb-20 bg-gray-100">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap -mx-4">
            <div
              class="w-full lg:w-1/2 px-4 mb-12 md:mb-20 lg:mb-0 flex items-center"
            >
              <div class="w-full text-center lg:text-left">
                <div class="max-w-md mx-auto lg:mx-0">
                  <h2 class="mb-3 text-5xl lg:text-6xl font-bold">
                    <span>Kariyerinizdeki Basamaklarını</span>
                    <span class="text-purple-600"> Hızlıca Çıkın</span>
                  </h2>
                </div>
                <div class="max-w-sm mx-auto lg:mx-0">
                  <p class="mb-6 text-gray-400 leading-relaxed text-lg">
                    KGU, Alanında Uzman İnsanları Bulup Fikir Danışabileceğiniz
                    Bir Kariyer Gelişim Platformudur
                  </p>
                  <div>
                    <router-link
                      class="inline-block mb-3 lg:mb-0 lg:mr-3 w-auto lg:w-auto py-2 px-6 leading-loose bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200"
                      to="/kayit-ol"
                    >
                      Hemen Başlayın
                    </router-link>
                    <a
                      class="inline-block w-full border shadow lg:w-auto py-2 px-6 leading-loose font-semibold bg-white hover:bg-gray-50 rounded-l-xl rounded-t-xl transition duration-200"
                      href="#whatKGU"
                    >
                      Veri Güvenliği
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full lg:w-1/2 px-4 flex items-center justify-center">
              <div class="relative" style="z-index: 0">
                <img
                  src="../../assets/hand.png"
                  class="w-5/6 max-w-lg object-cover mt-8"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 2 -->
    <section
      class="flex items-center justify-center py-10 text-white bg-white sm:py-16 md:py-24 lg:py-64 bg-gray-100"
    >
      <div class="relative max-w-3xl px-10 text-center text-white auto lg:px-0">
        <div class="flex flex-col w-full md:flex-row">
          <!-- Top Text -->
          <div class="flex justify-between">
            <h1
              class="relative flex flex-col text-6xl font-extrabold text-left text-black"
            >
              <span class="text-gray-900">
                <span class="text-indigo-600">K</span><span>endinizi</span>
              </span>
              <span class="text-gray-900">
                <span class="text-indigo-600">G</span><span>eleceğe</span>
              </span>
              <span class="text-gray-900">
                <span class="text-indigo-600">U</span><span>laştırın</span>
              </span>
            </h1>
          </div>
          <!-- Right Image -->
          <div
            class="relative top-0 right-0 h-64 mt-12 md:-mt-16 md:absolute md:h-96"
          >
            <img
              src="../../assets/interface.png"
              alt=""
              class="object-cover pl-12 mr-5 w-9/12 mx-auto"
            />
          </div>
        </div>

        <!-- Separator -->
        <div class="mt-12 border-b border-gray-300 lg:mt-24"></div>

        <!-- Bottom Text -->
        <h2 class="text-left text-gray-500 xl:text-xl mt-8">
          KGU, arayüzü en iyi kullanım deneyimi için optimize edilmiştir.
          Kullanıcılarımızın hiçbir şekilde zorlanmaması için arayüzün
          olabildiğince sade ve işlevsel olarak tasarlanmıştır.
        </h2>
      </div>
    </section>

    <!-- Section 3 -->
    <section class="pb-32 bg-gray-100" id="whatKGU">
      <div
        class="container items-center max-w-6xl px-4 px-10 mx-auto sm:px-20 md:px-32 lg:px-16"
      >
        <div class="flex flex-wrap items-center -mx-3">
          <div class="order-1 w-full px-3 lg:w-1/2 lg:order-0">
            <div class="w-full lg:max-w-md">
              <h2
                class="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading"
              >
                Verileriniz Ortalıklara Dağılmasın
              </h2>
              <p class="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6">
                KGU içerisinde bulunan özel iletişim algoritması sayesinde her
                adımınız sunucularımızda şifreli bir halde tutulmakta ve
                verilerinizi dilediğiniz zaman silebilirsiniz.
              </p>
              <ul>
                <li class="flex items-center py-2 space-x-4 xl:py-3">
                  <svg
                    class="w-8 h-8 text-pink-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    ></path>
                  </svg>
                  <span class="font-medium text-gray-500">
                    Hızlı Sistem ve Akıcı Arayüz
                  </span>
                </li>
                <li class="flex items-center py-2 space-x-4 xl:py-3">
                  <svg
                    class="w-8 h-8 text-yellow-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    ></path>
                  </svg>
                  <span class="font-medium text-gray-500">
                    Harici bir programa ihtiyaç yok
                  </span>
                </li>
                <li class="flex items-center py-2 space-x-4 xl:py-3">
                  <svg
                    class="w-8 h-8 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    ></path>
                  </svg>
                  <span class="font-medium text-gray-500">
                    Testlerden %100 başarılı geçmiş güvenlik duvarı
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div
            class="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0 pb-48"
          >
            <img
              class="mx-auto sm:max-w-sm lg:max-w-full"
              src="../../assets/saly.png"
              alt="feature image"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Section 4 -->
    <section
      class="flex items-center justify-center py-16 pb-52 min-w-screen bg-gray-100"
    >
      <div class="max-w-screen mx-auto">
        <p
          class="text-4xl text-center mb-12 text-indigo-500 font-old leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-3xl"
        >
          KGU Hakkındaki Yorumlar
        </p>
        <div
          class="flex flex-col items-center lg:flex-row justify-center items-center"
        >
          <div class="w-full lg:w-4/12">
            <blockquote
              class="flex items-center justify-between w-full col-span-1 p-6 bg-white rounded-lg shadow"
            >
              <div class="flex flex-col pr-12">
                <div class="relative pl-12">
                  <svg
                    class="absolute left-0 w-10 h-10 text-indigo-500 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 125"
                  >
                    <path
                      d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"
                    ></path>
                  </svg>
                  <p
                    class="mt-2 text-sm text-gray-600 sm:text-base lg:text-same font-bold"
                  >
                    Harika bir ürün 🚀 <br />Dilediğim alandaki uzman insanlara
                    rahatlıkla ulaşabiliryor ve
                  </p>
                </div>

                <h3
                  class="pl-12 mt-3 text-sm font-medium leading-5 text-gray-800 truncate sm:text-base lg:text-sm lg:text-base"
                >
                  Nazlı Gülser
                  <span class="mt-1 text-sm leading-5 text-gray-500 truncate"
                    >- Yazılım Mühendisi</span
                  >
                </h3>
              </div>
              <img
                class="flex-shrink-0 w-24 h-24 bg-gray-300 rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
                alt=""
              />
            </blockquote>
            <blockquote
              class="flex items-center justify-between w-full col-span-1 p-6 mt-4 bg-white rounded-lg shadow"
            >
              <div class="flex flex-col pr-12">
                <div class="relative pl-12">
                  <svg
                    class="absolute left-0 w-10 h-10 text-indigo-500 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 125"
                  >
                    <path
                      d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"
                    ></path>
                  </svg>
                  <p
                    class="mt-2 text-sm text-gray-600 sm:text-base lg:text-same font-bold"
                  >
                    Hayatımdaki en büyük tutku olan eğitim verme işini çok
                    kolaylaştırdığı için KGU'ya minnetarım.
                  </p>
                </div>
                <h3
                  class="pl-12 mt-3 text-sm font-medium leading-5 text-gray-800 truncate sm:text-base lg:text-sm lg:text-base"
                >
                  John Doe
                  <span class="mt-1 text-sm leading-5 text-gray-500 truncate"
                    >- Ressam</span
                  >
                </h3>
                <p class="mt-1 text-sm leading-5 text-gray-500 truncate"></p>
              </div>
              <img
                class="flex-shrink-0 w-24 h-24 bg-gray-300 rounded-full"
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;aauto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
                alt=""
              />
            </blockquote>
            <blockquote
              class="flex items-center justify-between w-full col-span-1 p-6 mt-4 mb-4 bg-white rounded-lg shadow"
            >
              <div class="flex flex-col pr-10">
                <div class="relative pl-12">
                  <svg
                    class="absolute left-0 w-10 h-10 text-indigo-500 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 125"
                  >
                    <path
                      d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"
                    ></path>
                  </svg>
                  <p
                    class="mt-2 text-sm text-gray-600 sm:text-base lg:text-same font-bold"
                  >
                    I can't express enough, how amazing this service has been
                    for my company.
                  </p>
                </div>

                <h3
                  class="pl-12 mt-3 text-sm font-medium leading-5 text-gray-800 truncate sm:text-base lg:text-sm lg:text-base"
                >
                  John Smith
                  <span class="mt-1 text-sm leading-5 text-gray-500 truncate">
                    - CEO RIS Company
                  </span>
                </h3>
                <p class="mt-1 text-sm leading-5 text-gray-500 truncate"></p>
              </div>
              <img
                class="flex-shrink-0 w-24 h-24 bg-gray-300 rounded-full"
                src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rrb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;aauto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
                alt=""
              />
            </blockquote>
            <router-link
              to="/giris-yap"
              class="flex items-center justify-center px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md shadow hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo md:py-4 md:text-lg md:px-10"
            >
              Danışmanları Listele
            </router-link>
          </div>
          <img class="w-2/4 pl-12" src="../../assets/vr.png" alt="" />
        </div>
      </div>
    </section>

    <!-- Section 5 -->
    <section class="w-full px-8 py-16 bg-white xl:px-8" id="contact">
      <div class="max-w-5xl mx-auto">
        <div class="flex flex-col items-center md:flex-row">
          <div class="w-full space-y-5 md:w-3/5 md:pr-16">
            <h2
              class="text-2xl font-extrabold text-blue-500 leading-none text-black sm:text-3xl md:text-5xl"
            >
              Kafanızdaki Soruları Aydınlığa Ulaştırın
            </h2>
            <p class="text-xl text-gray-600 md:pr-16">
              KGU ile ilgili soru veya önerinizi bize gönderebilir, en kısa
              sürede geri dönüş yapılmaktadır.
              <br />
              <span class="text-sm text-gray-400">
                Öneriler karşılığında çeşitli indirimler kazanabilirsiniz.
              </span>
            </p>
          </div>

          <div class="w-full mt-16 md:mt-0 md:w-2/5">
            <div
              class="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7"
            >
              <h3 class="mb-6 text-2xl font-medium text-center">
                Bize Ulaşabilirsiniz 👇🏼
              </h3>
              <input
                type="text"
                class="block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                placeholder="İsim Soyisim"
              />
              <input
                type="email"
                class="block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                placeholder="Email adresiniz"
              />
              <textarea
                class="block w-full px-4 py-2 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                placeholder="Düşünce veya Sorunuz..."
              />
              <div class="block">
                <button
                  class="w-full px-3 py-4 font-medium text-white bg-blue-600 rounded-lg"
                >
                  Gönder
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer";

export default {
  name: "Home",
  methods: {
    toTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  },
  components: {
    Footer,
  },
};
</script>

<style scoped>
p {
  font-family: "Comfortaa", cursive;
}

h2 span,
.ss {
  font-family: -apple-system, "Segoe UI", BlinkMacSystemFont, Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
</style>
