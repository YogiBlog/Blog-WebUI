<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const items = ref([{ key: 1, title: "如果上天再给我一次机会", content: '每个人的一生中，总有一些遗憾，一些来不及弥补的错误，一些未能完成的梦想。如果上天再给我一次机会，我会更加珍惜那些...', footer: '👍(2) ✨' },
{ key: 2, title: "如何开发好一个博客", content: '开发一个成功的博客，不仅需要技术能力，还需要明确的规划、对用户需求的了解、以及对内容质量的持续打磨。以下是一些关键步骤与策略，帮助你开发...', footer: '👍(1) ✨' },
{ key: 3, title: "欢迎来到我们的技术博客：搭建框架介绍", content: '这是我们博客的第一篇文章，非常高兴能和大家分享我们在搭建这个博客过程中所采用的技术栈！作为一个分享开发经验和技术知识...', footer: '👍(1) ✨' }])

function gotoBlog(key: number) {
    router.push('/blog/' + key)
}
</script>

<template>
    <div style="width: 100%; height: 180px; text-align: center;" :style="`color: var(--el-color-primary)`">
        <h1>
            友迪 & 小白
        </h1>
        <br />
        <div style="text-align: center;">
            <p>
                <a target="_blank" href="https://github.com/ByYogi">友迪 github</a> &nbsp; &nbsp; <a target="_blank"
                    href="https://github.com/anku-ak123">小白 github</a>
            </p>
        </div>
    </div>
    <div style="display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: center;">
        <el-card v-for="item in items" shadow="hover" style="width: 680px; cursor: pointer;"
            @click="gotoBlog(item.key)">
            <template #header>
                <div class="card-header">
                    <span>{{ item.title }}</span>
                </div>
            </template>
            <p>{{ item.content }}</p>
            <template #footer>{{ item.footer }}</template>
        </el-card>
    </div>
</template>