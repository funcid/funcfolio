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

    let selectedPhotoIndex: number | null = null;

    function nextPhoto() {
        if (selectedPhotoIndex !== null) {
            selectedPhotoIndex = (selectedPhotoIndex + 1) % photos.length;
        }
    }

    function prevPhoto() {
        if (selectedPhotoIndex !== null) {
            selectedPhotoIndex = (selectedPhotoIndex - 1 + photos.length) % photos.length;
        }
    }

    function handleKeydown(event: KeyboardEvent) {
        if (selectedPhotoIndex === null) return;
        
        if (event.key === 'ArrowRight') {
            nextPhoto();
        } else if (event.key === 'ArrowLeft') {
            prevPhoto();
        } else if (event.key === 'Escape') {
            selectedPhotoIndex = null;
        }
    }
</script>

<svelte:window on:keydown={handleKeydown}/>

<div class="fixed inset-0 z-50 bg-white overflow-y-auto overscroll-contain animate-fade-in">
    <!-- Шапка -->
    <div class="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-black/5">
        <div class="max-w-[1440rem] mx-auto px-[20rem] lg:px-[80rem] h-[80rem] flex items-center justify-between">
            <h2 class="text-[48rem] lg:text-[42rem] font-bold font-oddval">{story.title}</h2>
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
            <!-- Фотографии -->
            {#if photos.length > 0}
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[15rem] lg:gap-[20rem]">
                    {#each photos as photo, i}
                        <div 
                            class="aspect-square rounded-[30rem] overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                            on:click={() => selectedPhotoIndex = i}
                        >
                            <img 
                                src={photo} 
                                alt="Travel photo"
                                class="w-full h-full object-cover"
                            />
                        </div>
                    {/each}
                </div>
            {/if}

            <!-- Информация о путешествии -->
            <div class="flex flex-col gap-[20rem]">
                <div class="flex flex-wrap gap-[20rem] text-[32rem] lg:text-[24rem] font-onest">
                    <span>{story.date}</span>
                    <span class="opacity-30">•</span>
                    <span>{story.duration}</span>
                </div>
            </div>

            <!-- Дни -->
            <div class="flex flex-col gap-[40rem] lg:gap-[60rem]">
                {#each story.days as day}
                    <div class="flex flex-col gap-[20rem]">
                        <h3 class="text-[36rem] lg:text-[32rem] font-bold font-oddval">{day.title}</h3>
                        <div class="flex flex-col gap-[12rem]">
                            {#each day.activities as activity}
                                <p class="text-[28rem] lg:text-[22rem] font-onest">{activity}</p>
                            {/each}
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>

    <!-- Модальное окно для просмотра фото -->
    {#if selectedPhotoIndex !== null}
        <div class="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center">
            <button 
                class="absolute top-[20rem] right-[20rem] text-white p-[15rem] hover:bg-white/10 rounded-full transition-colors"
                on:click={() => selectedPhotoIndex = null}
            >
                <svg class="w-[32rem] h-[32rem]" viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </button>

            <button 
                class="absolute left-[20rem] top-1/2 -translate-y-1/2 text-white p-[15rem] hover:bg-white/10 rounded-full transition-colors"
                on:click={prevPhoto}
            >
                <svg class="w-[32rem] h-[32rem]" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </button>

            <img 
                src={photos[selectedPhotoIndex]} 
                alt="Travel photo"
                class="max-h-[90vh] max-w-[90vw] object-contain"
            />

            <button 
                class="absolute right-[20rem] top-1/2 -translate-y-1/2 text-white p-[15rem] hover:bg-white/10 rounded-full transition-colors"
                on:click={nextPhoto}
            >
                <svg class="w-[32rem] h-[32rem]" viewBox="0 0 24 24" fill="none">
                    <path d="M9 6L15 12L9 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </button>
        </div>
    {/if}
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