<script setup lang="ts" generic="T, V">
import { ActivityIndicator } from '@vue-interface/activity-indicator';
import { vAutogrow } from '@vue-interface/autogrow';
import type { FormControlEvents, FormControlProps, FormControlSlots } from '@vue-interface/form-control';
import { FormControlErrors, FormControlFeedback, useFormControl } from '@vue-interface/form-control';
import { ref, useSlots } from 'vue';

defineOptions({
    inheritAttrs: false
});

defineSlots<FormControlSlots<T>>();

const emit = defineEmits<FormControlEvents<T>>();

type TextareaFieldProps = FormControlProps<T,V> & {
    autogrow?: boolean
}

const props = withDefaults(defineProps<TextareaFieldProps>(), {
    autogrow: true,
    formControlClass: 'form-control',
    labelClass: 'form-label'
});

const {
    controlAttributes,
    formGroupClasses,
    model,
    onClick,
    onBlur,
    onFocus
} = useFormControl({ props, emit });

const field = ref<HTMLTextAreaElement>();
</script>

<template>
    <div
        class="textarea-field"
        :class="formGroupClasses">
        <slot name="label">
            <label
                v-if="label"
                ref="label"
                :class="labelClass"
                :for="controlAttributes.id">
                {{ label }}
            </label>
        </slot>

        <div class="form-group-inner">
            <slot
                name="control"
                v-bind="{ onClick, onBlur, onFocus, controlAttributes }">
                <div
                    v-if="useSlots().icon"
                    class="form-group-inner-icon"
                    @click="field.focus">
                    <slot name="icon" />
                </div>
                <textarea
                    ref="field"
                    v-model="model"
                    v-autogrow="autogrow"
                    v-bind="controlAttributes"
                    @click="onClick"
                    @blur="onBlur"
                    @focus="onFocus" />
            </slot>

            <slot name="activity">
                <Transition name="textarea-field-fade">
                    <ActivityIndicator
                        v-if="activity && indicator"
                        key="activity"
                        ref="activity"
                        :type="indicator"
                        :size="indicatorSize" />
                </Transition>
            </slot>
        </div>

        <slot
            name="errors"
            v-bind="{ error, errors, id: $attrs.id, name: $attrs.name }">        
            <FormControlErrors
                v-if="!!(error || errors)"
                :id="$attrs.id && String($attrs.id)"
                v-slot="{ error }"
                :name="$attrs.name && String($attrs.name)"
                :error="error"
                :errors="errors">
                <div
                    invalid
                    class="invalid-feedback">
                    {{ error }}<br>
                </div>
            </FormControlErrors>
        </slot>
        
        <slot
            name="feedback"
            v-bind="{ feedback }">
            <FormControlFeedback
                v-slot="{ feedback }"
                :feedback="feedback">
                <div
                    valid
                    class="valid-feedback">
                    {{ feedback }}
                </div>
            </FormControlFeedback>
        </slot>

        <slot name="help">
            <small
                v-if="helpText"
                ref="help">
                {{ helpText }}
            </small>
        </slot>
    </div>
</template>