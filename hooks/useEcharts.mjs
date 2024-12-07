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

export function useECharts(container, options) {
    const chartRef = ref(null);
    const chartInstance = ref(null);

    onMounted(() => {
        const el = container.value;
        if (el) {
            chartInstance.value = echarts.init(el);
            chartInstance.value.setOption(options);
        }
    });

    watch(chartInstance, (newChartInstance) => {
        if (newChartInstance && options) {
            newChartInstance.setOption(options);
        }
    });

    watch(options, (newOptions) => {
        if (chartInstance.value && newOptions) {
            chartInstance.value.setOption(newOptions);
        }
    });

    onUnmounted(() => {
        if (chartInstance.value) {
            chartInstance.value.dispose();
        }
    });

    function resize() {
        if (chartInstance.value) {
            chartInstance.value.resize();
        }
    }

    return {
        chartRef,
        resize,
        chartInstance
    };
}