<script>
    import DotsIcon from "$lib/images/icon/black_dots.svg?raw";
    import Project from "./Project.svelte";
    import VisualDriverImage from "$lib/images/project/visual_driver.jpg";
    import MeteoServiceImage from "$lib/images/project/meteo_service.jpg";
    import DataScienceImage from "$lib/images/project/data_science.jpg";
    import WebCrawlerImage from "$lib/images/project/web_crawler.jpg";
    import FtpDesktopUtilImage from "$lib/images/project/ftp_desktop_util.jpg";
    import StableDiffusionImage from "$lib/images/project/stable_diffusion.jpg";
</script>

<div class="flex flex-col gap-[100rem]">
    <div class="flex">
        <p class="min-w-[900rem] text-[96rem] font-bold font-oddval">
            ПОРТФОЛИО
        </p>
        <p class="text-[32rem] font-onest w-full">Пет проекты и опенсорс</p>
        <div>
            {@html DotsIcon}
        </div>
    </div>

    <div class="max-w-[1720rem] flex flex-wrap gap-[80rem]">
        <Project
            background={VisualDriverImage}
            title={"VISUAL<br/>DRIVER"}
            description="Движок для Minecraft, общий набор визуальных решений"
            color="--blue"
            blockSize={314}
        />
        <Project
            background={MeteoServiceImage}
            title={"METEO<br/>СЕРВИС"}
            description="Своя Я.Погода, от Arduino UNO и Spring Boot до Android"
            color="--yellow"
            blockSize={314}
        />
        <Project
            background={DataScienceImage}
            title={"DATA<br/>SCIENCE"}
            description="Изучаю теор. вер., мат. стат. и ML"
            color="--skyblue"
            blockSize={273}
        />
        <Project
            background={WebCrawlerImage}
            title={"WEB<br/>CRAWLER"}
            description="Сканнер интернета, сохраняет найденные сайты + поиск"
            color="--bluefrost"
            blockSize={314}
        />
        <Project
            background={FtpDesktopUtilImage}
            title={"FTP<br/>DESKTOP<br/>UTIL"}
            description="Клиент для обмена файлами по FTP"
            color="--yellow"
            blockSize={311}
            height={649}
        />
        <Project
            background={StableDiffusionImage}
            title={"STABLE<br/>DIFFUSION<br/>INPAINT<br/>UTIL"}
            description="AI редактор фото на базе Stable Diffusion"
            color="--green"
            blockSize={444}
            height={649}
        />
    </div>
</div>
