<script>
    import DotsIcon from "$lib/images/icon/black_dots.svg?raw";
    import Project from "./Project.svelte";
    import VisualDriverImage from "$lib/images/project/visual_driver.jpg";
    import MeteoServiceImage from "$lib/images/project/meteo_service.jpg";
    import DataScienceImage from "$lib/images/project/data_science.jpg";
    import WebCrawlerImage from "$lib/images/project/web_crawler.jpg";
    import FtpDesktopUtilImage from "$lib/images/project/ftp_desktop_util.jpg";
    import StableDiffusionImage from "$lib/images/project/stable_diffusion.jpg";

    import TakiwadaiImage from "$lib/images/project/takiwadai.jpg";
    import Log4jBombImage from "$lib/images/project/log4j_bomb.jpg";
    import ParametricGraphicsImage from "$lib/images/project/parametric_graphics.jpg";
    import MuseumImage from "$lib/images/project/museum.jpg";
    import PeasCLIImage from "$lib/images/project/peas_cli.jpg";
    import LeetcodeTrainingImage from "$lib/images/project/leetcode_training.jpg";
    import WebPostParserImage from "$lib/images/project/web_post_parser.jpg";
    import S3VultrDownloaderImage from "$lib/images/project/s3_vultr_downloader.jpg";
    import WebK8SImage from "$lib/images/project/web_k8s.jpg";
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
        <Project
            background={TakiwadaiImage}
            title={"TAKIWADAI"}
            description="Платформа для соревнований в решении олимп. задач"
            color="--blue"
            blockSize={208}
            height={619}
            width={1720}
        />
        <div class="flex flex-wrap gap-[80rem]">
            <div class="flex flex-col gap-[80rem]">
                <Project
                    background={Log4jBombImage}
                    title={"LOG4J<br/>EXPLOIT<br/>FORK<br/>BOMB"}
                    description="Proof of Concept: CVE-2021-44228 + fork bomb"
                    color="--yellow"
                    blockSize={403}
                    height={608}
                />
                <Project
                    background={MuseumImage}
                    title={"MUSEUM"}
                    description="Игра, экономический симулятор палеонтолога"
                    color="--purpur"
                    blockSize={249}
                    height={454}
                />
            </div>
            <Project
                background={ParametricGraphicsImage}
                title={"PARAMETRIC<br/>GRAPHICS<br/>VISUALIZER"}
                description="Desktop приложение для построения параметрических функций"
                color="--skyblue"
                blockSize={338}
                height={1142}
            />
        </div>
        <Project
            background={PeasCLIImage}
            title={"PEAS<br/>CLI"}
            description="Децентрализованный файлообмен (курсовая работа 2 курс)"
            color="--pink"
            blockSize={273}
            height={737}
            width={1720}
        />
        <Project
            background={LeetcodeTrainingImage}
            title={"LEETCODE<br/>TRAINING"}
            description="Решаю LeetCode проблемы"
            color="--bluefrost"
            blockSize={273}
            height={543}
        />
        <Project
            background={WebPostParserImage}
            title={"WEB<br/>POST<br/>PARSER"}
            description="Посты из Pikabu/JoyReactor в XML/JSON"
            color="--green"
            blockSize={338}
            height={543}
        />
        <Project
            background={S3VultrDownloaderImage}
            title={"S3<br/>VULTR<br/>DOWNLOADER"}
            description="Скачать корзину из Vultr"
            color="--yellow"
            blockSize={338}
            height={543}
        />
        <Project
            background={WebK8SImage}
            title={"WEB-K8S"}
            description="Утилита для администрирования Kubernetes"
            color="--blue"
            blockSize={208}
            height={543}
        />
    </div>
</div>
