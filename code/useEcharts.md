# useEcharts 

## vue3实现Echarts的hook

```js
// useECharts.js
import { onMounted, onUnmounted, ref, watch } from 'vue';
import * as echarts from 'echarts/core';
// 引入ECharts各模块
import {
    CanvasRenderer
} from 'echarts/renderers';
import {
    BarChart
} from 'echarts/charts';
import {
    GridComponent,
    TooltipComponent,
    LegendComponent
} from 'echarts/components';

// 注册必要的组件
echarts.use(
    [CanvasRenderer, BarChart, GridComponent, TooltipComponent, LegendComponent]
);

/**
 * 使用 ECharts 的 composable
 * @param {import('vue').Ref} container - 容器元素
 * @param {Object} options - ECharts 配置项
 */
export function useECharts(container, options) {
    // 图表实例
    const chartRef = ref(null);
    const chartInstance = ref(null);

    // 初始化图表
    onMounted(() => {
        const el = container.value;
        if (el) {
            chartInstance.value = echarts.init(el);
            chartInstance.value.setOption(options);
        }
    });

    // 监听图表实例和配置变化
    watch(chartInstance, (newChartInstance) => {
        if (newChartInstance && options) {
            newChartInstance.setOption(options);
        }
    });

    // 监听配置变化
    watch(options, (newOptions) => {
        if (chartInstance.value && newOptions) {
            chartInstance.value.setOption(newOptions);
        }
    });

    // 销毁图表实例
    onUnmounted(() => {
        if (chartInstance.value) {
            chartInstance.value.dispose();
        }
    });

    // 调整图表大小
    function resize() {
        if (chartInstance.value) {
            chartInstance.value.resize();
        }
    }

    // 返回图表实例和调整图表大小的方法
    return {
        chartRef,
        resize,
        chartInstance
    };
}
```