import './sas-image-hotspot.scss';
import template from './sas-image-hotspot.html.twig';

const {Component} = Shopware;

Component.register('sas-image-hotspot', {
    template,

    props: {
        hotspot: {
            required: true,
            type: Object,
        },
        isActive: {
            type: Boolean,
            default: false
        },
        wrapper: {}
    },

    inject: ['repositoryFactory'],

    data() {
        return {
            styleObject: {top: this.hotspot.top + '%', left: this.hotspot.left + '%', position: 'absolute'}
        }
    },

    mounted() {
        console.log("pin.mounted", this.hotspot);
    },

    methods: {
        onDotClick() {
            this.$emit('on-dot-click', this.hotspot);
        },

        onDragStart(event) {
            event.dataTransfer.setDragImage(event.target, window.outerWidth, window.outerHeight);
        },

        onDrag(event) {
            event.dataTransfer.setDragImage(event.target, window.outerWidth, window.outerHeight);
            this.$refs['pin_' + this.hotspot.id].style.left = ((event.clientX-this.wrapper.getBoundingClientRect().x)/this.wrapper.clientWidth * 100) +"%";
            this.$refs['pin_' + this.hotspot.id].style.top = ((event.clientY-this.wrapper.getBoundingClientRect().y)/this.wrapper.clientHeight * 100) +"%";
        },

        onDragEnd(event) {

            this.$refs['pin_' + this.hotspot.id].style.left = ((event.clientX-this.wrapper.getBoundingClientRect().x)/this.wrapper.clientWidth * 100) +"%";
            this.$refs['pin_' + this.hotspot.id].style.top = ((event.clientY-this.wrapper.getBoundingClientRect().y)/this.wrapper.clientHeight * 100) +"%";

            this.$emit('on-dragging-end', {
                left: (event.clientX-this.wrapper.getBoundingClientRect().x)/this.wrapper.clientWidth * 100,
                top: (event.clientY-this.wrapper.getBoundingClientRect().y)/this.wrapper.clientHeight * 100,
                id: this.hotspot.id
            });
        },
    }
});
