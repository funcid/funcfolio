<script lang="ts">
    export let story: {
        title: string;
        date: string;
        duration: string;
        days: {
            title: string;
            activities: string[];
        }[];
    };
    export let photos: string[];
    export let onClose: () => void;
</script>

<div class="fixed inset-0 z-50 bg-white overflow-y-auto overscroll-contain animate-fade-in">
    <!-- Шапка -->
    <div class="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-black/5">
        <div class="max-w-[1440rem] mx-auto px-[20rem] lg:px-[80rem] h-[80rem] flex items-center justify-between">
            <h2 class="text-[32rem] lg:text-[42rem] font-bold font-oddval">{story.title}</h2>
            <button 
                on:click={onClose}
                class="w-[50rem] h-[50rem] flex items-center justify-center rounded-full hover:bg-black/5 transition-colors"
            >
                <svg class="w-[24rem] h-[24rem]" viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
    </div>

    <!-- Контент -->
    <div class="max-w-[1440rem] mx-auto px-[20rem] lg:px-[80rem] py-[40rem] lg:py-[60rem]">
        <div class="flex flex-col gap-[60rem] lg:gap-[100rem]">
            <!-- Информация о путешествии -->
            <div class="flex flex-col gap-[20rem]">
                <div class="flex flex-wrap gap-[20rem] text-[20rem] lg:text-[24rem] font-onest">
                    <span>{story.date}</span>
                    <span class="opacity-30">•</span>
                    <span>{story.duration}</span>
                </div>
            </div>

            <!-- Дни -->
            <div class="flex flex-col gap-[40rem] lg:gap-[60rem]">
                {#each story.days as day}
                    <div class="flex flex-col gap-[20rem]">
                        <h3 class="text-[24rem] lg:text-[32rem] font-bold font-oddval">{day.title}</h3>
                        <div class="flex flex-col gap-[12rem]">
                            {#each day.activities as activity}
                                <p class="text-[18rem] lg:text-[22rem] font-onest">{activity}</p>
                            {/each}
                        </div>
                    </div>
                {/each}
            </div>

            <!-- Фотографии -->
            {#if photos.length > 0}
                <div class="flex flex-col gap-[30rem]">
                    <h3 class="text-[24rem] lg:text-[32rem] font-bold font-oddval">Фотографии</h3>
                    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[15rem] lg:gap-[20rem]">
                        {#each photos as photo}
                            <div class="aspect-square rounded-[30rem] overflow-hidden">
                                <img 
                                    src={photo} 
                                    alt="Travel photo"
                                    class="w-full h-full object-cover"
                                />
                            </div>
                        {/each}
                    </div>
                </div>
            {/if}
        </div>
    </div>
</div>

<style>
    /* Удаляем блокировку прокрутки */
    /* :global(body) {
        overflow: hidden;
    } */

    /* Добавляем анимацию появления */
    @keyframes fade-in {
        from {
            opacity: 0;
            transform: translateY(20rem);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .animate-fade-in {
        animation: fade-in 0.3s ease-out forwards;
    }

    /* Стилизация скроллбара */
    ::-webkit-scrollbar {
        width: 8rem;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: #E5E7EB;
        border-radius: 4rem;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #D1D5DB;
    }
</style> 