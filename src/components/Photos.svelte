<script lang="ts">
    import DotsIcon from '$lib/images/icon/black_dots.svg?raw'
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

    // Импортируем все фотографии из альбома thailand
    const thailandPhotos = Object.entries(import.meta.glob('/static/photos/thailand/*', { eager: true }))
        .map(([path]) => path.replace('/static', ''));

    // Импортируем все фотографии из альбома dubai
    const dubaiPhotos = Object.entries(import.meta.glob('/static/photos/dubai/*', { eager: true }))
        .map(([path]) => path.replace('/static', ''));

    // Импортируем все фотографии из альбома gelendzhik
    const gelendzhikPhotos = Object.entries(import.meta.glob('/static/photos/gelendzhik/*', { eager: true }))
        .map(([path]) => path.replace('/static', ''));

    // Импортируем все фотографии из папки other
    const otherPhotos = Object.entries(import.meta.glob('/static/photos/other/*', { eager: true }))
        .map(([path]) => path.replace('/static', ''));

    // Выбираем случайные фотографии для обложек
    const coverPhoto = thailandPhotos[Math.floor(Math.random() * thailandPhotos.length)];
    const dubaiCoverPhoto = dubaiPhotos[Math.floor(Math.random() * dubaiPhotos.length)];
    const gelendzhikCoverPhoto = gelendzhikPhotos[Math.floor(Math.random() * gelendzhikPhotos.length)];

    async function loadAlbumPhotos(albumPath: string) {
        if (albumPath === 'thailand') {
            albumPhotos = thailandPhotos;
        } else if (albumPath === 'dubai') {
            albumPhotos = dubaiPhotos;
        } else if (albumPath === 'gelendzhik') {
            albumPhotos = gelendzhikPhotos;
        } else if (albumPath === 'other') {
            albumPhotos = otherPhotos;
        }
    }

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

    const gelendzhikStory = {
        title: 'Геленджик',
        date: '21-27 июля',
        duration: '7 дней',
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

    const categories: Category[] = [
        {
            title: "Путешествия",
            photos: [
                {
                    url: coverPhoto,
                    title: 'Тайланд: Пхукет',
                    description: '2-9 января',
                    date: '2025',
                    album: 'thailand',
                    story: thailandStory
                },
                {
                    url: gelendzhikCoverPhoto,
                    title: 'Геленджик',
                    description: '21-27 июля',
                    date: '2024',
                    album: 'gelendzhik',
                    story: gelendzhikStory
                },
                {
                    url: dubaiCoverPhoto,
                    title: 'ОАЭ: Дубай',
                    description: '10-16 февраля',
                    date: '2024',
                    album: 'dubai',
                    story: dubaiStory
                },
                {
                    url: '/photos/japan.jpg',
                    title: 'Япония',
                    description: '6-20 октября',
                    date: '2023'
                }
            ]
        },
        {
            title: "Другое",
            photos: otherPhotos.map(photo => ({
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
        onClose={() => selectedStory = null}
    />
{/if}

<!-- Основной контент -->
<div class="flex flex-col gap-[80rem]">
    <!-- Заголовок -->
    <div class="flex items-end justify-between">
        <div class="flex flex-col gap-[15rem]">
            <h2 class="text-[64rem] lg:text-[72rem] font-bold font-oddval">ОТДЫХ</h2>
            <p class="text-[20rem] lg:text-[24rem] font-onest opacity-70">Путешествия и впечатления</p>
        </div>
    </div>

    <!-- Путешествия -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[15rem] lg:gap-[30rem]">
        {#each categories[0].photos as photo}
            <div 
                class="interactive-element group relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden cursor-pointer rounded-[30rem]"
                on:click={() => {
                    if (photo.album) {
                        loadAlbumPhotos(photo.album);
                    }
                    if (photo.story) {
                        selectedStory = photo.story;
                    }
                }}
            >
                <!-- Фото -->
                <img 
                    src={photo.url} 
                    alt={photo.title}
                    class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                <!-- Градиентный оверлей -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                
                <!-- Информация -->
                <div class="absolute inset-x-0 bottom-0 p-[20rem] lg:p-[30rem]">
                    <div class="flex flex-col gap-[12rem] lg:gap-[15rem] text-white">
                        <div class="flex flex-col gap-[8rem] lg:gap-[5rem]">
                            <h3 class="text-[32rem] lg:text-[28rem] font-bold font-oddval">{photo.title}</h3>
                            <p class="text-[24rem] lg:text-[18rem] font-onest opacity-90">{photo.description}</p>
                        </div>
                        <div class="flex items-center gap-[12rem] lg:gap-[15rem]">
                            <span class="text-[22rem] lg:text-[16rem] font-onest opacity-70">{photo.date}</span>
                            {#if photo.story}
                                <div class="flex items-center gap-[10rem] lg:gap-[8rem] px-[15rem] lg:px-[12rem] py-[8rem] lg:py-[6rem] bg-white/10 backdrop-blur-md rounded-full">
                                    <svg class="w-[18rem] lg:w-[16rem] h-[18rem] lg:h-[16rem] text-white" viewBox="0 0 24 24" fill="none">
                                        <path d="M7 7H17M7 12H17M7 17H13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                    </svg>
                                    <span class="text-[20rem] lg:text-[14rem] font-onest">История</span>
                                </div>
                            {/if}
                        </div>
                    </div>
                </div>
            </div>
        {/each}
    </div>

    <!-- Другие фотографии -->
    {#if categories[1].photos.length > 0}
        <div class="flex flex-col gap-[30rem] lg:gap-[40rem]">
            <h3 class="text-[28rem] lg:text-[32rem] font-bold font-oddval opacity-70">Другие фотографии</h3>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[15rem] lg:gap-[20rem]">
                {#each categories[1].photos as photo}
                    <div 
                        class="interactive-element aspect-square overflow-hidden rounded-[15rem] lg:rounded-[20rem]"
                        on:click={() => photo.album && loadAlbumPhotos(photo.album)}
                    >
                        <img 
                            src={photo.url} 
                            alt="Photo"
                            class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                    </div>
                {/each}
            </div>
        </div>
    {/if}
</div> 