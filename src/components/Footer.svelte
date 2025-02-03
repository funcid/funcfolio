<script lang="ts">
    import { page } from '$app/stores';
    const currentYear = new Date().getFullYear();
</script>

<footer class="w-full py-[40rem] lg:py-[30rem] relative">
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white/10 backdrop-blur-[2px]"></div>
    
    <div class="container mx-auto px-[30rem] lg:px-[20rem] relative">
        <div class="flex flex-col md:flex-row items-center justify-between gap-[20rem] md:gap-[40rem]">
            <!-- Основная информация -->
            <div class="flex items-center gap-[15rem] text-[32rem] lg:text-[24rem] font-onest text-black/60">
                <span>{$page.url.host}</span>
                <span class="w-[6rem] h-[6rem] rounded-full bg-black/20"></span>
                <span>{currentYear}</span>
            </div>

            <!-- Дизайнер -->
            <a 
                href="https://t.me/ONE1SIDEDESIGN" 
                target="_blank" 
                rel="noopener noreferrer"
                class="group flex items-center gap-[15rem] text-[32rem] lg:text-[24rem] font-onest"
            >
                <span class="text-black/60 group-hover:text-black/80 transition-colors duration-300">
                    Дизайнер сайта
                </span>
                <div class="w-[40rem] h-[40rem] lg:w-[32rem] lg:h-[32rem] rounded-full bg-black/5 p-[8rem] group-hover:bg-black/10 transition-all duration-300 group-hover:scale-110">
                    <svg viewBox="0 0 24 24" class="w-full h-full text-black/60 group-hover:text-black/80">
                        <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.568 6.16c-.18.89-.96 4.504-1.356 6.628-.168.9-.504 1.2-.816 1.236-.696.06-1.224-.456-1.896-.9-1.056-.696-1.656-1.128-2.676-1.8-1.188-.78-.42-1.212.264-1.908.18-.18 3.252-2.976 3.312-3.228a.24.24 0 0 0-.06-.216c-.072-.06-.168-.036-.252-.024-.108.024-1.788 1.14-5.064 3.348-.48.324-.912.492-1.296.48-.432-.012-1.248-.24-1.86-.444-.756-.24-1.344-.372-1.296-.792.024-.216.324-.432.888-.66 3.504-1.524 5.832-2.532 6.996-3.012 3.336-1.392 4.02-1.632 4.476-1.632.096 0 .324.024.468.144.12.096.156.228.168.324-.012.072.012.288 0 .324z"/>
                    </svg>
                </div>
            </a>
        </div>
    </div>

    <!-- Декоративная линия -->
    <div class="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-black/10 to-transparent"></div>
</footer>

<style>
    footer {
        transform: translateZ(0);
    }
</style>