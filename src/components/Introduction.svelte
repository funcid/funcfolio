<script lang="ts">
    import PlusIcon from '$lib/images/icon/plus.svg?raw'
    import DotsIcon from '$lib/images/icon/white_dots.svg?raw'
    import SquareIcon from '$lib/images/icon/square.svg?raw'
    import SocialMedia from './SocialMedia.svelte';
    import LockIcon from '$lib/images/icon/lock.svg?raw'

    const calculateAge = (birthYear: number, birthMonth: number, birthDay: number): number => {
        const today = new Date();
        let age = today.getFullYear() - birthYear;
        const currentMonth = today.getMonth();
        const currentDay = today.getDate();

        if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
            age--;
        }

        return age;
    };

    const age = calculateAge(2003, 6, 18);

    const ageWithWord = (age: number) => {
        const ending = (age % 100 > 10 && age % 100 < 15) ? 'лет' :
                       (age % 10 === 1) ? 'год' :
                       (age % 10 > 1 && age % 10 < 5) ? 'года' : 'лет';
        return `${age} ${ending}`;
    };

    function handlePrivateChannelRequest() {
        window.open('https://t.me/+UVCeAB1bCGowODBi', '_blank');
    }
</script>

<div class="flex flex-col gap-[30rem] lg:gap-[60rem]">
    <!-- Основной контент -->
    <div class="flex flex-col lg:flex-row items-center justify-between gap-[40rem] lg:gap-[120rem]">
        <!-- Аватар -->
        <div class="relative shrink-0 order-1 lg:order-2">
            <div class="w-[450rem] h-[450rem] lg:w-[450rem] lg:h-[450rem] rounded-[30rem] overflow-hidden bg-avatar bg-center bg-cover
                        shadow-[0_0_0_10rem_rgba(255,255,255,0.5)] lg:shadow-[0_0_0_15rem_rgba(255,255,255,0.5)] hover:shadow-[0_0_0_15rem_rgba(255,255,255,0.6)] lg:hover:shadow-[0_0_0_20rem_rgba(255,255,255,0.6)] transition-shadow" />
            <!-- Возраст -->
            <div class="absolute -bottom-[20rem] lg:-bottom-[25rem] left-1/2 -translate-x-1/2 bg-white rounded-[30rem] px-[20rem] lg:px-[30rem] py-[10rem] lg:py-[15rem] shadow-lg">
                <p class="text-[16rem] lg:text-[20rem] font-onest">
                    {ageWithWord(age)}
                </p>
            </div>
        </div>

        <!-- Левая часть -->
        <div class="flex flex-col items-center lg:items-start gap-[30rem] lg:gap-[40rem] order-2 lg:order-1">
            <!-- Имя и описание -->
            <div class="flex flex-col items-center lg:items-start gap-[25rem]">
                <h1 class="text-[42rem] lg:text-[72rem] font-bold font-oddval text-center lg:text-left leading-[1.1]">
                    АРТЁМ<br/>ЦАРЮК
                </h1>
                <p class="text-[18rem] lg:text-[24rem] font-onest opacity-70 max-w-[600rem] text-center lg:text-left leading-[1.5]">
                    Разработчик, путешественник и просто хороший человек
                </p>
            </div>

            <!-- Социальные сети и приватный канал -->
            <div class="flex flex-col gap-[15rem] items-center lg:items-start">
                <!-- Социальные сети -->
                <div class="flex gap-[15rem] lg:gap-[20rem] flex-wrap justify-center lg:justify-start">
                    <SocialMedia media="VK" link="https://vk.com/funcid" color="--blue"/>
                    <SocialMedia media="TELEGRAM" link="https://t.me/funcid" color="--skyblue"/>
                </div>

                <!-- Кнопка приватного канала -->
                <button 
                    on:click={handlePrivateChannelRequest}
                    class="interactive-element group px-[25rem] lg:px-[35rem] h-[70rem] lg:h-[83rem] flex items-center gap-[12rem] lg:gap-[15rem] bg-black text-white overflow-hidden relative rounded-[30rem]"
                >
                    <div class="absolute inset-0 bg-gradient-to-r from-[--purpur] to-[--pink] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div class="relative flex items-center gap-[15rem]">
                        <svg class="w-[22rem] lg:w-[24rem] h-[22rem] lg:h-[24rem] text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span class="text-[18rem] lg:text-[20rem] font-onest whitespace-nowrap">
                            Приватный канал
                        </span>
                    </div>
                </button>
            </div>
        </div>
    </div>
</div>

<style>
    button {
        box-shadow: 0 10rem 30rem rgba(0, 0, 0, 0.1);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    button:hover {
        box-shadow: 0 15rem 40rem rgba(0, 0, 0, 0.2);
        transform: translateY(-2rem);
    }

    @media (hover: none) {
        button:hover {
            transform: none;
        }
    }
</style>
