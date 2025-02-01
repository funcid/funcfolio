<script lang="ts">
    import SocialMedia from './SocialMedia.svelte';

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
</script>

<div class="flex flex-col lg:flex-row items-center justify-between gap-[90rem] lg:gap-[120rem]">
    <!-- Аватар -->
    <div class="relative w-[600rem] h-[600rem] lg:w-[450rem] lg:h-[450rem] order-1 lg:order-2">
        <div class="w-full h-full rounded-[45rem] lg:rounded-[30rem] overflow-hidden bg-avatar bg-center bg-cover" />
        
        <!-- Возраст -->
        <div class="absolute -bottom-[30rem] lg:-bottom-[25rem] left-1/2 -translate-x-1/2 bg-white rounded-[45rem] lg:rounded-[30rem] px-[45rem] lg:px-[30rem] py-[15rem] lg:py-[15rem] shadow-lg">
            <p class="text-[32rem] lg:text-[20rem] font-onest">
                {ageWithWord(age)}
            </p>
        </div>
    </div>

    <!-- Информация -->
    <div class="flex flex-col items-center lg:items-start gap-[60rem] lg:gap-[40rem] order-2 lg:order-1">
        <!-- Имя и описание -->
        <div class="flex flex-col items-center lg:items-start gap-[45rem] lg:gap-[25rem]">
            <h1 class="text-[78rem] lg:text-[72rem] font-bold font-oddval text-center lg:text-left leading-[1.1]">
                АРТЁМ<br/>ЦАРЮК
            </h1>
            <p class="text-[36rem] lg:text-[24rem] font-onest opacity-70 max-w-[600rem] text-center lg:text-left leading-[1.5]">
                Разработчик, путешественник и просто хороший человек
            </p>
        </div>

        <!-- Социальные сети -->
        <div class="flex gap-[30rem] lg:gap-[20rem]">
            <SocialMedia media="VK" link="https://vk.com/funcid" color="--blue"/>
            <SocialMedia media="TELEGRAM" link="https://t.me/funcid" color="--skyblue"/>
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
