<script lang="ts" setup>
import { ref } from 'vue'
const items = ref([{ title: "标题1", content: 'footer1' },
{ title: "标题2", content: 'footer2' },
{ title: "标题3", content: 'footer3' }])
</script>

<template>
    <div style="width: 100%; height: 80px; text-align: center;" :style="`color: var(--el-color-primary)`"><h1>Yogi's
            Blogs</h1>
            <br/>
        </div>
    <div style="display: flex; justify-content: center;  flex-wrap: wrap; gap: 20px">
        <el-card v-for="item in items" shadow="hover" style="width: 680px;">
            <template #header>
                <div class="card-header">
                    <span>{{ item.title }}</span>
                </div>
            </template>
            <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
            <template #footer>{{ item.content }}</template>
        </el-card>

    </div>
</template>