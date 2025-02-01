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
                Кладовка воспоминий, отпечаток структур моей жизни
            </p>
        </div>

        <!-- Социальные сети -->
        <div class="flex gap-[25rem] lg:gap-[20rem]">
            <!-- VK -->
            <a 
                href="https://vk.com/funcid" 
                target="_blank"
                rel="noreferrer noopener"
                style="text-decoration: none;"
                class="social-button flex items-center gap-[22rem] lg:gap-[18rem] rounded-[45rem] lg:rounded-[30rem] bg-[#4680C2] lg:bg-[#0077CC] p-[30rem] lg:p-[25rem] hover:translate-y-[-5rem] hover:scale-105 transition-transform duration-200"
            >
                <div class="w-[80rem] lg:w-[70rem] h-[80rem] lg:h-[70rem] rounded-[45rem] lg:rounded-[30rem] bg-white/10 flex items-center justify-center">
                    <svg class="w-[48rem] lg:w-[42rem] h-[48rem] lg:h-[42rem] text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.523-2.049-1.712-1.033-1.033-1.49-1.172-1.745-1.172-.356 0-.458.102-.458.597v1.573c0 .424-.135.636-1.253.636-1.846 0-3.896-1.118-5.335-3.194C4.624 10.857 4.03 8.57 4.03 8.096c0-.277.102-.536.596-.536h1.744c.44 0 .609.234.778.833.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.234.196-.424.507-.424h2.756c.372 0 .508.234.508.833v3.574c0 .382.17.508.271.508.22 0 .407-.126.813-.532 1.27-1.422 2.18-3.574 2.18-3.574.119-.256.305-.509.778-.509h1.745c.524 0 .643.27.524.635-.22 1.017-2.354 4.03-2.354 4.03-.186.305-.254.44 0 .78.186.256.796.795 1.202 1.287.745.862 1.32 1.592 1.473 2.1.17.487-.085.731-.575.731z"/>
                    </svg>
                </div>
                <div class="flex flex-col gap-[12rem] lg:gap-[10rem]">
                    <h3 class="text-[42rem] lg:text-[28rem] font-bold font-oddval text-white">VK</h3>
                    <p class="text-[32rem] lg:text-[18rem] font-onest text-white/90">
                        Профиль
                    </p>
                </div>
            </a>

            <!-- Telegram -->
            <a 
                href="https://t.me/funcid" 
                target="_blank"
                rel="noreferrer noopener"
                style="text-decoration: none;"
                class="social-button flex items-center gap-[22rem] lg:gap-[18rem] rounded-[45rem] lg:rounded-[30rem] bg-[#229ED9] lg:bg-[#0088B9] p-[30rem] lg:p-[25rem] hover:translate-y-[-5rem] hover:scale-105 transition-transform duration-200"
            >
                <div class="w-[80rem] lg:w-[70rem] h-[80rem] lg:h-[70rem] rounded-[45rem] lg:rounded-[30rem] bg-white/10 flex items-center justify-center">
                    <svg class="w-[48rem] lg:w-[42rem] h-[48rem] lg:h-[42rem] text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm5.568 8.16c-.18 1.896-.96 6.504-1.356 8.628-.168.9-.504 1.2-.816 1.236-.696.06-1.224-.456-1.896-.9-1.056-.696-1.656-1.128-2.676-1.8-1.188-.78-.42-1.212.264-1.908.18-.18 3.252-2.976 3.312-3.228a.24.24 0 0 0-.06-.216c-.072-.06-.168-.036-.252-.024-.108.024-1.788 1.14-5.064 3.348-.48.324-.912.492-1.296.48-.432-.012-1.248-.24-1.86-.444-.756-.24-1.344-.372-1.296-.792.024-.216.324-.432.888-.66 3.504-1.524 5.832-2.532 6.996-3.012 3.336-1.392 4.02-1.632 4.476-1.632.096 0 .324.024.468.144.12.096.156.228.168.324-.012.072.012.288 0 .324z"/>
                    </svg>
                </div>
                <div class="flex flex-col gap-[12rem] lg:gap-[10rem]">
                    <h3 class="text-[42rem] lg:text-[28rem] font-bold font-oddval text-white">Telegram</h3>
                    <p class="text-[32rem] lg:text-[18rem] font-onest text-white/90">
                        Чат
                    </p>
                </div>
            </a>
        </div>
    </div>
</div>

<style>
    .social-button {
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 8rem 32rem rgba(0, 0, 0, 0.15);
        -webkit-tap-highlight-color: transparent;
        cursor: pointer;
        user-select: none;
        -webkit-user-select: none;
    }
    
    .social-button:hover {
        transform: translateY(-5rem) scale(1.05);
        box-shadow: 0 20rem 60rem rgba(0, 0, 0, 0.2);
    }

    @media (hover: none) {
        .social-button:hover {
            transform: none;
            box-shadow: 0 8rem 32rem rgba(0, 0, 0, 0.15);
        }
    }
</style>
