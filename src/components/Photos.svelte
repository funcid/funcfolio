<script lang="ts">
    import { onMount } from 'svelte';
    import TravelStory from './TravelStory.svelte';

    interface Photo {
        url: string;
        title: string;
        description: string;
        date: string;
        album?: string;
        story?: {
            title: string;
            date: string;
            duration: string;
            days: {
                title: string;
                activities: string[];
            }[];
        };
    }

    interface Category {
        title: string;
        photos: Photo[];
    }

    let selectedStory: Photo['story'] | null = null;
    let albumPhotos: string[] = [];

    // Импорт фотографий для каждого альбома
    const thailandPhotos = Object.entries(import.meta.glob('/static/photos/thailand/*.webp', { eager: true }))
        .map(([path]) => path.replace('/static', ''));
    const dubaiPhotos = Object.entries(import.meta.glob('/static/photos/dubai/*.webp', { eager: true }))
        .map(([path]) => path.replace('/static', ''));
    const gelendzhikPhotos = Object.entries(import.meta.glob('/static/photos/gelendzhik/*.webp', { eager: true }))
        .map(([path]) => path.replace('/static', ''));
    const japanPhotos = Object.entries(import.meta.glob('/static/photos/japan/*.webp', { eager: true }))
        .map(([path]) => path.replace('/static', ''));
    const otherPhotos = Object.entries(import.meta.glob('/static/photos/other/*.webp', { eager: true }))
        .map(([path]) => path.replace('/static', ''));

    const albums = {
        thailand: thailandPhotos,
        dubai: dubaiPhotos,
        gelendzhik: gelendzhikPhotos,
        japan: japanPhotos,
        other: otherPhotos
    };

    // Выбор случайной фотографии из альбома
    const getRandomPhoto = (albumPhotos: string[]) => 
        albumPhotos[Math.floor(Math.random() * albumPhotos.length)];

    // Обложки альбомов
    const covers = {
        thailand: getRandomPhoto(albums.thailand),
        dubai: getRandomPhoto(albums.dubai),
        gelendzhik: getRandomPhoto(albums.gelendzhik),
        japan: getRandomPhoto(albums.japan)
    };

    // Загрузка фотографий альбома
    function loadAlbumPhotos(albumPath: string) {
        albumPhotos = albums[albumPath as keyof typeof albums] || [];
    }

    // Истории путешествий
    const thailandStory = {
        title: 'Тайланд: Пхукет',
        date: '2-9 января',
        duration: '6 дней',
        days: [
            {
                title: 'День 1: Первые впечатления',
                activities: [
                    'Напитки из свежих фруктов по 200₽',
                    'Thai Tea - новый любимый напиток',
                    'Плов с изюмом и карри в ананасе',
                    'Сгущенка из молока кокоса',
                    'Bangla Road',
                    'Пляжи с чистейшей водой'
                ]
            },
            {
                title: 'День 2: Экскурсия по острову',
                activities: [
                    'Смотровая площадка "Karon Viewpoint"',
                    'Мыс "Пром тхеп"',
                    'Морской рынок Чао Ле',
                    'Большой Будда',
                    'Кормление слоненка',
                    'Храм Ват Чалонг',
                    'Смотровая площадка Ранг-Хилл',
                    'Старый город Пхукет'
                ]
            },
            {
                title: 'День 3: Архипелаг Пхи-Пхи',
                activities: [
                    'Бухта Майя Бэй',
                    'Сноркелинг',
                    'Лагуна Пи Ле',
                    'Пещера Викингов',
                    'Скала морских обезьян-крабоедов',
                    'Бухта Тон Сай (Пхи-Пхи Дон)',
                    'Остров Бамбу'
                ]
            },
            {
                title: 'День 4: Массаж и шоу',
                activities: [
                    'Традиционный массаж с маслом',
                    'Ping Pong Show 18+'
                ]
            },
            {
                title: 'День 5: Дайвинг',
                activities: [
                    'Два погружения до 12 метров',
                    'Исследование рифов',
                    'Наблюдение за морской жизнью',
                    'Фиолетовые морские звезды',
                    'Гигантские раковины'
                ]
            },
            {
                title: 'День 6: Активный отдых',
                activities: [
                    'Водопад',
                    'Храм Будды: Пещера обезьян',
                    'Квадроциклы в джунглях',
                    'Катание на тарзанке',
                    'Рафтинг 5 км',
                    'Деревня слонов',
                    'Ботанический экскурс'
                ]
            }
        ]
    };

    const dubaiStory = {
        title: 'ОАЭ: Дубай',
        date: '10 февраля 2024',
        duration: '7 дней',
        days: [
            {
                title: 'Первый день',
                activities: ['Dubai Mall']
            },
            {
                title: 'Второй день',
                activities: [
                    'Bluewaters',
                    'Angel cakes',
                    'Madame Tussauds Museum',
                    'Fantasy Show'
                ]
            },
            {
                title: 'Третий день',
                activities: [
                    'Dubai Mall',
                    'Burj Khalifa'
                ]
            },
            {
                title: 'Четвертый день',
                activities: ['Aqua park']
            },
            {
                title: 'Пятый день',
                activities: [
                    'Yacht trips',
                    'Angel cakes',
                    'xLine',
                    'Дубай молл'
                ]
            },
            {
                title: 'Шестой день',
                activities: [
                    'Safari park',
                    'Old city',
                    'Dubai Frame'
                ]
            }
        ]
    };

    const categories: Category[] = [
        {
            title: "Путешествия",
            photos: [
                {
                    url: covers.thailand,
                    title: 'Тайланд: Пхукет',
                    description: '2-9 января',
                    date: '2025',
                    album: 'thailand',
                    story: thailandStory
                },
                {
                    url: covers.gelendzhik,
                    title: 'Геленджик',
                    description: '21-27 июля',
                    date: '2024',
                    album: 'gelendzhik'
                },
                {
                    url: covers.dubai,
                    title: 'ОАЭ: Дубай',
                    description: '10-16 февраля',
                    date: '2024',
                    album: 'dubai',
                    story: dubaiStory
                },
                {
                    url: covers.japan,
                    title: 'Япония',
                    description: '6-20 октября',
                    date: '2023',
                    album: 'japan'
                }
            ]
        },
        {
            title: "Другое",
            photos: albums.other.map(photo => ({
                url: photo,
                title: 'Фото',
                description: '',
                date: '',
                album: 'other'
            }))
        }
    ];
</script>

{#if selectedStory}
    <TravelStory 
        story={selectedStory} 
        photos={albumPhotos}
        onClose={() => {
            selectedStory = null;
            albumPhotos = [];
        }}
    />
{/if}

<!-- Основной контент -->
<div class="flex flex-col gap-[120rem] lg:gap-[80rem]">
    <!-- Заголовок -->
    <div class="flex items-end justify-between">
        <div class="flex flex-col gap-[15rem]">
            <h2 class="text-[96rem] lg:text-[72rem] font-bold font-oddval">ПУТЕШЕСТВИЯ</h2>
            <p class="text-[42rem] lg:text-[24rem] font-onest opacity-70">Впечатления и фотографии</p>
        </div>
    </div>

    <!-- Путешествия -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[22rem] lg:gap-[30rem]">
        {#each categories[0].photos as photo}
            <div 
                class="interactive-element group relative aspect-[3/4] overflow-hidden cursor-pointer rounded-[50rem] sm:rounded-[30rem] lg:rounded-[20rem]"
                on:click={() => {
                    if (photo.album) {
                        loadAlbumPhotos(photo.album);
                        selectedStory = {
                            title: photo.title,
                            date: photo.description,
                            duration: '',
                            days: photo.story?.days || []
                        };
                    }
                }}
            >
                <!-- Фото -->
                <img 
                    src={photo.url} 
                    alt={photo.title}
                    class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="eager"
                />
                
                <!-- Градиентный оверлей -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                
                <!-- Информация -->
                <div class="absolute inset-x-0 bottom-0 p-[30rem] lg:p-[20rem]">
                    <div class="flex flex-col gap-[10rem] text-white">
                        <h3 class="text-[63rem] lg:text-[28rem] font-bold font-oddval">{photo.title}</h3>
                        <p class="text-[48rem] lg:text-[18rem] font-onest opacity-90">{photo.description}</p>
                        <span class="text-[42rem] lg:text-[16rem] font-onest opacity-70">{photo.date}</span>
                    </div>
                    {#if photo.story}
                        <div class="flex items-center gap-[10rem] lg:gap-[8rem] px-[15rem] lg:px-[12rem] py-[8rem] lg:py-[6rem] bg-white/10 backdrop-blur-md rounded-full mt-[15rem]">
                            <svg class="w-[18rem] lg:w-[16rem] h-[18rem] lg:h-[16rem] text-white" viewBox="0 0 24 24" fill="none">
                                <path d="M7 7H17M7 12H17M7 17H13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                            </svg>
                            <span class="text-[36rem] lg:text-[14rem] font-onest text-white">История</span>
                        </div>
                    {/if}
                </div>
            </div>
        {/each}
    </div>

    <!-- Другие фотографии -->
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[22rem] lg:gap-[20rem]">
        {#each categories[1].photos as photo}
            <div 
                class="interactive-element aspect-square overflow-hidden rounded-[30rem] lg:rounded-[20rem]"
                on:click={() => photo.album && loadAlbumPhotos(photo.album)}
            >
                <img 
                    src={photo.url} 
                    alt="Photo"
                    class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    loading="eager"
                />
            </div>
        {/each}
    </div>
</div> 