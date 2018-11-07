<!--  -->
<template>
    <i :class="classes" :style="styles" @click="handleClick"></i>
</template>
<script>
const prefixCls = "ivu-icon";

export default {
    name: "Icon",
    props: {
        /**
        * @description 图标的名称
        */
        type: {
            type: String,
            default: ""
        },
        /**
        * @description 图标的大小，单位为px
        */
        size: [Number, String],
        /**
        * @description 图标的颜色
        */
        color: String,
        /**
        * @description 自定义图标
        */
        custom: {
            type: String,
            default: ""
        }
    },
    data() {
        return {};
    },
    components: {},
    computed: {
        classes() {
            /**
            * @description 赋给原生i标签对应的class，表示不同的图标,反撇号``表示模板字符串，${}表示占位符
            */
            return [
                `${prefixCls}`,
                {
                    [`${prefixCls}-${this.type}`]: this.type !== "",
                    [`${this.custom}`]: this.custom !== ""
                }
            ];
        },
        styles() {
            /**
            * @description 赋给原生i标签对应的style，添加font-size，color属性
            */
            let style = {};

            if (this.size) {
                style["font-size"] = `${this.size}px`;
            }

            if (this.color) {
                style.color = this.color;
            }
            return style;
        }
    },
    methods: {
        handleClick (event) {
                this.$emit('click', event);
            }
    }
};
</script>
<style lang='less'>
</style>