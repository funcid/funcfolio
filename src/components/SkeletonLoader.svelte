<script lang="ts">
    export let width: string = "100%";
    export let height: string = "100%";
    export let borderRadius: string = "20rem";
</script>

<div
    class="skeleton-loader"
    style="width: {width}; height: {height}; border-radius: {borderRadius};"
>
    <div class="skeleton-shimmer" />
</div>

<style>
    .skeleton-loader {
        position: relative;
        overflow: hidden;
        background: #f0f0f0;
    }

    .skeleton-shimmer {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.3) 50%,
            rgba(255, 255, 255, 0) 100%
        );
        animation: shimmer 1.5s infinite;
    }

    @keyframes shimmer {
        0% {
            transform: translateX(-100%);
        }
        100% {
            transform: translateX(100%);
        }
    }
</style> 