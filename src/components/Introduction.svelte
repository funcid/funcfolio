<script>
    import PlusIcon from '$lib/images/icon/plus.svg?raw'
    import DotsIcon from '$lib/images/icon/white_dots.svg?raw'
    import SquareIcon from '$lib/images/icon/square.svg?raw'
    import SocialMedia from './SocialMedia.svelte';

    const calculateAge = (birthYear, birthMonth, birthDay) => {
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

    const ageWithWord = (age) => {
        const ending = (age % 100 > 10 && age % 100 < 15) ? 'лет' :
                       (age % 10 === 1) ? 'год' :
                       (age % 10 > 1 && age % 10 < 5) ? 'года' : 'лет';
        return `${age} ${ending}`;
    };
</script>

<div class="flex flex-col lg:flex-row gap-[80rem]">
    <div class="w-full bg-avatar lg:w-[820rem] h-[942rem] lg:h-[514rem] bg-center bg-cover rounded-[7rem] relative overflow-hidden">
        <div class="p-[30rem] flex flex-col gap-[15rem] absolute bottom-0 left-0 backdrop-blur-[90rem] bg-black/10 w-full h-[234rem]">
            <div class="text-[56rem] text-white font-bold font-oddval">
                АРТЁМ ЦАРЮК
            </div>
            <div class="text-[32rem] text-white font-onest">
                {ageWithWord(age)}
            </div>
            <div class="absolute bottom-0 left-0 p-[30rem]">
                {@html PlusIcon}
            </div>
            <div class="absolute bottom-0 right-0 p-[30rem]">
                {@html DotsIcon}
            </div>
            <div class="absolute top-0 right-0 p-[30rem]">
                {@html SquareIcon}
            </div>
        </div>
    </div>
    <div class="w-[830rem] lg:w-[820rem] h-[514rem] lg:h-[119rem] flex flex-col gap-[80rem]">
        <div class="w-[656rem] text-[32rem]/[150%] font-onest">
            Увлекаюсь финтехом, анализом данных, криптографией, веб-технологиями и машинным обучением.
        </div>
        <div class="text-[32rem] text-black flex gap-[20rem] flex-wrap">
            <SocialMedia media="VK" link="https://vk.com/funcid" color="--blue"/>
            <SocialMedia media="TELEGRAM" link="https://t.me/funcid" color="--skyblue"/>
            <SocialMedia media="HH" link="https://hh.ru/resume/f7b8fed6ff08fd1f5e0039ed1f364a55334761" color="--coral"/>
            <SocialMedia media="GITHUB" link="https://github.com/funcid" color="--green"/>
        </div>
    </div>
</div>
