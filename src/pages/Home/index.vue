<script lang="ts" setup>
import { ref } from 'vue'
const items = ref([{ title: "标题1", content: '点击卡片跳转到文章内容', footer: '卡片脚1' },
{ title: "标题2", content: '秘㊙️', footer: '卡片脚2' },
{ title: "标题3", content: '🈲18', footer: '卡片脚3' }])
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
                    href="https://github.com/anku-ak123">小白 github</a></p>

        </div>
    </div>
    <div style="display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: center;">
        <el-card v-for="item in items" shadow="hover" style="width: 680px; cursor: pointer;">
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