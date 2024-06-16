import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const route = useRoute();
const router = useRouter();
const userName = computed(() => route.query.name);
const answerCounts = {
    班長: parseInt(route.query.班長) || 0,
    衛生: parseInt(route.query.衛生) || 0,
    康樂: parseInt(route.query.康樂) || 0,
    值日生: parseInt(route.query.值日生) || 0,
    學藝: parseInt(route.query.學藝) || 0,
    風紀: parseInt(route.query.風紀) || 0,
};
const result = computed(() => {
    if (answerCounts.風紀 >= 3) {
        return "風紀股長";
    }
    let maxCount = 0;
    let maxRole = "";
    for (const [role, count] of Object.entries(answerCounts)) {
        if (count > maxCount) {
            maxCount = count;
            maxRole = role;
        }
    }
    return maxRole;
});
const retryQuiz = () => {
    router.push("/");
};
const __VLS_fnComponent = (await import('vue')).defineComponent({});
let __VLS_functionalComponentProps;
const __VLS_modelEmitsType = {};
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.userName);
    // @ts-ignore
    [userName,];
    if (__VLS_ctx.result) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (__VLS_ctx.result);
        // @ts-ignore
        [result, result,];
    }
    // @ts-ignore
    const __VLS_0 = {}
        .ElButton;
    ({}.ElButton);
    ({}.ElButton);
    __VLS_components.ElButton;
    __VLS_components.elButton;
    __VLS_components.ElButton;
    __VLS_components.elButton;
    // @ts-ignore
    [ElButton, ElButton,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onClick': {} }, type: ("primary"), }));
    const __VLS_2 = __VLS_1({ ...{ 'onClick': {} }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ 'onClick': {} }, type: ("primary"), }));
    let __VLS_6;
    const __VLS_7 = {
        onClick: (__VLS_ctx.retryQuiz)
    };
    // @ts-ignore
    [retryQuiz,];
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    let __VLS_3;
    let __VLS_4;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                userName: userName,
                result: result,
                retryQuiz: retryQuiz,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
