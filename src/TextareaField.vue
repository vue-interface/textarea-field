<template>
    <div :class="formGroupClasses">
        <slot name="label">
            <label
                v-if="label || $attrs.placeholder"
                ref="label"
                :for="id"
                :class="labelClass"
                @click="focus"
                v-html="label || $attrs.placeholder" />
        </slot>

        <div class="form-group-inner">
            <slot name="control">
                <div v-if="$slots.icon" class="form-group-inner-icon" @click="focus">
                    <slot name="icon" />
                </div>
                <textarea
                    ref="field"
                    v-autogrow="autogrow"
                    v-bind-events
                    v-bind="controlAttributes"
                    :value="currentValue"
                    @input="onInput" />
            </slot>

            <slot name="activity">
                <transition name="textarea-field-fade">
                    <activity-indicator
                        v-if="activity"
                        key="activity"
                        ref="activity"
                        :type="indicator"
                        :size="indicatorSize || size" />
                </transition>
            </slot>
        </div>

        <slot name="feedback">
            <div 
                v-if="invalidFeedback"
                class="invalid-feedback"
                invalid
                v-html="invalidFeedback" />
            <div 
                v-else-if="validFeedback"
                class="valid-feedback"
                valid
                v-html="validFeedback" />
        </slot>

        <slot name="help">
            <small v-if="helpText" ref="help">
                {{ helpText }}
            </small>
        </slot>
    </div>
</template>

<script>
import Autogrow from '@vue-interface/autogrow';
import { ActivityIndicator } from '@vue-interface/activity-indicator';
import { FormControl } from '@vue-interface/form-control';

export default {

    name: 'TextareaField',

    directives: {
        Autogrow
    },

    components: {
        ActivityIndicator
    },

    mixins: [
        FormControl
    ],

    props: {
        
        /**
         * The autogrow attribute
         *
         * @property Boolean
         */
        autogrow: [Number, String, Boolean]

    }

};
</script>



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
    top: .75em;
    left: .666rem;
    width: 1.25em;
    font-size: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
}

.textarea-field-sm .form-group-inner-icon {
    position: absolute;
    top: .5em;
    left: .666rem;
    width: .75em;
    font-size: 1.5em;
    display: flex;
    align-items: center;
    justify-content: center;
}

.textarea-field-lg .form-group-inner-icon {
    position: absolute;
    top: .75em;
    left: .666rem;
    width: 1.25em;
    font-size: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>