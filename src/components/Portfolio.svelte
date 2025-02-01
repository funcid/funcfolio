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

<div class="flex flex-col gap-[45rem] lg:gap-[30rem]">
    <!-- GitHub карточка -->
    <a 
        href="https://github.com/funcid" 
        target="_blank"
        class="project-item block rounded-[45rem] lg:rounded-[30rem] overflow-hidden bg-gradient-to-r from-[#1b1f23] to-[#2d333b] p-[45rem] lg:p-[40rem]"
    >
        <div class="flex items-center gap-[30rem] lg:gap-[30rem]">
            <img 
                src={avatarUrl} 
                alt="GitHub Avatar" 
                class="w-[120rem] lg:w-[100rem] h-[120rem] lg:h-[100rem] rounded-[45rem] lg:rounded-[30rem] border-[4rem] border-white/10"
            />
            <div class="flex flex-col gap-[20rem] lg:gap-[15rem]">
                <div class="flex items-center gap-[20rem] lg:gap-[15rem]">
                    <svg class="w-[48rem] lg:w-[32rem] h-[48rem] lg:h-[32rem] text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    <h3 class="text-[64rem] lg:text-[32rem] font-bold font-oddval text-white">GitHub</h3>
                </div>
                <div class="flex gap-[30rem] lg:gap-[30rem]">
                    <p class="text-[42rem] lg:text-[24rem] font-onest text-white/90">
                        {publicRepos} репозиториев
                    </p>
                    <p class="text-[42rem] lg:text-[24rem] font-onest text-white/90">
                        {followers} подписчиков
                    </p>
                </div>
            </div>
        </div>
    </a>

    <!-- HH.ru карточка -->
    <a 
        href="https://hh.ru/resume/f7b8fed6ff08fd1f5e0039ed1f364a55334761" 
        target="_blank"
        class="project-item block rounded-[45rem] lg:rounded-[30rem] overflow-hidden bg-[#D6001C] p-[35rem] lg:p-[30rem] hover:scale-105"
    >
        <div class="flex items-center gap-[25rem] lg:gap-[20rem]">
            <div class="w-[90rem] lg:w-[80rem] h-[90rem] lg:h-[80rem] rounded-[45rem] lg:rounded-[30rem] bg-white flex items-center justify-center">
                <span class="text-[54rem] lg:text-[48rem] font-bold text-[#D6001C]">hh</span>
            </div>
            <div class="flex flex-col gap-[15rem] lg:gap-[12rem]">
                <h3 class="text-[48rem] lg:text-[28rem] font-bold font-oddval text-white">HeadHunter</h3>
                <p class="text-[36rem] lg:text-[20rem] font-onest text-white/90">
                    Резюме
                </p>
            </div>
        </div>
    </a>

    <!-- Приватный канал -->
    <a 
        href="https://t.me/+UVCeAB1bCGowODBi"
        target="_blank"
        class="project-item block rounded-[45rem] lg:rounded-[30rem] overflow-hidden bg-[--purpur] p-[35rem] lg:p-[30rem] hover:scale-105"
    >
        <div class="flex items-center gap-[25rem] lg:gap-[20rem]">
            <div class="w-[90rem] lg:w-[80rem] h-[90rem] lg:h-[80rem] rounded-[45rem] lg:rounded-[30rem] bg-white/10 flex items-center justify-center">
                <svg class="w-[54rem] lg:w-[48rem] h-[54rem] lg:h-[48rem] text-white" viewBox="0 0 24 24" fill="none">
                    <path d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div class="flex flex-col gap-[15rem] lg:gap-[12rem]">
                <h3 class="text-[48rem] lg:text-[28rem] font-bold font-oddval text-white">Приватный канал</h3>
                <p class="text-[36rem] lg:text-[20rem] font-onest text-white/90">
                    Telegram
                </p>
            </div>
        </div>
    </a>
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
