<template>
    <div :class="formGroupClasses">
        <slot name="label">
            <label v-if="label" ref="label" :for="$attrs.id" :class="labelClass" v-html="label" />
        </slot>

        <div class="form-group-inner">
            <slot name="control">
                <div v-if="$slots.icon" class="mx-2 pl-1">
                    <slot name="icon" />
                </div>
                <textarea
                    ref="field"
                    v-autogrow="autogrow"
                    v-bind-events
                    v-bind="controlAttributes"
                    :value="value"
                    @input="$emit('input', $event.target.value)" />
            </slot>

            <slot name="activity">
                <transition name="slide-fade">
                    <activity-indicator v-if="activity" key="activity" ref="activity" type="dots" :size="size" />
                </transition>
            </slot>
        </div>

        <slot name="feedback">
            <div 
                v-if="validFeedback"
                class="valid-feedback"
                valid>
                {{ validFeedback }}
            </div>
            <div 
                v-else-if="invalidFeedback"
                class="invalid-feedback"
                invalid>
                {{ invalidFeedback }}
            </div>
        </slot>

        <slot name="help">
            <small v-if="helpText" ref="help">
                {{ helpText }}
            </small>
        </slot>
    </div>
</template>

<script>
import { ActivityIndicator, register } from '@vue-interface/activity-indicator';
import Dots from '@vue-interface/activity-indicator/src/types/Dots';
import Autogrow from '@vue-interface/autogrow';
import FormControl from '@vue-interface/form-control';

register({
    dots: Dots
});

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

.textarea-field .activity-indicator-sm {
    font-size: .5em;
    top: .666rem;
}

.textarea-field .activity-indicator-md {
    font-size: .666em;
    top: .875rem;
}

.textarea-field .activity-indicator-lg {
    font-size: .75em;
    top: 1.15rem;
}

.textarea-field .activity-indicator-xl {
    font-size: 1em;
    top: 1.25rem;
}

.textarea-field .slide-fade-enter,
.textarea-field .slide-fade-leave-to {
    opacity: 1;
    transform: translate(50%, 0);
}

.textarea-field.is-valid .valid-feedback,
.textarea-field.is-invalid .invalid-feedback {
    display: flex;
}

.textarea-field .form-control-icon {
    padding-left: 2em;
}
</style>