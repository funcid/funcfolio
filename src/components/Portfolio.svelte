<script>
    import DotsIcon from "$lib/images/icon/black_dots.svg?raw";
    import MtsImage from '$lib/images/job/mts.png'
    import SberImage from '$lib/images/job/sber.png'
    import CristalixImage from '$lib/images/job/cristalix.png'
    import { onMount } from 'svelte';

    let publicRepos = 0;
    let followers = 0;
    let avatarUrl = '';
    let loading = true;

    const experience = {
        positions: [
            {
                company: "МТС БАНК",
                logo: MtsImage,
                position: "Главный разработчик",
                period: "2023 — настоящее время",
                location: "Москва",
                skills: ["Java", "Spring", "Kotlin", "PostgreSQL", "Kafka", "Docker", "Kubernetes"],
                color: "--coral"
            },
            {
                company: "СБЕР",
                logo: SberImage,
                position: "Ведущий ИТ-инженер",
                period: "2022 — 2023",
                location: "Москва",
                skills: ["Java", "Spring Boot", "PostgreSQL", "Kafka", "Docker"],
                color: "--green"
            },
            {
                company: "CRISTALIX",
                logo: CristalixImage,
                position: "Разработчик игровой платформы",
                period: "2019 — 2022",
                location: "Москва",
                skills: ["Java", "Kotlin", "Redis", "MongoDB", "RabbitMQ"],
                color: "--bluefrost"
            }
        ],
        totalExperience: "4 года 7 месяцев",
        resumeUrl: "https://hh.ru/resume/f7b8fed6ff08fd1f5e0039ed1f364a55334761"
    };

    onMount(async () => {
        try {
            const response = await fetch('https://api.github.com/users/funcid');
            const data = await response.json();
            publicRepos = data.public_repos;
            followers = data.followers;
            avatarUrl = data.avatar_url;
        } catch (error) {
            console.error('Error fetching GitHub data:', error);
        } finally {
            loading = false;
        }
    });
</script>

<div class="flex flex-col gap-[80rem]">
    <!-- Заголовок -->
    <div class="flex items-end justify-between">
        <div class="flex flex-col gap-[15rem]">
            <h2 class="text-[64rem] lg:text-[72rem] font-bold font-oddval">РАБОТА</h2>
            <p class="text-[28rem] lg:text-[24rem] font-onest opacity-70">Опыт: {experience.totalExperience}</p>
        </div>
        <a 
            href={experience.resumeUrl}
            target="_blank" 
            class="interactive-element px-[30rem] lg:px-[30rem] h-[60rem] lg:h-[60rem] flex items-center gap-[15rem] bg-black text-white rounded-[30rem]"
        >
            <span class="text-[24rem] lg:text-[18rem] font-onest whitespace-nowrap">Резюме</span>
        </a>
    </div>

    <!-- Карточки опыта работы -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20rem] lg:gap-[30rem]">
        {#each experience.positions as position}
            <div class="project-item block rounded-[30rem] overflow-hidden bg-white">
                <div style="background: var({position.color})" class="h-[5rem] lg:h-[7rem]" />
                
                <div class="p-[25rem] lg:p-[30rem] flex flex-col gap-[25rem] lg:gap-[25rem]">
                    <!-- Логотип и заголовок -->
                    <div class="flex items-center gap-[15rem] lg:gap-[20rem]">
                        <div class="w-[60rem] lg:w-[80rem] h-[60rem] lg:h-[80rem] rounded-[7rem] bg-white shadow-lg p-[12rem] lg:p-[15rem] -mt-[35rem] lg:-mt-[40rem]">
                            <img 
                                src={position.logo} 
                                alt={position.company}
                                class="w-full h-full object-contain"
                            />
                        </div>
                        <div>
                            <h3 class="text-[36rem] lg:text-[32rem] font-bold font-oddval">{position.company}</h3>
                            <p class="text-[28rem] lg:text-[20rem] font-onest opacity-80">{position.location}</p>
                        </div>
                    </div>

                    <!-- Информация -->
                    <div class="flex flex-col gap-[8rem] lg:gap-[10rem]">
                        <p class="text-[28rem] lg:text-[24rem] font-onest">{position.position}</p>
                        <p class="text-[26rem] lg:text-[20rem] font-onest opacity-60">{position.period}</p>
                    </div>

                    <!-- Навыки -->
                    <div class="flex flex-wrap gap-[8rem] lg:gap-[10rem] pt-[15rem] border-t border-black/5">
                        {#each position.skills as skill}
                            <span class="px-[12rem] lg:px-[15rem] py-[6rem] lg:py-[8rem] bg-black/5 rounded-[5rem] text-[24rem] lg:text-[16rem] font-onest">
                                {skill}
                            </span>
                        {/each}
                    </div>
                </div>
            </div>
        {/each}

        <!-- GitHub карточка -->
        <a 
            href="https://github.com/funcid" 
            target="_blank" 
            class="project-item block rounded-[30rem] overflow-hidden bg-gradient-to-r from-[#1b1f23] to-[#2d333b] p-[30rem] lg:p-[40rem] col-span-1 md:col-span-2 lg:col-span-3"
        >
            <div class="flex items-center gap-[20rem] lg:gap-[30rem]">
                {#if avatarUrl}
                    <img 
                        src={avatarUrl} 
                        alt="GitHub Avatar" 
                        class="w-[80rem] lg:w-[100rem] h-[80rem] lg:h-[100rem] rounded-[30rem] border-[4rem] border-white/10"
                    />
                {/if}
                <div class="flex flex-col gap-[12rem] lg:gap-[15rem]">
                    <div class="flex items-center gap-[12rem] lg:gap-[15rem]">
                        <svg class="w-[28rem] lg:w-[32rem] h-[28rem] lg:h-[32rem] text-white" viewBox="0 0 24 24" fill="currentColor">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                        <h3 class="text-[36rem] lg:text-[32rem] font-bold font-oddval text-white">GitHub</h3>
                    </div>
                    {#if loading}
                        <p class="text-[20rem] lg:text-[24rem] font-onest text-white/70">Загрузка данных...</p>
                    {:else}
                        <div class="flex gap-[25rem] lg:gap-[30rem]">
                            <p class="text-[20rem] lg:text-[24rem] font-onest text-white/90">
                                {publicRepos} {(publicRepos % 10 === 1 && publicRepos % 100 !== 11) ? 'репозиторий' : 
                                             (publicRepos % 10 >= 2 && publicRepos % 10 <= 4 && (publicRepos % 100 < 10 || publicRepos % 100 >= 20)) ? 'репозитория' : 
                                             'репозиториев'}
                            </p>
                            <p class="text-[20rem] lg:text-[24rem] font-onest text-white/90">
                                {followers} {(followers % 10 === 1 && followers % 100 !== 11) ? 'подписчик' : 
                                           (followers % 10 >= 2 && followers % 10 <= 4 && (followers % 100 < 10 || followers % 100 >= 20)) ? 'подписчика' : 
                                           'подписчиков'}
                            </p>
                        </div>
                    {/if}
                </div>
            </div>
        </a>
    </div>
</div>

<style>
    /* Добавим стили для GitHub карточки */
    a.interactive-element {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 5rem 20rem rgba(0, 0, 0, 0.05);
    }
    
    a.interactive-element:hover {
        transform: translateY(-5rem);
        box-shadow: 0 15rem 40rem rgba(0, 0, 0, 0.1);
    }

    /* Существующие стили для карточек работы */
    .project-item {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 5rem 20rem rgba(0, 0, 0, 0.05);
    }
    
    .project-item:hover {
        transform: translateY(-5rem);
        box-shadow: 0 15rem 40rem rgba(0, 0, 0, 0.1);
    }
</style>
