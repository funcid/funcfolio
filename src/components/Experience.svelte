<script>
    import DotsIcon from '$lib/images/icon/black_dots.svg?raw'
    import MtsImage from '$lib/images/job/mts.png'
    import SberImage from '$lib/images/job/sber.png'
    import CristalixImage from '$lib/images/job/cristalix.png'

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
</script>

<div class="flex flex-col gap-[80rem]">
    <div class="flex lg:flex-row flex-col gap-[30rem] lg:gap-0 max-w-[830rem] lg:max-w-[1720rem]">
        <p class="min-w-[900rem] text-[96rem] font-bold font-oddval">
            ОПЫТ
        </p>
        <div class="flex w-full justify-between">
            <p class="text-[32rem] font-onest w-full">Общий опыт: {experience.totalExperience}</p>
            {@html DotsIcon}
        </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-[30rem]">
        {#each experience.positions as position}
            <a 
                href={experience.resumeUrl}
                target="_blank" 
                class="project-item block rounded-[7rem] overflow-hidden bg-white"
            >
                <div style="background: var({position.color})" class="h-[7rem]" />
                
                <div class="p-[30rem] flex flex-col gap-[25rem]">
                    <!-- Логотип и заголовок -->
                    <div class="flex items-center gap-[20rem]">
                        <div class="w-[80rem] h-[80rem] rounded-[7rem] bg-white shadow-lg p-[15rem] -mt-[40rem]">
                            <img 
                                src={position.logo} 
                                alt={position.company}
                                class="w-full h-full object-contain"
                            />
                        </div>
                        <div>
                            <h3 class="text-[32rem] font-bold font-oddval">{position.company}</h3>
                            <p class="text-[20rem] font-onest opacity-80">{position.location}</p>
                        </div>
                    </div>

                    <!-- Информация -->
                    <div class="flex flex-col gap-[10rem]">
                        <p class="text-[24rem] font-onest">{position.position}</p>
                        <p class="text-[20rem] font-onest opacity-60">{position.period}</p>
                    </div>

                    <!-- Навыки -->
                    <div class="flex flex-wrap gap-[10rem] pt-[15rem] border-t border-black/5">
                        {#each position.skills as skill}
                            <span class="px-[15rem] py-[8rem] bg-black/5 rounded-[5rem] text-[16rem] font-onest">
                                {skill}
                            </span>
                        {/each}
                    </div>
                </div>
            </a>
        {/each}
    </div>
</div>

<style>
    .experience-card {
        transition: all 0.3s ease;
    }
    
    .experience-card:hover {
        transform: translateY(-5rem) scale(1.01);
        box-shadow: 0 15rem 40rem rgba(0, 0, 0, 0.15);
    }
</style>
