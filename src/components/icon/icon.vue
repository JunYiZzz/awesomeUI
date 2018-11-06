<!--  -->
<template>
    <i :class="classes" :style="styles" @click="handleClick"></i>
</template>
<script>
const prefixCls = "a-icon";

export default {
    name: "aIcon",
    props: {
        type: {
            type: String,
            default: ""
        },
        size: [Number, String],
        color: String,
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
            return [
                `${prefixCls}`,
                {
                    [`${prefixCls}-${this.type}`]: this.type !== "",
                    [`${this.custom}`]: this.custom !== ""
                }
            ];
        },
        styles() {
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