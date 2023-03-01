<script lang="ts">
import { ActivityIndicator } from '@vue-interface/activity-indicator';
import { Autogrow } from '@vue-interface/autogrow';
import { FormControl } from '@vue-interface/form-control';
import { defineComponent } from 'vue';

export default defineComponent({

    name: 'TextareaField',

    directives: {
        Autogrow
    },

    components: {
        ActivityIndicator
    },

    extends: FormControl,

    props: {
        
        /**
         * The autogrow attribute
         *
         * @property Boolean
         */
        autogrow: {
            type: [Number, String, Boolean],
            default: false
        }

    }

});
</script>

<template>
    <div :class="formGroupClasses">
        <slot name="label">
            <label
                v-if="label"
                ref="label"
                :for="id"
                :class="labelClass">
                {{ label }}
            </label>
        </slot>

        <div class="form-group-inner">
            <slot
                name="control"
                :bind-events="bindEvents"
                :control-attributes="controlAttributes"
                :focus="focus">
                <div
                    v-if="$slots.icon"
                    class="form-group-inner-icon"
                    @click="focus">
                    <slot name="icon" />
                </div>
                <textarea
                    ref="field"
                    v-model="model"
                    v-autogrow="autogrow"
                    v-bind-events
                    v-bind="controlAttributes" />
            </slot>

            <slot name="activity">
                <Transition name="textarea-field-fade">
                    <ActivityIndicator
                        v-if="activity"
                        key="activity"
                        ref="activity"
                        :type="indicator"
                        :size="indicatorSize || size" />
                </Transition>
            </slot>
        </div>

        <slot
            name="errors"
            v-bind="{ error, errors, id: $attrs.id, name: $attrs.name }">        
            <FormControlErrors
                v-if="!!(error || errors)"
                :id="$attrs.id"
                v-slot="{ error }"
                :name="$attrs.name"
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

<style>
.textarea-field,
.textarea-field .form-group-inner {
    position: relative;
}

.textarea-field .activity-indicator {
    position: absolute;
    right: 1rem;
    transition: all .25s ease-in;
}

.textarea-field .activity-indicator-xs {
    font-size: .5em;
    top: .666rem;
}

.textarea-field.has-activity .form-control-xs {
    padding-right: 3.75em;
}

.textarea-field .activity-indicator-sm {
    font-size: .5em;
    top: .666rem;
}

.textarea-field.has-activity .form-control-sm {
    padding-right: 3.75em;
}

.textarea-field .activity-indicator-md {
    font-size: .666em;
    top: .875rem;
}

.textarea-field.has-activity .form-control-md {
    padding-right: 3em;
}

.textarea-field .activity-indicator-lg {
    font-size: .75em;
    top: 1.15rem;
}

.textarea-field.has-activity .form-control-lg {
    padding-right: 3em;
}

.textarea-field .activity-indicator-xl {
    font-size: 1em;
    top: 1.25rem;
}

.textarea-field.has-activity .form-control {
    padding-right: 3em;
}

.textarea-field .activity-indicator {
    opacity: 1;
}

.textarea-field .textarea-field-fade-enter,
.textarea-field .textarea-field-fade-leave-to {
    opacity: 0;
}


.textarea-field.is-valid .valid-feedback,
.textarea-field.is-invalid .invalid-feedback {
    display: flex;
}

.textarea-field .form-control-icon {
    padding-left: 2em;
}

.textarea-field .form-group-inner-icon {
    position: absolute;
    top: 25%;
    left: .3em;
    width: 1em;
    font-size: 1.25em;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
}

.textarea-field-sm .form-group-inner-icon {
    font-size: 1em;
}

.textarea-field-lg .form-group-inner-icon {
    font-size: 1.75em;
}
</style>