<script lang="ts">
    import SkeletonLoader from './SkeletonLoader.svelte';
    import { onMount } from 'svelte';

    export let story: {
        title: string;
        date?: string;
        duration?: string;
        days?: {
            title: string;
            activities: string[];
        }[];
    };
    export let photos: string[] = [];
    export let onClose: () => void;

    let loadedImages: Set<string> = new Set();
    let selectedImage: string | null = null;
    let isPhotoOnly = !story.days || story.days.length === 0;

    function handleImageLoad(photo: string) {
        loadedImages = loadedImages.add(photo);
    }

    function handleImageClick(photo: string) {
        selectedImage = photo;
    }

    function closeFullscreen() {
        selectedImage = null;
    }

    onMount(() => {
        // Предзагрузка всех фотографий
        photos.forEach(photo => {
            const img = new Image();
            img.src = photo;
            img.onload = () => handleImageLoad(photo);
        });
    });
</script>

<div class="fixed inset-0 z-50 flex flex-col bg-white animate-fade-in">
    <!-- Шапка -->
    <div class="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-black/5">
        <div class="max-w-[1440rem] mx-auto px-[20rem] lg:px-[80rem] h-[80rem] flex items-center justify-between">
            <div class="flex flex-col">
                <h2 class="text-[48rem] lg:text-[42rem] font-bold font-oddval">{story.title}</h2>
                {#if story.date}
                    <p class="text-[24rem] lg:text-[18rem] font-onest opacity-60">{story.date}</p>
                {/if}
            </div>
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

    <!-- Прокручиваемый контейнер -->
    <div class="flex-1 overflow-y-auto">
        <div class="max-w-[1440rem] mx-auto px-[20rem] lg:px-[80rem] py-[40rem] lg:py-[60rem]">
            <div class="flex flex-col gap-[60rem] lg:gap-[100rem] pb-[100rem]">
                <!-- Фотографии -->
                {#if photos.length > 0}
                    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[15rem] lg:gap-[20rem] {isPhotoOnly ? 'mt-0' : ''}">
                        {#each photos as photo}
                            <div 
                                class="aspect-square rounded-[30rem] overflow-hidden cursor-pointer relative"
                                on:click={() => handleImageClick(photo)}
                            >
                                {#if !loadedImages.has(photo)}
                                    <SkeletonLoader height="100%" borderRadius="30rem" />
                                {/if}
                                <img 
                                    src={photo} 
                                    alt="Travel photo"
                                    class="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                                    class:opacity-0={!loadedImages.has(photo)}
                                    loading="eager"
                                />
                            </div>
                        {/each}
                    </div>
                {/if}

                <!-- Информация о путешествии -->
                {#if !isPhotoOnly && (story.date || story.duration)}
                    <div class="flex flex-col gap-[20rem]">
                        <div class="flex flex-wrap gap-[20rem] text-[32rem] lg:text-[24rem] font-onest">
                            {#if story.date}
                                <span>{story.date}</span>
                            {/if}
                            {#if story.date && story.duration}
                                <span class="opacity-30">•</span>
                            {/if}
                            {#if story.duration}
                                <span>{story.duration}</span>
                            {/if}
                        </div>
                    </div>
                {/if}

                <!-- Дни -->
                {#if story.days && story.days.length > 0}
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
                {/if}
            </div>
        </div>
    </div>
</div>

<!-- Полноэкранный просмотр фото -->
{#if selectedImage}
    <div 
        class="fixed inset-0 z-[60] bg-black/95 backdrop-blur-md flex items-center justify-center cursor-pointer"
        on:click={closeFullscreen}
    >
        <img 
            src={selectedImage} 
            alt="Full screen photo"
            class="max-w-[90%] max-h-[90vh] object-contain"
            loading="eager"
        />
    </div>
{/if}

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

    img {
        transition: all 0.3s ease-in-out;
    }
    
    .opacity-0 {
        opacity: 0;
    }
</style> 